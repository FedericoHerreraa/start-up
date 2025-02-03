
'use client'

import { useLenguage } from "@/app/context/LenguageContext";
import { useNightMode } from "@/app/context/NightModeContext"
import { TitleSection } from "@/app/components/reusable/titleSection";
import { motion } from "framer-motion";
import { FaLongArrowAltRight } from "react-icons/fa";
import { ContactUsController } from "./ContactUsController";

export const StartNow = () => {
    const { nightMode } = useNightMode()
    const { spanish } = useLenguage()

    return (
        <div 
            className={`${nightMode ? 'bg-black' : ''} min-h-[100vh] md:pt-40 pt-10`}
        >
            <motion.div
                initial={{ y: -100, opacity: 1 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <TitleSection
                    firstTitleEnglish="Let's Start"
                    secondTitleEnglish="Right Now."
                    firstTitleSpanish="Comencemos "
                    secondTitleSpanish="Ahora Mismo."
                    subTitleEnglish="Alright, now let’s get to the important part."
                    subTitleSpanish="Bueno, ahora sí vamos a lo importante."
                    color="from-blue-700 to-blue-900"
                    spanish={spanish}
                    nightMode={nightMode}
                />

                <section className="flex md:flex-row flex-col md:w-[95%] w-[99%] mx-auto mt-20 gap-7">
                    <div className={`md:w-1/2 rounded-xl h-[650px] md:p-10 p-5 md:text-lg ${nightMode ? 'text-zinc-300' : ''}`}>
                        <h2 className={`md:text-3xl text-xl ${nightMode ? 'text-zinc-200' : 'text-zinc-800'} font-semibold`}>
                            {spanish ? 'Coordiná una llamada.' : 'Schedule a call.'}
                        </h2>
                        <p className={`${nightMode ? 'text-zinc-400' : 'text-zinc-500'} md:text-md text-sm mb-10`}>
                            {spanish ? '¡Gracias por tu interés en trabajar con nosotros!' : 'Thank you for your interest in working with us!'}
                        </p>

                        <div>
                            <p className="mb-5">
                                {spanish 
                                    ? 'Esta sección es para programar una reunión con ' 
                                    : 'This section is to schedule a meeting with '}
                                <span className="bg-gradient-to-r from-violet-600 to-violet-800 bg-clip-text text-transparent md:text-xl text-lg font-semibold">
                                    {spanish ? 'Camila' : 'Camila'}
                                </span> 
                                {spanish ? ' y ' : ' and '}
                                <span className="bg-gradient-to-r from-violet-600 to-violet-800 bg-clip-text text-transparent md:text-xl text-lg font-semibold">
                                    {spanish ? 'Federico' : 'Federico'}
                                </span>,
                                {spanish 
                                    ? ' donde revisaremos juntos los detalles de tu proyecto.' 
                                    : ' where we will review the details of your project together.'}
                            </p>
                            <p className="font-semibold">
                                {spanish 
                                    ? 'En esta reunión, podrás:' 
                                    : 'During this meeting, you’ll be able to:'}
                            </p>
                            <div className="list-disc ml-5 mb-10">
                                <div className="flex items-center gap-2">
                                    <FaLongArrowAltRight size={15} className="text-blue-500"/>
                                    <p>
                                        {spanish 
                                            ? 'Contarnos más sobre tu proyecto.' 
                                            : 'Tell us more about your project.'}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaLongArrowAltRight size={15} className="text-blue-500"/>
                                    <p>
                                        {spanish 
                                            ? 'Conocer más sobre nuestro proceso de trabajo.' 
                                            : 'Learn more about our work process.'}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaLongArrowAltRight size={15} className="text-blue-500"/>
                                    <p>
                                        {spanish 
                                            ? 'Resolver todas tus dudas.' 
                                            : 'Get all your questions answered.'}
                                    </p>
                                </div>
                            </div>

                            <p className="font-semibold">
                                {spanish 
                                    ? 'Podrás elegir entre una sesión de:' 
                                    : 'You can choose between a session of:'}
                            </p>
                            <div className="list-disc ml-5 mb-10">
                                <div className="flex items-center gap-2">
                                    <FaLongArrowAltRight size={15} className="text-blue-500"/>
                                    <p>{spanish ? '30 minutos.' : '30 minutes.'}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FaLongArrowAltRight size={15} className="text-blue-500"/>
                                    <p>{spanish ? '1 hora.' : '1 hour.'}</p>
                                </div>
                            </div>
                            <div className={`bg-gradient-to-b ${nightMode ? 'from-blue-800 via-blue-900 to-violet-900' : 'from-blue-600 to-blue-300'} md:p-5 p-3 md:rounded-lg rounded-md shadow-xl`}>
                                <p>
                                    {spanish 
                                        ? 'Nuestro objetivo es conocerte mejor, entender tus requerimientos y asegurarnos de que todo esté alineado para el éxito de tu proyecto.' 
                                        : 'Our goal is to get to know you better, understand your requirements, and ensure everything is aligned for the success of your project.'}
                                </p>
                            </div>
                        </div>
                        
                        <p className={`mt-7 ${nightMode ? 'text-zinc-300' : 'text-zinc-600'} animate-pulse`}>
                            {spanish 
                                ? 'Selecciona el horario y dia que más te convenga en el calendario a continuación. ¡Te esperamos!' 
                                : 'Select the time and day that works best for you in the calendar. We look forward to seeing you!'}
                        </p>
                    </div>
                    <div className={`md:w-1/2 rounded-xl min-h-[80vh] md:p-10 p-5 shadow-lg ${nightMode ? 'bg-zinc-950' : 'bg-zinc-100'}`}>
                        <ContactUsController />
                    </div>
                </section>
            </motion.div>
        </div>
    )
}