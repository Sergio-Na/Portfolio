import React from "react";
import { motion } from "framer-motion";
type Props = {};

function Projects({}: Props) {
  const projects = [1, 2, 3, 4, 5];
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
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>

      <div className="text-black relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-orange-300/90">
        {projects.map((project, i) => (
          <div className=" w-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center p-20 md:p-44h-screen">
            <motion.img
              initial={{
                y: -300,
                opacity: 1,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              className=" "
              src="https://cdn.pocket-lint.com/r/s/970x/assets/images/158959-homepage-news-feature-netflix-games-which-titles-are-available-and-where-and-how-to-find-and-play-them-image1-8q1zkhpaum.jpg"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}
                </span>
                :UPS clone
              </h4>
              <p className="text-lg text-center md:text-left ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente provident quod quam numquam doloremque accusamus rerum
                inventore minus officia adipisci beatae voluptatem distinctio
                voluptate reiciendis nisi, ipsa quos vitae placeat. Deserunt
                debitis fugiat sunt aut adipisci itaque corrupti ex maiores quod
                nisi veniam consectetur amet, incidunt vero impedit dignissimos
                cumque error! Enim natus dicta minima asperiores labore earum.
                Atque, optio.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-gray-400 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}

export default Projects;
