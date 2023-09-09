import { logo } from "@/assets/images";
import Image from "next/image";

const Projects = () => {
  return (
    <div id="project" className=" bg_head proj">
      <div className=" verticle_bg">PROJECTS</div>
      <div>
        <div className=" header animated_underline">
          Some things I've build :
        </div>
        <div className="project-container">
          <div className="project">
            <div className="project-content">
              <div className="project-label">Game of Thrones</div>
              <h4 className="project-title">A Clash of Kings</h4>
              <div className="project-details">
                <p>
                  Lorem ipsum dolor amet you probably...Lorem ipsum dolor amet
                  you probably...Lorem ipsum dolor amet you probably...Lorem
                  ipsum dolor amet you probably...Lorem ipsum dolor amet you
                  probably...Lorem ipsum dolor amet you probably...Lorem ipsum
                  dolor amet you probably...Lorem ipsum dolor amet you
                  probably...Lorem ipsum dolor amet you probably...Lorem ipsum
                  dolor amet you probably...Lorem ipsum dolor amet you
                  probably...
                </p>
                <ul>
                  <li>Shadow</li>
                  <li>Demon</li>
                  <li>Baby</li>
                </ul>
              </div>
            </div>
            <div className="project-img">
              <Image src={logo} alt="logo" width={1000} />
            </div>
          </div>
          <div className="project">
            <div className="project-imgeven">
              <Image src={logo} alt="logo" width={1000} />
            </div>
            <div className="project-contenteven">
              <div className="project-label">Game of Thrones</div>
              <h4 className="project-title">A Clash of Kings</h4>
              <div className="project-details">
                <p>
                  Lorem ipsum dolor amet you probably...Lorem ipsum dolor amet
                  you probably...Lorem ipsum dolor amet you probably...Lorem
                  ipsum dolor amet you probably...Lorem ipsum dolor amet you
                  probably...Lorem ipsum dolor amet you probably...Lorem ipsum
                  dolor amet you probably...Lorem ipsum dolor amet you
                  probably...Lorem ipsum dolor amet you probably...Lorem ipsum
                  dolor amet you probably...Lorem ipsum dolor amet you
                  probably...
                </p>
                <ul>
                  <li>Shadow</li>
                  <li>Demon</li>
                  <li>Baby</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project-content">
              <div className="project-label">Game of Thrones</div>
              <h4 className="project-title">A Clash of Kings</h4>
              <div className="project-details">
                <p>
                  Lorem ipsum dolor amet you probably...Lorem ipsum dolor amet
                  you probably...Lorem ipsum dolor amet you probably...Lorem
                  ipsum dolor amet you probably...Lorem ipsum dolor amet you
                  probably...Lorem ipsum dolor amet you probably...Lorem ipsum
                  dolor amet you probably...Lorem ipsum dolor amet you
                  probably...Lorem ipsum dolor amet you probably...Lorem ipsum
                  dolor amet you probably...Lorem ipsum dolor amet you
                  probably...
                </p>
                <ul>
                  <li>Shadow</li>
                  <li>Demon</li>
                  <li>Baby</li>
                </ul>
              </div>
            </div>
            <div className="project-img">
              <Image src={logo} alt="logo" width={1000} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
