import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserProvider";

const Login = () => {
  const navigate = useNavigate();
  const [loginUser, setLoginUser] = useUser();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const user = localStorage.getItem("loginUser") || null;
    if (loginUser || user) {
      navigate("/");
      return;
    }
  }, []);

  const [isLoginFail, setIsLoginFail] = useState(false);

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch("http://localhost:3000/users");
    const users = await response.json();

    const matchingUser = users.find(
      (user) =>
        user.email === formData.email && user.password === formData.password
    );

    if (!matchingUser) {
      setIsLoginFail(true);
      return;
    }
    setIsLoginFail(false);
    const user = {
      id: matchingUser.id,
      email: formData.email,
      password: formData.password,
    };
    setLoginUser(user);
    localStorage.setItem("loginUser", JSON.stringify(user));
    navigate("/");
  };

  return (
    <div className="h-screen ">
      <div className="text-white mt-6 mx-auto h-[90%] w-[50%] my-auto bg-gray-800 p-10 rounded-xl flex flex-col gap-2 items-center">
        <h2 className="text-center text-4xl font-bold text-red-600 mb-10">
          Login
        </h2>
        {isLoginFail && (
          <span className="w-full text-lg text-center text-red-600">
            Login Fail
          </span>
        )}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-12 items-center"
        >
          <div className="flex  w-full justify-center gap-6 items-center">
            <label className="text-lg text-start ">Email :</label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className=" bg-gray-700 bg-opacity-30 focus:bg-opacity-60 p-2 w-36 md:w-48 lg:w-96 focus:outline-none rounded-lg "
            />
          </div>

          <div className="flex  justify-center gap-2  w-full items-start">
            <label className="text-lg">Password :</label>
            <input
              type="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className=" bg-gray-700 bg-opacity-30 focus:bg-opacity-60 p-2 w-96 focus:outline-none rounded-lg "
            />
          </div>

          <input
            type="submit"
            className="mt-14 bg-red-700 w-36 rounded-lg p-3 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            value={"Login"}
          />

          <Link
            to={"/register"}
            className="text-sm border-b border-white hover:border-blue-400 hover:-translate-y-1 duration-300 transition-all hover:text-blue-400"
          >
            No Account? Sign up here
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
