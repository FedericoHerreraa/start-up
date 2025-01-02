'use client'

import { useLenguage } from "@/app/context/LenguageContext"
// import { useNightMode } from "@/app/context/NightModeContext"


export const TrustedByCompanies = () => {
    // const { nightMode } = useNightMode()
    const { spanish } = useLenguage()
    
    return (
        <div className="py-40 bg-black text-zinc-300 h-[60vh]">
            <p className="text-zinc-500 text-center mb-3 md:text-xl ">
                {spanish
                    ? "Nuestros Partners."
                    : "Our Partners."}
            </p>
            <h1 className="text-center md:text-6xl text-4xl md:w-[50%] w-[90%] mx-auto  font-semibold">
                {spanish ? "Apoyados por las" : "Trusted by the"}{" "}
                <span className="bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                    {spanish ? "Mejores Companias." : "Best Companies."}
                </span>
            </h1>

            <section>
                
            </section>
        </div>
    )   
}