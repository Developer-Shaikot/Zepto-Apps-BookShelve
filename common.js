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
    if (typeof displayBooks === "function") {
        displayBooks();
    }
    window.location.href = `wishlist.html`;
};

function removeFromWishlist(bookId) {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    wishlist = wishlist.filter((id) => id !== bookId);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    const bookCard = document
        .querySelector(`.book-card button[onclick="removeFromWishlist(${bookId})"]`)
        .closest(".book-card");

    if (bookCard) {
        bookCard.classList.add("fade-out");

        bookCard.addEventListener("transitionend", () => {
            document.addEventListener("DOMContentLoaded", () => {
                displayWishlistBooks();
            });
        });
    }
}

const navigateToDetails = (bookId) => {
    window.location.href = `book-details.html?bookId=${bookId}`;
};
