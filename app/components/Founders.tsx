'use client'

import { useNightMode } from "../context/NightModeContext"
import imageFede from "../img/fede.jpg"
import imageCami from "../img/cami.jpeg"
import { ImArrowRight2 } from "react-icons/im";
import { useLenguage } from "../context/LenguageContext";
import Image from "next/image";


export const Founders = () => {
    const { nightMode } = useNightMode()
    const { spanish } = useLenguage()

    return (
        <div className={`${nightMode ? 'bg-black' : '' } h-[80vh]`}>
            <p className="text-zinc-500 text-center mb-3 text-xl">{spanish ? 'Los que llevan la magia adelante.' : 'Those who bring the magic to life.'}</p>
            <h1 className={`text-6xl font-semibold text-center ${nightMode ? 'text-white' : ' '}`}>
                {spanish ? 'Conoce a Nuestros ' : 'Meet Our'} <span className="bg-gradient-to-r from-violet-400 to-violet-800 bg-clip-text text-transparent">{spanish ? 'Fundadores.' : 'Founders.'}</span>
            </h1>

            <section className={`${nightMode ? 'bg-zinc-900' : 'bg-zinc-100'} p-10 flex flex-col gap-2 min-h-96 rounded-2xl shadow-xl mt-20 w-[80%] mx-auto`}>
                <div className="mx-10 flex items-center">
                    <div className="w-1/6">
                        <Image 
                            src={imageCami} 
                            alt="foto perfile de Cami" 
                            className="rounded-full w-[162px] h-[183px] shadow-2xl"
                        />
                    </div>
                    <ImArrowRight2 color="gray" size={25} className="w-1/6 animate-pulse"/>
                    Mi nombre es  
                    <div className={`text-lg ${nightMode ? 'text-zinc-300' : 'text-zinc-800'} w-2/3`}>
                        {spanish
                            ? <p>Mi nombre es <span className={`font-bold bg-gradient-to-r ${nightMode ? 'from-blue-500 to-blue-200' : 'from-blue-700 to-blue-400'} bg-clip-text text-transparent`}>Camila Aznar</span> y soy desarrolladora Front-end. Actualmente, me dedico a crear soluciones visuales innovadoras, aportando creatividad y diseño a cada proyecto. Hoy trabajo en As You Need como <span className="font-bold">Co-Fundadora</span>, desarrollando ideas que conectan con las necesidades de nuestros clientes.</p>
                            : <p>My name is <span className={`font-bold bg-gradient-to-r ${nightMode ? 'from-blue-500 to-blue-200' : 'from-blue-700 to-blue-400'} bg-clip-text text-transparent`}>Camila Aznar</span>, and I am a Front-end Developer. I specialize in creating innovative visual solutions, bringing creativity and design to every project. Currently, I work at As You Need as a <span className="font-bold">Co-Founder</span>, developing ideas that align with the needs of our clients.</p>
                        }
                    </div>
                </div>

                <div className="mx-10 flex items-center">
                    <div className={`text-lg ${nightMode ? 'text-zinc-300' : 'text-zinc-800'} w-2/3`}>
                        {spanish
                            ? <p>Mi nombre es <span className={`font-bold bg-gradient-to-r ${nightMode ? 'from-blue-500 to-blue-200' : 'from-blue-700 to-blue-400'} bg-clip-text text-transparent`}>Federico Herrera</span> y soy programador Full Stack. Actualmente estudiando para la licenciatura en sistemas en la "Universidad Argentina de la Empresa" y trabajando en proyectos de software en As You Need como <span className="font-bold">Co-Fundador.</span></p>
                            : <p>My name is <span className={`font-bold bg-gradient-to-r ${nightMode ? 'from-blue-500 to-blue-200' : 'from-blue-700 to-blue-400'} bg-clip-text text-transparent`}>Federico Herrera</span>, and I am a Full Stack Developer. Currently, I&#39;m pursuing a Bachelor&#39;s degree in Computer Science at the "Argentine University of Enterprise" and working on software projects at As You Need as a <span className="font-bold">Co-Founder.</span></p>
                        }
                    </div>
                    <ImArrowRight2 color="gray" size={25} className="w-1/6 animate-pulse rotate-180"/>
                    <div className="w-1/6">
                        <Image 
                            src={imageFede} 
                            alt="foto perfile de Fede" 
                            className="rounded-full w-[162px] h-[183px] shadow-2xl"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}