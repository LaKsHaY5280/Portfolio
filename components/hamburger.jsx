"use client";

import { useState } from "react";
import { navlinks } from "@/assets/data";
import { useRouter } from "next/navigation";

const Hamburger = () => {
  const [isChecked, setIsChecked] = useState(false);
  const router = useRouter();

  const handleInputCheck = (event) => {
    event.preventDefault();
    setIsChecked(false);
  };

  return (
    <div role="navigation" className=" pl-5">
      <div className=" flex justify-end items-center">
        <div id="menuToggle">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
          />
          <span></span>
          <span></span>
          <span></span>
          <ul className=" max-md:hidden" id="menu">
            {navlinks.map((link) => (
              <li key={link.label} onClick={handleInputCheck}>
                <a
                  className=" text-primary ham_transition hover:text-slate-200"
                  onClick={() => router.push(link.url)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hamburger;
