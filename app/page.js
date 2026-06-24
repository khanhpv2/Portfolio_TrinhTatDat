import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ProjectGallery from "@/components/sections/ProjectGallery";
import Certifications from "@/components/sections/Certifications";
import Statistics from "@/components/sections/Statistics";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Statistics />
      <Experience />
      <FeaturedProjects />
      <ProjectGallery />
      <Certifications />
      <Contact />
    </>
  );
}
