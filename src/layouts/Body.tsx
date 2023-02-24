import { createBrowserRouter,  RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
    {
      path: "/movies",
      element: <div>movies world</div>,
    },
  ]);
export const Body = () => {
    return <RouterProvider router={router} />;
}