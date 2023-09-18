import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Socials = () => {
  return (
    <div className=" layout_social ">
      <div>
        <Link href="https://github.com/LaKsHaY5280" target="blank">
          <Github color="#FB2576" absoluteStrokeWidth />
        </Link>
        <Link href="https://www.instagram.com/akuma._.lakshay/" target="blank">
          <Instagram color="#FB2576" absoluteStrokeWidth />
        </Link>
        <Link
          href="https://www.linkedin.com/in/lakshay-goyal-2a03a4270/"
          target="blank"
        >
          <Linkedin color="#FB2576" absoluteStrokeWidth />
        </Link>
        {/* <Link href={} target="blank"> */}
        <Twitter color="#FB2576" absoluteStrokeWidth />
        {/* </Link> */}
      </div>
      <div>
        <span className=" text-primary writing-mode: vertical-rl;">
          akshaytester5280@gmail.com
        </span>
      </div>
    </div>
  );
};

export default Socials;
