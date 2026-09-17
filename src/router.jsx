import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";

const Home = lazy(() => import("./pages/public/Home/Home"));
const About = lazy(() => import("./pages/public/About/About"));
const Courses = lazy(() => import("./pages/public/Courses/Courses"));
const Contact = lazy(() => import("./pages/public/Contact/Contact"));
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const NotFound = lazy(() => import("./pages/public/NotFound"));
const PublishBookPage = lazy(
  () => import("./pages/public/PublishBook/PublishBook"),
);
const Competition = lazy(
  () => import("./pages/public/Competition/Competition"),
);
const BlogPage = lazy(() => import("./pages/public/Blog/BlogPage"));
const BookDetails = lazy(
  () => import("./pages/public/BookDetails/BookDetails"),
);
const WithYou = lazy(() => import("./pages/public/WithYou/WithYou"));
const PublicCategories = lazy(
  () => import("./pages/public/Categories/Categories"),
);

const Categories = lazy(
  () => import("./pages/dashboard/Categories/Categories"),
);
const DashboardHome = lazy(() => import("./pages/dashboard/Home/Home"));
const Books = lazy(() => import("./pages/dashboard/Books/books"));
const Users = lazy(() => import("./pages/dashboard/Users/UserDashboard"));
const BlogDashboard = lazy(() => import("./pages/dashboard/Blog/Blog"));
const Notifications = lazy(
  () => import("./pages/dashboard/Notifications/Notifications"),
);
const Comments = lazy(() => import("./pages/dashboard/Comments/comments"));
const Reports = lazy(() => import("./pages/dashboard/Reports/Reports"));

const Favorites = lazy(() => import("./pages/public/Favorites/Favorites"));
const MoreBooks = lazy(() => import("./pages/public/MoreBooks/MoreBooks"));
const Cart = lazy(() => import("./pages/public/Cart/Cart"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "courses", element: <Courses /> },
      { path: "contact", element: <Contact /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "authors/publish-request", element: <PublishBookPage /> },
      { path: "authors/competition", element: <Competition /> },
      { path: "authors/with-you", element: <WithYou /> },
      { path: "blog", element: <BlogPage /> },
      { path: "favorites", element: <Favorites /> },
      { path: "more-books", element: <MoreBooks /> },
      { path: "best-sellers", element: <MoreBooks /> },
      { path: "cart", element: <Cart /> },
      { path: "categories", element: <PublicCategories /> },
      { path: "categories/:category", element: <MoreBooks /> },
      { path: "categories/:category/:subcategory", element: <MoreBooks /> },
      { path: "book-details", element: <BookDetails /> },
      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardHome /> },
      { path: "categories", element: <Categories /> },
      { path: "books", element: <Books /> },
      { path: "users", element: <Users /> },
      { path: "blog", element: <BlogDashboard /> },
      { path: "notifications", element: <Notifications /> },
      { path: "comments", element: <Comments /> },
      { path: "reports", element: <Reports /> },
    ],
  },
]);
