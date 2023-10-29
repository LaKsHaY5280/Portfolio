"use client";

import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const [state, handleSubmit] = useForm("meqbzzor");

  useEffect(() => {
    if (state.succeeded) {
      setName("");
      setEmail("");
      setMessage("");
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 3000); // 3 seconds
    }
  }, [state.succeeded]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="name">Name</label>
        </div>
        <div className="user-box">
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="email">Email</label>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="user-box">
          <textarea
            rows="10"
            cols="40"
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <label>Message</label>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
        <button type="submit" disabled={state.submitting}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </button>
        {showPopup && (
          <div className=" absolute top-0 w-full h-5/6 flex justify-center items-center">
            <div className=" flex justify-between items-center box-border shadow-[0_15px_25px_rgba(0,0,0,0.6)] p-5 rounded-[10px] bg-black bg-opacity-50">
              <p className="text-white text-xl">Thanks for contacting😊!</p>
              <button
                type="button"
                onClick={() => setShowPopup(false)}
                className=" !mt-0 mb-10 ml-5"
              >
                X
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Form;
