import Navbar from "@/components/navbar.jsx";
import { Header, About, Skills, Projects, Contact, Footer } from "@/containers";
import Invite from "@/components/invite.jsx";
import Quotes from "@/components/quote.jsx";
import AnimatedBg from "@/components/animatedBg";

export default function Home() {
  return (
    <main className=" font-kano">
      <Navbar />
      <Header />
      <AnimatedBg />
      <div className=" relative">
        <Quotes quote="Soothing presence, nurtures growth" />
        <About />
        <Quotes quote="Code is poetry" />
        <Skills />
        <Quotes quote="Navigating complexities with understanding and patience" />
        <Projects />
        <Quotes quote="Touches hearts, inspires collaboration" />
        <Contact />
        <Invite />
        <Footer />
      </div>
    </main>
  );
}
