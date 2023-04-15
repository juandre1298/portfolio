import React from "react";

import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { Link as LinkScroll } from "react-scroll/modules";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";

export const Header = ({ setDarkMode, darkMode }) => {
  return (
    <section className="flex flex-col top-0 md:flex-row md:justify-between w-full py-2 md:py-6 px-4 border-b-2 fixed bg-white dark:bg-slate-950  shadow-lg dark:shadow-teal-800 z-40">
      <div className=" flex justify-between items-center">
        <Link href="/">
          <p className="font-burtons mr-4 md:text-xl">
            Developed by Juandre1298
          </p>
        </Link>
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
        <ul className="flex flex-wrap justify-between items-center lg:justify-right mx-auto mt-4 sm:font-bold md:mt-0 gap-2 lg:gap-6  px-2 md:py-2 md:ml-8">
          <li className="text-sm md:text-xl md:font-bold hover:text-orange-700 dark:hover:text-teal-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            <button>
              <LinkScroll
                activeClass="active"
                to="greeting"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Home
              </LinkScroll>
            </button>
          </li>
          <li className="text-sm  md:text-xl md:font-bold hover:text-orange-700 dark:hover:text-teal-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            <button>
              <LinkScroll
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                /* onSetActive={this.handleSetActive} */
              >
                About
              </LinkScroll>
            </button>
          </li>
          <li className="text-sm md:text-xl md:font-bold hover:text-orange-700 dark:hover:text-teal-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            <button>
              <LinkScroll
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                /* onSetActive={this.handleSetActive} */
              >
                Projects
              </LinkScroll>
            </button>
          </li>

          <li className="text-sm md:text-xl md:font-bold hover:text-orange-700 dark:hover:text-teal-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
            <button>
              <LinkScroll
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-90}
                duration={1500}
                /* onSetActive={this.handleSetActive} */
              >
                Contact
              </LinkScroll>
            </button>
          </li>
          <li>
            <a
              href="/CV_JuanAndresSalas.pdf"
              download="CV_JuanAndresSalas"
              onClick={() => {
                toast.success("Resume downloaded", {
                  position: "top-left",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: darkMode ? "dark" : "light",
                });
              }}
              className="text-sm md:text-xl  bg-yellow-400 py-1 md:uppercase md:py-2 px-2 md:px-8  rounded-md  shadow-lg dark:bg-teal-600 z-10 flex gap-2 justify-center items-center transform hover:scale-110 hover:shadow-3xl active:scale-90  transition-transform duration-200"
            >
              <span>Resume</span>
              <BsFillFileEarmarkPdfFill />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
