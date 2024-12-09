'use client'


import { useLenguage } from "../context/LenguageContext"
import { useNightMode } from "../context/NightModeContext"
import { Projects } from "./Projects"
import { UITechnologyComponent } from "./UITechnology"


export const OurWork = () => {
    const { nightMode } = useNightMode()
    const { spanish } = useLenguage()

    return (
        <div 
            id="work"
            className={`${nightMode ? 'bg-black text-zinc-300' : ''} min-h-[150vh]`}
        >
            <p className="text-zinc-500 text-center mb-3 text-xl">{spanish ? 'Antes de comenzar debes conocer que hacemos.' : 'Before starting you should know what we do.'}</p>
            <h1 className="text-center text-6xl mx-96 font-semibold">{spanish ? 'Mira Nuestros' : 'Look At Our'} {' '}
                <span className="bg-gradient-to-r from-orange-400 to-orange-800 bg-clip-text text-transparent">
                    {spanish ? 'Mejores Proyectos.' : 'Best Projects.'}
                </span>
            </h1>

            <UITechnologyComponent />

            <Projects />
        </div>
    )
}