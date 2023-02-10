import React from "react";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
  const handleRegister = () => {
    navigate("/dashboard");
  };
  return (
    <main className="bg-bgBody flex justify-center items-center flex-col text-white h-screen w-full">
      <form
        action=""
        className="flex flex-col w-full sm:w-1/2 lg:w-4/12 bg-bg h-max p-4 shadow-lg shadow-black"
        onSubmit={(e) => e.preventDefault()}
      >
        <h2 className="text-3xl font-mono font-bold mb-6 text-center mt-6">
          Sign Up
        </h2>
        <label htmlFor="firstname" className="px-3">
          First Name:
        </label>
        <input
          type="text"
          name=""
          id="firstname"
          className="p-2 rounded-full mb-2 text-black focus:outline-none focus:shadow-lg focus:shadow-zinc-700 focus:border-2 focus:border-blue-700"
          placeholder="First Name"
        />

        <label htmlFor="lastname" className="px-3">
          Last Name:
        </label>
        <input
          type="text"
          name=""
          id="lastname"
          className="p-2 rounded-full mb-2 text-black focus:outline-none focus:shadow-lg focus:shadow-zinc-700 focus:border-2 focus:border-blue-700"
          placeholder="Last Name"
        />

        <label htmlFor="username" className="px-3">
          Username:
        </label>
        <input
          type="text"
          name=""
          id="username"
          className="p-2 rounded-full mb-2 text-black focus:outline-none focus:shadow-lg focus:shadow-zinc-700 focus:border-2 focus:border-blue-700"
          placeholder="Usename"
        />

        <label htmlFor="password" className="px-3">
          Password:
        </label>
        <input
          type="password"
          name=""
          id="password"
          className="p-2 rounded-full mb-2 text-black focus:outline-none focus:shadow-lg focus:shadow-zinc-700 focus:border-2 focus:border-blue-700"
          placeholder="Password"
        />

        <label htmlFor="confirm-password" className="px-3">
          Confirm Password:
        </label>
        <input
          type="password"
          name=""
          id="confirm-password"
          className="p-2 rounded-full mb-2 text-black focus:outline-none focus:shadow-lg focus:shadow-zinc-700 focus:border-2 focus:border-blue-700"
          placeholder="Confirm Password"
        />

        <label htmlFor="profile-picture" className="px-3">
          Profile Picture:
        </label>
        <input
          type="file"
          name=""
          id="profile-picture"
          className="bg-white file:border-none p-2 rounded-full mb-6 text-black focus:outline-none focus:shadow-lg focus:shadow-zinc-700 focus:border-2 focus:border-blue-700"
        />

        <input
          type="submit"
          value="Sign Up"
          className="bg-bgBody p-2 shadow-lg shadow-black mb-4 hover:shadow-lg hover:shadow-zinc-700"
          onClick={handleRegister}
        />
      </form>
    </main>
  );
};

export default RegisterPage;
