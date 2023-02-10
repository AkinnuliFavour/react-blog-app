import React from "react";

const AddListingBody = () => {
  return (
    <main className="text-white flex flex-col items-center justify-center relative top-16">
      <h2 className="mt-12 text-3xl font-mono font-bold">Post A Blog</h2>
      <form action="" className="flex flex-col mt-6">
        <label htmlFor="title" className="px-px">
          Title:
        </label>
        <input
          type="text"
          name=""
          id="title"
          placeholder="Title"
          className="p-2 rounded-md mb-2 focus:outline-none text-black"
        />

        <label htmlFor="section" className="px-px">
          Section:
        </label>
        <input
          type="text"
          name=""
          id="section"
          placeholder="Blockchain"
          className="p-2 rounded-md mb-2 focus:outline-none text-black"
        />

        <label htmlFor="image" className="px-px">
          Image:
        </label>
        <input
          type="file"
          name=""
          id="image"
          className="p-2 rounded-md block w-full file:bg-violet bg-white mb-4 file:px-4 file:border-0 text-black"
        />

        <label htmlFor="first-paragraph" className="px-px">
          First Paragraph:
        </label>
        <textarea
          name=""
          id="first-paragraph"
          cols="10"
          rows="10"
          className="rounded-md text-black focus:outline-none p-2"
          placeholder="First Paragraph"
        ></textarea>

        <label htmlFor="second-paragraph" className="mt-4 px-px">
          Second Paragraph:
        </label>
        <textarea
          name=""
          id="second-paragraph"
          cols="10"
          rows="10"
          className="rounded-md text-black focus:outline-none p-2"
          placeholder="Second Paragraph"
        ></textarea>

        <label htmlFor="third-paragraph" className="mt-4 px-px">
          Third Paragraph:
        </label>
        <textarea
          name=""
          id="third-paragraph"
          cols="10"
          rows="10"
          className="rounded-md text-black focus:outline-none p-2"
          placeholder="Third Paragraph"
        ></textarea>
        <input
          type="submit"
          value="Post Blog"
          className="mt-4 p-3 mb-2 bg-bg shadow-lg shadow-black"
        />
      </form>
    </main>
  );
};

export default AddListingBody;
