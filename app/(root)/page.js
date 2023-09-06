import Navbar from "@/components/navbar.jsx";
import { Header, About, Skills, Projects, Contact, Footer } from "@/containers";
import Invite from "@/components/invite.jsx";

export default function Home() {
  return (
    <main className=" font-kano">
      <div>
        <Navbar />
        <Header />
        <div>
          <div className="light x1"></div>
          <div className="light x2"></div>
          <div className="light x3"></div>
          <div className="light x4"></div>
          <div className="light x5"></div>
          <div className="light x6"></div>
          <div className="light x7"></div>
          <div className="light x8"></div>
          <div className="light x9"></div>
        </div>
      </div>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Invite />
      <Footer />
    </main>
  );
}
