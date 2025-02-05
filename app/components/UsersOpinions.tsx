'use client'


import { useLenguage } from "@/app/context/LenguageContext"
import { useNightMode } from "@/app/context/NightModeContext"
import { TitleSection } from "@/app/components/reusable/titleSection"

import Autoplay from "embla-carousel-autoplay"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/app/components/ui/carousel"  

import { FaRocket } from "react-icons/fa";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

export const UsersOpinions = () => {
    const { nightMode } = useNightMode()
    const { spanish } = useLenguage()

    return (
        <div className={`${nightMode ? 'bg-black text-white' : ''} min-h-[60vh]`}>
            <TitleSection
                firstTitleEnglish="What our users"
                secondTitleEnglish="are saying."
                firstTitleSpanish="Que dicen"
                secondTitleSpanish="nuestros clientes."
                subTitleEnglish="Listen to the best clients."
                subTitleSpanish="Escucha a los mejores clientes."
                color="from-orange-400 to-orange-800"
                spanish={spanish}
                nightMode={nightMode}
            />

            <section className="mt-20 md:w-[80%] w-[70%] mx-auto">
                <Carousel 
                    opts={{
                        loop: true
                    }}
                    plugins={[
                        Autoplay({
                          delay: 3500,
                        }),
                    ]}
                >
                    <CarouselContent>
                        {Array.from({ length: Math.ceil(testimonials.length / 2) }, (_, index) => {
                            const items = testimonials.slice(index * 2, index * 2 + 2);
                            return (
                                <CarouselItem key={index}>
                                    <div className="flex md:flex-row flex-col items-center justify-center gap-5">
                                        {items.map((testimonial) => (
                                            <div
                                                key={testimonial.id}
                                                className={`${nightMode ? 'bg-zinc-900 text-zinc-300' : 'bg-zinc-100 text-zinc-800'} md:p-7 p-4 rounded-lg`}
                                            >
                                                <p className="text-lg font-bold flex items-center gap-3">
                                                    <FaRocket size={18} className="ml-1" />
                                                    {spanish ? testimonial.name.es : testimonial.name.en}
                                                </p>
                                                <p className="mt-2">
                                                    <RiDoubleQuotesL size={18} className="inline mr-1" />
                                                    {spanish ? testimonial.review.es : testimonial.review.en}
                                                    <RiDoubleQuotesR size={18} className="inline ml-1" />
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>
                    <CarouselPrevious className={`${nightMode ? 'bg-black border-zinc-700 text-zinc-200 hover:bg-zinc-900 hover:text-white' : 'bg-zinc-400 border-zinc-200 hover:bg-zinc-600 hover:text-white'}`}/>
                    <CarouselNext className={`${nightMode ? 'bg-black border-zinc-700 text-zinc-200 hover:bg-zinc-900 hover:text-white' : 'bg-zinc-400 border-zinc-200 hover:bg-zinc-600 hover:text-white'}`}/>
                </Carousel>
            </section>
        </div>
    )
}

const testimonials = [
    {
        id: 1,
        name: { es: "Pinasco Odontología", en: "Pinasco Dental Clinic" },
        review: {
            es: "AsNeeed transformó la presencia digital de nuestra clínica. Gracias a su equipo, ahora tenemos una página web moderna, rápida y optimizada para dispositivos móviles. Nuestros pacientes pueden agendar citas fácilmente y obtener toda la información que necesitan en segundos. ¡Increíble servicio!",
            en: "AsNeeed transformed our clinic's digital presence. Thanks to their team, we now have a modern, fast, and mobile-optimized website. Our patients can easily schedule appointments and get all the information they need in seconds. Incredible service!"
        }
    },
    {
        id: 2,
        name: { es: "Buffalo Café", en: "Buffalo Café" },
        review: {
            es: "Desde que implementamos nuestra plataforma web desarrollada por AsNeeed, nuestras reservas han aumentado un 40%. La interfaz es intuitiva, rápida y completamente adaptada a nuestras necesidades. Su equipo siempre estuvo disponible para cualquier ajuste que necesitamos. ¡100% recomendados!",
            en: "Since implementing our web platform developed by AsNeeed, our bookings have increased by 40%. The interface is intuitive, fast, and fully adapted to our needs. Their team was always available for any adjustments we needed. 100% recommended!"
        }
    },
    {
        id: 3,
        name: { es: "Christian Saad Odontología", en: "Christian Saad Dental Clinic" },
        review: {
            es: "Buscábamos un sitio web que reflejara la calidad y profesionalismo de nuestra clínica, y AsNeeed superó nuestras expectativas. Nos entregaron un diseño elegante, funcional y fácil de administrar. Además, el soporte que ofrecen es excelente, siempre dispuestos a ayudar en cualquier momento.",
            en: "We were looking for a website that reflected the quality and professionalism of our clinic, and AsNeeed exceeded our expectations. They delivered an elegant, functional, and easy-to-manage design. Moreover, their support is excellent, always ready to help at any time."
        }
    },
    {
        id: 4,
        name: { es: "Pizzería Nonnomingo", en: "Nonnomingo Pizzeria" },
        review: {
            es: "Gracias a AsNeeed, ahora tenemos una plataforma donde nuestros clientes pueden hacer pedidos en línea de manera fácil y rápida. La experiencia del usuario es impecable, y la velocidad del sitio ha mejorado significativamente. ¡Una inversión que valió la pena!",
            en: "Thanks to AsNeeed, we now have a platform where our customers can place online orders easily and quickly. The user experience is flawless, and the website speed has improved significantly. A worthwhile investment!"
        }
    }
];