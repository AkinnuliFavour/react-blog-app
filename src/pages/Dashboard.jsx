import React from "react";
import AccordionNav from "../components/AccordionNav";
import DashboardBody from "../components/DashboardBody";
import DashboardNav from "../components/DashboardNav";

const Dashboard = ({ openAccordion, setOpenAccordion }) => {
  return (
    <main className="bg-bgBody text-white flex flex-col md:flex-row p-3 gap-3 h-screen w-screen ">
      <DashboardNav
        openAccordion={openAccordion}
        setOpenAccordion={setOpenAccordion}
      />
      {openAccordion ? <AccordionNav /> : <DashboardBody />}
    </main>
  );
};

export default Dashboard;
