import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import { projects } from "../data";
import { Otherpages } from "@/components/Otherpages";
import Image from "next/image";
import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { IBM_Plex_Mono } from "next/font/google";

export default function index() {
  const router = useRouter();
  const [projectData, setProjectData] = useState("");
  const [group, setGroup] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (router.isReady) {
      const data = router.query.id.split("-");
      setGroup(data[0]);
      setName(data[1]);

      setLoading(false);
    }
  }, [router.isReady]);

  return (
    <section className="min-h-screen  dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-gray-800 dark:via-gray-900 dark:to-black sm:pt-[90px] pt-[78px]">
      <div className="p-4 md:p-10 md:text-2xl absolute">
        <Link href={"/"} className="rounded-full bg-gray-500">
          <IoMdArrowRoundBack />
        </Link>
      </div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div className="flex flex-col gap-16 xl:gap-4">
          <div className="text-center text-3xl xl:text-5xl gap-4 py-8 capitalize font-bold">
            <h1 className="">{group}</h1>
            <h1 className="">{name}</h1>
          </div>

          <div className="flex flex-col gap-16 md:flex-row mx-4 xl:mx-32">
            <div className="  md:w-1/2 relative ">
              <div className="  flex justify-center ">
                <img
                  src="/laptop-computer-with-white-screen-keyboard/desktop.png"
                  alt="phone"
                  className="object-contain drop-shadow-[0_2px_5px_rgba(0,0,0,1)] "
                />
                <Image
                  src={projects[group][name].imgLink}
                  alt="screen"
                  className="object-contain drop-shadow-[0_2px_5px_rgba(0,0,0,1)] absolute  scale-down w-[91%] mx-auto top-[6%]"
                />
              </div>
              {projects[group][name].phone && (
                <div className="group">
                  <img
                    src={projects[group][name].phone}
                    alt="phone version"
                    className="object-contain absolute h-[48%]  bottom-[1.2%] right-[5%] rounded-xl drop-shadow-[0_2px_5px_rgba(0,0,0,1)] group-hover:h-[96%] group-hover:right-[6%] group-hover:bottom-[1.5%]  duration-1000"
                  />
                  <img
                    src="/laptop-computer-with-white-screen-keyboard/phone_14_01.png"
                    alt="phone"
                    className="object-contain absolute bottom-0  shadow-2xl h-[50%] right-[3.9%] drop-shadow-[0_2px_5px_rgba(0,0,0,1)] group-hover:h-[100%] duration-1000"
                  />
                </div>
              )}
            </div>
            <div className="flex flex-col justify-center items-center gap-10 md:w-1/2">
              <div className="text-center">
                {projects[group][name].description}
              </div>
              <div>
                <h2 className="text-center text-bold">Tools Used</h2>
                <ul className="flex flex-wrap gap-4  md:mx-16 justify-center py-4">
                  {projects[group][name].technologies.map((tech) => {
                    return (
                      <li
                        className="px-2 py-2 bg-stone-200 text-stone-800 rounded-md"
                        key={tech}
                      >
                        {tech}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex flex-col md:flex-row gap-8">
                <a
                  className="bg-yellow-400 py-3 px-6 md:px-8  rounded-md font-bold uppercase shadow-lg dark:bg-teal-600 z-10 flex gap-2 justify-center items-center transform hover:scale-110 hover:shadow-3xl active:scale-90  transition-transform duration-200"
                  href={projects[group][name].url}
                >
                  Project Link
                  <AiOutlineLink className="text-2xl" />
                </a>
                <a
                  className="bg-yellow-400 py-3 px-3 md:px-8  rounded-md font-bold uppercase shadow-lg dark:bg-teal-600 z-10 flex gap-2 justify-center items-center transform hover:scale-110 hover:shadow-3xl active:scale-90  transition-transform duration-200"
                  href={projects[group][name].url}
                >
                  Code Source
                  <AiFillGithub className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <Otherpages />
    </section>
  );
}
