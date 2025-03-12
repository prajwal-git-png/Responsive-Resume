import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Projects from "@/components/home/Projects";
import Certification from "@/components/home/Certification";
import Contact from "@/components/home/Contact";

const Home = () => {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Certification />
      <Projects />
      <Contact />
    </main>
  );
};

export default Home; 