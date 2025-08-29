import Layout from "@/Layout/Layout";
import Add_Book from "@/Pages/Add_Book";
import All_Books from "@/Pages/All_Books";
import SingleBook from "@/Pages/SingleBook";
import { createBrowserRouter } from "react-router";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
            index: true,
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
    ],
  },
]);

export default Router;
