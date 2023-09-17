import { logo } from "@/assets/images";
import Image from "next/image";

const Header = () => {
  return (
    <div className=" bg_head head">
      <div className=" head_text ">
        <h3>Hi, my name is </h3>
        <h1 className="reveal">Lakshay Goyal</h1>
        <p>"A builder of spectacular websites"</p>
      </div>
      <div className=" head_img">
        <Image src={logo} alt="logo" width={750} />
      </div>
    </div>
  );
};

export default Header;
