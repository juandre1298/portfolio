import React from "react";
import { useState, useEffect } from "react";
import { autoTypeWriter } from "./autoTypeWriter";
import { aboutMe } from "@/pages/data";

export const Greeting = () => {
  const [greetingDisp, setGreetingDisp] = useState("|");
  const [presentationText, setPresentationText] = useState("|");

  let greetingMessage = "Hi!\nI'm Juan Andres Salas!";
  let presentationText0 =
    "I'm a FrondEnd Web developer & Mechanical Engineer ready to contribute with my passion and hard work!";

  useEffect(() => {
    autoTypeWriter(aboutMe.greeting, setGreetingDisp, true, 100);
    autoTypeWriter(aboutMe.presentation, setPresentationText, true, 80);
  }, []);

  return (
    <section
      id="greeting"
      className="pt-[78px] bg-gray-100 dark:bg-inherit md:pt-[0] font-medium  h-screen relative flex flex-col justify-center "
    >
      <div className="flex flex-col gap-10 mx-10 md:mx-32 py-8">
        <div className="typewriter md:flex md:justify-between">
          <div className="z-10 flex flex-col gap-4 ">
            <h1 className="text-center font-bold md:text-left text-3xl md:text-xl lg:text-5xl xl:text-6xl font-mono whitespace-pre-line">
              {greetingDisp}
            </h1>
            <h2 className="text-center md:text-left xl:text-2xl font-mono">
              {presentationText}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};
