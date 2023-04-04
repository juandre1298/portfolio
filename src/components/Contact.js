import React from "react";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center gap-4 bg-gray-100 pt-14 dark:bg-black"
    >
      <h1 className="uppercase font-bold text-3xl">contact</h1>
      <div className="w-10 h-[3px] md:h-[5px] rounded-full bg-yellow-400 dark:bg-teal-600 mx-auto my-2 shadow-yellow-400 dark:shadow-teal-800 "></div>
      <div>
        <p className="mx-4 text-center">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
        <div className="bg-white mt-10 flex flex-col gap-4 p-8 justify-center mx-5">
          <h3>Name</h3>
          <input
            className="bg-gray-200"
            type="text"
            placeholder="Enter your Name "
          />
          <h3>email</h3>
          <input
            className="bg-gray-200"
            type="text"
            placeholder="Enter email"
          />
          <h3>Message</h3>
          <textarea className="bg-gray-200" name="Text1" rows="5"></textarea>
          <button>Submit</button>
        </div>
      </div>
    </section>
  );
};
