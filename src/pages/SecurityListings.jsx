import React from "react";
import AccordionNav from "../components/AccordionNav";
import SecurityListingsBody from "../components/SecurityListingsBody";

const SecurityListings = ({ openAccordion }) => {
  return (
    <main className="text-white">
      {openAccordion ? <AccordionNav /> : <SecurityListingsBody />}
    </main>
  );
};

export default SecurityListings;
