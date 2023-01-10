import React from "react";
import AccordionNav from "../components/AccordionNav";
import NewsListingsBody from "../components/NewsListingsBody";

const NewsListings = ({ openAccordion }) => {
  return (
    <main className="text-white">
      {openAccordion ? <AccordionNav /> : <NewsListingsBody />}
    </main>
  );
};

export default NewsListings;
