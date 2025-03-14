"use client";

import { useLenguage } from "@/app/context/LenguageContext";
import { useNightMode } from "@/app/context/NightModeContext";
import { TitleSection } from "./reusable/titleSection";
import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

import { AiOutlineProject } from "react-icons/ai";
import { FaSmile, FaAward } from "react-icons/fa";

const Counter = ({ from = 0, to, plus }: { from?: number; to: number, plus: boolean }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(from);

    useEffect(() => {
        if (isInView) {
            const interval = setInterval(() => {
                setCount((prev) => (prev < to ? prev + 1 : to));
            }, 30);

            return () => clearInterval(interval);
        }
    }, [isInView, to]);

    return (
        <motion.p ref={ref} className="md:text-5xl text-3xl font-bold">
            {plus ? '+' : ''}{count}
        </motion.p>
    );
};

export const OurResults = () => {
    const { nightMode } = useNightMode();
    const { spanish } = useLenguage();

    return (
        <div
            className={`${nightMode ? "bg-black text-zinc-300" : "text-zinc-700"
                } pb-20 min-h-[50vh]`}
        >
            <TitleSection
                firstTitleEnglish="We Show"
                secondTitleEnglish="Results."
                firstTitleSpanish="Generamos"
                secondTitleSpanish="Resultados."
                subTitleEnglish="Let's find out what we can do."
                subTitleSpanish="Enterate de lo que podemos hacer."
                color="from-yellow-600 to-red-900"
                spanish={spanish}
                nightMode={nightMode}
            />

            <section className="md:w-[80%] w-[95%] mx-auto mt-20">
                <div className={`flex justify-around items-center w-full h-60 ${nightMode ? ' bg-gradient-to-br from-orange-800 to-violet-600' : 'border-zinc-200 bg-zinc-50 shadow-lg'} rounded-xl p-[2px]`}>
                    <div className="flex w-full h-full justify-center items-center gap-10 text-center bg-zinc-900 md:p-10 p-3 rounded-xl">
                        <div className="w-1/3 flex flex-col items-center gap-2">
                            <Counter to={50} plus={false}/>
                            <p className="md:text-lg text-zinc-500 flex md:flex-row flex-col items-center gap-2">
                                <AiOutlineProject />
                                {spanish ? "Proyectos Completados" : "Completed Projects"}
                            </p>
                        </div>
                        <div className="w-1/3 flex flex-col items-center gap-2 border-x md:px-0 px-10 border-zinc-700">
                            <Counter to={10}plus={true}/>
                            <p className="md:text-lg text-zinc-500 flex md:flex-row flex-col items-center gap-2">
                                <FaSmile />
                                {spanish ? "Clientes Satisfechos" : "Happy Clients"}
                            </p>
                        </div>
                        <div className="w-1/3 flex flex-col items-center gap-2 ">
                            <Counter to={5} plus={true}/>
                            <p className="md:text-lg text-zinc-500 flex md:flex-row flex-col items-center gap-2">
                                <FaAward />
                                {spanish ? "Años de Experiencia" : "Years of Experience"}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};