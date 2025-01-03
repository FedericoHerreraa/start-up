'use client'

import { useLenguage } from "@/app/context/LenguageContext"
import { useNightMode } from "@/app/context/NightModeContext"

import christianSaadDark from '@/app/img/ChristianSaad-dark.png'
import christianSaadLight from '@/app/img/ChristianSaad-light.png'
import pinasco from '@/app/img/LogoHorizontal@2x.png'
import buffalo from '@/app/img/buffalo.png'
import Image from "next/image"

export const TrustedByCompanies = () => {
    const { nightMode } = useNightMode()
    const { spanish } = useLenguage()
    
    return (
        <div className={`py-24 ${nightMode ? 'bg-black' : ''} text-zinc-300 min-h-[60vh]`}>
            <p className="text-zinc-500 text-center mb-3 md:text-xl ">
                {spanish
                    ? "Nuestros Clients."
                    : "Our Partners."}
            </p>
            <h1 className={`${nightMode ? '' : 'text-black'} text-center md:text-6xl text-4xl md:w-[50%] w-[90%] mx-auto  font-semibold`}>
                {spanish ? "Acompañado por los" : "Trusted by the"}{" "}
                <span className="bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                    {spanish ? "Mejores Clientes." : "Best Clients."}
                </span>
            </h1>

            <section className={`w-full ${nightMode ? 'bg-zinc-950' : 'bg-zinc-100'} mt-20 min-h-40 flex items-center justify-center gap-10 flex-wrap`}>
                <Image
                    src={nightMode ? christianSaadDark : christianSaadLight}
                    alt="Christian Saad"
                    className="md:w-[160px] md:h-[70px] w-[100px] h-[40px]"
                />
                <Image
                    src={pinasco}
                    alt="Pinasco"
                    className="md:w-[160px] md:h-[40px] w-[100px] h-[25px]"
                />
                <Image
                    src={buffalo}
                    alt="buffalo"
                    className="md:w-[100px] md:h-[105px] w-[70px] h-[70px]"
                />
            </section>
        </div>
    )   
}