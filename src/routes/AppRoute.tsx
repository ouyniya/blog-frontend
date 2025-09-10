import Layout from "@/layout/Layout";
import Blog from "@/pages/Blog";
import Cookie from "@/pages/Cookie";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Privacy from "@/pages/Privacy";
import Profile from "@/pages/Profile";
import Register from "@/pages/Register";
import Terms from "@/pages/Terms";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "@/pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/blog", element: <Blog /> },
      { path: "/terms", element: <Terms /> },
      { path: "/privacy", element: <Privacy /> },
      { path: "/cookie", element: <Cookie /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
    ],
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      { index: true, element: <Profile /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const AppRoute = () => {
  return <RouterProvider router={router} />;
};
export default AppRoute;
