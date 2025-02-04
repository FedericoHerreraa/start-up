'use client'

import { TitleSection } from "./reusable/titleSection"
import { useLenguage } from "@/app/context/LenguageContext"
import { useNightMode } from "@/app/context/NightModeContext"

export const PlansComponent = () => {
    const { spanish } = useLenguage()
    const { nightMode } = useNightMode()

    return (
        <div className={`${nightMode ? 'bg-black text-zinc-300' : 'text-zinc-700'} h-[100vh] md:pt-20 pt-10`}>
            <TitleSection
                firstTitleEnglish="Our"
                secondTitleEnglish="Plans"
                firstTitleSpanish="Nuestros"
                secondTitleSpanish="Planes"
                subTitleEnglish="We have a plan for you"
                subTitleSpanish="Tenemos un plan para ti"
                color="from-blue-500 to-violet-600"
                spanish={spanish}
                nightMode={nightMode}
            />

            <section className="md:w-[90%] w-[95%] mx-auto mt-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {plans.map(plan => (
                        <div key={plan.id} className={` border  ${nightMode ? 'text-zinc-300 bg-zinc-900 border-blue-900 hover:border-blue-500' : 'text-zinc-700 bg-zinc-200 border-blue-300 hover:border-blue-500'} h-[50vh] hover:scale-105 transition-all duration-200 rounded-xl p-5`}>
                            <h2 className="text-center text-2xl font-bold">{spanish ? plan.title.spanish : plan.title.english}</h2>
                            <p className="text-center text-xl font-semibold mt-3">{spanish ? plan.price.spanish : plan.price.english}</p>
                            <p className="text-center mt-3">{spanish ? plan.description.spanish : plan.description.english}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}


const plans = [
    {
        id: 1,
        title: {
            english: 'Basic',
            spanish: 'Básico'
        },
        price: {
            english: '$20',
            spanish: '$20'
        },
        description: {
            english: 'This is the basic plan',
            spanish: 'Este es el plan básico'
        }

    },
    {
        id: 2,
        title: {
            english: 'Premium',
            spanish: 'Premium'
        },
        price: {
            english: '$40',
            spanish: '$40'
        },
        description: {
            english: 'This is the premium plan',
            spanish: 'Este es el plan premium'
        }

    },
    {
        id: 3,
        title: {
            english: 'Gold',
            spanish: 'Oro'
        },
        price: {
            english: '$60',
            spanish: '$60'
        },
        description: {
            english: 'This is the gold plan',
            spanish: 'Este es el plan oro'
        }

    }
]