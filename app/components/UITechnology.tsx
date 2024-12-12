'use client'


import { useNightMode } from "@/app/context/NightModeContext";
import Marquee from "react-fast-marquee";

export const UITechnologyComponent = () => {
    const { nightMode } = useNightMode();

    return (
        <Marquee>
            <div className="flex mt-20">
                {technologies.map((tech, index) => (
                    <div
                        key={index}
                        className={`w-[200px] mx-3 rounded-full text-center px-4 py-2 border duration-100 ${
                            nightMode
                                ? "bg-[rgba(13,28,44,0.6)] border-zinc-700 hover:border-zinc-500"
                                : "bg-zinc-100 border-blue-400 hover:border-blue-700"
                        }`}
                    >
                        <p className={`opacity-100 font-semibold bg-gradient-to-r ${nightMode ? 'from-blue-300 to-blue-800' : 'from-blue-500 to-blue-950'}  bg-clip-text text-transparent`}>{tech}</p>
                    </div>
                ))}
            </div>
        </Marquee>
    );
};

const technologies = [
    "Javascript",
    "Typescript",
    "Tailwindcss",
    "React Js",
    "React Native",
    "Next Js",
    "Node Js",
    "Express Js",
    "Nest Js",
    "SQL",
    "Mongo DB",
    "Swift UI",
    "XCode",
    "Java",
    "Python",
    "Git",
    "GitHub",
    "Vercel",
    "Render",
]