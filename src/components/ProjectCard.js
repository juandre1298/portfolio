import React from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

export const ProjectCard = (props) => {
  const {
    group,
    id,
    title,
    url,
    imgLink,
    laptopLink,
    description,
    technologies,
    toastTheme,
  } = props;
  //bg-gradient-to-r from-gray-200 to-gray-300 dark:from-cyan-500 dark:to-teal-500  dark:hover:from-teal-500 dark:hover:to-cyan-500
  return (
    <div className="bg-gray-200 rounded-md relative group   dark:bg-teal-600/50  ">
      <h2 className="text-3xl capitalize text-center py-4 font-bold">
        {title}
      </h2>
      <div className="flex justify-center relative mx-4">
        <Image
          src={laptopLink}
          alt="laptop photo"
          className=" drop-shadow-[0_4px_5px_rgba(0,0,0,1)] "
        />
        {url == "comming soon" || url ? (
          <button
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              toast.warning("Coming soon", {
                position: "top-left",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: toastTheme,
              });
            }}
            className="absolute w-[63%] top-[5%] transform group-hover:scale-150 group-hover:translate-y-6  transition-transform duration-500 "
          >
            <Image
              src={imgLink.length ? imgLink[0] : imgLink}
              alt="laptop photo"
              className="rounded-sm group-hover:rounded-md"
            />
          </button>
        ) : (
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={url}
            className="absolute w-[63%] top-[5%] transform group-hover:scale-150 group-hover:translate-y-6  transition-transform duration-500 "
          >
            <Image
              src={imgLink.length ? imgLink[0] : imgLink}
              alt="laptop photo"
              className="rounded-sm group-hover:rounded-md"
            />
          </a>
        )}
      </div>

      <div className="p-4 px-14">
        {/* <p className=" text-justify py-4">{description}</p> */}
        <Link className="underline" href={`/detail/${group}-${id}`}>
          more details
        </Link>

        <ul className="flex flex-wrap gap-2 justify-center text-xl md:text-sm py-3">
          {technologies.length > 3 ? (
            <>
              {technologies.slice(0, 3).map((e) => (
                <li
                  key={e}
                  className="px-2 py-2  bg-stone-200 text-stone-800 rounded-md"
                >
                  {e}
                </li>
              ))}
              <li className="px-2 py-2  bg-stone-200 text-stone-800 rounded-md">
                and more
              </li>
            </>
          ) : (
            technologies.map((e) => (
              <li
                key={e}
                className="px-2 py-2 bg-stone-200 text-stone-800 rounded-md"
              >
                {e}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};
