import React from "react";
import logo from "./logo.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Login from "./pages/Login";
import routes from "./pages/routes";
import { MovieContainer } from "./pages/movie-container";
import EachMovie from "./pages/EachMovie";
import Movies from "./components/Movies";

const router = createBrowserRouter([
  {
    path: routes.login,
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: routes.home,
    element: <MovieContainer />,
    children: [
      {
        path : routes.each_movie,
        element: <EachMovie />
      },
      {
        path : routes.home,
        element: <Movies />
      },
    ]
   
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
