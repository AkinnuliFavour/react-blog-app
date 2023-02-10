import React from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const DashboardNav = ({ openAccordion, setOpenAccordion }) => {
  const handleAccordion = () => {
    setOpenAccordion(!openAccordion);
  };
  return (
    <aside className="p-2 md:w-2/12 flex md:flex-col justify-between">
      <h2 className=" text-3xl">BlockTalk</h2>

      <Link
        to="/add-listing"
        className="hover:bg-cyan-500 p-2 hover:rounded-md text-lg hover:text-xl hidden md:block w-full"
      >
        Add New Post
      </Link>
      <Link
        to=""
        className="hover:bg-cyan-500 p-2 hover:rounded-md text-lg hover:text-xl hidden md:block w-full focus:bg-cyan-500 focus:rounded-md focus:text-xl "
      >
        View all Posts
      </Link>
      <Link
        to="/news-listings"
        className="hover:bg-cyan-500 p-2 hover:rounded-md text-lg hover:text-xl hidden md:block w-full"
      >
        News
      </Link>
      <Link
        to="/wallet-listings"
        className="hover:bg-cyan-500 p-2 hover:rounded-md text-lg hover:text-xl hidden md:block w-full"
      >
        Wallets
      </Link>
      <Link
        to="/mining-listings"
        className="hover:bg-cyan-500 p-2 hover:rounded-md text-lg hover:text-xl hidden md:block w-full"
      >
        Mining
      </Link>
      <Link
        to="/security-listings"
        className="hover:bg-cyan-500 p-2 hover:rounded-md text-lg hover:text-xl hidden md:block w-full"
      >
        Security
      </Link>
      <Link
        to="/blockchain-listings"
        className="hover:bg-cyan-500 p-2 hover:rounded-md text-lg hover:text-xl hidden md:block w-full"
      >
        Blockchain
      </Link>

      {openAccordion ? (
        <FaTimes
          className="w-8 h-8 md:hidden"
          onClick={() => handleAccordion()}
        />
      ) : (
        <FaBars
          className="w-8 h-8 md:hidden"
          onClick={() => handleAccordion()}
        />
      )}
    </aside>
  );
};

export default DashboardNav;
