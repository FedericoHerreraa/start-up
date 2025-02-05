'use client'

import { useLenguage } from "@/app/context/LenguageContext"
import { useNightMode } from "@/app/context/NightModeContext"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/app/components/ui/accordion"
import { TitleSection } from "./reusable/titleSection"
  

export const FAQs = () => {
    const { nightMode } = useNightMode()
    const { spanish } = useLenguage()

    return (
        <div className={`${nightMode ? 'bg-black text-zinc-300' : 'text-zinc-700'} pb-20`}>
            <TitleSection
                firstTitleEnglish="Frequently Asked"
                secondTitleEnglish="Questions."
                firstTitleSpanish="Preguntas"
                secondTitleSpanish="Frecuentes."
                subTitleEnglish="FAQs."
                subTitleSpanish="FAQs."
                color="from-blue-600 to-blue-800"
                spanish={spanish}
                nightMode={nightMode}
            />

            <section className="md:w-[40%] w-[80%] mx-auto mt-20">
                <Accordion type="single" collapsible>
                    {info.map((item, index) => (
                        <AccordionItem 
                            key={index} 
                            value={`item-${item.id}`}
                            className="border border-zinc-700 rounded-lg mb-4 px-2"
                        >
                            <AccordionTrigger className="font-bold text-base">{spanish ? item.questionSpanish : item.questionEnglish}</AccordionTrigger>
                            <AccordionContent>
                                {spanish ? item.answerSpanish : item.answerEnglish}
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
        questionSpanish: "¿Cuándo tengo que abonar la página?",
        questionEnglish: "When do I have to pay for the website?",
        answerSpanish: "El pago se realiza en dos partes: el 50% al inicio del proyecto y el 50% al finalizarlo.",
        answerEnglish: "The payment is made in two parts: 50% at the beginning of the project and 50% upon completion."
    },
    {
        id: 2,
        questionSpanish: "¿El dominio de mi web está incluido?",
        questionEnglish: "Is the domain for my website included?",
        answerSpanish: "No, el dominio no está incluido. Nosotros gestionamos la compra, pero el costo es cubierto por el cliente.",
        answerEnglish: "No, the domain is not included. We handle the purchase process, but the cost is covered by the client."
    },
    {
        id: 3,
        questionSpanish: "¿Incluye mantenimiento?",
        questionEnglish: "Does it include maintenance?",
        answerSpanish: "Sí, ofrecemos mantenimiento después de finalizar el proyecto, con un precio acordado previamente.",
        answerEnglish: "Yes, we provide maintenance after the project is completed, with a pre-agreed price."
    },
    {
        id: 4,
        questionSpanish: "¿Se puede mejorar la web que ya tengo hecha?",
        questionEnglish: "Can you improve the website I already have?",
        answerSpanish: "Sí, podemos mejorar una web existente. El costo se definirá según los cambios necesarios.",
        answerEnglish: "Yes, we can improve an existing website. The cost will be determined based on the required changes."
    },
    {
        id: 5,
        questionSpanish: "¿Tengo que tener el diseño de mi web previamente creado?",
        questionEnglish: "Do I need to have my website design ready beforehand?",
        answerSpanish: "No es necesario. Podemos crear el diseño según tus necesidades y objetivos.",
        answerEnglish: "It is not necessary. We can create the design based on your needs and goals."
    },
];