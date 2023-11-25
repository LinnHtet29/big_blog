import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="h-screen ">
      <div className="text-white mt-6 mx-auto h-[90%] w-[50%] my-auto bg-gray-800 p-10 rounded-xl flex flex-col gap-12 items-center">
        <h2 className="text-center text-4xl font-bold text-red-600 mb-10">
          Sign Up
        </h2>

        <div className="flex  w-full justify-center gap-6 items-center">
          <label className="text-lg text-start ">Email :</label>
          <input
            type="email"
            className=" bg-gray-700 bg-opacity-30 focus:bg-opacity-60 p-2 w-96 focus:outline-none rounded-lg "
          />
        </div>

        <div className="flex  justify-center gap-2  w-full items-start">
          <label className="text-lg">Password :</label>
          <input
            type="password"
            className=" bg-gray-700 bg-opacity-30 focus:bg-opacity-60 p-2 w-96 focus:outline-none rounded-lg "
          />
        </div>

        <input
          type="submit"
          className="mt-14 bg-red-700 w-36 rounded-lg p-3 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
          value={"Sign Up"}
        />

        <Link
          to={"/login"}
          className="text-sm border-b border-white hover:border-blue-400 hover:-translate-y-1 duration-300 transition-all hover:text-blue-400"
        >
          Already have account? Login here
        </Link>
      </div>
    </div>
  );
};

export default Register;
