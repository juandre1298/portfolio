import React, { useState, useEffect } from "react";
import { Link } from "react-scroll/modules";
import { BsFillFileEarmarkPdfFill } from "react-icons/bs";
import { toast } from "react-toastify";
import { useFileSystemPublicRoutes } from "../../next.config";
import { aboutMe } from "/src/pages/data";
import { Collapse } from "react-collapse";

export const About = (toastTheme) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <section
      id="about"
      className="z-10 flex flex-col md:justify-center gap-4 md:h-screen md:gap-8 md:px-8 object-fit "
    >
      <h1 className="text-center md:text-left text-3xl lg:text-5xl font-bold uppercase mx-auto">
        About me
      </h1>
      <div className="w-10 h-[3px] md:h-[5px] rounded-full bg-yellow-400 dark:bg-teal-600 mx-auto  shadow-yellow-400 dark:shadow-teal-800"></div>
      <div className="md:flex md:justify-evenly ">
        <div className="md:w-1/2 px-4 md:px-8 text-justify md:text-xl 2xl:text-2xl">
          <div className=" whitespace-pre-wrap ">{aboutMe.aboutMe}</div>
          <div
          /*   className={
              showMore
                ? "h-auto opacity-100"
                : "h-[10%] overflow-hidden opacity-50 opacity-gradiente"
            }
            style={{ transition: "all 0.5s" }} */
          >
            <Collapse isOpened={showMore}>{aboutMe.moreAboutMe}</Collapse>
          </div>
          <button
            className="underline hover:text-orange-700 dark:hover:text-teal-600 transition-all duration-300"
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            {showMore ? "less" : "show more"}
          </button>
          <div className="flex justify-evenly py-8 ">
            <button className="bg-yellow-400 py-3 px-6 md:px-8 rounded-md font-bold uppercase shadow-lg dark:bg-teal-600 z-10 transform hover:scale-110 hover:shadow-3xl active:scale-90  transition-transform duration-200">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Contact
              </Link>
            </button>
            <a
              href="/tecCVJuanASalas.pdf"
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
                  theme: { toastTheme },
                });
              }}
              className="bg-yellow-400 py-3 px-6 md:px-8  rounded-md font-bold uppercase shadow-lg dark:bg-teal-600 z-10 flex gap-2 justify-center items-center transform hover:scale-110 hover:shadow-3xl active:scale-90  transition-transform duration-200"
            >
              <span>Resume</span>
              <BsFillFileEarmarkPdfFill />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 flex flex-col 2xl:justify-center lg:gap-8">
          <h2 className="text-center text-xl font-bold py-4 lg:text-5xl">
            My Skills
          </h2>
          <ul className="flex flex-wrap gap-4 mx-16 justify-center py-4">
            {aboutMe.skills.map((e) => (
              <div
                key={e}
                className="px-2 py-2 bg-stone-200 text-stone-800 rounded-md"
              >
                {e}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
