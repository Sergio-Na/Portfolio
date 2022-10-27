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
      className=" flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
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
      />
      <div className="space-y-10 px-0 md:px-10">
        <p className="text-gray-500 text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          explicabo reiciendis in sunt. Maxime dolore sit mollitia adipisci ipsa
          quis eaque! Voluptas aliquam expedita mollitia! Temporibus aliquam
          adipisci commodi minima. Odio, officiis. Quae reprehenderit facere
          quaerat quis possimus at saepe repellendus? Eaque ex totam officia
          officiis quia, odit molestias vitae et corrupti quam, quos ullam
          voluptate, eius ipsum perferendis nisi? Autem asperiores repellendus
          at voluptatibus veniam facilis sapiente cupiditate ea earum est
          delectus sit voluptatem praesentium consectetur explicabo mollitia,
          tempora obcaecati in dolorem vitae! Corrupti, in. Eveniet labore
          excepturi architecto.
        </p>
      </div>
    </motion.div>
  );
}
