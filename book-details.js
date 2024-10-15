document.addEventListener("DOMContentLoaded", async () => {
    const bookDetailsContainer = document.getElementById("book-details-container");
    const spinner = document.getElementById("loading-spinner");

    // Function to show and hide the loading spinner
    const showLoadingSpinner = () => {
        spinner.classList.remove("hidden");
    };

    const hideLoadingSpinner = () => {
        spinner.classList.add("hidden");
    };

    // Get the book ID from the URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const bookId = urlParams.get("bookId");

    if (bookId) {
        showLoadingSpinner(); // Show spinner before fetching data
        try {
            const response = await fetch(`https://gutendex.com/books/${bookId}`);
            const book = await response.json();

            hideLoadingSpinner(); // Hide spinner once the data is loaded

            const formatLinks = Object.entries(book.formats)
                .map(
                    ([key, value]) => `
                    <a href="${value}" target="_blank">${key.replace(/;/g, " ")}</a>`
                )
                .join("<br/>");

            bookDetailsContainer.innerHTML = `
                <div class="book-details">
                     <div class="book-detail-format">
            <img src="${
                book.formats["image/jpeg"] || "placeholder.jpg"
            }" alt="Book Cover" class="book-details-cover">
                    <br/>
                    <div class="book-formats">
                            <h3>Available Formats:</h3>
                            ${formatLinks}
                        </div>
        </div>
                    <div class="book-info">
                        <h1 class="book-title">${book.title}</h1>
                        <p>Author: ${book.authors.map((author) => author.name).join("<br/> ")}</p>
                        <p class="book-description">${book.bookshelves.join("<br/> ")}</p>
                        <p class="book-description">${book.subjects.join("<br/> ")}</p>
                        
                        <button class="book-details-content" onclick="toggleWishlist(${book.id})">
                            <img src="assets/icons/wishlist.png" alt="icon" class="icon">❤️
                        </button>
                    </div>
                </div>
            `;
        } catch (error) {
            console.error("Error fetching book details:", error);
            hideLoadingSpinner(); // Hide spinner in case of an error
            bookDetailsContainer.innerHTML = `<p>Error loading book details. Please try again later.</p>`;
        }
    } else {
        bookDetailsContainer.innerHTML = `<p>Invalid book ID. Please go back and try again.</p>`;
    }
});
