import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Projects } from "./sections/Projects";
import { TechStack } from "./sections/TechStack";
import { Contact } from "./sections/Contact";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Contact />
    </main>
  );
}