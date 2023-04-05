import React from "react";
import { Link } from "react-scroll/modules";

export const About = () => {
  const skills = [
    "HTML",
    "CSS",
    "JAVASCRIPT",
    "REACT",
    "GIT",
    "GITHUB",
    "Responsive Design",
    "TailWind",
    "Redux",
    "Next.js",
  ];
  return (
    <section id="about" className="z-10 pt-10 flex flex-col gap-4 md:mt-10">
      <h1 className="text-center md:text-left text-3xl font-bold uppercase mx-auto">
        About me
      </h1>
      <div className="w-10 h-[3px] md:h-[5px] rounded-full bg-yellow-400 dark:bg-teal-600 mx-auto my-2 shadow-yellow-400 dark:shadow-teal-800 "></div>
      <div className="md:flex md:justify-evenly gap-4 md:mx-20 ">
        <div className="md:w-1/2 ">
          <p className="px-4 text-justify">
            I'm a Frontend Web Developer building the Front-end of Websites and
            Web Applications that leads to the success of the overall product.
            Check out some of my work in the Projects section. I also like
            sharing content related to the stuff that I have learned over the
            years in Web Development so it can help other people of the Dev
            Community. Feel free to Connect or Follow me on my Linkedin where I
            post useful content related to Web Development and Programming I'm
            open to Job opportunities where I can contribute, learn and grow. If
            you have a good opportunity that matches my skills and experience
            then don't hesitate to contact me.
            <br />
          </p>
          <div className="flex justify-center my-4 gap-4">
            <button className="bg-yellow-400 py-3 px-6 md:px-8  rounded-md font-bold uppercase shadow-lg dark:bg-teal-600 z-10">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
                /* onSetActive={this.handleSetActive} */
              >
                Contact
              </Link>
            </button>
            <button className="bg-yellow-400 py-3 px-6 md:px-8  rounded-md font-bold uppercase shadow-lg dark:bg-teal-600 z-10">
              Get Resume
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-center text-xl font-bold">My Skills</h2>
          <ul className="flex flex-wrap gap-4 mx-4">
            {skills.map((e) => (
              <div
                key={e}
                className="px-2 py-2 bg-stone-200 text-stone-800 rounded-md"
              >
                {e}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
