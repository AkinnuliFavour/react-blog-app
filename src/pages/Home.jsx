import React from "react";
import { useState } from "react";
import HomeBody from "../components/HomeBody";
import AccordionNav from "../components/AccordionNav";

const Home = ({ openAccordion }) => {
  return (
    <main className="text-white w-full">
      {openAccordion ? (
        <AccordionNav />
      ) : (
        <HomeBody openAccordion={openAccordion} />
      )}
    </main>
  );
};

export default Home;
