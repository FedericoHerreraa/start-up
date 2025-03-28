'use client'


import { useLenguage } from "@/app/context/LenguageContext";
import { useNightMode } from "@/app/context/NightModeContext";
import { useMobileView } from "@/app/context/MobileViewContext";
import argFlag from '@/app/img/others/argentina.png'

import { FaRegCopyright } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { SiInstagram } from "react-icons/si";

import Image from "next/image";

import logoDark from '@/app/img/logos/newDarkLogo.png'
import logoLight from '@/app/img/logos/newLightLogo.png'

export const Footer = () => {
    const { nightMode } = useNightMode()
    const { spanish } = useLenguage()
    const { isMobile } = useMobileView()

    return (
        <footer className={`h-[70vh] ${nightMode ? 'bg-black' : ''} pt-20`}>
            <div className={`${nightMode ? 'bg-zinc-950' : 'bg-zinc-100'} flex flex-col gap-5 items-center h-full w-full`}>
                <div className="flex gap-1 items-center justify-center pt-20">
                    <Image src={nightMode ? logoDark : logoLight} alt="" className="md:w-[85px] w-16 h-auto" />
                    <h1 className={`${nightMode ? 'text-zinc-300' : 'text-black'} md:text-4xl text-2xl`}>AsNeed</h1>
                </div>
                <p className={`${nightMode ? 'text-zinc-400' : 'text-zinc-600'} md:text-lg text-base text-center`}>{spanish ? 'Transformamos tus ideas en realidad digital.' : 'We turn your ideas into digital reality.'}</p>
                <div className={`flex items-center gap-3 md:text-base text-sm ${nightMode ? 'text-zinc-400' : 'text-zinc-600'} mt-5`}>
                    <FaRegCopyright />
                    <p>2025 AsNeed - {spanish ? 'Todos los derechos reservados' : 'All rights reserved'}</p>
                </div>
                <div className="flex justify-center items-center gap-3 md:text-base text-sm">
                    <Image
                        src={argFlag}
                        alt="Argentina Flag"
                        width={isMobile ? 15 : 25}
                    />
                    <p className={`${nightMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{spanish ? 'Hecho en ' : 'Made in '}Buenos Aires, Argentina</p>
                </div>
                <div>
                    <div className="flex gap-5 mt-5">
                        <a href="https://www.linkedin.com/company/asneed/?viewAsMember=true" target="_blank">
                            <SiLinkedin size={isMobile ? 20 : 30} className={`text-zinc-500 ${nightMode ? 'hover:text-zinc-300' : 'hover:text-zinc-700'} transition-all duration-150`} />
                        </a>
                        <a href="https://www.instagram.com/asneeed/?next=%2F" target="_blank">
                            <SiInstagram size={isMobile ? 20 : 30} className={`text-zinc-500 ${nightMode ? 'hover:text-zinc-300' : 'hover:text-zinc-700'} transition-all duration-150`}/>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}