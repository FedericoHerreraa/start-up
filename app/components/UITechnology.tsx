'use client'


import { useNightMode } from "@/app/context/NightModeContext";
import { useLenguage } from "@/app/context/LenguageContext";
import Marquee from "react-fast-marquee";

export const UITechnologyComponent = () => {
    const { spanish } = useLenguage()
    const { nightMode } = useNightMode();

    return (
        <Marquee>
            <div className="flex mt-20">
                {services.map((tech, index) => (
                    <div
                        key={index}
                        className={`w-fit md:mx-3 mx-1 rounded-full text-center md:px-4 px-2 md:py-2 py-1 border duration-100 ${
                            nightMode
                                ? "bg-[rgba(13,28,44,0.6)] border-zinc-700 hover:border-zinc-500"
                                : "bg-zinc-100 border-blue-400 hover:border-blue-700"
                        }`}
                    >
                        <p className={`opacity-100 font-semibold bg-gradient-to-r md:text-sm text-xs ${nightMode ? 'from-blue-300 to-blue-800' : 'from-blue-500 to-blue-950'}  bg-clip-text text-transparent`}>{spanish ? tech.spanish : tech.english}</p>
                    </div>
                ))}
            </div>
        </Marquee>
    );
};

const services = [
    { spanish: "Diseño UX/UI", english: "UX/UI Design" },
    { spanish: "Desarrollo Web", english: "Web Development" },
    { spanish: "Aplicaciones Móviles", english: "Mobile Applications" },
    { spanish: "Sistemas Escalables", english: "Scalable Systems" },
    { spanish: "E-commerce", english: "E-commerce" },
    { spanish: "Optimización SEO", english: "SEO Optimization" },
    { spanish: "Integración API", english: "API Integration" },
    { spanish: "Automatización", english: "Automation" },
    { spanish: "Plataformas SaaS", english: "SaaS Platforms" },
    { spanish: "Soporte Técnico", english: "Technical Support" },
    { spanish: "Cloud Hosting", english: "Cloud Hosting" },
    { spanish: "Soluciones Ágiles", english: "Agile Solutions" },
    { spanish: "Transformación Digital", english: "Digital Transformation" },
    { spanish: "Consultoría IT", english: "IT Consulting" },
];
