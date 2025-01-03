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
        <div className={`py-60 ${nightMode ? 'bg-black' : ''} text-zinc-300 min-h-[60vh]`}>
            <p className="text-zinc-500 text-center mb-3 md:text-xl ">
                {spanish
                    ? "Nuestros Partners."
                    : "Our Partners."}
            </p>
            <h1 className={`${nightMode ? '' : 'text-black'} text-center md:text-6xl text-4xl md:w-[50%] w-[90%] mx-auto  font-semibold`}>
                {spanish ? "Apoyados por las" : "Trusted by the"}{" "}
                <span className="bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                    {spanish ? "Mejores Clientes." : "Best Clients."}
                </span>
            </h1>

            <section className={`w-full ${nightMode ? 'bg-zinc-950' : 'bg-zinc-100'} mt-20 h-40 flex items-center justify-center gap-10`}>
                <Image
                    src={nightMode ? christianSaadDark : christianSaadLight}
                    alt="Christian Saad"
                    width={160}
                    height={160}
                />
                <Image
                    src={pinasco}
                    alt="Pinasco"
                    width={160}
                    height={160}
                />
                <Image
                    src={buffalo}
                    alt="buffalo"
                    width={80}
                    height={80}
                />
            </section>
        </div>
    )   
}