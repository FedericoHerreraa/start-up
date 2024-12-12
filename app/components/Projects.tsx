'use client'


import { useLenguage } from "@/app/context/LenguageContext"
import { useNightMode } from "@/app/context/NightModeContext"

export const Projects = () => {
    const { nightMode } = useNightMode()
    const { spanish } = useLenguage()

    return (
        <div className="flex flex-col md:gap-5 gap-20">
            {info.map((item, index) => (
                <section key={index} className={`mt-32 h-[60vh] ${nightMode ? 'bg-black' : ''}`}>
                    <div className="pl-10">
                        <p className={`text-5xl md:text-left text-center pb-10 font-semibold bg-gradient-to-r ${item.id == 1 
                            ? 'from-blue-300 to-blue-400'
                            : item.id == 2
                                ? 'from-red-400 to-red-500 md:text-end pr-10'
                                : 'from-red-700 to-red-800'
                        } bg-clip-text text-transparent`}>{spanish ? item.titleSpanish : item.titleEnglish} </p>
                    </div>
                    <div className="flex md:flex-row flex-col gap-5 w-[95%] mx-auto">
                        <div className={`md:w-1/2 ${nightMode ? 'bg-zinc-900' : 'bg-zinc-100'} rounded-2xl h-96`}></div>
                        <div className={`md:w-1/2 ${nightMode ? 'bg-zinc-900' : 'bg-zinc-100'} rounded-2xl h-96`}></div>
                    </div>
                </section> 
            ))}
        </div>
    )
}

const info = [
    {
        id: 1,
        titleSpanish: 'Consultorio Odontologíco.',
        titleEnglish: 'Dental Clinic Website.',
        description: 'Diseño de una página web para una clínica odontológica. El proyecto incluye un formulario de contacto, una galería de imágenes y una sección de servicios.',
        image: ''
    },
    {
        id: 2,
        titleSpanish: 'Tienda de Pizzas.',
        titleEnglish: 'Pizzeria Web Shop.',
        description: 'Desarrollo de una aplicación web para una pizzería. El proyecto incluye un carrito de compras, un sistema de pagos y una sección de promociones.',
        image: ''
    },
    {
        id: 3,
        titleSpanish: 'Comunidad de Cafeteria.',
        titleEnglish: 'Coffee Lovers Community.',
        description: 'Diseño de una página web para una comunidad de amantes del café. El proyecto incluye un blog, una tienda en línea y una sección de eventos.',
        image: ''
    }
]