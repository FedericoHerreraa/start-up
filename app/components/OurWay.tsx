"use client";

import { useLenguage } from "@/app/context/LenguageContext";
import { useNightMode } from "@/app/context/NightModeContext";
import { BsArrowReturnRight } from "react-icons/bs";
import { motion } from "framer-motion";

export const OurWay = () => {
  const { nightMode } = useNightMode();
  const { spanish } = useLenguage();

  return (
    <div id="philosophy" className={`${nightMode ? "bg-black" : ""} min-h-[100vh]`}>
      <motion.div
        initial={{ y: -100, opacity: 1 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-zinc-500 text-center mb-3 md:text-xl text-md">
          {spanish
            ? "Primero que nada te mostramos nuestra filosofia."
            : "First of all we will show you our philosophy "}
        </p>
        <h1
          className={`text-center md:text-6xl text-4xl font-semibold ${
            nightMode ? "text-white" : "text-black"
          }`}
        >
          {spanish ? "Nuestra Forma de" : "Our Way Of "}{" "}
          <span className="bg-gradient-to-r from-green-500 to-green-800 bg-clip-text text-transparent">
            {spanish ? "Trabajar." : "Working."}
          </span>
        </h1>

        <div className="mt-20">
          <section>
            <div className="flex items-center gap-5 md:w-[40%] w-[80%] mx-auto">
              <p
                className={`border border-green-700 rounded-full md:px-4 px-3 md:py-2 py-1 ${
                  nightMode ? "text-zinc-300" : "text-zinc-600"
                } md:text-2xl text-xl`}
              >
                1
              </p>
              <h2
                className={`${
                  nightMode ? "text-zinc-300" : "text-zinc-600"
                } md:text-3xl text-xl font-semibold`}
              >
                {spanish
                  ? "Desarrollo Móvil y Web."
                  : "Mobile and Web Development."}
              </h2>
            </div>
            <div className="flex flex-col gap-10 mt-10 items-center text-white">
              {arrowsInfo.map((arrow, index) => (
                <div
                  key={index}
                  className="flex gap-5 md:w-[35%] w-[70%] mx-auto"
                >
                  <BsArrowReturnRight size={30} color="gray" />
                  <div className="flex flex-col items-start ">
                    <h1
                      className={`md:text-xl font-semibold ${
                        nightMode ? "text-zinc-300" : "text-zinc-600"
                      }`}
                    >
                      {spanish ? arrow.titleSpanish : arrow.titleEnglish}
                    </h1>
                    <p className="md:text-lg text-sm text-zinc-500">
                      {spanish ? arrow.spanish : arrow.english}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-20">
            <div className="flex items-center gap-5 md:w-[40%] w-[80%] mx-auto">
              <p
                className={`border border-green-700 rounded-full md:px-4 px-3 md:py-2 py-1 ${
                  nightMode ? "text-zinc-300" : "text-zinc-600"
                } md:text-2xl text-xl`}
              >
                2
              </p>
              <h2
                className={`${
                  nightMode ? "text-zinc-300" : "text-zinc-600"
                } md:text-3xl text-xl font-semibold`}
              >
                {spanish ? "Redes Sociales." : "Social Media."}
              </h2>
            </div>
            <div className="flex flex-col gap-10 mt-10 items-center text-white">
              <div className="flex gap-5 md:w-[35%] w-[70%] mx-auto">
                <BsArrowReturnRight size={22} color="gray" />
                <div className="flex flex-col items-start">
                  <h1
                    className={`md:text-xl font-semibold ${
                      nightMode ? "text-zinc-300" : "text-zinc-600"
                    }`}
                  >
                    {spanish ? "Servicio Terciarizado." : "Outsourced Service."}
                  </h1>
                  <p className="md:text-lg text-sm text-zinc-500">
                    {spanish ? "Haz clic " : "Click "}
                    <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent md:text-xl cursor-pointer font-semibold">
                      {spanish ? "aquí" : "here"}
                    </span>
                    {spanish
                      ? " para navegar al sitio web indicado para redes sociales."
                      : " to navigate to the designated social media website."}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

const arrowsInfo = [
  {
    titleSpanish: "Soluciones innovadoras.",
    titleEnglish: "Innovative Solutions.",
    spanish:
      "Desarrollamos aplicaciones y sitios web modernos, adaptados a tus necesidades y objetivos.",
    english:
      "We develop modern applications and websites tailored to your needs and goals.",
  },
  {
    titleSpanish: "Experiencia de usuario.",
    titleEnglish: "User Experience.",
    spanish:
      "Optimizamos la experiencia de usuario con diseños intuitivos y funcionales, garantizando satisfacción.",
    english:
      "We optimize user experience with intuitive and functional designs, ensuring satisfaction.",
  },
  {
    titleSpanish: "Soporte continuo.",
    titleEnglish: "Continuous Support.",
    spanish:
      "Acompañamos a nuestros clientes con soporte técnico y actualizaciones para mantener sus proyectos al día.",
    english:
      "We provide ongoing technical support and updates to keep projects up-to-date.",
  },
];
