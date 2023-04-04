import React from "react";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { Link } from "react-scroll/modules";

export const Header = ({ setDarkMode, darkMode }) => {
  return (
    <section className="flex flex-col top-0 md:flex-row md:justify-between w-full py-2 md:py-6 px-4 border-b-2 fixed bg-white dark:bg-slate-950  shadow-lg dark:shadow-teal-800 z-40">
      <div className=" flex justify-between items-center">
        <button>
          <Link
            activeClass="active"
            to="greeting"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            /* onSetActive={this.handleSetActive} */
          >
            <p className="font-burtons mr-4 md:text-xl">
              Developed by Juandre1298
            </p>
          </Link>
        </button>

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
      <div className="w-full lg:w-[600px]">
        <ul className="flex flex-wrap justify-between lg:justify-right mx-auto mt-4 sm:font-bold md:mt-0 gap-2 lg:gap-6  px-2 md:py-2 md:ml-8">
          <li className="text-sm  md:text-xl md:font-bold hover:text-orange-900 dark:hover:text-teal-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            <button>
              <Link
                activeClass="active"
                to="greeting"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
                /* onSetActive={this.handleSetActive} */
              >
                Home
              </Link>
            </button>
          </li>
          <li className="text-sm  md:text-xl md:font-bold hover:text-orange-900 dark:hover:text-teal-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            <button>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                /* onSetActive={this.handleSetActive} */
              >
                About
              </Link>
            </button>
          </li>
          <li className="text-sm md:text-xl md:font-bold hover:text-orange-900 dark:hover:text-teal-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            <button>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                /* onSetActive={this.handleSetActive} */
              >
                Projects
              </Link>
            </button>
          </li>
          <li className="text-sm md:text-xl md:font-bold hover:text-orange-900 dark:hover:text-teal-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            <button>
              <Link
                activeClass="active"
                to="experience"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                /* onSetActive={this.handleSetActive} */
              >
                Experience
              </Link>
            </button>
          </li>
          <li className="text-sm md:text-xl md:font-bold hover:text-orange-900 dark:hover:text-teal-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            <button>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                /* onSetActive={this.handleSetActive} */
              >
                Contact
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};
