import React from "react";
import { ExperienceCard } from "../components/ExperienceCard";
import { laptopfontview1 } from "/public/images.js";
import { professionalExperience } from "./data";
import { toast } from "react-toastify";
import Link from "next/link";
import { Element, animateScroll as scroll } from "react-scroll";

export const ProfessionalExperience = (experience) => {
  return (
    <Element name="experience" className="py-8 px-4" id="experience">
      <h1 className="text-5xl uppercase font-bold text-center">
        Professional Experience
      </h1>
      <div className="w-10 h-[3px] md:h-[5px] my-8 rounded-full bg-yellow-400 dark:bg-teal-600 mx-auto  shadow-yellow-400 dark:shadow-teal-800"></div>
      <ul>
        <section>
          <div className="grid grid-cols-1 gap-4  md:grid-cols-1 lg:grid-cols-1">
            {professionalExperience.map((e, i) => (
              <div key={i} className="flex justify-center">
                <ExperienceCard
                  title={e.title}
                  companyName={e.companyName}
                  startDate={e.startDate}
                  finishDate={e.finishDate}
                  jobDescription={e.jobDescription}
                  companyLogo={e.companyLogo}
                  companyLink={e.companyLink}
                  technologies={e.technologies}
                  location={e.location}
                />
              </div>
            ))}
          </div>
        </section>
      </ul>
    </Element>
  );
};
