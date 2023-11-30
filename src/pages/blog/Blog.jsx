import { Link, useLoaderData } from "react-router-dom";
import Card from "../../components/Card";
import { test } from "../../components/test";
import API from "../../api/interceptor";

export default function Career() {
  const blogs = useLoaderData();

  test();

  return (
    <div className="w-full px-20 py-20">
      {blogs.map((blog) => (
        <Card blog={blog} key={blog.id} />
      ))}
    </div>
  );
}

export const blogsLoader = async () => {
  const res = await API.get("/blogs");
  if (res.status != 200) {
    throw Error("Cannot make the request.");
  }

  return res.data;
};
