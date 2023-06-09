import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

/* installed @emailjs/browser */
export const Contact = (toastTheme) => {
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
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }

    setEmail(event.target.value);
  };
  const [message, setMessage] = useState(null);
  const [name, setName] = useState(null);

  return (
    <section
      id="contact"
      className="flex flex-col items-center gap-4 bg-gray-100 pt-14 dark:bg-black pb-20"
    >
      <h1 className="uppercase font-bold text-3xl">contact</h1>
      <div className="w-10 h-[3px] md:h-[5px] rounded-full bg-yellow-400 dark:bg-teal-600 mx-auto my-2 shadow-yellow-400 dark:shadow-teal-800 "></div>
      <div>
        <p className="mx-4 text-center">
          Feel free to contact me by submitting the form below, and I will get
          back to you as soon as possible.
        </p>
        <form
          ref={form}
          onSubmit={sendEmail}
          className=" bg-white dark:bg-teal-800 mt-10 flex flex-col gap-4 p-6 justify-center mx-5  rounded-xl shadow-2xl dark:shadow-[rgba(13,148,136,1)]"
        >
          <lable className="font-bold">Name*</lable>
          <input
            className="text-stone-600 bg-gray-200 rounded-sm p-2 text-sm focus:outline-none"
            type="text"
            name="user_name"
            placeholder="Enter your Name "
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <div className="flex gap-4">
            <lable className="font-bold">Email*</lable>
            <span>
              {error && (
                <h2 className="text-red-700 dark:text-orange-500">{error}!</h2>
              )}
            </span>
          </div>
          <input
            className="text-stone-600 bg-gray-200 rounded-sm p-2 text-sm focus:outline-none"
            type="email"
            name="user_email"
            onChange={handleChange}
            placeholder="Enter email"
          />
          <h3 className="font-bold">Message*</h3>
          <textarea
            onChange={(event) => {
              setMessage(event.target.value);
            }}
            name="message"
            className="text-stone-600 bg-gray-200 rounded-sm p-2 text-sm focus:outline-none"
            rows="5"
          ></textarea>

          {name && message && !error ? (
            <input
              onClick={() => {
                toast.success("Mail sent, thank you for reaching out!", {
                  position: "top-left",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: { toastTheme },
                });
              }}
              type="submit"
              value="Send"
              className="bg-yellow-400 py-3 px-8 mx-auto rounded-md font-bold uppercase shadow-lg dark:bg-teal-600 z-10 transform hover:scale-110 hover:shadow-3xl active:scale-90  transition-transform duration-200"
            />
          ) : (
            <button
              className="bg-yellow-400 py-3 px-8 mx-auto rounded-md font-bold uppercase shadow-lg cursor-not-allowed dark:bg-teal-700 z-10 opacity-80 dark:opacity-50"
              onClick={() => {
                toast.error("Please fill all the requiered inputs", {
                  position: "top-left",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: { toastTheme },
                });
              }}
            >
              Send
            </button>
          )}
        </form>
      </div>
    </section>
  );
};
