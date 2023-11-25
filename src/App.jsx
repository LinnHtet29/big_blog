import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/help/Faq";
import Contact, { contactAction } from "./pages/help/Contact";
import NotFound from "./pages/NotFound";
import Blog, { blogsLoader } from "./pages/blog/Blog";
import Detail, { blogDetailLoader } from "./pages/blog/Detail";
import BlogError from "./pages/blog/BlogError";

import Nav from "./layout/Nav";
import Help from "./layout/Help";
import BlogLayout from "./layout/BlogLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    errorElement: <BlogError />,
    children: [
      {
        path: "/",
        element: <BlogLayout />,
        errorElement: <BlogError />,
        children: [
          {
            path: "/",
            element: <Blog />,
            loader: blogsLoader,
          },
          {
            path: "/:id",
            element: <Detail />,
            loader: blogDetailLoader,
          },
          { path: "/about", element: <About /> },
        ],
      },
    ],
  },
  {
    path: "/help",
    element: <Help />,
    children: [
      { path: "/help/faq", element: <Faq /> },
      { path: "/help/contact", element: <Contact />, action: contactAction },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

  { path: "*", element: <NotFound /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
