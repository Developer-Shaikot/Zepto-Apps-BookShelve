document.addEventListener("DOMContentLoaded", () => {
    const wishlistBooksContainer = document.getElementById("wishlist-books");
    const spinner = document.getElementById("loading-spinner");

    const showLoadingSpinner = () => {
        spinner.classList.remove("hidden");
    };

    const hideLoadingSpinner = () => {
        spinner.classList.add("hidden");
    };

    const displayWishlistBooks = () => {
        let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

        showLoadingSpinner();

        if (wishlist.length === 0) {
            wishlistBooksContainer.innerHTML = `<p >Your wishlist is empty.</p>`;
            hideLoadingSpinner();
            return;
        }

        Promise.all(
            wishlist.map((id) =>
                fetch(`https://gutendex.com/books/${id}`).then((res) => res.json())
            )
        )
            .then((books) => {
                wishlistBooksContainer.innerHTML = books
                    .map(
                        (book) => `
                            
                            <div class="book-card">
                                <img src="${
                                    book.formats["image/jpeg"] || "placeholder.jpg"
                                }" alt="Book Cover" class="book-cover">
                                <h3>${book.title}</h3>
                                <p>Author: ${book.authors
                                    .map((author) => author.name)
                                    .join(", ")}</p>
                                <button class="book-content" onclick="removeFromWishlist(${
                                    book.id
                                })">
                                    ❌ Remove
                                </button>
                            </div>
                   
                    `
                    )
                    .join("");
            })
            .catch((error) => {
                console.error("Error fetching wishlist books:", error);
            })
            .finally(() => {
                hideLoadingSpinner();
            });
    };

    displayWishlistBooks();
});
