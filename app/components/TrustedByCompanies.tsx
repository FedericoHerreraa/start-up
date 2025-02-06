'use client'

import { useLenguage } from "@/app/context/LenguageContext"
import { useNightMode } from "@/app/context/NightModeContext"
import { TitleSection } from "@/app/components/reusable/titleSection"

import christianSaadDark from '@/app/img/logos/ChristianSaad-dark.png'
import christianSaadLight from '@/app/img/logos/ChristianSaad-light.png'
import pinasco from '@/app/img/logos/LogoHorizontal@2x.png'
import buffalo from '@/app/img/logos/buffalo.png'
import buffaloMusic from '@/app/img/logos/buffaloMusic.png'
import Image from "next/image"
import Marquee from "react-fast-marquee"

export const TrustedByCompanies = () => {
    const { nightMode } = useNightMode()
    const { spanish } = useLenguage()
    
    return (
        <div className={`py-10 ${nightMode ? 'bg-black' : ''} text-white md:min-h-[60vh] min-h-[45vh]`}>
            <TitleSection
                firstTitleEnglish="Trusted by the"
                secondTitleEnglish="Best Clients."
                firstTitleSpanish="Acompañados por los"
                secondTitleSpanish="Mejores Clientes."
                subTitleEnglish="Our Partners."
                subTitleSpanish="Nuestros Clientes."
                color="from-blue-700 to-blue-900"
                spanish={spanish}
                nightMode={nightMode}
            />

            <section className={`w-full ${nightMode ? 'bg-[#101011]' : 'bg-zinc-100'} mt-20 md:min-h-40 min-h-32 flex items-center justify-center gap-20 flex-wrap`}>
                <Marquee speed={50}>
                    {companies.map((company, index) => (
                        <Image
                            key={index}
                            src={company.img2 ? nightMode ? company.img1 : company.img2 : company.img1}
                            alt={company.name}
                            className={company.className}
                        />
                    ))}                
                </Marquee>
            </section>
        </div>
    )   
}


const companies = [
    {
        name: 'Christian Saad',
        img1: christianSaadDark,
        img2: christianSaadLight,
        className: 'md:w-[160px] md:h-[70px] w-[100px] h-[40px] md:mx-20 mx-7'
    },
    {
        name: 'Pinasco',
        img1: pinasco,
        className: 'md:w-[160px] md:h-[40px] w-[100px] h-[25px] md:mx-20 mx-7'
    },
    {
        name: 'Buffalo',
        img1: buffalo,
        className: 'md:w-[100px] md:h-[105px] w-[70px] h-[70px] md:mx-20 mx-7'
    },
    {
        name: 'Pinasco',
        img1: pinasco,
        className: 'md:w-[160px] md:h-[40px] w-[100px] h-[25px] md:mx-20 mx-7'
    },
    {
        name: 'Buffalo Music',
        img1: buffaloMusic,
        className: 'md:w-[200px] md:h-[110px] w-[130px] h-[70px] md:mx-20 mx-7'
    },
]