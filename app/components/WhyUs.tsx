'use client'

import { useLenguage } from "@/app/context/LenguageContext"
import { useNightMode } from "@/app/context/NightModeContext"

import Image from "next/image"
import Link from "next/link"

import logoDark from '@/app/img/logos/newDarkLogo.png'
import logoLight from '@/app/img/logos/newLightLogo.png'

import { MdArrowRightAlt } from "react-icons/md";
import { 
  FaRocket, 
  FaLightbulb, 
  FaMobileAlt, 
  FaPaintBrush, 
  FaHourglassHalf, 
  FaBolt, 
  FaDollarSign, 
  FaPhoneAlt, 
  FaTools, 
  FaLock 
} from "react-icons/fa";



export const WhyUs = () => {
    const { nightMode } = useNightMode()
    const { spanish } = useLenguage()

    return (
        <div className={`${nightMode ? 'bg-black text-white' : ''} min-h-[70vh]`}>
            <p className="text-zinc-500 text-center mb-3 md:text-xl ">
                {spanish
                    ? "El socio estratégico que necesitas."
                    : "The strategic partner you need."}
            </p>
                
            <h1 className={`${nightMode ? '' : 'text-zinc-700'} text-center md:text-6xl text-4xl md:w-[50%] w-[90%] mx-auto  font-semibold`}>
                {spanish ? "Por que elegir" : "Why choosing"}{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                    {spanish ? "AsNeeed." : "AsNeeed."}
                </span>
            </h1>

            <section className="mt-20 w-[80%] mx-auto flex gap-10">
                <div className="border-l-4 border-l-blue-700 flex flex-col gap-5 w-2/3">
                    {info.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 ml-5">
                            {item.icon}
                            <p className={`text-lg ${nightMode ? 'text-zinc-300' : 'text-zinc-500'}`}>{spanish ? item.textSpanish : item.textEnglish}</p>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col gap-2 items-center justify-center w-1/3">
                    <Image
                        src={nightMode ? logoDark : logoLight}
                        alt="logo"
                        width={230}
                        height={230}
                    />
                    <p className={`${nightMode ? 'text-zinc-300' : 'text-zinc-500'} text-xl`}>{spanish ? 'Transformamos tus ideas en realidad digital' : 'We turn your ideas into digital reality'}</p>
                    <Link href='/start-now' className="flex items-center gap-1 bg-blue-800 px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-75 mt-5">
                        <p className={`text-xl ${nightMode ? '' : 'text-zinc-200'}`}>{spanish ? 'Empecemos ahora' : 'Start right now'}</p>
                        <MdArrowRightAlt size={30} className={nightMode ? '' : 'text-zinc-200'}/>
                    </Link>
                </div>
            </section>
        </div>
    )
}


const info = [
  {
    icon: <FaRocket />,
    textSpanish: "Utilizamos las últimas tecnologías para desarrollar soluciones modernas y escalables.",
    textEnglish: "We use the latest technologies to develop modern and scalable solutions."
  },
  {
    icon: <FaLightbulb />,
    textSpanish: "Desarrollo web y móvil con las herramientas más avanzadas del mercado.",
    textEnglish: "Web and mobile development with the most advanced tools on the market."
  },
  {
    icon: <FaMobileAlt />,
    textSpanish: "Nuestras soluciones se adaptan a cualquier dispositivo, garantizando la mejor experiencia.",
    textEnglish: "Our solutions adapt to any device, ensuring the best experience."
  },
  {
    icon: <FaPaintBrush />,
    textSpanish: "Interfaz intuitiva y diseño responsive para maximizar la usabilidad.",
    textEnglish: "Intuitive interface and responsive design to maximize usability."
  },
  {
    icon: <FaHourglassHalf />,
    textSpanish: "Somos los más rápidos del mercado sin comprometer la calidad.",
    textEnglish: "We are the fastest on the market without compromising quality."
  },
  {
    icon: <FaBolt />,
    textSpanish: "Entregamos proyectos en tiempo récord gracias a metodologías ágiles.",
    textEnglish: "We deliver projects in record time thanks to agile methodologies."
  },
  {
    icon: <FaDollarSign />,
    textSpanish: "Ofrecemos precios competitivos sin sacrificar la excelencia.",
    textEnglish: "We offer competitive prices without sacrificing excellence."
  },
  {
    icon: <FaPhoneAlt />,
    textSpanish: "Brindamos atención al cliente con tiempos de respuesta mínimos.",
    textEnglish: "We provide customer support with minimal response times."
  },
  {
    icon: <FaTools />,
    textSpanish: "Nos adaptamos a cualquier pedido para ofrecer soluciones personalizadas.",
    textEnglish: "We adapt to any request to offer customized solutions."
  },
  {
    icon: <FaLock />,
    textSpanish: "Garantizamos seguridad y fiabilidad en cada desarrollo.",
    textEnglish: "We guarantee security and reliability in every development."
  }
];