import React from "react";
import { Link } from "react-router-dom";
import BlogNav from "../partials/BlogNav";
import NewsList from "../partials/NewsList";

const HomeBody = () => {
  return (
    <main className="relative top-16">
      <header className="p-5 text-center sm:text-left lg:px-20 mt-12">
        <h2 className="text-4xl sm:text-6xl font-semibold font-mono mb-4">
          Everything blockchain<span className="text-cyan-900">.</span>
        </h2>
        <p className="font-mono font-semibold text-lg text-gray-300 sm:w-full">
          Publication template for blockchain enthusiast, including podcast,
          multiple CMS collections and eCommerce for donation.
        </p>
      </header>
      <BlogNav />
      <section className="p-4 mt-12 h-max w-full grid grid-cols-1 md:grid-cols-2 auto-rows-auto gap-12 md:gap-4">
        <Link
          to="/blog-page"
          className="bg-[url(/img/nasdaq.jpg)] md:w-full bg-cover bg-center h-64 md:h-full flex justify-end items-end md:row-span-2"
        >
          <div className="bg-bgBody opacity-80 flex justify-center items-center p-8 h-3/6 w-full flex-col">
            <h2 className="font-mono text-xl text-center">
              What Nasdaq Thinks of Blockchain
            </h2>
          </div>
          <p className="p-1 px-6 bg-cyan-500 absolute">News</p>
        </Link>
        <Link
          to="/blog-page"
          className="bg-[url(/img/austin-2.jpg)] md:w-full bg-cover bg-center flex items-end justify-end h-72"
        >
          <div className="bg-bgBody opacity-80 flex justify-center items-center p-8 h-3/6 w-full flex-col">
            <h2 className="font-mono text-xl text-center">
              Is Digital Mining Becoming a New Fad?
            </h2>
          </div>
          <p className="p-1 px-6 bg-cyan-900 absolute">Mining</p>
        </Link>
        <Link
          to="/blog-page"
          className="bg-[url(/img/abel.jpg)] md:w-full bg-cover bg-center h-72 flex items-end justify-end"
        >
          <div className="bg-bgBody opacity-80 flex justify-center items-center p-8 h-3/6 w-full flex-col">
            <h2 className="font-mono text-xl text-center">
              Security matters within blockchain
            </h2>
          </div>
          <p className="p-1 px-6 bg-blue-800 absolute">Security</p>
        </Link>
      </section>
      <NewsList />
    </main>
  );
};

export default HomeBody;
