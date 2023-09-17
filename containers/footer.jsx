import { l } from "@/assets/images";
import Image from "next/image";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" bg-dark_bg footer ">
      <div>
        <div className="flex justify-center items-center">
          <Image src={l} alt="L" width={300} height={300} />
        </div>
        <div className="flex justify-center items-center text-5xl text-slate-100 text-center">
          "Approches hurdles with empathy and grace"
        </div>
        <div className=" socials">
          <Link href="https://github.com/LaKsHaY5280" target="blank">
            <Github size={48} color="#FB2576" absoluteStrokeWidth />
          </Link>
          <Link href="https://www.instagram.com/akuma._.lakshay/" target="blank">
            <Instagram size={48} color="#FB2576" absoluteStrokeWidth />
          </Link>
          <Link href="https://www.linkedin.com/in/lakshay-goyal-2a03a4270/" target="blank">
            <Linkedin size={48} color="#FB2576" absoluteStrokeWidth />
          </Link>
          {/* <Link href={} target="blank"> */}
            <Twitter size={48} color="#FB2576" absoluteStrokeWidth />
          {/* </Link> */}
        </div>
      </div>
      <div className=" text-secondary">
        Handcrafted by me{" "}
        <span className="animated_underline">Lakshay Goyal</span>
      </div>
    </div>
  );
};

export default Footer;
