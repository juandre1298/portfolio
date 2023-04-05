import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
/* installed @emailjs/browser */
export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6z0fhbs",
        "template_cxiwzu9dtrkdtrk",
        form.current,
        "m1R5trKg5RpveRDUS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center gap-4 bg-gray-100 pt-14 dark:bg-black pb-20"
    >
      <h1 className="uppercase font-bold text-3xl">contact</h1>
      <div className="w-10 h-[3px] md:h-[5px] rounded-full bg-yellow-400 dark:bg-teal-600 mx-auto my-2 shadow-yellow-400 dark:shadow-teal-800 "></div>
      <div>
        <p className="mx-4 text-center">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </p>
        <form
          ref={form}
          onSubmit={sendEmail}
          className=" bg-white dark:bg-teal-800 mt-10 flex flex-col gap-4 p-6 justify-center mx-5  rounded-xl shadow-2xl dark:shadow-[rgba(13,148,136,1)]"
        >
          <lable className="font-bold">Name</lable>
          <input
            className="text-stone-600 bg-gray-200 rounded-sm p-2 text-sm focus:outline-none"
            type="text"
            name="user_name"
            placeholder="Enter your Name "
          />
          <lable className="font-bold">Email</lable>
          <input
            className="text-stone-600 bg-gray-200 rounded-sm p-2 text-sm focus:outline-none"
            type="email"
            name="user_email"
            placeholder="Enter email"
          />
          <h3 className="font-bold">Message</h3>
          <textarea
            name="message"
            className="text-stone-600 bg-gray-200 rounded-sm p-2 text-sm focus:outline-none"
            rows="5"
          ></textarea>
          <input
            type="submit"
            value="Send"
            className="bg-yellow-400 py-3 px-8 mx-auto rounded-md font-bold uppercase shadow-lg dark:bg-teal-600 z-10"
          />
        </form>
      </div>
    </section>
  );
};
