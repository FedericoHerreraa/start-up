"use client";

import { useLenguage } from "@/app/context/LenguageContext";
import { useNightMode } from "@/app/context/NightModeContext";
import { Projects } from "./Projects";
import { UITechnologyComponent } from "./UITechnology";
import { motion } from "framer-motion";

export const OurWork = () => {
  const { nightMode } = useNightMode();
  const { spanish } = useLenguage();

  return (
    <div
      id="work"
      className={`${nightMode ? "bg-black text-zinc-300" : ""} min-h-[150vh]`}
    >
      <motion.div
        initial={{ y: -100, opacity: 1 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-zinc-500 text-center mb-3 md:text-xl ">
          {spanish
            ? "Antes de comenzar debes conocer que hacemos."
            : "Before starting you should know what we do."}
        </p>
        <h1 className="text-center md:text-6xl text-4xl md:w-[50%] w-[90%] mx-auto  font-semibold">
          {spanish ? "Mira Nuestros" : "Look At Our"}{" "}
          <span className="bg-gradient-to-r from-orange-400 to-orange-800 bg-clip-text text-transparent">
            {spanish ? "Mejores Proyectos." : "Best Projects."}
          </span>
        </h1>

        <UITechnologyComponent />

        <Projects />
      </motion.div>
    </div>
  );
};
