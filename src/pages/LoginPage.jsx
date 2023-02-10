import React from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/dashboard");
  };
  return (
    <main className="bg-bgBody flex justify-center items-center flex-col text-white h-screen w-screen">
      <form
        action=""
        className="flex flex-col w-full sm:w-1/2 lg:w-4/12 bg-bg h-max p-4 shadow-lg shadow-black"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="text-center mb-6 text-3xl font-bold font-serif">
          Login
        </h2>
        <label htmlFor="username" className="px-3">
          Username:
        </label>
        <input
          type="text"
          name=""
          id="username"
          className="p-2 rounded-full mb-8 text-black focus:outline-none focus:border-2 focus:border-blue-700 focus:shadow-lg focus:shadow-zinc-700"
          placeholder="Username"
        />

        <label htmlFor="password" className="px-3">
          Password:
        </label>
        <input
          type="password"
          name=""
          id="password"
          className="p-2 rounded-full mb-3 text-black focus:outline-none focus:border-2 focus:border-blue-700 focus:shadow-lg focus:shadow-zinc-700"
          placeholder="Password"
        />

        <p className="text-right text-xs px-6 mb-8">
          Don't have an acccount yet?
          <Link to="/register-page" className="underline mx-1 text-blue-500">
            sign up
          </Link>
        </p>

        <input
          type="submit"
          value="Login"
          className="bg-bgBody p-2 shadow-lg shadow-black mb-4 hover:shadow-lg hover:shadow-zinc-700"
          onClick={handleLogin}
        />
      </form>
    </main>
  );
};

export default LoginPage;
