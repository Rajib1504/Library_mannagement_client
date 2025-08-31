import Layout from "@/Layout/Layout";
import Add_Book from "@/Pages/Add_Book";
import All_Books from "@/Pages/All_Books";
import SingleBook from "@/Pages/SingleBook";
import Home from "@/Pages/Home"; // Import the new Home component
import { createBrowserRouter } from "react-router";
import Borrow_Summary from "@/Components/Borrow_Summary";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />, 
      },
      {
        path: "/all-books", 
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
        element: <Borrow_Summary/>,
      },
    ],
  },
]);

export default Router;