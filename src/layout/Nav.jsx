import { Link, NavLink, Outlet } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb";
import { useUser } from "../context/UserProvider";

export default function Nav() {
  const [loginUser, setLoginUser] = useUser();

  return (
    <div>
      <header className="fixed top-0 right-0 left-0">
        <nav className="flex justify-between px-20 bg-gray-800 shadow-sm py-5">
          <Link
            to="/"
            className="w-4/12 px-3 text-3xl text-white font-bold text-start cursor-pointer"
          >
            Big Blog
          </Link>
          <div className="w-4/12 px-3 inline-flex gap-5 justify-center items-center text-white text-lg font-semibold">
            {loginUser ? (
              <>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/help">Help</NavLink>
              </>
            ) : (
              <>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register">Register</NavLink>
              </>
            )}
          </div>
        </nav>
      </header>
      <BreadCrumb />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
