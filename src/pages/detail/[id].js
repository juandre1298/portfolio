import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { IoMdArrowRoundBack } from "react-icons/io";
import { projects } from "../data";

export default function index() {
  const router = useRouter();
  let [group, id] = String(router.query.id).split("-");

  console.log(projects[group]);

  return (
    <section className="min-h-screen  dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-gray-800 dark:via-gray-900 dark:to-black sm:pt-[90px] pt-[78px]">
      <div className="p-4 md:p-10">
        <Link href={"/"} className="rounded-full bg-gray-500">
          <IoMdArrowRoundBack />
        </Link>
        <div className="flex justify-center ">
          <div>
            <h1 className="">{group}</h1>
            <h1 className="">{id}</h1>
          </div>
          {/* <Image src={projects[group].} /> */}
        </div>
      </div>
    </section>
  );
}
