import React from "react";
import AccordionNav from "../components/AccordionNav";
import AddListingBody from "../components/AddListingBody";
const AddListing = ({ openAccordion }) => {
  return <>{openAccordion ? <AccordionNav /> : <AddListingBody />}</>;
};

export default AddListing;
