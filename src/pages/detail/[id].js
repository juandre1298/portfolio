import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import { projects } from "../data";
import Image from "next/image";

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
      <div className="p-4 md:p-10 md:text-2xl">
        <Link href={"/"} className="rounded-full bg-gray-500">
          <IoMdArrowRoundBack />
        </Link>
        {loading ? (
          <h1>loading...</h1>
        ) : (
          <div className="flex flex-col">
            {console.log(projects[group][name])}
            <div className="text-center">
              <h1 className="">{group}</h1>
              <h1 className="">{name}</h1>
            </div>
            <div className="flex">
              <div className="  w-1/2 relative ">
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
              </div>
              <div className="flex flex-col justify-center items-center gap-10 w-1/2">
                <div className="text-center">
                  descripction descripction descripction descripction
                  descripction descripction descripction descripction
                  descripction descripction descripction descripction{" "}
                </div>
                <div>
                  <h2>Tools Used</h2>
                  <ul className="flex gap-2">
                    <li>HTML</li>

                    <li>CSS</li>

                    <li>javascript</li>
                  </ul>
                </div>
                <div>
                  <a href={projects[group][name].url}>Project Link</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
