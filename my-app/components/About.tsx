import React from "react";
import { motion } from "framer-motion";
import MouseDog from "../assets/mouse_dog.png";
type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className=" flex flex-col relative h-screen text-center md:text-center md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About me
      </h3>
      {/* <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        viewport={{ once: true }}
        src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        className=" -mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:95 xl:w-[500px] xl:h-[600px]"
      /> */}
      <div className="space-y-10 px-0 md:px-10">
        <p className="text-gray-500 text-base">
        Hello 👋, my name is Sergio. I am a second-year university student majoring in Computer Science at Mcgill University. I am passionate about solving challenging technical problems with real-world impact. My current interests lie in full-stack development as well as machine learning and AI. I am also pursuing a minor in Statistics as part of my undergraduate degree. My hobbies include reading books, watching movies, and listening to the same song on repeat until I get tired of it. Feel free to reach out with any exciting opportunities as I am always looking for a new challenge.        </p>
      </div>
    </motion.div>
  );
}
