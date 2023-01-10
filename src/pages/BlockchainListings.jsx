import React from "react";
import AccordionNav from "../components/AccordionNav";
import BlockchainListingsBody from "../components/BlockchainListingsBody";

const BlockchainListings = ({ openAccordion }) => {
  return (
    <main className="text-white">
      {openAccordion ? <AccordionNav /> : <BlockchainListingsBody />}
    </main>
  );
};

export default BlockchainListings;
