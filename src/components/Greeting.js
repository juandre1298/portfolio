import React from "react";
import { useState, useEffect } from "react";
import { autoTypeWriter } from "./autoTypeWriter";
import Image from "next/image";
import mypicture from "/public/mypicture.png";

export const Greeting = () => {
  const [greetingDisp, setGreetingDisp] = useState("|");
  const [presentationText, setPresentationText] = useState("|");

  let greetingMessage = "Hi!\nMy name is Juan Andres!";
  let presentationText0 =
    "I'm a Mechanical Engineer and FrondEnd Web developer with passion and skills v";

  useEffect(() => {
    autoTypeWriter(greetingMessage, setGreetingDisp, true, 100);
    autoTypeWriter(presentationText0, setPresentationText, true, 80);
  }, []);

  return (
    <section className="pt-[78px] md:pt-[90px] font-medium  md:h-screen relative">
      <div className="flex flex-col gap-10 mx-10 py-8">
        <div className="typewriter md:flex md:justify-between ">
          <div className="z-10 flex flex-col gap-4">
            <h1 className="text-center md:text-left text-3xl md:text-5xl font-mono whitespace-pre-line">
              {greetingDisp}
            </h1>
            <h2 className="text-center md:text-left">{presentationText}</h2>
          </div>
        </div>
        <div className="flex justify-end z-0 px-[10%] md:px-0 md:end-0 md:absolute md:h-screen">
          <Image
            src={mypicture}
            /* dark:hue-rotate-[190deg] */
            className=" bottom-1 opacity-90 object-scale-down drop-shadow-[0_0_5px_rgba(0,0,0,1)] dark:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] rounded-full md:rounded-xl blur-[0.5px] md:w-full md:py-10  dark:brightness-75 dark:grayscale  dark:saturate-50 md:transfor md:translate-x-32 lg:translate-x-0 "
            alt="profile picture"
          />
        </div>
        <div className="z-10">
          <h1 className="text-center md:text-left text-2xl">Overview</h1>
          <p>
            I'm a fast learning and entusiastic frontend developer with skills
            in <br />
            <span>CSS, HTML, REACT JS, TAILWIND, GIT, REDUX, etc</span>
          </p>
          <p>[INCERT FOTO OF TECNOLOGIES]</p>
        </div>
      </div>
    </section>
  );
};
