import React from "react";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";

export const Header = ({ setDarkMode, darkMode }) => {
  return (
    <section className="flex flex-col top-0 md:flex-row md:justify-between w-full py-6 px-4 border-b-2 fixed bg-white dark:bg-slate-950  shadow-lg dark:shadow-teal-800 z-10">
      <div className=" flex justify-between items-center ">
        <p className="font-burtons mr-4">Developed by Juandre1298</p>
        <button
          onClick={() => {
            setDarkMode(!darkMode);
          }}
        >
          {darkMode ? (
            <BsMoonStarsFill className="text-teal-600 text-2xl" />
          ) : (
            <BsFillSunFill className="text-yellow-500 text-3xl" />
          )}
        </button>
      </div>
      <div>
        <ul className="flex flex-wrap justify-center mx-auto mt-4 md:mt-0 gap-6 px-2 py-2 ">
          <li className="text-base front-bold hover:text-orange-900 dark:hover:text-teal-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            Homa
          </li>
          <li className="text-base front-bold hover:text-orange-900 dark:hover:text-teal-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            Projects
          </li>
          <li className="text-base front-bold hover:text-orange-900 dark:hover:text-teal-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            Experience
          </li>
          <li className="text-base front-bold hover:text-orange-900 dark:hover:text-teal-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            Contact
          </li>
          <li className="text-base front-bold hover:text-orange-900 dark:hover:text-teal-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            Resume
          </li>
        </ul>
      </div>
    </section>
  );
};
