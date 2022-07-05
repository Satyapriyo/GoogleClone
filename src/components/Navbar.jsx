import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
const Navbar = ({darkTheme,setDarkTheme}) => {
  return (
    <div className="p-3 flex flex-wrap sm:justify-between justify-center items-center border-b bg-slate-200 dark:border-gray-300 dark:bg-slate-800">
      <div className="flex justify-between space-x-5 items-center w-screen">
        <Link to="/home">
          <div className="text-[2em] p-4 text-gray- dark:text-teal-50 rounded-md dark:bg-gray-700 ">Google🔎</div>
        </Link>
        <button className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white rounded-md border px-1 py-2 hover:shadow-xl" type="button" onClick={()=> setDarkTheme(!darkTheme)}>
        {darkTheme ? 'Light💡' : 'Dark🌛'}
        </button>
      </div>
      <Search />
    </div>
  );
};
export default Navbar;
