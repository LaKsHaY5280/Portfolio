import { l } from "@/assets/images";
import Image from "next/image";
import { navlinks } from "@/assets/data";
import Hamburger from "./hamburger";

const Navbar = () => {
  return (
    <div className=" formbg p-5 flex flex-1 justify-center items-center ">
      <div className=" flex flex-1 justify-between items-center">
        <div className=" flex justify-start items-center">
          <Image src={l} alt="L" width={30} height={30} />
          <span className=" font-bold text-2xl text-slate-100 mt-2">
            akshay Goyal
          </span>
        </div>
        <div>
          <ul className=" flex justify-end items-center max-md:hidden">
            {navlinks.map((link) => (
              <li key={link.label} className=" text-slate-100 mx-4">
                <a href={"#" + link.url}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className=" px-4 flex justify-end items-center">
        <button className="resume_btn">Resume</button>
      </div>
      <div className=" flex justify-end items-center md:hidden">
        <Hamburger />
      </div>
    </div>
  );
};

export default Navbar;
