import React from "react";
import { Element, animateScroll as scroll } from "react-scroll";

export const Education = () => {
  return (
    <Element name="education" className="py-8 px-4" id="education">
      <h1 className="text-5xl uppercase font-bold text-center">Education</h1>
      <div className="w-10 h-[3px] md:h-[5px] my-8 rounded-full bg-yellow-400 dark:bg-teal-600 mx-auto  shadow-yellow-400 dark:shadow-teal-800"></div>
    </Element>
  );
};
