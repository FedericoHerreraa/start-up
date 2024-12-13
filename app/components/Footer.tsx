'use client'


import { useLenguage } from "@/app/context/LenguageContext";
import { useNightMode } from "@/app/context/NightModeContext";
import { HiChartBar } from "react-icons/hi2";
import { useMobileView } from "../context/MobileViewContext";


export const Footer = () => {
    const { nightMode } = useNightMode()
    const { spanish } = useLenguage()
    const { isMobile } = useMobileView()

    return (
        <div className={`h-[60vh] ${nightMode ? 'bg-black' : ''} pt-20`}>
            <div className={`${nightMode ? 'bg-zinc-950' : 'bg-zinc-100'} h-full w-full`}>
                <div className="flex gap-3 items-center justify-center pt-20">
                    <HiChartBar size={isMobile ? 45 : 55} className={`${nightMode ? 'text-zinc-500' : 'text-zinc-800'}`}/>
                    <h1 className={`${nightMode ? 'text-zinc-300' : 'text-black'} md:text-5xl text-3xl`}>As You Need</h1>
                </div>
                <p className={`${nightMode ? 'text-zinc-400' : 'text-zinc-600'} md:text-md text-sm text-center mt-5`}>{spanish ? 'Encontraste el Mejor Lugar para Comenzar con tu Negocio.' : 'You Found the Right Place to Start your Own Business'}</p>
            </div>
        </div>
    )
}