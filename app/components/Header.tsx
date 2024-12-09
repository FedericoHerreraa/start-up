'use client'


import { HiChartBar } from "react-icons/hi2";
import { MdNightlight } from "react-icons/md";
import { MdWbSunny } from "react-icons/md";
import { useNightMode } from "../context/NightModeContext";
import { useLenguage } from "../context/LenguageContext";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../components/ui/select"  

export const Header = () => {
    const { nightMode, setNightMode } = useNightMode()
    const { spanish, setSpanish } = useLenguage()

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className={` ${nightMode ? 'text-zinc-300 bg-black' : ''}`}>
            <div className="flex justify-between items-center w-[80%] mx-auto my-auto py-5 ">
                <div className="flex gap-2">
                    <HiChartBar size={55} className="text-zinc-500"/>
                    <div className="flex flex-col">    
                        <h1 className='text-2xl'>As You Need</h1>
                        <h2 className="text-zinc-500 text-sm">{spanish ? 'Crea tu Propio Negocio' : 'Start Your Own Business'}</h2>
                    </div>
                </div>
                <div className="flex gap-10 items-center">
                    {tabs.map((tab) => (
                        <p 
                            key={tab.id}
                            onClick={() => scrollToSection(tab.section)}
                            className="text-xl cursor-pointer hover:scale-105 duration-200"
                        >
                            {spanish ? tab.titleSpanish : tab.titleEnglish}
                        </p>    
                    ))}
                    <div
                        className="cursor-pointer"
                        onClick={() => setNightMode(!nightMode)}
                    >
                        {nightMode 
                            ? <MdWbSunny size={20}/> 
                            : <MdNightlight size={20}/>}
                    </div>
                    <div>
                        <Select onValueChange={(value) => setSpanish(value === "spanish")}>
                            <SelectTrigger 
                                className={`w-[100px] ${nightMode ? 'bg-black border-zinc-600' : 'bg-white border-zinc-300'} m-0 border`}
                            >
                                <SelectValue placeholder={spanish ? "Español" : "Inglés"} />
                            </SelectTrigger>
                            <SelectContent 
                                className={`${nightMode ? 'bg-black text-zinc-200 border-zinc-800' : 'bg-white text-zinc-800 border-zinc-200'}`}
                            >
                                <SelectItem value="spanish">{spanish ? 'Español' : 'Spanish'}</SelectItem>
                                <SelectItem value="english">{spanish ? 'Inglés' : 'English'}</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </div>
        </div>
    )
}

const tabs = [
    {
        id: 1,
        titleSpanish: 'Nuestra Filosofia',
        titleEnglish: 'Our Philosophy',
        section: 'philosophy'
    },
    {
        id: 2,
        titleSpanish: 'Nuestro Trabajo',
        titleEnglish: 'Our Work',
        section: 'work'
    },
    {
        id: 3,
        titleSpanish: 'Empezar Ya',
        titleEnglish: 'Start Now',
        section: 'start'
    }
]