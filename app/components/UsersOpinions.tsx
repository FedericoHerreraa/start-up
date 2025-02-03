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
                            <div className="flex items-center gap-5">
                                <div className="bg-zinc-900 p-7 rounded-lg">
                                    <p className="text-lg text-zinc-300">- John Doe</p>
                                    <p className="text-lg text-zinc-300">"The best service I have ever tried, I will definitely continue to use it."</p>
                                </div>
                                <div className="bg-zinc-900 p-7 rounded-lg">
                                    <p className="text-lg text-zinc-300">- John Doe</p>
                                    <p className="text-lg text-zinc-300">"The best service I have ever tried, I will definitely continue to use it."</p>
                                </div>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="flex items-center gap-5">
                                <div className="bg-zinc-900 p-7 rounded-lg">
                                    <p className="text-lg text-zinc-300">- John Doe</p>
                                    <p className="text-lg text-zinc-300">"The best service I have ever tried, I will definitely continue to use it."</p>
                                </div>
                                <div className="bg-zinc-900 p-7 rounded-lg">
                                    <p className="text-lg text-zinc-300">- John Doe</p>
                                    <p className="text-lg text-zinc-300">"The best service I have ever tried, I will definitely continue to use it."</p>
                                </div>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="bg-black border-zinc-700 text-zinc-200 hover:bg-zinc-900 hover:text-white"/>
                    <CarouselNext className="bg-black border-zinc-700 text-zinc-200 hover:bg-zinc-900 hover:text-white"/>
                </Carousel>
            </section>
        </div>
    )
}