import React from "react";

const Header = () => {
  return (
    <div className="m-auto">
      <div className="mb-12 space-y-2 text-center">
        <h2 className="text-2xl text-cyan-900 font-bold md:text-4xl">
          Поиск дешевых авиабилетов
        </h2>
      </div>
      <form className="m-auto">
        <div className=" grid-cols-4 gap-3 mb-6 md:grid-cols-2 text-gray-600 ">
          <input
            className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Откуда"
          />
          <input
            className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Куда"
          />

          <input
            className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Когда"
          />
          <input
            type="text"
            className="border-2 border-gray-300 bg-white h-10 pl-2 pr-8 rounded-lg text-sm focus:outline-none"
            placeholder="Select date"
          />
          {/* <button type="submit" className=" right-0 top-0 mt-3 mr-2">
          Найти билеты
        </button> */}
        </div>
      </form>
    </div>
  );
};

export default Header;
