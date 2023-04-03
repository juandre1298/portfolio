import React from "react";
import { useState, useEffect } from "react";
import { autoTypeWriter } from "./autoTypeWriter";

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
    <section className=" flex gap-16 pt-[200px] font-medium px-4 max-[440px]:pt-[150px] xxs:pt-36 md:px-16 xl:px-14">
      <div className="flex flex-col gap-10">
        <div className="typewriter">
          <h1 className="text-3xl md:text-5xl font-mono whitespace-pre-line">
            {greetingDisp}
          </h1>
        </div>

        <h2>{presentationText}</h2>
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
