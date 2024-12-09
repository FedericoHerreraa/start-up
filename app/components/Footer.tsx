'use client'


import { useLenguage } from "../context/LenguageContext";
import { useNightMode } from "../context/NightModeContext";
import { HiChartBar } from "react-icons/hi2";


export const Footer = () => {
    const { nightMode } = useNightMode()
    const { spanish } = useLenguage()

    return (
        <div className={`h-[70vh] ${nightMode ? 'bg-black' : ''} pt-20`}>
            <div className={`${nightMode ? 'bg-zinc-950' : 'bg-zinc-100'} h-full w-full`}>
                <div className="flex gap-3 items-center justify-center pt-10">
                    <HiChartBar size={50} className={`${nightMode ? 'text-zinc-500' : 'text-zinc-800'}`}/>
                    <h1 className={`${nightMode ? 'text-zinc-300' : 'text-black'} text-4xl`}>As You Need</h1>
                </div>
                <p className={`${nightMode ? 'text-zinc-400' : 'text-zinc-600'} text-center mt-5`}>{spanish ? 'Encontraste el Mejor Lugar para Comenzar con tu Negocio.' : 'You Found the Right Place to Start your Own Business'}</p>
            </div>
        </div>
    )
}