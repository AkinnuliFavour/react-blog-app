import React from "react";
import AccordionNav from "../components/AccordionNav";
import WalletListingsBody from "../components/WalletListingsBody";

const WalletListings = ({ openAccordion }) => {
  return (
    <main className="text-white">
      {openAccordion ? <AccordionNav /> : <WalletListingsBody />}
    </main>
  );
};

export default WalletListings;
