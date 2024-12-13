'use client'


import { HiChartBar } from "react-icons/hi2";
import { MdNightlight } from "react-icons/md";
import { MdWbSunny } from "react-icons/md";
import { HiQueueList } from "react-icons/hi2";


import { useNightMode } from "@/app/context/NightModeContext";
import { useLenguage } from "@/app/context/LenguageContext";
import { useMobileView } from "@/app/context/MobileViewContext";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/app/components/ui/select"  

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/app/components/ui/sheet"

interface TabProps {
    scrollToSection: (sectionId: string) => void
    spanish: boolean
    nightMode: boolean
    setNightMode: (value: boolean) => void
    setSpanish: (value: boolean) => void
    isMobile: boolean
}

export const Header = () => {
    const { nightMode, setNightMode } = useNightMode()
    const { spanish, setSpanish } = useLenguage()
    const { isMobile } = useMobileView()

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className={` ${nightMode ? 'text-zinc-300 bg-black' : ''}`}>
            <div className="flex justify-between items-center md:w-[80%] w-[90%] mx-auto my-auto md:py-5 py-8 ">
                <div className="flex gap-2">
                    <HiChartBar size={isMobile ? 45 : 55} className="text-zinc-500"/>
                    <div className="flex flex-col">    
                        <h1 className='md:text-2xl text-lg'>As You Need</h1>
                        <h2 className="text-zinc-500 md:text-sm text-xs">{spanish ? 'Crea tu Propio Negocio' : 'Start Your Own Business'}</h2>
                    </div>
                </div>
                <div className="flex gap-10 items-center">
                    {isMobile ? (
                        tabsMobileView({
                            scrollToSection,
                            setNightMode,
                            setSpanish,
                            spanish,
                            nightMode,
                            isMobile
                        })
                    ) : (
                        tabsDesktopView({
                            scrollToSection,
                            setNightMode,
                            setSpanish,
                            spanish,
                            nightMode,
                            isMobile
                        })
                    )}
                </div>
            </div>
        </div>
    )
}

const tabsDesktopView = ({ 
    scrollToSection,
    setNightMode,
    setSpanish,
    spanish,
    nightMode 
} : TabProps ) => {
    return (
        <>
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
        </>
    )
}


const tabsMobileView = ({ 
    scrollToSection,
    setNightMode,
    setSpanish,
    spanish,
    nightMode,
    isMobile 
} : TabProps ) => {
    return (
        <Sheet>
            <SheetTrigger>
                <HiQueueList size={isMobile ? 30 : 40}/>
            </SheetTrigger>
            <SheetContent className={`${nightMode ? 'bg-black border-zinc-700 pt-10' : '' }`}>
                <SheetHeader>
                <SheetTitle className="text-zinc-200 text-2xl mb-10 text-start">As You Need</SheetTitle>
                <SheetDescription className="flex flex-col items-start gap-5">
                    {tabs.map((tab) => (
                        <p 
                            key={tab.id}
                            onClick={() => scrollToSection(tab.section)}
                            className="text-lg"
                        >
                            {spanish ? tab.titleSpanish : tab.titleEnglish}
                        </p>    
                    ))}
                    <div
                        className="cursor-pointer"
                        onClick={() => setNightMode(!nightMode)}
                    >
                        {nightMode 
                            ? <p className="flex gap-2 items-center border border-zinc-400 rounded-lg px-3 py-1 w-fit mt-7">Change <MdWbSunny size={20}/> </p>
                            : <MdNightlight size={20}/>}
                    </div>
                    <div>
                        <Select onValueChange={(value) => setSpanish(value === "spanish")}>
                            <SelectTrigger 
                                className={`w-[150px] ${nightMode ? 'bg-black border-zinc-600' : 'bg-white border-zinc-300'} m-0 border`}
                            >
                                <SelectValue className="placeholder-" placeholder={spanish ? "Español" : "Inglés"} />
                            </SelectTrigger>
                            <SelectContent 
                                className={`${nightMode ? 'bg-black text-zinc-200 border-zinc-800' : 'bg-white text-zinc-800 border-zinc-200'}`}
                            >
                                <SelectItem value="spanish">{spanish ? 'Español' : 'Spanish'}</SelectItem>
                                <SelectItem value="english">{spanish ? 'Inglés' : 'English'}</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
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