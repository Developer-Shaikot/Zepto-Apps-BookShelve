document.addEventListener("DOMContentLoaded", () => {
    const bookList = document.getElementById("book-list");
    const searchBar = document.getElementById("search-bar");
    const genreFilter = document.getElementById("genre-filter");
    const paginationDiv = document.getElementById("pagination");
    const spinner = document.getElementById("loading-spinner");

    let currentPage = 1;
    let books = [];
    let filteredBooks = [];
    const booksPerPage = 32;
    const pagesPerSet = 8;

    const fetchBooks = async (page = 1) => {
        showLoadingSpinner();
        try {
            const response = await fetch(`https://gutendex.com/books?page=${page}`);
            const data = await response.json();
            books = data.results;
            filteredBooks = books;
            displayBooks();
            setupPagination(data.count);
        } catch (error) {
            console.error("Error fetching books:", error);
        } finally {
            hideLoadingSpinner();
        }
    };

    const truncateTitle = (title, wordLimit) => {
        const words = title.split(" ");
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(" ") + "...";
        }
        return title;
    };

    const displayBooks = () => {
        bookList.innerHTML = filteredBooks
            .map(
                (book) =>
                    `<div class="book-card" >
                        <div onclick="navigateToDetails(${book.id})">
                            <img src="${
                                book.formats["image/jpeg"] || "placeholder.jpg"
                            }" alt="Book Cover" class="book-cover">
                            <h3>${truncateTitle(book.title, 5)}</h3> <!-- Limit to 5 words -->
                             <p>Author: ${book.authors.map((author) => author.name).join(", ")}</p>
                        </div>
                        <button class="book-content" onclick="toggleWishlist(${book.id})"> 
                            <img src="assets/icons/wishlist.png"}" alt="icon" class="icon">❤️
                        </button>
                    </div>`
            )
            .join("");
    };

    const setupPagination = (totalBooks) => {
        const totalPages = Math.ceil(totalBooks / booksPerPage);
        const startPage = Math.floor((currentPage - 1) / pagesPerSet) * pagesPerSet + 1;
        const endPage = Math.min(startPage + pagesPerSet - 1, totalPages);

        paginationDiv.innerHTML = `
            <button ${currentPage === 1 ? "disabled" : ""} data-page="${
            currentPage - 1
        }">&lt;</button>
            ${Array.from({ length: endPage - startPage + 1 }, (_, i) => {
                const page = startPage + i;
                return `
                    <button class="${currentPage === page ? "active" : ""}" data-page="${page}">
                        ${page}
                    </button>
                `;
            }).join("")}
            <button ${currentPage === totalPages ? "disabled" : ""} data-page="${
            currentPage + 1
        }">&gt;</button>
        `;

        document.querySelectorAll("#pagination button").forEach((button) => {
            button.addEventListener("click", () => {
                const page = parseInt(button.getAttribute("data-page"));
                goToPage(page);
            });
        });
    };

    const goToPage = (page) => {
        currentPage = page;
        fetchBooks(page);
    };

    searchBar.addEventListener("input", (e) => {
        const searchText = e.target.value.toLowerCase();
        filteredBooks = books.filter((book) => book.title.toLowerCase().includes(searchText));
        displayBooks();
    });

    const loadGenres = async () => {
        const genres = ["Fiction", "Non-Fiction", "Fantasy", "Science", "Mystery"];
        genreFilter.innerHTML += genres
            .map((genre) => `<option value="${genre}">${genre}</option>`)
            .join("");
    };

    genreFilter.addEventListener("change", (e) => {
        showLoadingSpinner();
        const selectedGenre = e.target.value.toLowerCase();

        setTimeout(() => {
            if (selectedGenre) {
                filteredBooks = books.filter(
                    (book) =>
                        book.subjects &&
                        book.subjects.some((subject) =>
                            subject.toLowerCase().includes(selectedGenre)
                        )
                );
            } else {
                filteredBooks = books;
            }
            displayBooks();
            hideLoadingSpinner();
        }, 300);
    });

    const showLoadingSpinner = () => {
        spinner.classList.remove("hidden");
    };

    const hideLoadingSpinner = () => {
        spinner.classList.add("hidden");
    };

    fetchBooks();
    loadGenres();
});
