Hosted link: https://zepto-book-shelve.netlify.app
# Zepto-Apps-BookShelve
<div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
  <img src="https://res.cloudinary.com/ddlbvpfq1/image/upload/v1729015611/ASH/Zepto-Apps-BookShelve/g7yq8mrrkpqhazfpyy1u.png" alt="Image 1" style="width:48%; border: 1px solid black; margin-bottom: 10px;">
  <img src="https://res.cloudinary.com/ddlbvpfq1/image/upload/v1729015833/ASH/Zepto-Apps-BookShelve/m4tjmadw62ngtun3ubz3.png" alt="Image 2" style="width:48%; border: 1px solid black; margin-bottom: 10px;">
  <img src="https://res.cloudinary.com/ddlbvpfq1/image/upload/v1729017069/ASH/Zepto-Apps-BookShelve/hllfrt7r5fz3tvy7bvp5.png" alt="Image 3" style="width:48%; border: 1px solid black;">
  <img src="https://res.cloudinary.com/ddlbvpfq1/image/upload/v1729015612/ASH/Zepto-Apps-BookShelve/vti4zwhmn2lwp5k73rgi.png" alt="Image 4" style="width:48%; border: 1px solid black;">
</div>

Here's a detailed README file for th project based on the requirements:
<div style="display: flex; flex-wrap: wrap; justify-content: space-between;">
  <img  src="https://res.cloudinary.com/ddlbvpfq1/image/upload/v1729015618/ASH/Zepto-Apps-BookShelve/xvrrnasodgzymsgvkmtt.png" alt="Image 4" style="width:48%; border: 1px solid black;">
</div>
---

# Gutendex Books Web Application

This project is a web application that fetches data from the [Gutendex API](https://gutendex.com/books) and displays a list of books with various features such as real-time search filtering, genre filtering, wishlist functionality, and pagination. The application is built using vanilla JavaScript, HTML, and CSS, with a focus on responsiveness.

## Features

### 1. Book List Display
- The homepage displays a clean and user-friendly list of books.
- Each book displays the following details:
  - Title
  - Author name
  - Cover image
  - Genre/Topic
  - ID

### 2. Search Bar
- A search bar is implemented to allow users to filter books by title in real-time.
- As the user types in the search bar, the book list updates dynamically to show matching results.

### 3. Genre Filter
- A dropdown menu is provided to filter books based on genre or topic.
- The book list updates based on the selected genre, showing only books that match the selected filter.

### 4. Wishlist Functionality
- Users can add books to a wishlist by clicking a like or love icon.
- The wishlist is stored in `localStorage` so that users' favorite books persist even after refreshing the page.
- The icon is clickable, allowing users to save or remove books from their wishlist.
- A separate "Wishlist" page shows all the wishlisted books.

### 5. Pagination
- The book list is paginated for better user experience and navigation.
- Users can navigate using "Next" and "Previous" buttons or by clicking on page numbers (e.g., 1, 2, 3…).
- The application loads a new set of books when the user navigates through pages.

### 6. User Interface
- A fully responsive homepage shows the book list with a clean layout.
- A separate "Wishlist" page displays all wishlisted books.
- Individual book pages show detailed information about each book.
- A navbar provides easy navigation across the pages.
- The layout is designed using vanilla CSS with a focus on responsiveness for both desktop and mobile devices.
- Bootstrap or Tailwind CSS can be used optionally, but vanilla CSS is preferred for this project.

### 7. Optional Bonus Features
- Smooth animations are implemented for showing and hiding books to enhance user experience.
- The application saves the user’s search and filter preferences using `localStorage`, ensuring that these preferences persist even after the page is refreshed.

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/Developer-Shaikot/Zepto-Apps-BookShelve.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Zepto-Book-shelve
   ```

3. Open `index.html` in your browser to view the application.

## Technologies Used
- **JavaScript (Vanilla)**: For making API requests and adding interactivity.
- **HTML & CSS**: For structuring and styling the application.
- **LocalStorage**: To persist wishlist data and user preferences.
- **Gutendex API**: For fetching book data.

## Future Improvements
- Adding more detailed filtering options (e.g., filtering by author).
- Enhancing the animations for a smoother and more engaging experience.
- Implementing a dark mode toggle for better user accessibility.

## Acknowledgments
- [Gutendex API](https://gutendex.com/) for providing the data.
- Inspiration from various frontend development best practices.

---

