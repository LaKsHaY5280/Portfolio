import { logo, ssthreads, ssgericht, ssnike } from "@/assets/images";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
              <div className="project-label">#1 project</div>
              <h4 className="project-title">Threads</h4>
              <div className="project-details">
                <p>
                  "Threads" is a web-based application that offers a platform
                  for creating and participating in discussion threads.
                  Developed using NEXT.js, and MongoDB, the project showcases an
                  intuitive user interface where users can easily navigate,
                  contribute to ongoing discussions, or initiate new ones. The
                  underlying code, primarily written in TypeScript, utilizes
                  NEXT.js for server-side operations and frontend development.
                  The project is an excellent demonstration of full-stack web
                  development using the MERN stack.
                </p>
                <ul>
                  <li>
                    <Link
                      href="https://github.com/LaKsHaY5280/threads"
                      target="blank"
                    >
                      <Github color="#FB2576" absoluteStrokeWidth />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://threadslg.vercel.app/" target="blank">
                      <ExternalLink color="#FB2576" absoluteStrokeWidth />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="project-img">
              <Image src={ssthreads} alt="logo" width={1000} />
            </div>
          </div>
          <div className="project">
            <div className="project-imgeven">
              <Image src={ssgericht} alt="logo" width={1000} />
            </div>
            <div className="project-contenteven">
              <div className="project-label">#2 project</div>
              <h4 className="project-title">Gericht</h4>
              <div className="project-details">
                <p>
                  "Gericht" is a frontend-only web application that serves as a
                  visual platform for exploring different recipes. Built with
                  React.js, as evident from the GitHub repository, the
                  application presents a clean and user-friendly interface where
                  users can browse, search, and view details of various recipes.
                  The website's live version showcases a range of dishes with
                  their respective images, ingredients, and cooking
                  instructions, providing an intuitive and engaging user
                  experience for food enthusiasts.
                </p>
                <ul>
                  <li>
                    <Link
                      href="https://github.com/LaKsHaY5280/gericht"
                      target="blank"
                    >
                      <Github color="#FB2576" absoluteStrokeWidth />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://gerichtlg.vercel.app/" target="blank">
                      <ExternalLink color="#FB2576" absoluteStrokeWidth />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="project">
            <div className="project-content">
              <div className="project-label">#3 project</div>
              <h4 className="project-title">Nike</h4>
              <div className="project-details">
                <p>
                  "Nikel" is a frontend-only web application designed as a mock
                  e-commerce platform for showcasing Nike products. The
                  application, built with React.js as seen in the GitHub
                  repository, provides a sleek and modern user interface for
                  browsing and exploring various Nike products. The live version
                  of the website presents product categories, detailed product
                  information, and images in a visually appealing and
                  user-friendly manner, offering a simulated shopping experience
                  for users.
                </p>
                <ul>
                  <li>
                    <Link
                      href="https://github.com/LaKsHaY5280/nike"
                      target="blank"
                    >
                      <Github color="#FB2576" absoluteStrokeWidth />
                    </Link>
                  </li>
                  <li>
                    <Link href="https://nikelg.vercel.app/" target="blank">
                      <ExternalLink color="#FB2576" absoluteStrokeWidth />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="project-img">
              <Image src={ssnike} alt="logo" width={1000} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
