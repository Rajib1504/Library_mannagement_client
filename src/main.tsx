import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";
import Router from "./Router/Router.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store/Store.ts";
import { ThemeProvider } from "./Provider/Theme.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <Provider store={store}>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <RouterProvider router={Router} />
      </ThemeProvider>
      </Provider>
  </StrictMode>
);
