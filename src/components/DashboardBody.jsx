import React from "react";
import { Link } from "react-router-dom";

const DashboardBody = () => {
  return (
    <main className="flex flex-col pt-2 w-full h-full">
      <section className="mb-2 mx-12 md:mx-6">
        <form action="">
          <input
            type="search"
            name=""
            id=""
            className="p-2 w-full rounded-md text-black focus:outline-none bg-gray-200 opacity-30 placeholder-cyan-900"
            placeholder="Search"
          />
        </form>
      </section>
      <section className="bg-white text-black w-full h-fit md:h-full rounded-lg shadow-md shadow-black p-4">
        <section className="p-4 bg-yellow-400 opacity-90 rounded-xl grow">
          <h2 className="font-bold text-2xl mb-3">Hello Friend!</h2>
          <p className="mb-6 font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <Link
            to="/add-listing"
            className="py-3 px-6 bg-bgBody text-white mb-3 block w-44 rounded-lg text-center"
          >
            Write new post
          </Link>
        </section>
        <section className="bg-cyan-400 mt-4 md:h-3/6 p-4 rounded-xl">
          <h2 className="mb-4 font-bold text-xl">Top Articles</h2>
          <div className="flex justify-between gap-2">
            <p>01</p>
            <img src="" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span>6.5k</span>
            <span>3.4k</span>
            <span>34</span>
          </div>
          <div className="flex justify-between gap-2">
            <p>01</p>
            <img src="" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span>6.5k</span>
            <span>3.4k</span>
            <span>34</span>
          </div>
          <div className="flex justify-between gap-2">
            <p>01</p>
            <img src="" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span>6.5k</span>
            <span>3.4k</span>
            <span>34</span>
          </div>
          <div className="flex justify-between gap-2">
            <p>01</p>
            <img src="" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <span>6.5k</span>
            <span>3.4k</span>
            <span>34</span>
          </div>
        </section>
      </section>
    </main>
  );
};

export default DashboardBody;
