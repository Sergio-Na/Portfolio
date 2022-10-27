import React from "react";
import { motion } from "framer-motion";
type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.5, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#FF731D] opacity-50 rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-[#FF731D] opacity-40 rounded-full h-[350px] w-[350px] mt-52 " />
      <div className="absolute border border-[#FF731D] opacity-30 rounded-full h-[500px] w-[500px] mt-52 " />
      <div className="rounded-full border border-[#FF731D] opacity-20 h-[650px] w-[650px] absolute mt-52 animate" />
    </motion.div>
  );
}

export default BackgroundCircles;
