import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import { ProjectsDisplay } from "@/components/ProjectsDisplay";
import { projects } from "../../components/data";

const index = () => {
  return (
    <section className="min-h-screen  dark:bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] dark:from-gray-800 dark:via-gray-900 dark:to-black sm:pt-[90px] pt-[78px]">
      <div className="p-4 md:p-10 md:text-2xl">
        <Link href={"/"} className="rounded-full bg-gray-500">
          <IoMdArrowRoundBack />
        </Link>
      </div>
      <ProjectsDisplay projects={projects} />
    </section>
  );
};

export default index;
