import React from "react";
import { Link } from "react-router-dom";

const AccordionNav = () => {
  return (
    <nav className="w-screen bg-bgBody z-50 mt-14 fixed top-16">
      <ul className="flex justify-center items-center flex-col gap-12">
        <li className="text-3xl font-bold">
          <Link to="/" onClick={() => setOpenAccordion(false)}>
            Home
          </Link>
        </li>
        <li className="text-3xl font-bold">Podcast</li>
        <li className="text-3xl font-bold">About</li>
      </ul>
    </nav>
  );
};

export default AccordionNav;
