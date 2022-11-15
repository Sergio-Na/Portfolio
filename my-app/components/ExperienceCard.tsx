import React from "react";
type Props = {
  Title: string,
  Company: string,
  Company_logo: string,
  Technologies: string[],
  startDate:string,
  endDate: string,
  description: string[]

};
import { motion } from "framer-motion";
function ExperienceCard({Title, Company, Company_logo, Technologies, startDate, endDate, description}: Props) {
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
        src={Company_logo}
      ></motion.img>

      <div className="px-0 md:px-10">
        <h4 className="text-gray-700 text-4xl font-light">
          {Title}
        </h4>
        <p className=" text-gray-500 font-bold text-2xl mt-1">
          {Company}
        </p>
        <div className="flex space-x-2 my-2">
          {Technologies.map((link,i) => (
            <img
            className="h-10 w-auto rounded-full"
            src={link}
          />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-500">
          {startDate} - {endDate}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {description.map((summary_point, i)=> (
            <li>{summary_point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
