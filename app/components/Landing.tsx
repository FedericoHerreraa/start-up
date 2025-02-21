'use client'

import Image from "next/image";
import Link from "next/link";

import { HiCursorArrowRays } from "react-icons/hi2";

import imgLanding from "@/app/img/images/pngwing.com-4.png"
import { useNightMode } from '@/app/context/NightModeContext'
import { useLenguage } from '@/app/context/LenguageContext';
import { useMobileView } from "@/app/context/MobileViewContext";
import { FaHandshake } from 'react-icons/fa';


export const LandingInfo = () => {
    const { nightMode } = useNightMode();
    const { spanish } = useLenguage()
    const { isMobile } = useMobileView()

    return (
        <div className={nightMode ? 'text-white bg-black' : ''}>
            <div className="md:pt-32 pt-16 md:h-[75vh] h-[70vh]">
                <div className="w-[80%] mx-auto flex justify-between gap-10">
                    <div className="flex flex-col md:gap-10 gap-16 md:w-1/2 md:items-start items-center">
                        <h1 className={`md:text-6xl text-4xl md:text-left text-center font-semibold ${nightMode ? '' : 'text-zinc-700'}`}>{spanish ? 'Comenzá tu' : 'Start Your Own'} {' '}
                            <span className="bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                                {spanish ? 'Negocio' : 'Digital'} {' '}
                            </span>
                            {spanish ? 'Digital.' : 'Business.'}
                        </h1>
                        <p className={`md:text-xl text-md md:text-left text-center ${nightMode ? 'text-zinc-400' : 'text-zinc-700'} `}>
                            {spanish 
                                ? 'En "AsNeeed", transformamos tus ideas en realidad digital. Diseñamos y desarrollamos aplicaciones móviles, plataformas web y redes sociales, completamente personalizadas para cubrir las necesidades de tu negocio.'
                                : 'At "AsNeeed", we turn your ideas into digital reality. We design and develop mobile applications, web platforms, and social media, fully customized to meet your business needs.'
                            }
                        </p>
                        <div className="flex items-center gap-3">
                            <FaHandshake size={25}/>
                            <p className={`md:text-lg text-md md:text-left text-center ${nightMode ? 'text-zinc-200' : ''} `}>
                                {spanish ? '' : 'Trusted by '}<span className="font-bold">10+</span> {spanish ? 'compañías confian en nosotros' : 'companies'}
                            </p>
                        </div>
                        <Link 
                            href='/start-now'
                            className={`bg-blue-800 text-white md:py-5 py-3 md:px-7 px-5 shadow-2xl rounded-xl w-fit hover:scale-110 hover:bg-blue-700 transform transition duration-300 ease-in-out`}
                        >
                            <div className="flex gap-2 items-center">
                                <p className="md:text-xl font-semibold">{spanish ? 'Comencemos Hoy!' : `Let${`'`}s Start Now!`}</p>
                                <HiCursorArrowRays size={25}/>
                            </div>
                        </Link>
                    </div>
                    {!isMobile && (
                        <div className="w-1/2 flex animate-float">
                            <Image 
                                src={imgLanding} 
                                alt="Landing Image" 
                                width={600} 
                                height={500} 
                                className="rounded-3xl"
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}