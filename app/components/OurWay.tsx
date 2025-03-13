"use client";

import { useLenguage } from "@/app/context/LenguageContext";
import { useNightMode } from "@/app/context/NightModeContext";
import { TitleSection } from "@/app/components/reusable/titleSection";
import { BsArrowReturnRight } from "react-icons/bs";
import { useEffect, useRef } from "react";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/components/ui/alert-dialog";

export const OurWay = () => {
  const { nightMode } = useNightMode();
  const { spanish } = useLenguage();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      container.scrollBy({ left: e.deltaY, behavior: "smooth" });
    };

    container.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", handleWheel);
    };
  }, []);


  return (
    <div
      className={`${nightMode ? "bg-black" : ""} md:min-h-[60vh] min-h-[50vh]`}
      
    >
      <TitleSection
        firstTitleEnglish="Our Way Of "
        secondTitleEnglish="Working."
        firstTitleSpanish="Nuestra Forma de "
        secondTitleSpanish="Trabajar."
        subTitleEnglish="First of all we will show you our philosophy."
        subTitleSpanish="Primero que nada te mostramos nuestra filosofía."
        color="from-green-500 to-green-800"
        spanish={spanish}
        nightMode={nightMode}
      />

      <div className="flex overflow-x-auto snap-x snap-mandatory w-full scroll-smooth scroll-hidden " ref={containerRef}>
        <section className="snap-center min-w-full px-10 flex flex-col items-center justify-center min-h-[50vh] animate-slide-scroll" >
          <div className="flex items-center gap-5 md:w-[40%] w-[90%] mx-auto">
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
          <div className="flex  gap-10 mt-10 items-center text-white">
            {arrowsInfo.map((arrow, index) => (
              <div
                key={index}
                className="flex gap-5 md:w-[35%] w-[80%] mx-auto"
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
        <section className="snap-center min-w-full px-10 flex flex-col  justify-center min-h-[50vh] animate-slide-scroll">
          <div className="flex items-center gap-5 md:w-[40%] w-[90%] mx-auto">
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
            <div className="flex gap-5 md:w-[35%] w-[80%] mx-auto">
              <BsArrowReturnRight size={22} color="gray" />
              <div className="flex flex-col items-start">
                <h1
                  className={`md:text-xl font-semibold ${
                    nightMode ? "text-zinc-300" : "text-zinc-600"
                  }`}
                >
                  {spanish ? "Servicio Terciarizado." : "Outsourced Service."}
                </h1>

                <AlertDialog>
                  <p className="md:text-lg text-sm text-zinc-500">
                    {spanish ? "Haz clic " : "Click "}
                    <AlertDialogTrigger>
                      <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent md:text-xl cursor-pointer font-semibold">
                        {spanish ? "aquí" : "here"}
                      </span>
                    </AlertDialogTrigger>
                    {spanish
                      ? " para navegar al sitio web indicado para redes sociales."
                      : " to navigate to the designated social media website."}
                  </p>
                  <AlertDialogContent
                    className={`${
                      nightMode
                        ? "bg-zinc-900 border-zinc-700"
                        : "bg-zinc-300 border-zinc-500"
                    } md:w-full w-[80%] rounded-lg`}
                  >
                    <AlertDialogHeader>
                      <AlertDialogTitle
                        className={` ${
                          nightMode ? "text-zinc-200" : "text-zinc-800"
                        }`}
                      >
                        {spanish
                          ? "Proximamente! Estamos trabajando en ello."
                          : "Soon! We are working on it."}
                      </AlertDialogTitle>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel className="w-fit md:mx-0 mx-auto">
                        Ok
                      </AlertDialogCancel>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </div>
            </div>
          </div>
        </section>
      </div>
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
