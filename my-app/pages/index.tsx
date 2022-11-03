import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
export default function Home() {
  return (
    <div className="bg-[#FFF7E9] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-orange-300/90">
      <Head>
        <title>Sergio's portfolio</title>
      </Head>
      <Header />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      <section id="skills" className="snap-start">
        <Skills />
      </section>

      <section id="projects" className="snap-start">
        <Projects />
      </section>

      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <BsFillArrowUpCircleFill className=" bg-gray-500 h-10 w-10 rounded-full filter opacity-40 hover:opacity-100 cursor-pointer" />
          </div>
        </footer>
      </Link>
    </div>
  );
}
