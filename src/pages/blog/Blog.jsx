import { Link, useLoaderData } from "react-router-dom";
import Card from "../../components/Card";
import axios from "../../axios";

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
  try {
    const res = await axios.get();
    return res.data;
  } catch (error) {
    throw new Error("Cannot make the request.");
  }
};
