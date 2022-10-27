import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";

export default function Home() {
  return (
    <div className="bg-[#FFF7E9] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Sergio's portfolio</title>
      </Head>
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact me */}
    </div>
  );
}
