import { Link, useLoaderData } from "react-router-dom";
import Card from "../../components/Card";

export default function Blog() {
  const blogs = useLoaderData();

  return (
    <div className="w-full px-20 py-20">
      {blogs.map((blog) => (
        <Card blog={blog} key={blog.id} />
      ))}
    </div>
  );
}

export const blogsLoader = async () => {
  const res = await fetch("http://localhost:3000/blogs");
  if (!res.ok) {
    throw Error("Cannot make the request.");
  }
  return res.json();
};
