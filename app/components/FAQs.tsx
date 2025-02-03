'use client'

import { useLenguage } from "@/app/context/LenguageContext"
import { useNightMode } from "@/app/context/NightModeContext"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/app/components/ui/accordion"
  

export const FAQs = () => {
    const { nightMode } = useNightMode()
    const { spanish } = useLenguage()

    return (
        <div className={`${nightMode ? 'bg-black text-zinc-300' : 'text-zinc-700'} pb-20`}>
            <p className="text-zinc-500 text-center mb-3 md:text-xl ">
                {spanish
                    ? "FAQs."
                    : "FAQs."}
            </p>
                
            <h1 className={`${nightMode ? '' : 'text-zinc-700'} text-center md:text-6xl text-4xl md:w-[50%] w-[90%] mx-auto  font-semibold`}>
                {spanish ? "Preguntas" : "Frequently Ask"}{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    {spanish ? "Frecuentes." : "Questions."}
                </span>
            </h1>

            <section className="w-[40%] mx-auto mt-20">
                <Accordion type="single" collapsible>
                    {info.map((item, index) => (
                        <AccordionItem 
                            key={index} 
                            value={`item-${item.id}`}
                            className="border border-zinc-700 rounded-lg mb-4 px-2"
                        >
                            <AccordionTrigger>{item.question}</AccordionTrigger>
                            <AccordionContent>
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </section>
        </div>
    )
}


const info = [
    {
        id: 1,
        question: "Is it accessible?",
        answer: "Yes. It adheres to the WAI-ARIA design pattern."
    },
    {
        id: 2,
        question: "Is it accessible?",
        answer: "Yes. It adheres to the WAI-ARIA design pattern."
    },
    {
        id: 3,
        question: "Is it accessible?",
        answer: "Yes. It adheres to the WAI-ARIA design pattern."
    },
    {
        id: 4,
        question: "Is it accessible?",
        answer: "Yes. It adheres to the WAI-ARIA design pattern."
    },
    {
        id: 5,
        question: "Is it accessible?",
        answer: "Yes. It adheres to the WAI-ARIA design pattern."
    },
    {
        id: 6,
        question: "Is it accessible?",
        answer: "Yes. It adheres to the WAI-ARIA design pattern."
    },
]