import React from "react";
import BlogNav from "../partials/BlogNav";
import MiningList from "../partials/MiningList";

const MiningListingsBody = () => {
  return (
    <main className="relative top-16">
      <header className="p-5 text-center sm:text-left lg:px-20 mt-16">
        <h2 className="text-4xl font-semibold font-mono mb-4">Mining</h2>
        <p className="font-mono font-semibold text-lg text-gray-300 sm:w-6/12">
          sint occaecat cupidatat non proident
        </p>
      </header>
      <BlogNav />
      <MiningList />
    </main>
  );
};

export default MiningListingsBody;
