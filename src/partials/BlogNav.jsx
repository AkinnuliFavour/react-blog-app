import React from "react";
import { Link } from "react-router-dom";

const BlogNav = () => {
  return (
    <section className="bg-bg flex p-2 justify-between sm:justify-evenly mt-12 sticky top-0 z-50">
      <Link
        to="/news-listings"
        className="focus:text-cyan-500 hover:text-cyan-500"
      >
        News
      </Link>
      <Link
        to="/wallet-listings"
        className="focus:text-cyan-500 hover:text-cyan-500"
      >
        Wallet
      </Link>
      <Link
        to="/mining-listings"
        className="focus:text-cyan-500 hover:text-cyan-500"
      >
        Mining
      </Link>
      <Link
        to="/security-listings"
        className="focus:text-cyan-500 hover:text-cyan-500"
      >
        Security
      </Link>
      <Link
        to="/blockchain-listings"
        className="focus:text-cyan-500 hover:text-cyan-500"
      >
        Blockchain
      </Link>
    </section>
  );
};

export default BlogNav;
