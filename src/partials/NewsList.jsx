import React from "react";

const NewsList = () => {
  return (
    <section className="text-center mt-8 p-4 md:flex md:flex-col">
      <h3 className="text-3xl font-semibold">News</h3>
      <p className="text-lg font-mono font-semibold text-gray-400">
        sint occaecat cupidatat non proident
      </p>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <section className="flex flex-col items-center gap-3 mt-8">
          <div className="bg-[url(/img/nasdaq.jpg)] bg-cover bg-center h-96 mt-6 flex items-end justify-end ">
            <div className="bg-bgBody opacity-80 p-8 h-3/6 w-full">
              <h2 className="font-mono text-base text-center">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque
              </h2>
            </div>
          </div>
          <p className="p-2 bg-blue-800 text-center w-2/6">News</p>
          <p className="font-mono text-lg text-gray-300">
            What Nasdaq Thinks of Blockchain
          </p>
          <div className="flex items-center gap-2">
            <p>Jayne Mane</p>
            <div className="w-10 h-10 rounded-full bg-[url(/img/andre.jpg)] bg-cover bg-center"></div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default NewsList;
