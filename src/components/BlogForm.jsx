import React from "react";
import { useState } from "react";

export default function BlogForm() {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [content, setContent] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, subTitle, content };

    setIsPending(true);

    fetch("http://localhost:3000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("new blog added");
      setIsPending(false);
    });
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-[500px] h-[500px] flex flex-col gap-4 justify-start items-center border-white rounded-md bg-white"
        id="blog-form"
      >
        <h1 className="flex justify-center w-full text-[#0f172a] text-3xl font-extrabold border-2 border-[#0f172a] rounded-md p-4">
          Add Blog
        </h1>
        <div className="w-full flex justify-end">
          <label className="text-md text-[#0f172a] font-semibold" htmlFor="title">
            Title
          </label>
          <input
            className="w-[50%] border-2 border-[#0f172a] rounded-md text-md text-[#0f172a] mr-16 ml-10"
            type="text"
            id="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="w-full flex justify-end">
          <label className="text-md text-[#0f172a] font-semibold" htmlFor="sub-title">
            Sub Title
          </label>
          <input
            className="w-[50%] border-2 border-[#0f172a] rounded-md text-md text-[#0f172a] mr-16 ml-10"
            type="text"
            id="sub-title"
            required
            value={subTitle}
            onChange={(e) => setSubTitle(e.target.value)}
          />
        </div>
        <div className="w-full flex justify-end">
          <label className="text-md text-[#0f172a] font-semibold" htmlFor="content">
            Content
          </label>
          <textarea
            className="resize-none w-[50%] border-2 border-[#0f172a] rounded-md text-md text-[#0f172a] mr-16 ml-10"
            type="text"
            rows="10"
            id="content"
            required
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="w-full flex justify-end">
          {!isPending && (
            <button
              className="w-[200px] bg-[#0f172a] text-white text-md rounded-lg mr-16"
              type="submit"
            >
              Post Blog
            </button>
          )}
          {isPending && (
            <button
              disabled
              className="w-[200px] bg-white border-[#0f172a] border-2 text-[#0f172a] font-bold text-md rounded-lg mr-16"
              type="submit"
            >
              Posting Blog....
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
