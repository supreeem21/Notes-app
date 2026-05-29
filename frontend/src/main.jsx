import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CreatePage from "./pages/CreatePage.jsx";
import NoteDetailPage from "./pages/NoteDetailPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/create-note", element: <CreatePage /> },
      { path: "/note/:id", element: <NoteDetailPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <>
    <RouterProvider router={router} />
    <Toaster />
  </>,
  // </StrictMode>,
);
