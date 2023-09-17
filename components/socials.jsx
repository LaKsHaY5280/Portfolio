import { Github, Instagram, Linkedin, Twitter } from "lucide-react";

const Socials = () => {
  return (
    <div className=" layout_social ">
      <div className=" ">
        <div className=" ">
          <Github size={22} color="#FB2576" absoluteStrokeWidth />
          <Instagram size={22} color="#FB2576" absoluteStrokeWidth />
          <Linkedin size={22} color="#FB2576" absoluteStrokeWidth />
          <Twitter size={22} color="#FB2576" absoluteStrokeWidth />
        </div>
        <div className=" ">
          <span className=" text-primary writing-mode: vertical-rl;">
            akshaytester5280@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
};

export default Socials;
