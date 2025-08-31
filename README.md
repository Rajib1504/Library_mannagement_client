# 📚 Minimal Library Management System - Knowledge Hunter

A clean and functional client-side library management application built with React, TypeScript, and Redux Toolkit Query. This system allows for viewing a list of books, performing full CRUD operations, borrowing books, and viewing a borrow summary.

**Live Demo URL:** [Your Live Demo URL Here](https://your-live-url.com)

---

## ✨ Features

-   **Book Management (CRUD):**
    -   **Create:** Add new books to the library via a user-friendly form.
    -   **Read:** View a comprehensive list of all books with client-side pagination.
    -   **Update:** Edit existing book details (title, author, copies) through a modal form.
    -   **Delete:** Remove books from the system with a confirmation step.
-   **Detailed View:** Click a "View" button to see all details of a specific book in a pop-up modal.
-   **Borrowing System:**
    -   Borrow books with a specific quantity and a future due date.
    -   Validation prevents borrowing more copies than are available and selecting past dates.
-   **Borrow Summary:** A dedicated page to view an aggregated summary of all borrowed books, showing the total quantity borrowed for each title.
-   **UI/UX:**
    -   A minimalist and clean user interface.
    -   Includes a Dark/Light mode theme toggle for user comfort.
    -   Responsive design that adapts to different screen sizes.

---

## 🛠️ Technology Stack

### Frontend

-   **Framework:** React
-   **Language:** TypeScript
-   **State Management:** Redux Toolkit with RTK Query
-   **UI Components:** shadcn/ui
-   **Styling:** Tailwind CSS
-   **Routing:** React Router
-   **Form Management:** React Hook Form & Zod

### Backend

-   **Framework:** Express.js
-   **Language:** TypeScript
-   **Database:** MongoDB with Mongoose

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

-   Node.js (v18 or later)
-   npm or yarn
-   A MongoDB database (local or from MongoDB Atlas)

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your-username/your-repository-name.git](https://github.com/your-username/your-repository-name.git)
    cd your-repository-name
    ```

2.  **Setup the Backend:**
    -   Navigate to the backend directory:
        ```sh
        cd backend
        ```
    -   Install NPM packages:
        ```sh
        npm install
        ```
    -   Create a `.env` file in the `backend` directory and add your environment variables. See `.env.example` for reference.
        ```env
        PORT=5000
        DATABASE_URL=your_mongodb_connection_string
        ```
    -   Run the backend server:
        ```sh
        npm run dev
        ```
    The backend will be running on `http://localhost:5000`.

3.  **Setup the Frontend:**
    -   Navigate to the frontend directory from the root folder:
        ```sh
        cd frontend
        ```
    -   Install NPM packages:
        ```sh
        npm install
        ```
    -   Run the frontend development server:
        ```sh
        npm run dev
        ```
    The application will be available at `http://localhost:5173`.

---

## 📄 API Endpoints

The backend provides the following RESTful API endpoints:

| Method | Endpoint             | Description                      |
| :----- | :------------------- | :------------------------------- |
| `GET`    | `/api/books`         | Get a list of all books.         |
| `GET`    | `/api/books/:id`     | Get details of a single book.    |
| `POST`   | `/api/books`         | Add a new book.                  |
| `PUT`    | `/api/books/:id`     | Update an existing book.         |
| `DELETE` | `/api/books/:id`     | Delete a book.                   |
| `POST`   | `/api/borrow`        | Borrow a book.                   |
| `GET`    | `/api/borrow`        | Get the borrow summary.          |

---

## 📜 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.
