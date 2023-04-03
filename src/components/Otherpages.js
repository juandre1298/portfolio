import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";

export const Otherpages = () => {
  return (
    <section>
      <div className="bg-gray-400 text-white dark:bg-slate-950 py-3 md:px-3 md:rounded-r-lg  md:absolute md:left-0 md:top-44 z-0">
        <ul className="flex justify-around md:flex-col md:gap-3 text-6xl md:text-2xl ">
          <li className=" hover:text-orange-300 dark:hover:text-teal-600 decoration-[1px] cursor-pointer duration-200 ">
            <a href="https://github.com/juandre1298" className="group">
              <AiFillGithub className="hover:drop-shadow-[0_0_2px_rgba(253,186,116,1)] dark:hover:drop-shadow-[0_0_2px_rgba(13,148,136,1)]   duration-200" />
              <div className="hidden group-hover:block absolute bg-gray-600 text-sm ml-4 rounded-sm px-1">
                https://github.com/juandre1298
              </div>
            </a>
          </li>

          <li className=" hover:text-orange-300 dark:hover:text-teal-600 decoration-[1px] cursor-pointer duration-300">
            <a
              href="https://www.linkedin.com/in/juan-andres-salas/"
              className="group"
            >
              <AiFillLinkedin className="hover:drop-shadow-[0_0_2px_rgba(253,186,116,1)] dark:hover:drop-shadow-[0_0_2px_rgba(13,148,136,1)]   duration-200" />
              <div className="hidden group-hover:block absolute bg-gray-600 text-sm ml-4 rounded-sm px-1">
                https://www.linkedin.com/in/juan-andres-salas/
              </div>
            </a>
          </li>

          <li className=" hover:text-orange-300 dark:hover:text-teal-600 decoration-[1px] cursor-pointer duration-300">
            <a className="group">
              <AiFillMail className="hover:drop-shadow-[0_0_2px_rgba(253,186,116,1)] dark:hover:drop-shadow-[0_0_2px_rgba(13,148,136,1)]   " />
              <div className="hidden group-hover:block absolute bg-gray-600 text-sm ml-4 rounded-sm px-1">
                juandre1298@gmail.com
              </div>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
