import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <section className="relative top-16 p-4 font-mono">
      <div className="bg-bg p-3 px-6 flex flex-col">
        <h2 className="mb-6 text-2xl font-bold">Categories</h2>
        <Link to="/blockchain-listings" className="mb-4 text-lg font-bold">
          Blockchain
        </Link>
        <Link to="/security-listings" className="mb-4 text-lg font-bold">
          Security
        </Link>
        <Link to="/mining-listings" className="mb-4 text-lg font-bold">
          Mining
        </Link>
        <Link to="/wallets-listings" className="mb-4 text-lg font-bold">
          Wallets
        </Link>
        <Link to="/news-listings" className="mb-4 text-lg font-bold">
          News
        </Link>
      </div>
    </section>
  );
};

export default Categories;
