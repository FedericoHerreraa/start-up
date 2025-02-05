'use client'

import { TitleSection } from "./reusable/titleSection"
import { useLenguage } from "@/app/context/LenguageContext"
import { useNightMode } from "@/app/context/NightModeContext"

export const PlansComponent = () => {
    const { spanish } = useLenguage()
    const { nightMode } = useNightMode()

    return (
        <div className={`${nightMode ? 'bg-black text-zinc-300' : 'text-zinc-700'} min-h-[100vh] md:pt-20 pt-10`}>
            <TitleSection
                firstTitleEnglish="Our"
                secondTitleEnglish="Plans."
                firstTitleSpanish="Nuestros"
                secondTitleSpanish="Planes."
                subTitleEnglish="We have a plan for you."
                subTitleSpanish="Tenemos un plan para ti."
                color="from-blue-500 to-violet-600"
                spanish={spanish}
                nightMode={nightMode}
            />

            <section className="md:w-[90%] w-[95%] mx-auto mt-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {plans.map(plan => (
                        <div key={plan.id} className={`border ${nightMode ? 'text-zinc-300 bg-zinc-900 border-blue-900 hover:border-blue-500' : 'text-zinc-700 bg-zinc-200 border-blue-300 hover:border-blue-500'} h-[50vh] hover:scale-105 transition-all duration-200 rounded-xl p-5`}>
                            <div >
                                <h2 className="text-center text-2xl font-bold">{spanish ? plan.title.spanish : plan.title.english}</h2>
                                <p className="text-center mt-3">{spanish ? plan.description.spanish : plan.description.english}</p>
                            </div>
                            <div className="w-[50%] mx-auto mt-10">
                                <button className={`w-full mt-5 py-2 transition-all duration-100 hover:rounded-md ${nightMode ? 'border-b border-b-blue-700 hover:bg-blue-950 text-zinc-300' : 'bg-blue-600 hover:bg-blue-700 text-zinc-100'}`}>
                                    {spanish ? 'Quiero saber mas' : 'I want to know more'}
                                </button>
                            </div>
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
            english: 'Informative Website',
            spanish: 'Web Informativa'
        },
        description: {
            english: "Perfect for professionals and small businesses looking for an elegant and functional online presence. Includes a modern, mobile-friendly design, contact forms, service information, and basic SEO to enhance visibility.",
            spanish: "Perfecto para profesionales y pequeñas empresas que buscan una presencia en línea elegante y funcional. Incluye un diseño moderno, optimizado para móviles, formularios de contacto, información de servicios y SEO básico para mejorar la visibilidad."
        }
    },
    {
        id: 2,
        title: {
            english: 'E-commerce',
            spanish: 'E-commerce'
        },
        description: {
            english: "Ideal for businesses that want to sell products online. Includes an intuitive e-commerce platform, shopping cart, secure payment integration, inventory management, order tracking, and an easy-to-manage admin panel.",
            spanish: "Ideal para negocios que desean vender productos en línea. Incluye una plataforma de e-commerce intuitiva, carrito de compras, integración con pagos seguros, gestión de inventario, seguimiento de pedidos y un panel de administración fácil de usar."
        }
    },
    {
        id: 3,
        title: {
            english: 'Platform',
            spanish: 'Plataforma'
        },
        description: {
            english: "The ultimate solution for startups and businesses that need a subscription-based platform. Includes user management, custom dashboards, automated billing, content restriction for premium users, API integrations, and performance optimization.",
            spanish: "La solución definitiva para startups y negocios que necesitan una plataforma basada en suscripciones. Incluye gestión de usuarios, paneles personalizados, facturación automatizada, restricción de contenido para usuarios premium, integraciones con API y optimización de rendimiento."
        }
    }
]