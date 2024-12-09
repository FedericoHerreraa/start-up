


import { useLenguage } from "../context/LenguageContext";
import { useNightMode } from "../context/NightModeContext"
import { FaLongArrowAltRight } from "react-icons/fa";



export const StartNow = () => {
    const { nightMode } = useNightMode()
    const { spanish } = useLenguage()

    return (
        <div 
            id="start"
            className={`${nightMode ? 'bg-black' : ''} min-h-[100vh]`}
        >
            <p className="text-zinc-500 text-center mb-3 text-xl">{spanish ? 'Bueno, ahora si vamos a lo importante.' : 'Alright, now let’s get to the important part.'}</p>
            <h1 className={`text-6xl ${nightMode ? 'text-white' : ''} font-semibold text-center`}>
                {spanish ? 'Comencemos ' : 'Let’s Start'} <span className="bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">{spanish ? 'Ahora Mismo.' : 'Right Now.'}</span>
            </h1>

            <section className="flex w-[95%] mx-auto mt-20 gap-7">
                <div className={`w-1/2 rounded-xl h-[650px] p-10 text-lg ${nightMode ? 'text-zinc-300' : ''}`}>
                    <h2 className={`text-3xl ${nightMode ? 'text-zinc-200' : 'text-zinc-800'} font-semibold`}>
                        {spanish ? 'Coordina una llamada con nosotros.' : 'Schedule a call with us.'}
                    </h2>
                    <p className={`${nightMode ? 'text-zinc-400' : 'text-zinc-500'} mb-10`}>
                        {spanish ? '¡Gracias por tu interés en trabajar con nosotros!' : 'Thank you for your interest in working with us!'}
                    </p>

                    <div>
                        <p className="mb-5">
                            {spanish 
                                ? 'Esta sección es para programar una reunión con ' 
                                : 'This section is to schedule a meeting with '}
                            <span className="bg-gradient-to-r from-violet-600 to-violet-800 bg-clip-text text-transparent text-xl font-semibold">
                                {spanish ? 'Camila' : 'Camila'}
                            </span> 
                            {spanish ? ' y ' : ' and '}
                            <span className="bg-gradient-to-r from-violet-600 to-violet-800 bg-clip-text text-transparent text-xl font-semibold">
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

                        <div className={`bg-gradient-to-b ${nightMode ? 'from-blue-800 via-blue-900 to-violet-900' : 'from-blue-600 to-blue-300'} p-5 rounded-lg shadow-xl`}>
                            <p>
                                {spanish 
                                    ? 'Nuestro objetivo es conocerte mejor, entender tus requerimientos y asegurarnos de que todo esté alineado para el éxito de tu proyecto.' 
                                    : 'Our goal is to get to know you better, understand your requirements, and ensure everything is aligned for the success of your project.'}
                            </p>
                        </div>
                    </div>
                    
                    <p className={`mt-7 ${nightMode ? 'text-zinc-300' : 'text-zinc-600'} animate-pulse`}>
                        {spanish 
                            ? 'Selecciona el horario que más te convenga en el calendario a continuación. ¡Te esperamos!' 
                            : 'Select the time that works best for you in the calendar below. We look forward to seeing you!'}
                    </p>
                </div>
                <div className={`w-1/2 rounded-xl h-[80vh] p-10 shadow-lg`}>
                    <iframe
                        src="https://calendly.com/d/cqvt-yqv-34c/review-meeting"
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        className="rounded-xl"
                        title="Calendly"
                    ></iframe>
                </div>
            </section>
        </div>
    )
}