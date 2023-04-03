import React from "react";

export const Contact = () => {
  return (
    <section>
      <h1>contact</h1>
      <div>
        <div className="flex flex-col gap-2">
          <input type="text" placeholder="email" />
          {/* <textarea id="w3review" name="w3review" rows="4" cols="50">
          At w3schools.com you will learn how to make a website. They
          offer free tutorials in all web development technologies.
        </textarea> */}
          <button>Submit</button>
        </div>
      </div>
    </section>
  );
};
