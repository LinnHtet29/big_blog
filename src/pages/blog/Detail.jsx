import axios from "../../api/axios";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData, redirect } from "react-router-dom";
import { useUser } from "../../context/UserProvider";

export default function Detail() {
  const blog = useLoaderData();
  const [loginUser, setLoginUser] = useUser();
  const id = blog.id;
  const [cmt, setCmt] = useState(null);
  const [users, setUsers] = useState([]);
  const [comment, setComment] = useState({
    blogId: id,
    userId: "userId",
    content: "",
  });

  useEffect(() => {
    axios
      .get(`http://localhost:3000/comments?blogId=${id}`)
      .then((res) => {
        setCmt(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`http://localhost:3000/users`)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, [id, comment]);

  const handleSubmitCmt = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/comments", comment, {
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
    setComment({
      blogId: id,
      userId: "",
      content: "",
    });
  };

  const handleChange = (event) => {
    setComment({
      ...comment,
      [event.target.name]: event.target.value,
      userId: loginUser.id,
    });
  };

  return (
    <div className="mt-5 px-20 mb-20">
      <div className="bg-gray-800 rounded-md p-5 my-5">
        <b to="/" className="text-white text-xl hover:text-red-500">
          <strong>Title : {blog.title.toUpperCase()}</strong>
        </b>
        <p className="text-gray-300 text-[0.9rem] font-medium my-3">{blog.subTitle}</p>
        <p className="text-gray-300 font-light mb-3">{blog.content}</p>
        <Link to={`/edit-blog/${blog.id}`}>
          <button
            type="button"
            className="px-4 py-2 bg-yellow-400 hover:bg-yellow-600 text-black font-semibold rounded-3xl"
          >
            Edit Blog
          </button>
        </Link>
      </div>
      <div className="text-gray-300 bg-gray-800 py-5 px-10 max-h-[300px] overflow-y-scroll">
        {cmt &&
          cmt.map((cmt, index) => {
            const user = users.find((user) => user.id === cmt.userId);
            return (
              <div key={index} className="mb-5 bg-slate-700 px-2 py-3 rounded-lg">
                <h1 className="text-white mb-1 font-semibold">
                  {user ? user.email : "Unknown User"}
                </h1>
                <div>
                  <h3 className="px-5">{cmt.content}</h3>
                </div>
              </div>
            );
          })}
      </div>
      {loginUser && (
        <div className="text-gray-300 bg-gray-800 py-5 px-10 relative">
          <form onSubmit={handleSubmitCmt}>
            <input
              type="text"
              placeholder="Write a comment"
              name="content"
              value={comment.content}
              onChange={handleChange}
              className="tracking-wider px-3 rounded-lg w-full py-2 bg-transparent border border-white focus:outline-none focus:border-[#4d4d4d]"
            />
            <button type="submit" className="absolute top-6 right-12 p-1">
              <i className="fa-regular fa-paper-plane text-[20px]"></i>
            </button>
          </form>
        </div>
      )}
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
