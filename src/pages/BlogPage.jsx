import React from "react";
import BlogPageBody from "../components/BlogPageBody";
import AccordionNav from "../components/AccordionNav";

const BlogPage = ({ openAccordion }) => {
  return (
    <main className="text-white">
      {openAccordion ? <AccordionNav /> : <BlogPageBody />}
    </main>
  );
};

export default BlogPage;
