import React from "react";
import { useState, useEffect } from "react";
import { autoTypeWriter } from "./autoTypeWriter";

export const Greeting = () => {
  const [greetingDisp, setGreetingDisp] = useState("|");
  const [presentationText, setPresentationText] = useState("|");

  let greetingMessage = "Hi!\nI'm Juan Andres Salas!";
  let presentationText0 =
    "I'm a FrondEnd Web developer & Mechanical Engineer ready to contribute with my passion and hard work!";

  useEffect(() => {
    autoTypeWriter(greetingMessage, setGreetingDisp, true, 100);
    autoTypeWriter(presentationText0, setPresentationText, true, 80);
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
            <h2 className="text-center md:text-left xl:text-2xl">
              {presentationText}
            </h2>
          </div>
        </div>
        {/*   <div className="flex justify-end z-0 px-[10%] md:px-0 md:top-[90px] md:end-0 md:absolute   md:h-screen">
          <Image
            src={mypicture}
            className=" bottom-1 opacity-90 drop-shadow-[0_0_5px_rgba(0,0,0,1)] dark:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)] rounded-full md:rounded-xl blur-[0.5px] md:w-full md:py-10  dark:brightness-75 dark:grayscale  dark:saturate-50 md:transfor md:translate-x-32 lg:translate-x-0 overflow-hidden "
            alt="profile picture"
          />
        </div> */}
      </div>
    </section>
  );
};
