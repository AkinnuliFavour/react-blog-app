import React from "react";
import Categories from "../partials/Categories";
import NewsList from "../partials/NewsList";

const BlogPageBody = () => {
  return (
    <article className="text-white">
      <section className="p-2 text-center md:text-left sm:px-20 mt-12 relative top-14">
        <h2 className="text-3xl font-semibold font-mono mb-2 px-2">
          What Nasdaq Thinks of Blockchain
        </h2>
        <p className="font-mono font-semibold text-lg text-gray-300 sm:w-6/12 px-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
        <div className="flex items-center justify-center gap-2 mt-4">
          <p className="font-mono text-lg font-semibold">Jayne Mane</p>
          <div className="w-10 h-10 rounded-full bg-[url(/img/andre.jpg)] bg-cover bg-center"></div>
        </div>
        <p className="m-auto mt-4 p-2 bg-blue-800 text-center w-1/4">News</p>
      </section>
      <section className="mt-6 p-4 relative top-12">
        <div className="bg-[url(/img/nasdaq.jpg)] bg-cover bg-center h-72 "></div>
        <p className="font-mono text-center mt-4 text-gray-300 font-semibold">
          consectetur adipiscing elit, sed do eiusmod
        </p>
        <article className="mt-4 text-center font-mono">
          <h2 className="text-3xl font-semibold text-gray-200 p-2">
            Excepteur sint occaecat cupidatat
          </h2>
          <p className="mt-2 text-lg font-semibold text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className="mt-8 text-lg font-semibold text-gray-300">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </p>
          <p className="mt-8 text-lg font-semibold text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </article>
      </section>

      <Categories />

      <section className="relative top-32 text-center text-3xl font-semibold font-mono">
        <h2>Similar Posts</h2>
        <section className="flex flex-col items-center gap-3 p-6">
          <div className="bg-[url(/img/nasdaq.jpg)] bg-cover bg-center h-72 mt-6 flex items-end justify-end">
            <div className="bg-bgBody opacity-80 p-8 h-3/6 w-full">
              <h2 className="font-mono text-base text-center">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque
              </h2>
            </div>
          </div>
          <p className="font-mono text-lg text-gray-300 px-8">
            What Nasdaq Thinks of Blockchain
          </p>
          <div className="flex items-center gap-2">
            <p>Jayne Mane</p>
            <div className="w-10 h-10 rounded-full bg-[url(/img/andre.jpg)] bg-cover bg-center"></div>
          </div>
        </section>
      </section>
    </article>
  );
};

export default BlogPageBody;
