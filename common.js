const toggleWishlist = (bookId) => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (wishlist.includes(bookId)) {
        wishlist = wishlist.filter((id) => id !== bookId);
        alert("Book removed from wishlist");
    } else {
        wishlist.push(bookId);
        alert("Book added to wishlist");
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    // Call displayBooks if it exists (in index.html)
    if (typeof displayBooks === "function") {
        displayBooks();
    }
};

function removeFromWishlist(bookId) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist = wishlist.filter((id) => id !== bookId);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    // Find the book card in the DOM
    const bookCard = document
        .querySelector(`.book-card button[onclick="removeFromWishlist(${bookId})"]`)
        .closest(".book-card");

    if (bookCard) {
        // Add the fade-out class to start the animation
        bookCard.classList.add("fade-out");

        // Wait for the animation to complete before removing the element and updating the list
        bookCard.addEventListener("transitionend", () => {
            // Re-render the wishlist books after removal
            document.addEventListener("DOMContentLoaded", () => {
                displayWishlistBooks();
            });
        });
    }
}

// Function to navigate to the book details page
const navigateToDetails = (bookId) => {
    window.location.href = `book-details.html?bookId=${bookId}`;
};
