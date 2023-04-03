import React from "react";
import { useState, useEffect } from "react";
import { autoTypeWriter } from "./autoTypeWriter";
import Image from "next/image";
import mypicture from "/public/mypicture.png";

export const Greeting = () => {
  const [greetingDisp, setGreetingDisp] = useState("");
  const [presentationText, setPresentationText] = useState("");

  let greetingMessage = "Hi!\nMy name is Juan Andres!";
  let presentationText0 =
    "I'm a Mechanical Engineer and FrondEnd Web developer with pastion and skills";

  useEffect(() => {
    autoTypeWriter(greetingMessage, setGreetingDisp, true, 100);
    autoTypeWriter(presentationText0, setPresentationText, true, 80);
  }, []);

  return (
    <section className=" gap-16 pt-[200px] font-medium px-4 max-[440px]:pt-[150px] xxs:pt-36 md:px-16 xl:px-14">
      <div className="flex flex-col gap-10 ">
        <div className="typewriter md:flex md:justify-between">
          <div>
            <h1 className="text-3xl md:text-5xl font-mono whitespace-pre-line">
              {greetingDisp}
            </h1>
            <h2>{presentationText}</h2>
          </div>

          <Image
            src={mypicture}
            className="w-full md:w-1/3 max-h-[800px] z-0 dark:brightness-75 drop-shadow-[0_0_5px_rgba(0,0,0,1)] rounded-xl"
            alt="profile picture"
          />
          <p>debemos arreglar esas puntas feas de la imagen</p>
        </div>

        <div>
          <h1>Overview</h1>
          <p>
            I'm a fast learning and entusiastic frontend developer with skills
            in <span>CSS, HTML, REACT JS, TAILWIND, GIT, REDUX, etc</span>
          </p>
          <p>[INCERT FOTO OF TECNOLOGIES]</p>
        </div>
      </div>
    </section>
  );
};
