import Layout from "@/Layout/Layout";
import Add_Book from "@/Pages/Add_Book";
import All_Books from "@/Pages/All_Books";
import SingleBook from "@/Pages/SingleBook";
import Borrow_Summar from "@/Pages/Borrow_Summar";
import Home from "@/Pages/Home"; // Import the new Home component
import { createBrowserRouter } from "react-router";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />, // Use the new Home component as the index route
      },
      {
        path: "/all-books", // Add a new route for the All Books page
        element: <All_Books />,
      },
      {
        path: "/create-book",
        element: <Add_Book />,
      },
      {
        path: "/books/:id",
        element: <SingleBook />,
      },
      {
        path: "/borrow-summary",
        element: <Borrow_Summar />,
      },
    ],
  },
]);

export default Router;