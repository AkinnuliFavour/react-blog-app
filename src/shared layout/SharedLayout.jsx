import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const SharedLayout = ({ openAccordion, setOpenAccordion }) => {
  return (
    <>
      <Nav openAccordion={openAccordion} setOpenAccordion={setOpenAccordion} />
      <Outlet />
    </>
  );
};

export default SharedLayout;
