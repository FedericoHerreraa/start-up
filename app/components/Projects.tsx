'use client'


import { useLenguage } from "@/app/context/LenguageContext"
import { useNightMode } from "@/app/context/NightModeContext"
import { useMobileView } from "@/app/context/MobileViewContext"
import desktopPinasco from '@/app/img/desktopPinasco.png'
import desktopNonnomingo from '@/app/img/desktopNonnoMingo.png'
import mobile1Nonnomingo from '@/app/img/mobile1NonnoMingo.jpeg'
import mobile2Nonnomingo from '@/app/img/mobile2NonnoMingo.jpeg'
import mobile1Pinasco from '@/app/img/mobile1Pinasco.png'
import mobile2Pinasco from '@/app/img/mobile2Pinasco.jpeg'
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const Projects = () => {
    const { nightMode } = useNightMode()
    const { spanish } = useLenguage()
    const { isMobile } = useMobileView()

    return (
        <div className="flex flex-col md:gap-20 gap-20 pb-40">
            {info.map((item, index) => (
                <section key={index} className={`md:mx-10 mt-32 md:min-h-[60vh] min-h-[100vh] ${index%2 === 0 ? `md:border-l-4 ${nightMode ? 'border-l-blue-950' : 'border-l-blue-800' }` : `md:border-r-4 ${nightMode ? 'border-r-blue-950' : 'border-r-blue-800' } `}  ${nightMode ? 'bg-black' : ''}`}>
                    <div className="md:pl-10">
                        <h1 className={`md:text-5xl text-3xl md:text-left text-center pb-10 font-semibold bg-gradient-to-r ${nightMode ? 'text-zinc-300' : 'text-zinc-800'} ${index%2 === 0 
                            ? ''
                            : 'md:text-end md:mr-10'
                        } bg-clip-text text-transparent`}>{spanish ? item.titleSpanish : item.titleEnglish} </h1>
                    </div>
                    {index === 2 ? (
                        <div className="flex justify-center h-[60vh] items-center">   
                            <h1 className="md:text-5xl text-2xl animate-pulse">{spanish ? 'Proximamente!' : 'Coming Soon!'}</h1>
                        </div>
                    ) : (
                        <div className={`flex ${index%2 === 0 ? 'md:flex-row flex-col' : 'md:flex-row-reverse flex-col' } gap-10 md:w-[95%] w-[90%] mx-auto`}>
                            <div className={`md:w-1/2 w-full md:h-96 h-[480px] md:${index%2 === 0 ? 'mr-40' : 'ml-40 md:text-right'}`}>
                                <p className={`mt-10  ${nightMode ? 'text-zinc-400' : 'text-zinc-600'}`}>{spanish ? item.descriptionSpanish : item.descriptionEnglish}</p>
                                <h2 className="mt-10 text-lg font-semibold">{spanish ? 'Nuestro desafío:' : 'Our Challenge:'}</h2>
                                <p className="mt-5">{spanish ? item.desafioSpanish : item.desafioEnglish}</p>
                                <div className={`flex ${index%2 === 0 ? 'justify-start' : 'md:justify-end'} `}>
                                    <Link 
                                        href={item.url} 
                                        target="_blank"
                                        className="flex items-center gap-2 bg-blue-800 hover:bg-blue-700 md:hover:scale-110 transition-all duration-150 md:px-10 px-7 md:py-3 py-2 rounded-lg mt-14 w-fit"
                                    >
                                        <p className={`${nightMode ? '' : 'text-zinc-200'}`}>{spanish ? 'Visitar' : 'Navigate'}</p>
                                        <ArrowRight size={20} className={`${nightMode ? '' : 'text-zinc-200'}`}/>
                                    </Link>
                                </div>
                            </div>
                            {!isMobile ? (
                                <div className={`md:border-2 border ${nightMode ? 'border-zinc-400' : 'border-zinc-300' } rounded-3xl shadow-xl`}>
                                    <Image
                                        src={item.desktop}
                                        alt="vista computadora"
                                        width={800}
                                        height={600}
                                        className="md:rounded-[22px] rounded-[25px] md:border-[10px] border-[6px] border-black"
                                    />
                                </div>
                            ) : (
                                <div className="flex items-center md:gap-20 gap-10">
                                    <div className={`md:border-2 border ${nightMode ? 'border-zinc-400' : 'border-zinc-300' } md:rounded-3xl rounded-2xl shadow-xl`}>
                                        <Image
                                            src={item.mobile1}
                                            alt="foto de movil 1"
                                            width={300}
                                            height={600}
                                            className="md:rounded-[22px] rounded-[15px] md:border-[10px] border-[4px] border-black"
                                        />
                                    </div>
                                    <div className={`md:border-2 border ${nightMode ? 'border-zinc-400' : 'border-zinc-300' } md:rounded-3xl rounded-2xl shadow-xl`}>
                                        <Image
                                            src={item.mobile2}
                                            alt="foto de movile 2"
                                            width={300}
                                            height={600}
                                            className="md:rounded-[22px] rounded-[15px] md:border-[10px] border-[4px] border-black"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </section> 
            ))}
        </div>
    )
}

const info = [
    {
        id: 1,
        titleSpanish: 'Consultorio Odontológico',
        titleEnglish: 'Dental Clinic Website',
        descriptionSpanish: 'Diseño de una página web para una clínica odontológica. El proyecto incluye un formulario de contacto, una galería de imágenes y una sección de servicios.',
        descriptionEnglish: 'Design of a website for a dental clinic. The project includes a contact form, an image gallery, and a services section.',
        desafioSpanish: 'El desafío principal fue lograr que el diseño transmita confianza y profesionalismo, asegurando que los pacientes se sientan cómodos al navegar por el sitio. Además, se trabajó en destacar los servicios clave de la clínica y proporcionar una experiencia amigable en dispositivos móviles.',
        desafioEnglish: 'The main challenge was to ensure that the design conveys trust and professionalism, while making patients feel comfortable browsing the site. Additionally, the focus was on highlighting the clinic\'s key services and providing a mobile-friendly experience.',
        desktop: desktopPinasco,
        mobile1: mobile1Pinasco,
        mobile2: mobile2Pinasco,
        url: 'https://www.odontologiapinasco.com'
    },
    {
        id: 2,
        titleSpanish: 'E-commerce de Pizzería',
        titleEnglish: 'Pizzeria E-commerce',
        descriptionSpanish: 'Desarrollo de una aplicación web de comercio electrónico para una pizzería. El proyecto incluye productos organizados por secciones, un carrito de compras interactivo, y un formulario de confirmación que permite enviar el pedido directamente por WhatsApp.',
        descriptionEnglish: 'Development of an e-commerce web application for a pizzeria. The project includes products organized by sections, an interactive shopping cart, and a confirmation form that allows users to send their order directly via WhatsApp.',
        desafioSpanish: 'El desafío fue implementar una experiencia de compra sencilla e intuitiva, asegurando que los usuarios pudieran navegar por las secciones, agregar productos al carrito y enviar sus pedidos con facilidad. También se trabajó en integrar WhatsApp para simplificar el proceso de confirmación.',
        desafioEnglish: 'The challenge was to implement a simple and intuitive shopping experience, ensuring that users could navigate through sections, add products to the cart, and easily send their orders. Integration with WhatsApp was also a key focus to streamline the confirmation process.',
        desktop: desktopNonnomingo,
        mobile1: mobile1Nonnomingo,
        mobile2: mobile2Nonnomingo,
        url: 'https://www.nonnomingo.com.ar'
    }
];