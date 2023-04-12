import React from "react";
import { ProjectCard } from "../components/ProjectCard";
import { laptopfontview1 } from "/public/images.js";
import { toast } from "react-toastify";
import Link from "next/link";
import { Element, animateScroll as scroll } from "react-scroll";

export const ProjectsDisplay = (projects) => {
  return (
    <Element name="projects" className="py-8 px-4" id="projects">
      <h1 className="text-5xl capitalize text-center">projects</h1>
      {/* {console.log(projects)} */}
      <ul>
        {Object.keys(projects.projects).map((key, i) => (
          <section key={i}>
            {/* {console.log(key)} */}
            <h1 className="text-3xl capitalize text-center py-4">{key}</h1>
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
