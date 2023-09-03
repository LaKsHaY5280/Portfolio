import Navbar from "@/components/navbar.jsx";
import { Header, About, Skills, Projects, Contact, Footer } from "@/containers";
import Invite from "@/components/invite.jsx";

export default function Home() {
  return (
    <main className=" font-kano">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Invite />
      <Footer />
    </main>
  );
}
