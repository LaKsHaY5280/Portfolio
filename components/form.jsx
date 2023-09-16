"use client";

import { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [state, handleSubmit] = useForm("meqbzzor");

  useEffect(() => {
    if (state.succeeded) {
      setName("");
      setEmail("");
      setMessage("");
      // return <p>Thanks for joining!</p>;
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
      </form>
    </div>
  );
};

export default Form;
