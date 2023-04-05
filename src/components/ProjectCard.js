import React from "react";
import Image from "next/image";

export const ProjectCard = (props) => {
  const { title, url, imgLink, laptopLink, description, technologies } = props;
  return (
    <div
      key={title}
      className="bg-gray-200 rounded-md relative group bg-gradient-to-r from-gray-200 to-gray-300 dark:from-cyan-500 dark:to-teal-500  dark:hover:from-teal-500 dark:hover:to-cyan-500   "
    >
      <h2 className="text-3xl capitalize text-center py-4">{title}</h2>

      <div className="flex justify-center relative mx-4">
        <Image
          src={laptopLink}
          alt="laptop photo"
          className=" drop-shadow-[0_4px_5px_rgba(0,0,0,1)] "
        />
        <a
          href={url}
          className="absolute w-[63%] top-[5%] transform group-hover:scale-150 group-hover:translate-y-6  transition-transform duration-500 "
        >
          <Image
            src={imgLink}
            alt="laptop photo"
            className="rounded-sm group-hover:rounded-md"
          />
        </a>
      </div>
      <div className="p-4 px-14">
        <p className=" text-justify py-4">{description}</p>
        <div className="flex gap-9 justify-center text-xl py-3">
          {technologies.map((e) => (
            <div key={e}>{e}</div>
          ))}
        </div>
      </div>
    </div>
  );
};
