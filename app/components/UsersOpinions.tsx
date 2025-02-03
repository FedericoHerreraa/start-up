'use client'


import { useLenguage } from "@/app/context/LenguageContext"
import { useNightMode } from "@/app/context/NightModeContext"

import Autoplay from "embla-carousel-autoplay"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/app/components/ui/carousel"  

export const UsersOpinions = () => {
    const { nightMode } = useNightMode()
    const { spanish } = useLenguage()

    return (
        <div className={`${nightMode ? 'bg-black text-white' : ''} min-h-[60vh]`}>
            <p className="text-zinc-500 text-center mb-3 md:text-xl ">
                {spanish
                    ? "Escucha a los mejores clientes."
                    : "Listen to the best clients."}
            </p>
                
            <h1 className={`${nightMode ? '' : 'text-zinc-700'} text-center md:text-6xl text-4xl md:w-[50%] w-[90%] mx-auto  font-semibold`}>
                {spanish ? "Que dicen" : "What our users"}{" "}
                <span className="bg-gradient-to-r from-orange-400 to-orange-800 bg-clip-text text-transparent">
                    {spanish ? "nuestros clientes." : "are saying."}
                </span>
            </h1>

            <section className="mt-20 w-[80%] mx-auto">
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
                        <CarouselItem>
                            <div className="flex items-center justify-center gap-5">
                                <div className={`${nightMode ? 'bg-zinc-900 text-zinc-300' : 'bg-zinc-100 text-zinc-800'} p-7 rounded-lg`}>
                                    <p className="text-lg font-bold">
                                        {spanish ? 'Pinasco Odontología' : 'Pinasco Dental Clinic'}
                                    </p>
                                    <p>
                                        {spanish 
                                            ? '"AsNeeed transformó la presencia digital de nuestra clínica. Gracias a su equipo, ahora tenemos una página web moderna, rápida y optimizada para dispositivos móviles. Nuestros pacientes pueden agendar citas fácilmente y obtener toda la información que necesitan en segundos. ¡Increíble servicio!"'
                                            : '"AsNeeed transformed our clinic\'s digital presence. Thanks to their team, we now have a modern, fast, and mobile-optimized website. Our patients can easily schedule appointments and get all the information they need in seconds. Incredible service!"'
                                        }
                                    </p>
                                </div>
                                <div className={`${nightMode ? 'bg-zinc-900 text-zinc-300' : 'bg-zinc-100 text-zinc-800'} p-7 rounded-lg`}>
                                    <p className="text-lg font-bold">
                                        {spanish ? 'Buffalo Café' : 'Buffalo Café'}
                                    </p>
                                    <p>
                                        {spanish 
                                            ? '"Desde que implementamos nuestra plataforma web desarrollada por AsNeeed, nuestras reservas han aumentado un 40%. La interfaz es intuitiva, rápida y completamente adaptada a nuestras necesidades. Su equipo siempre estuvo disponible para cualquier ajuste que necesitamos. ¡100% recomendados!"'
                                            : '"Since implementing our web platform developed by AsNeeed, our bookings have increased by 40%. The interface is intuitive, fast, and fully adapted to our needs. Their team was always available for any adjustments we needed. 100% recommended!"'
                                        }
                                    </p>
                                </div>
                            </div>
                        </CarouselItem>

                        <CarouselItem>
                            <div className="flex items-center justify-center gap-5">
                                <div className={`${nightMode ? 'bg-zinc-900 text-zinc-300' : 'bg-zinc-100 text-zinc-800'} p-7 rounded-lg`}>
                                    <p className="text-lg font-bold">
                                        {spanish ? 'Christian Saad Odontología' : 'Christian Saad Dental Clinic'}
                                    </p>
                                    <p>
                                        {spanish 
                                            ? '"Buscábamos un sitio web que reflejara la calidad y profesionalismo de nuestra clínica, y AsNeeed superó nuestras expectativas. Nos entregaron un diseño elegante, funcional y fácil de administrar. Además, el soporte que ofrecen es excelente, siempre dispuestos a ayudar en cualquier momento."'
                                            : '"We were looking for a website that reflected the quality and professionalism of our clinic, and AsNeeed exceeded our expectations. They delivered an elegant, functional, and easy-to-manage design. Moreover, their support is excellent, always ready to help at any time."'
                                        }
                                    </p>
                                </div>
                                <div className={`${nightMode ? 'bg-zinc-900 text-zinc-300' : 'bg-zinc-100 text-zinc-800'} p-7 rounded-lg`}>
                                    <p className="text-lg font-bold">
                                        {spanish ? 'Pizzería Nonnomingo' : 'Nonnomingo Pizzeria'}
                                    </p>
                                    <p>
                                        {spanish 
                                            ? '"Gracias a AsNeeed, ahora tenemos una plataforma donde nuestros clientes pueden hacer pedidos en línea de manera fácil y rápida. La experiencia del usuario es impecable, y la velocidad del sitio ha mejorado significativamente. ¡Una inversión que valió la pena!"'
                                            : '"Thanks to AsNeeed, we now have a platform where our customers can place online orders easily and quickly. The user experience is flawless, and the website speed has improved significantly. A worthwhile investment!"'
                                        }
                                    </p>
                                </div>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className={`${nightMode ? 'bg-black border-zinc-700 text-zinc-200 hover:bg-zinc-900 hover:text-white' : 'bg-zinc-400 border-zinc-200 hover:bg-zinc-600 hover:text-white'}`}/>
                    <CarouselNext className={`${nightMode ? 'bg-black border-zinc-700 text-zinc-200 hover:bg-zinc-900 hover:text-white' : 'bg-zinc-400 border-zinc-200 hover:bg-zinc-600 hover:text-white'}`}/>
                </Carousel>
            </section>
        </div>
    )
}