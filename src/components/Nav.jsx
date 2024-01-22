import React from "react";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = ({ openAccordion, setOpenAccordion }) => {
  const handleAccordion = () => {
    setOpenAccordion(!openAccordion);
  };
  return (
    <nav className="flex bg-bgBody justify-between p-5 items-center w-full z-50 text-white">
      <h2>
        <Link to="/" className="text-2xl font-semibold">
          BlockTalk
        </Link>
      </h2>
      <ul className="flex gap-2 lg:gap-8 items-center">
        <li className="hidden lg:block text-lg font-bold hover:text-cyan-500">
          <Link to="/" className="focus:text-cyan-500" autoFocus>
            Home
          </Link>
        </li>
        <li className="hidden lg:block text-lg font-bold hover:text-cyan-500">
          <a href="" className="focus:text-cyan-500">
            Podcast
          </a>
        </li>
        <li className="hidden lg:block text-lg font-bold hover:text-cyan-500">
          <a href="" className="focus:text-cyan-500">
            About
          </a>
        </li>
        <li>
          <Link
            to="/login-page"
            className="p-1 px-4 border-solid border-2 border-white rounded-full font-mono font-black text-lg hover:bg-cyan-900 hover:border-cyan-900 focus:bg-cyan-900 focus:border-cyan-900"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/register-page"
            className="p-2 px-4 border-solid border-2 border-cyan-800 bg-cyan-800 hover:bg-cyan-900 focus:bg-bg-cyan-900 focus:border-cyan-900 hidden lg:block"
          >
            Sign Up
          </Link>
        </li>
        <li className="lg:hidden" onClick={() => handleAccordion()}>
          {openAccordion ? (
            <FaTimes className="w-8 h-8" />
          ) : (
            <FaBars className="w-8 h-8" />
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
