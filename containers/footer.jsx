import { l } from "@/assets/images";
import Image from "next/image";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <div className=" bg-dark_bg footer ">
      <div>
        <div className="flex justify-center items-center">
          <Image src={l} alt="L" width={300} height={300} />
        </div>
        <div className="flex justify-center items-center text-5xl text-slate-100">
          "Approches hurdles with empathy and grace"
        </div>
        <div className=" socials">
          <Github size={48} color="#FB2576" absoluteStrokeWidth />
          <Instagram size={48} color="#FB2576" absoluteStrokeWidth />
          <Linkedin size={48} color="#FB2576" absoluteStrokeWidth />
          <Twitter size={48} color="#FB2576" absoluteStrokeWidth />
        </div>
      </div>
      <div className=" text-secondary">
        Handcrafted by me <u>Lakshay Goyal</u>
      </div>
    </div>
  );
};

export default Footer;
