import axios from "../../axios";
import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Detail() {
  const blog = useLoaderData();

  return (
    <div className="mt-5 px-20">
      <div className="bg-gray-800 rounded-md p-5 my-5">
        <b to="/" className="text-white text-xl hover:text-red-500">
          <strong>Title : {blog.title.toUpperCase()}</strong>
        </b>
        <p className="text-gray-300 text-[0.9rem] font-medium my-3">
          {blog.subTitle}
        </p>
        <p className="text-gray-300 font-light mb-3">{blog.content}</p>
      </div>
    </div>
  );
}

export const blogDetailLoader = async ({ params }) => {
    try {
      const res = await axios.get(params.id);
      return res.data;
    } catch (e) {
      throw new Error("Cannot make the request.", e);
    }
  };
