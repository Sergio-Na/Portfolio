import React from "react";
type Props = {};
import { motion } from "framer-motion";
function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#99a2b3] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden ">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="w-50 h-32 rounded-full xl:-[200px] xl:h-[200px] object-cover object-center"
        src="https://media-exp1.licdn.com/dms/image/C4D0BAQEFVK_tm1MayA/company-logo_200_200/0/1633709058418?e=2147483647&v=beta&t=djcdtmhbDJ3kzay8m2-mwmz3tmLV6KbPuOap6UvdQRM"
      ></motion.img>

      <div className="px-0 md:px-10">
        <h4 className="text-gray-700 text-4xl font-light">
          Software Developer Intern
        </h4>
        <p className=" text-gray-500 font-bold text-2xl mt-1">
          SpaceBridge Inc.
        </p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="https://cdn.iconscout.com/icon/free/png-256/javascript-2038874-1720087.png"
          />
        </div>
        <p className="uppercase py-5 text-gray-500">
          Started work... - Ended...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
