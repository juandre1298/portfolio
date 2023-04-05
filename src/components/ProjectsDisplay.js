import React from "react";
import { ProjectCard } from "../components/ProjectCard";
import { laptopfontview1 } from "/public/images.js";
import { toast } from "react-toastify";

export const ProjectsDisplay = (projects) => {
  return (
    <section className="py-8 px-4" id="projects">
      <h1 className="text-5xl capitalize text-center">projects</h1>
      <ul>
        {Object.keys(projects.projects).map((key, i) => (
          <section>
            <h1 className="text-3xl capitalize text-center py-4">{key}</h1>
            <div className="grid grid-cols-1 gap-4  md:grid-cols-2 lg:grid-cols-3">
              {projects.projects[key].map((e) => (
                <div key={e.title}>
                  {/* {console.log(e)} */}
                  <ProjectCard
                    title={e.title}
                    url={e.url}
                    imgLink={e.imgLink}
                    description={e.description}
                    technologies={e.technologies}
                    laptopLink={laptopfontview1}
                  />
                </div>
              ))}
            </div>
          </section>
        ))}
      </ul>
    </section>
  );
};
