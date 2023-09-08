import {
  logo,
  html,
  css,
  js,
  typescript,
  react,
  nextjs,
  nodejs,
  nodejs48,
  nodejs240,
  mongodb,
  expressjs48,
  expressjs240,
} from "@/assets/images";
import Card from "@/components/card";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="skill" className=" bg_head skills ">
      <div className="lang_icons">
        <Image src={html} alt="logo" width={40} />
        <Image src={css} alt="logo" width={40} />
        <Image src={js} alt="logo" width={40} />
        <Image src={typescript} alt="logo" width={40} />
        <Image src={react} alt="logo" width={40} />
        <Image src={nextjs} alt="logo" width={40} />
        <Image src={nodejs} alt="logo" width={40} />
        <Image src={mongodb} alt="logo" width={40} />
        <Image src={expressjs48} alt="logo" width={40} />
      </div>
      <div>
        <Card />
      </div>
      {/* <div>timeline</div> */}
    </div>
  );
};

export default Skills;
