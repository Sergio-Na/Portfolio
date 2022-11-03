import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.3,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <SocialIcon
          url="https://github.com/Sergio-Na"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          className="cursor-pointer"
          url="https://www.linkedin.com/in/sergio-najm/"
          fgColor="gray"
          bgColor="transparent"
        />
        <Link href="#contact">
          <SocialIcon network="email" fgColor="gray" bgColor="transparent" />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-600">
            Get in Touch
          </p>
        </Link>
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.3,
        }}
        className="felx flex-row items-center -text-gray-300 cursor-pointer"
      >
        <button
          type="button"
          className="text-gray-200 bg-gradient-to-r from-gray-400 via-gray-500 to-gray-600 hover:bg-gradient-to-br shadow-lg shadow-[#FF731D]/50 dark:shadow-lg dark:shadow-orange-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Resume
        </button>
      </motion.div>
    </header>
  );
}
