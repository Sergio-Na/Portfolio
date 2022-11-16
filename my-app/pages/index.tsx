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
        <title>Sergios portfolio</title>
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
        <Skills images={["https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.png","https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png","https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png","https://reactjs.org/logo-og.png","https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png","https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png","https://mui.com/static/logo.png","https://cdn-icons-png.flaticon.com/512/5968/5968322.png","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcdiblUNOHmBG57IF35-4mVppsaapb1XaGhfNF6EY&s","https://www.clipartmax.com/png/middle/400-4000927_python-logo-clipart-transparent-background-python-logo-clipart-transparent-background.png","https://ih1.redbubble.net/image.2488655049.9084/st,small,507x507-pad,600x600,f8f8f8.jpg","https://cdn-icons-png.flaticon.com/512/226/226777.png","https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/695px-C_Programming_Language.svg.png","https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png","https://wac-cdn.atlassian.com/dam/jcr:5cae308d-24a4-40d0-8fe2-ce7f46cd7a02/JSW%20sign-responsive.png?cdnVersion=631","https://www.pngitem.com/pimgs/m/340-3408094_jenkins-ci-hd-png-download.png"]} />
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
