import React from "react";
import AccordionNav from "../components/AccordionNav";
import MiningListingsBody from "../components/MiningListingsBody";

const MiningListings = ({ openAccordion }) => {
  return (
    <main className="text-white">
      {openAccordion ? <AccordionNav /> : <MiningListingsBody />}
    </main>
  );
};

export default MiningListings;
