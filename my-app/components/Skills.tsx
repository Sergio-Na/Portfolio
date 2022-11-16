import React from "react";
import { motion } from "framer-motion";
import Skill from "../components/Skill";
type Props = { images : string[]};

function Skills({ images }: Props) {
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
      className=" flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center  "
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>

      <div className="grid grid-cols-4 gap-5">
        {images?.map((img,i) => (
          <Skill key={i} image={img}/>

        ))}

      </div>
    </motion.div>
  );
}

export default Skills;
