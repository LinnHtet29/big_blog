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
import LoginRegisterLayout from "./layout/LoginRegisterLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Nav />}>
      <Route path="/" element={<BlogLayout />} errorElement={<BlogError />}>
        <Route index loader={blogsLoader} element={<Blog />} />
        <Route path="/:id" loader={blogDetailLoader} element={<Detail />} />
      </Route>
      <Route path="about" element={<About />} />

      <Route path="/login" element={LoginRegisterLayout}>
        <Route path="/login" element={<Login />} />
      </Route>

      <Route path="help" element={<Help />}>
        <Route path="faq" element={<Faq />} />
        <Route path="contact" element={<Contact />} action={contactAction} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
