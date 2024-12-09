'use client'


import { HiCursorArrowRays } from "react-icons/hi2";
import { useNightMode } from '../context/NightModeContext'
import { useLenguage } from '../context/LenguageContext';


export const LandingInfo = () => {
    const { nightMode } = useNightMode();
    const { spanish } = useLenguage()

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className={nightMode ? 'text-white bg-black' : ''}>
            <div className="pt-48 h-screen">
                <div className="w-[80%] mx-auto flex justify-between gap-10">
                    <div className="flex flex-col gap-10 w-1/2">
                        <h1 className="text-6xl font-semibold">{spanish ? 'Comienza Tu' : 'Start Your Own'} {' '}
                            <span className="bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                                {spanish ? 'Negocio' : 'Digital'} {' '}
                            </span>
                        {spanish ? 'Digital.' : 'Business.'}</h1>
                        <p className={`text-xl ${nightMode ? 'text-zinc-400' : 'text-zinc-700'} `}>
                            {spanish 
                                ? 'En As You Need, transformamos tus ideas en realidad digital. Diseñamos y desarrollamos aplicaciones móviles, plataformas web y redes sociales, completamente personalizadas para cubrir las necesidades de tu negocio.'
                                : 'At As You Need, we turn your ideas into digital reality. We design and develop mobile applications, web platforms, and social media, fully customized to meet your business needs.'
                            }
                        </p>
                        <button 
                            className={`bg-blue-800 text-white py-5 px-7 shadow-2xl rounded-xl ${spanish ? 'w-1/2' : 'w-[45%]'}  hover:scale-110 hover:bg-blue-700 transform transition duration-300 ease-in-out`}
                        >
                            <div
                                onClick={() => scrollToSection('start')} 
                                className="flex gap-2 items-center"
                            >
                                <p className="text-xl font-semibold">{spanish ? 'Comencemos Hoy!' : `Let${`'`}s Start Now!`}</p>
                                <HiCursorArrowRays size={25}/>
                            </div>
                        </button>
                    </div>
                    <div className="w-1/2 flex">
                        <div className="bg-zinc-200 rounded-3xl w-full h-full flex items-end animate-pulse shadow-2xl duration-1000">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}