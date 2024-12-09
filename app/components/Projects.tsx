'use client'


import { useLenguage } from "../context/LenguageContext"
import { useNightMode } from "../context/NightModeContext"

export const Projects = () => {
    const { nightMode } = useNightMode()
    const { spanish } = useLenguage()

    return (
        <div className="flex flex-col gap-5">
            <section className={`mt-32 h-[60vh] ${nightMode ? 'bg-black' : ''}`}>
                <div className="pl-10">
                    <p className="text-5xl pb-10 font-semibold bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent">{spanish ? 'Página Web de Odontología.' : 'Dental website.'} </p>
                </div>
                <div className="flex gap-5 w-[95%] mx-auto">
                    <div className={`w-1/2 ${nightMode ? 'bg-zinc-900' : 'bg-zinc-100'} rounded-2xl h-96`}></div>
                    <div className={`w-1/2 ${nightMode ? 'bg-zinc-900' : 'bg-zinc-100'} rounded-2xl h-96`}></div>
                </div>
            </section> 
            <section className={`mt-32 h-[60vh] ${nightMode ? 'bg-black' : ''}`}>
                <div className="p-10">
                    <p className="text-5xl font-semibold text-end bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">{spanish ? 'Aplicación Web para Pizzería.' : 'Web application for a Pizzeria.'}</p>
                </div>
                <div className="flex gap-5 w-[95%] mx-auto">
                    <div className={`w-1/2 ${nightMode ? 'bg-zinc-900' : 'bg-zinc-100'} rounded-2xl h-96`}></div>
                    <div className={`w-1/2 ${nightMode ? 'bg-zinc-900' : 'bg-zinc-100'} rounded-2xl h-96`}></div>
                </div>
            </section> 
            <section className={`mt-32 h-[60vh] ${nightMode ? 'bg-black' : ''}`}>
                <div className="p-10">
                    <div className={`text-5xl font-semibold bg-gradient-to-r ${nightMode ? 'from-red-800 to-red-950' : 'from-red-700 to-red-800'} bg-clip-text text-transparent`}>{spanish ? 'Web para Comunidad de Cafeteria.' : 'Website for a coffee shop community'}</div>
                </div>
                <div className="flex gap-5 w-[95%] mx-auto">
                    <div className={`w-1/2 ${nightMode ? 'bg-zinc-900' : 'bg-zinc-100'} rounded-2xl h-96`}></div>
                    <div className={`w-1/2 ${nightMode ? 'bg-zinc-900' : 'bg-zinc-100'} rounded-2xl h-96`}></div>
                </div>
            </section> 
        </div>
    )
}