'use client'

import Image from "next/image";
import imgLanding from "@/app/img/pngwing.com-3.png"

import { HiCursorArrowRays } from "react-icons/hi2";

import { useNightMode } from '@/app/context/NightModeContext'
import { useLenguage } from '@/app/context/LenguageContext';
import { useMobileView } from "@/app/context/MobileViewContext";


export const LandingInfo = () => {
    const { nightMode } = useNightMode();
    const { spanish } = useLenguage()
    const { isMobile } = useMobileView()

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={nightMode ? 'text-white bg-black' : ''}>
            <div className="md:pt-48 pt-32 md:h-screen h-[70vh]">
                <div className="w-[80%] mx-auto flex justify-between gap-10">
                    <div className="flex flex-col md:gap-10 gap-16 md:w-1/2 md:items-start items-center">
                        <h1 className="md:text-6xl text-4xl md:text-left text-center font-semibold">{spanish ? 'Comienza Tu' : 'Start Your Own'} {' '}
                            <span className="bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                                {spanish ? 'Negocio' : 'Digital'} {' '}
                            </span>
                            {spanish ? 'Digital.' : 'Business.'}
                        </h1>
                        <p className={`md:text-xl text-md md:text-left text-center ${nightMode ? 'text-zinc-400' : 'text-zinc-700'} `}>
                            {spanish 
                                ? 'En As You Need, transformamos tus ideas en realidad digital. Diseñamos y desarrollamos aplicaciones móviles, plataformas web y redes sociales, completamente personalizadas para cubrir las necesidades de tu negocio.'
                                : 'At As You Need, we turn your ideas into digital reality. We design and develop mobile applications, web platforms, and social media, fully customized to meet your business needs.'
                            }
                        </p>
                        <button 
                            onClick={() => scrollToSection('start')} 
                            className={`bg-blue-800 text-white md:py-5 py-3 md:px-7 px-5 shadow-2xl rounded-xl ${spanish ? 'md:w-1/2 w-[75%]' : 'md:w-[45%] w-[75%]'}  hover:scale-110 hover:bg-blue-700 transform transition duration-300 ease-in-out`}
                        >
                            <div className="flex gap-2 items-center">
                                <p className="md:text-xl font-semibold">{spanish ? 'Comencemos Hoy!' : `Let${`'`}s Start Now!`}</p>
                                <HiCursorArrowRays size={25}/>
                            </div>
                        </button>
                    </div>
                    {!isMobile && (
                        <div className="w-1/2 flex">
                            <Image 
                                src={imgLanding} 
                                alt="Landing Image" 
                                width={400} 
                                height={400} 
                                className="rounded-3xl"
                            />

                            {/* <div className="bg-zinc-200 rounded-3xl w-full h-full flex items-end animate-pulse shadow-2xl duration-1000">
                            </div> */}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}