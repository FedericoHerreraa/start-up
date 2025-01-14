'use client'


import { useLenguage } from "@/app/context/LenguageContext";
import { useNightMode } from "@/app/context/NightModeContext";
import { useMobileView } from "@/app/context/MobileViewContext";
import argFlag from '@/app/img/argentina.png'
import { FaRegCopyright } from "react-icons/fa";

import Image from "next/image";
import logoDark from "@/app/img/logo-dark.png"
import logoLight from "@/app/img/logo-light.png"

export const Footer = () => {
    const { nightMode } = useNightMode()
    const { spanish } = useLenguage()
    const { isMobile } = useMobileView()

    return (
        <div className={`h-[70vh] ${nightMode ? 'bg-black' : ''} pt-20`}>
            <div className={`${nightMode ? 'bg-zinc-950' : 'bg-zinc-100'} flex flex-col gap-5 items-center h-full w-full`}>
                <div className="flex gap-3 items-center justify-center pt-20">
                    <Image src={nightMode ? logoLight : logoDark} alt="" className="md:w-12 w-10 h-auto rotate-45" />
                    <h1 className={`${nightMode ? 'text-zinc-300' : 'text-black'} md:text-5xl text-3xl`}>AsNeed</h1>
                </div>
                <p className={`${nightMode ? 'text-zinc-400' : 'text-zinc-600'} md:text-base text-sm text-center`}>{spanish ? 'Encontraste el mejor lugar para comenzar con tu negocio.' : 'You found the right place to start your own business'}</p>
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
            </div>
        </div>
    )
}