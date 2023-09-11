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
import Image from "next/image";

const About = () => {
  return (
    <div
      id="about"
      className="bg_head py-5 text-slate-100 flex flex-1 justify-center items-center"
    >
        <div className=" verticle_bg">ABOUT ME</div>
      <div className=" about">
        <div className="">
          <div className=" header animated_underline">
            Chronicle of the self: A glimpse within
          </div>
          <div>Lakshay Goyal - Web Developer</div>
          <span>Unleashing Digital Marvels</span>
          <p>
            Greetings! I am<span> Lakshay Goyal</span>, a web developer who
            crafts captivating digital experiences. With an artistic flair and a
            user-centric mindset, I weave wonders on the web.
          </p>
          <span>Experience and Expertise</span>
          <p>
            Unlocking the Web's Potential: Since 2019, I have immersed myself in
            the world of web development, embracing cutting-edge technologies.
            My expertise lies in <span>HTML5</span>, <span>CSS3</span>,{" "}
            <span>JavaScript</span>, <span>React.js</span>, <span>Node.js</span>
            , <span>MongoDB</span>, <span>Express.js</span>
            ,and <span>NEXT.js</span>, enabling me to bring websites to life
            with seamless performance across all devices.
          </p>
          <span>Philosophy: Elevating User Experiences</span>
          <p>
            Beyond Code: I believe in <span>"Progressive Enhancement,"</span> a
            philosophy that pushes the boundaries while ensuring optimal user
            experiences. By blending innovation, accessibility, and performance,
            I create digital realms that captivate and inspire.
          </p>
          {/* <span>Constantly Evolving</span>
          <p>
            Embracing Growth: To stay ahead, I actively engage with the web
            development community. Through books, conferences, and meetups, I
            absorb insights from industry leaders, forever evolving my craft.
          </p> */}
          <span>Let's Connect</span>
          <p>
            Ready to embark on a digital adventure? Reach out to me with any
            questions or requirements. Together, we can breathe life into your
            vision.
          </p>
          <div className=" about_resume">
            <button className="resume_btn">Resume</button>
          </div>
        </div>
        <div className="myImg">
          <Image src={logo} alt="logo" width={1000} />
        </div>
      </div>
    </div>
  );
};

export default About;
