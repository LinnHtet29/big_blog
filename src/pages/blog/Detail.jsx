import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

export default function Detail() {
  // const { id } = useParams();
  const blog = useLoaderData();

  return (
    <div className="mt-5 px-20">
      <div className="bg-gray-800 rounded-md p-5 my-5">
        <b to="/" className="text-white text-xl hover:text-red-500">
          <strong>Title : {blog.title.toUpperCase()}</strong>
        </b>
        <p className="text-gray-300 text-[0.9rem] font-medium my-3">{blog.subTitle}</p>
        <p className="text-gray-300 font-light mb-3">{blog.content}</p>
      </div>
    </div>
  );
}

export const blogDetailLoader = async ({ params }) => {
  const { id } = params;
  const res = await fetch("http://localhost:8000/blogs/" + id);

  if (!res.ok) {
    throw Error("blog not found.");
  }

  return res.json();
};
