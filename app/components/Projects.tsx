'use client'


import { useLenguage } from "@/app/context/LenguageContext"
import { useNightMode } from "@/app/context/NightModeContext"
import pinascoImg from '@/app/img/pinasco-project.png'
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export const Projects = () => {
    const { nightMode } = useNightMode()
    const { spanish } = useLenguage()

    return (
        <div className="flex flex-col md:gap-5 gap-20">
            {info.map((item, index) => (
                <section key={index} className={`mt-32 h-[60vh] ${nightMode ? 'bg-black' : ''}`}>
                    <div className="pl-10">
                        <p className={`md:text-5xl text-2xl md:text-left text-center pb-10 font-semibold bg-gradient-to-r ${item.id == 1 
                            ? 'from-blue-300 to-blue-400'
                            : item.id == 2
                                ? 'from-red-400 to-red-500 md:text-end pr-10'
                                : 'from-red-700 to-red-800'
                        } bg-clip-text text-transparent`}>{spanish ? item.titleSpanish : item.titleEnglish} </p>
                    </div>
                    <div className={`flex ${index%2 === 0 ? 'md:flex-row flex-col' : 'md:flex-row-reverse flex-col' }  gap-5 w-[95%] mx-auto`}>
                        <div className={`md:w-1/2 md:h-96 h-60 ${index%2 === 0 ? 'mr-40' : 'ml-40 text-right'}`}>
                            <p className="mt-10 text-zinc-400">{spanish ? item.descriptionSpanish : item.descriptionEnglish}</p>
                            <h2 className="mt-10 text-lg font-semibold">{spanish ? 'Nuestro desafio:' : 'Our Challenge:'}</h2>
                            <p className="mt-5">{spanish ? item.desafioSpanish : item.desafioEnglish}</p>
                            <div className={`flex ${index%2 === 0 ? 'justify-start' : 'justify-end'} `}>
                                <Link 
                                    href={item.url} 
                                    className="flex items-center gap-2 border border-blue-400 bg-zinc-900 hover:bg-zinc-800 px-7 py-2 rounded-lg mt-14 w-fit"
                                >
                                    <p>Visitar</p>
                                    <ArrowRight size={20}/>
                                </Link>
                            </div>
                        </div>
                        <div className="border-x-2 border-t-2 border-zinc-600 rounded-t-[26px]">
                            <Image
                                src={item.image}
                                alt="foto de pinasco"
                                width={1000}
                                height={600}
                                className="rounded-t-3xl"
                            />
                        </div>
                    </div>
                </section> 
            ))}
        </div>
    )
}

const info = [
    {
        id: 1,
        titleSpanish: 'Consultorio Odontológico.',
        titleEnglish: 'Dental Clinic Website.',
        descriptionSpanish: 'Diseño de una página web para una clínica odontológica. El proyecto incluye un formulario de contacto, una galería de imágenes y una sección de servicios.',
        descriptionEnglish: 'Design of a website for a dental clinic. The project includes a contact form, an image gallery, and a services section.',
        desafioSpanish: 'El desafío principal fue lograr que el diseño transmita confianza y profesionalismo, asegurando que los pacientes se sientan cómodos al navegar por el sitio. Además, se trabajó en destacar los servicios clave de la clínica y proporcionar una experiencia amigable en dispositivos móviles.',
        desafioEnglish: 'The main challenge was to ensure that the design conveys trust and professionalism, while making patients feel comfortable browsing the site. Additionally, the focus was on highlighting the clinic\'s key services and providing a mobile-friendly experience.',
        image: pinascoImg,
        url: 'https://pinasco-three.vercel.app'
    },
    {
        id: 2,
        titleSpanish: 'Tienda de Pizzas.',
        titleEnglish: 'Pizzeria Web Shop.',
        descriptionSpanish: 'Desarrollo de una aplicación web para una pizzería. El proyecto incluye un carrito de compras, un sistema de pagos y una sección de promociones.',
        descriptionEnglish: 'Development of a web application for a pizzeria. The project includes a shopping cart, a payment system, and a promotions section.',
        desafioSpanish: 'El desafío fue integrar un sistema de pedidos intuitivo que permita a los usuarios personalizar sus pizzas de manera sencilla. También se trabajó en garantizar tiempos de respuesta rápidos y una interfaz atractiva para promover las promociones.',
        desafioEnglish: 'The challenge was to integrate an intuitive ordering system that allows users to customize their pizzas easily. Additionally, the focus was on ensuring fast response times and an attractive interface to highlight promotions.',
        image: pinascoImg,
        url: 'https://pinasco-three.vercel.app'
    },
    {
        id: 3,
        titleSpanish: 'Venta de Instrumentos.',
        titleEnglish: 'Musical Instruments Store.',
        descriptionSpanish: 'Diseño de una página web para una comunidad de amantes del café. El proyecto incluye un blog, una tienda en línea y una sección de eventos.',
        descriptionEnglish: 'Design of a website for a community of coffee lovers. The project includes a blog, an online store, and an events section.',
        desafioSpanish: 'El desafío fue desarrollar una plataforma que permita explorar los instrumentos de forma dinámica, con descripciones detalladas, reseñas y contenido multimedia. También se trabajó en crear un proceso de compra fluido que refleje la calidad y el compromiso de la tienda.',
        desafioEnglish: 'The challenge was to develop a platform that allows users to explore instruments dynamically, with detailed descriptions, reviews, and multimedia content. Additionally, the focus was on creating a seamless shopping process that reflects the store\'s quality and commitment.',
        image: pinascoImg,
        url: 'https://pinasco-three.vercel.app'
    }
];