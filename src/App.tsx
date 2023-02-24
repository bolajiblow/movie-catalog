import React from "react";
import logo from "./logo.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    errorElement: <ErrorPage />,
  },
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
