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
import ErrorBoundary from "@/components/ErrorBoundary";
import { AuthProvider } from "@/services/AuthProvider";
import CreateBlog from "@/pages/CreateBlog";
import BlogDetail from "@/pages/BlogDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <Layout />
      </AuthProvider>
    ),
    children: [
      { index: true, element: <Home /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blogs/:slug", element: <BlogDetail /> },
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
      <AuthProvider>
        <Layout />
      </AuthProvider>
    ),
    children: [
      { path: "/profile", element: (
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      ) },
      { path: "/create-blog", element: (
        <ProtectedRoute>
          <CreateBlog />
        </ProtectedRoute>
      ) },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

const AppRoute = () => {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
};
export default AppRoute;
