
import Layout from "@/layout/Layout";
import Blog from "@/pages/Blog";
import Cookie from "@/pages/Cookie";
import Home from "@/pages/Home";
import Privacy from "@/pages/Privacy";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
      {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/blog", element: <Blog /> },
      { path: "/privacy", element: <Privacy /> },
      { path: "/cookie", element: <Cookie /> },
    ],
  },
]);

const AppRoute = () => {
  return (
    <RouterProvider router={router} />
  )
}
export default AppRoute