import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white py-4 lg:px-12 shadow border-solid border-t-2 border-blue-700">
      <div className="flex justify-between lg:w-auto w-full lg:border-b-0 pl-6 pr-2 border-solid border-b-2 border-gray-300 pb-5 lg:pb-0">
        <NavLink
          to="/"
          className="flex items-center flex-shrink-0 text-gray-800 mr-16"
        >
          <span className="font-semibold text-xl tracking-tight">
            AviaSales
          </span>
        </NavLink>
      </div>
      <div className="menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:px-3 px-8">
        <div className="text-md font-bold text-blue-700 lg:flex-grow">
          <NavLink
            to="/"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
          >
            Home
          </NavLink>
          <NavLink
            to="/companies"
            className=" block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
          >
            Companies
          </NavLink>
          <NavLink
            to="/tickets"
            className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-700 mr-2"
          >
            Tickets
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
