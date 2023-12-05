import { Outlet } from "react-router-dom";
import Nav from "./Nav";
export default function Blog() {
  return (
    <div>
      <Nav />
      <main>
        <Outlet />
      </main>
      <footer className="fixed bottom-0 right-0 left-0 flex justify-center items-center">
        <nav className="bg-gray-400 w-[340px] h-[45px] px-20 my-2 text-center flex items-center rounded-md">
          <span className="bg-slate-500 p-2 rounded text-white text-start font-bold mx-2 cursor-pointer">
            For You
          </span>
          <span className="text-white text-start font-bold mx-2 cursor-pointer">All Blogs</span>
        </nav>
      </footer>
    </div>
  );
}
