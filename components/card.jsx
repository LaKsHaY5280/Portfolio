"use client";

import { useEffect, useRef } from "react";

class ParallaxTiltEffect {
  // Your class code here
  constructor({ element, tiltEffect }) {
    this.element = element;
    this.container = this.element.querySelector(".card_container");
    this.size = [300, 360];
    [this.w, this.h] = this.size;

    this.tiltEffect = tiltEffect;

    this.mouseOnComponent = false;

    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.defaultStates = this.defaultStates.bind(this);
    this.setProperty = this.setProperty.bind(this);
    this.init = this.init.bind(this);

    this.init();
  }

  handleMouseMove(event) {
    const { offsetX, offsetY } = event;

    let X;
    let Y;

    if (this.tiltEffect === "reverse") {
      X = (offsetX - this.w / 2) / 3 / 3;
      Y = -(offsetY - this.h / 2) / 3 / 3;
    } else if (this.tiltEffect === "normal") {
      X = -(offsetX - this.w / 2) / 3 / 3;
      Y = (offsetY - this.h / 2) / 3 / 3;
    }

    this.setProperty("--rY", X.toFixed(2));
    this.setProperty("--rX", Y.toFixed(2));

    this.setProperty("--bY", 80 - (X / 4).toFixed(2) + "%");
    this.setProperty("--bX", 50 - (Y / 4).toFixed(2) + "%");
  }

  handleMouseEnter() {
    this.mouseOnComponent = true;
    this.container.classList.add("card_container--active");
  }

  handleMouseLeave() {
    this.mouseOnComponent = false;
    this.defaultStates();
  }

  defaultStates() {
    this.container.classList.remove("card_container--active");
    this.setProperty("--rY", 0);
    this.setProperty("--rX", 0);
    this.setProperty("--bY", "80%");
    this.setProperty("--bX", "50%");
  }

  setProperty(p, v) {
    return this.container.style.setProperty(p, v);
  }

  init() {
    this.element.addEventListener("mousemove", this.handleMouseMove);
    this.element.addEventListener("mouseenter", this.handleMouseEnter);
    this.element.addEventListener("mouseleave", this.handleMouseLeave);
  }
}

const Card = () => {
  const wrap1 = useRef(null);
  const wrap2 = useRef(null);
  const wrap3 = useRef(null);

  useEffect(() => {
    if (wrap1.current && wrap2.current && wrap3.current) {
      const effect1 = new ParallaxTiltEffect({
        element: wrap1.current,
        tiltEffect: "reverse",
      });

      const effect2 = new ParallaxTiltEffect({
        element: wrap2.current,
        tiltEffect: "normal",
      });

      const effect3 = new ParallaxTiltEffect({
        element: wrap3.current,
        tiltEffect: "reverse",
      });
    }
  }, []);

  return (
    <div className="card ">
      <div className="card_wrap card_wrap--1" ref={wrap1}>
        <div className="card_container card_container--1">
          <h2 className=" whitespace-nowrap">01. Frontend</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>TailwindCSS</li>
            <li>Bootstrap</li>
            <li>NEXT.js</li>
          </ul>
        </div>
      </div>

      <div className="card_wrap card_wrap--2" ref={wrap2}>
        <div className="card_container card_container--2">
          <h2 className=" whitespace-nowrap">02. Backend</h2>
          <ul>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>Mongoose</li>
          </ul>
        </div>
      </div>

      <div className="card_wrap card_wrap--3" ref={wrap3}>
        <div className="card_container card_container--3">
          <h2 className=" whitespace-nowrap">03. Other</h2>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
            <li>TypeScript</li>
            <li>Netlify</li>
            <li>VS code</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
