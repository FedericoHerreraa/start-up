'use client'


import { useLenguage } from "@/app/context/LenguageContext"
import { useNightMode } from "@/app/context/NightModeContext"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/app/components/ui/carousel"

// import argFlag from '@/app/img/others/argentina.png'
  

export const UsersOpinions = () => {
    const { nightMode } = useNightMode()
    const { spanish } = useLenguage()

    return (
        <div className={`${nightMode ? 'bg-black text-white' : ''} min-h-[70vh]`}>
            <p className="text-zinc-500 text-center mb-3 md:text-xl ">
                {spanish
                    ? "Escucha a los mejores clientes."
                    : "Listen to the best clients."}
            </p>
                
            <h1 className={`${nightMode ? '' : 'text-black'} text-center md:text-6xl text-4xl md:w-[50%] w-[90%] mx-auto  font-semibold`}>
                {spanish ? "Que dicen" : "What our users"}{" "}
                <span className="bg-gradient-to-r from-orange-400 to-orange-800 bg-clip-text text-transparent">
                    {spanish ? "nuestros clientes." : "are saying."}
                </span>
            </h1>


            <section className="mt-20">
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>...</CarouselItem>
                        <CarouselItem>...</CarouselItem>
                        <CarouselItem>...</CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </section>
        </div>
    )
}