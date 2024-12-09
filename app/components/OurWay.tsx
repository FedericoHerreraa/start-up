'use client'


import { useLenguage } from "../context/LenguageContext";
import { useNightMode } from "../context/NightModeContext"
import { CustomSeparator } from "./CustomSeparator";
import { BsArrowReturnRight } from "react-icons/bs";



export const OurWay = () => {
    const { nightMode } = useNightMode()
    const { spanish } = useLenguage()

    return (
        <div 
            id="philosophy"
            className={`${nightMode ? 'bg-black' : ''} h-[100vh]`}
        >
            <p className="text-zinc-500 text-center mb-3 text-xl">{spanish ? 'Primero que nada te mostramos nuestra filosofia.' : 'First of all we will show you our philosophy '}</p>
            <h1 className={`text-center text-6xl font-semibold ${nightMode ? 'text-white' : 'text-black'}`}>
                {spanish ? 'Nuestra Forma de' : 'Our Way Of '} <span className="bg-gradient-to-r from-green-500 to-green-800 bg-clip-text text-transparent">{spanish ? 'Trabajar.' : 'Working.'}</span>
            </h1>

            <div className="mt-20">
                <section>
                    <div className="flex items-center gap-5 w-[40%] mx-auto">
                        <p className={`border border-green-700 rounded-full px-4 py-2 ${nightMode ? 'text-zinc-300' : 'text-zinc-600'} text-2xl`}>1</p>
                        <h2 className={`${nightMode ? 'text-zinc-300' : 'text-zinc-600'} text-3xl font-semibold`}>
                            {spanish ? 'Desarrollo Móvil y Web.' : 'Mobile and Web Development.'}
                        </h2>
                    </div>
                    <div className="flex flex-col gap-10 mt-10 items-center text-white">
                        <div className="flex gap-5 w-[35%] mx-auto">
                            <BsArrowReturnRight size={30} color="gray"/>
                            <div className="flex flex-col items-start ">
                                <h1 className={`text-xl font-semibold ${nightMode ? 'text-zinc-300' : 'text-zinc-600'}`}>
                                    {spanish ? 'Soluciones innovadoras.' : 'Innovative Solutions.'}
                                </h1>
                                <p className="text-lg text-zinc-500">
                                    {spanish 
                                        ? 'Desarrollamos aplicaciones y sitios web modernos, adaptados a tus necesidades y objetivos.' 
                                        : 'We develop modern applications and websites tailored to your needs and goals.'
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-5 w-[35%] mx-auto">
                            <BsArrowReturnRight size={30} color="gray"/>    
                            <div className="flex flex-col items-start">
                                <h1 className={`text-xl font-semibold ${nightMode ? 'text-zinc-300' : 'text-zinc-600'}`}>
                                    {spanish ? 'Experiencia de usuario.' : 'User Experience.'}
                                </h1>
                                <p className="text-lg text-zinc-500">
                                    {spanish 
                                        ? 'Optimizamos la experiencia de usuario con diseños intuitivos y funcionales, garantizando satisfacción.' 
                                        : 'We optimize user experience with intuitive and functional designs, ensuring satisfaction.'
                                    }
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-5 w-[35%] mx-auto">
                            <BsArrowReturnRight size={30} color="gray"/>    
                            <div className="flex flex-col items-start">
                                <h1 className={`text-xl font-semibold ${nightMode ? 'text-zinc-300' : 'text-zinc-600'}`}>
                                    {spanish ? 'Soporte continuo.' : 'Continuous Support.'}
                                </h1>
                                <p className="text-lg text-zinc-500">
                                    {spanish 
                                        ? 'Acompañamos a nuestros clientes con soporte técnico y actualizaciones para mantener sus proyectos al día.' 
                                        : 'We provide ongoing technical support and updates to keep projects up-to-date.'
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="mt-20">
                    <div className="flex items-center gap-5 w-[40%] mx-auto">
                        <p className={`border border-green-700 rounded-full px-4 py-2 ${nightMode ? 'text-zinc-300' : 'text-zinc-600'} text-2xl`}>2</p>
                        <h2 className={`${nightMode ? 'text-zinc-300' : 'text-zinc-600'} text-3xl font-semibold`}>
                            {spanish ? 'Redes Sociales.' : 'Social Media.'}
                        </h2>
                    </div>
                    <div className="flex flex-col gap-10 mt-10 items-center text-white">
                        <div className="flex gap-5 w-[35%] mx-auto">
                            <BsArrowReturnRight size={22} color="gray"/>
                            <div className="flex flex-col items-start">
                                <h1 className={`text-xl font-semibold ${nightMode ? 'text-zinc-300' : 'text-zinc-600'}`}>
                                    {spanish ? 'Servicio Terciarizado.' : 'Outsourced Service.'}
                                </h1>
                                <p className="text-lg text-zinc-500">
                                    {spanish 
                                        ? 'Haz clic ' 
                                        : 'Click '}
                                    <span className="bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent text-xl cursor-pointer font-semibold">
                                        {spanish ? 'aquí' : 'here'}
                                    </span> 
                                    {spanish 
                                        ? ' para navegar al sitio web indicado para redes sociales.' 
                                        : ' to navigate to the designated social media website.'
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}