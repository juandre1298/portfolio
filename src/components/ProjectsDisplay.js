import React from "react";
import { ProjectCard } from "../components/ProjectCard";
import { laptopfontview1 } from "/public/images.js";
import { toast } from "react-toastify";
import Link from "next/link";
import { Element, animateScroll as scroll } from "react-scroll";

export const ProjectsDisplay = (projects) => {
  return (
    <Element name="projects" className="py-8 px-4" id="projects">
      <h1 className="text-5xl uppercase font-bold text-center">projects</h1>
      <div className="w-10 h-[3px] md:h-[5px] my-8 rounded-full bg-yellow-400 dark:bg-teal-600 mx-auto  shadow-yellow-400 dark:shadow-teal-800"></div>
      <ul>
        {Object.keys(projects.projects).map((key, i) => (
          <section key={i}>
            {/* {console.log(key)} */}
            <h1 className="text-3xl uppercase text-center py-4 md:py-8">
              {key}
            </h1>
            <div className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3">
              {/*  */}
              {Object.keys(projects.projects[key]).map((e, i) => (
                <div key={projects.projects[key][e].title}>
                  <ProjectCard
                    group={key}
                    id={e}
                    title={projects.projects[key][e].title}
                    url={projects.projects[key][e].url}
                    imgLink={projects.projects[key][e].imgLink}
                    description={projects.projects[key][e].description}
                    technologies={projects.projects[key][e].technologies}
                    laptopLink={laptopfontview1}
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </ul>
    </Element>
  );
};
