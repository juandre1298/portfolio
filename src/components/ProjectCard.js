import React from "react";
import Image from "next/image";

export const ProjectCard = (props) => {
  const { title, url, imgLink, laptopLink, description, technologies } = props;
  return (
    <div className="bg-gray-200 rounded-md relative bg-gradient-to-r from-gray-200 to-gray-300 dark:bg-gradient-to-r dark:from-cyan-500 dark:to-teal-500  group">
      <h2 className="text-3xl capitalize text-center py-4">{title}</h2>

      <div className="flex justify-center relative mx-4">
        <Image
          src={laptopLink}
          alt="laptop photo"
          className=" drop-shadow-[0_4px_5px_rgba(0,0,0,1)] "
        />
        <Image
          src={imgLink}
          alt="laptop photo"
          className="absolute w-[63%] top-[5%] transform group-hover:scale-150 group-hover:translate-y-6  transition-transform duration-500 rounded-sm group-hover:rounded-md"
        />
      </div>
      <div className="p-4 bg-">
        <p className="">{description}</p>
        {technologies.map((e) => (
          <div key={e}>{e}</div>
        ))}
      </div>
    </div>
  );
};
