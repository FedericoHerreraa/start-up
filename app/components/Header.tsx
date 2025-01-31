'use client'


import { MdNightlight } from "react-icons/md";
import { MdWbSunny } from "react-icons/md";
import { HiQueueList } from "react-icons/hi2";


import { useNightMode } from "@/app/context/NightModeContext";
import { useLenguage } from "@/app/context/LenguageContext";
import { useMobileView } from "@/app/context/MobileViewContext";
import logoDark from "@/app/img/logos/logo-dark.png"
import logoLight from "@/app/img/logos/logo-light.png"
import Image from "next/image";

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
import { useState } from "react";

interface TabProps {
    scrollToSection: (sectionId: string) => void
    spanish: boolean
    nightMode: boolean
    setNightMode: (value: boolean) => void
    setSpanish: (value: boolean) => void
    isOpen: boolean
    setIsOpen: (value: boolean) => void
}


export const Header = () => {
    const { nightMode, setNightMode } = useNightMode()
    const { spanish, setSpanish } = useLenguage()
    const { isMobile } = useMobileView()
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <header className={` ${nightMode ? 'text-zinc-300 bg-black' : ''}`}>
            <div className="flex justify-between items-center md:w-[80%] w-[90%] mx-auto my-auto md:py-5 py-8 ">
                <div className="flex gap-5">
                    <Image src={nightMode ? logoLight : logoDark} alt="" className="md:w-12 w-10 rotate-45" />
                    <div className="flex flex-col">    
                        <h1 className='md:text-2xl text-lg'>AsNeeed</h1>
                        <h4 className="text-zinc-500 md:text-sm text-xs">{spanish ? 'Tu Propio Negocio' : 'Own Your Business'}</h4>
                    </div>
                </div>
                <nav className="flex gap-10 items-center">
                    {isMobile ? (
                        tabsMobileView({
                            scrollToSection,
                            setNightMode,
                            setSpanish,
                            spanish,
                            nightMode,
                            isOpen,
                            setIsOpen,
                        })
                    ) : (
                        tabsDesktopView({
                            scrollToSection,
                            setNightMode,
                            setSpanish,
                            spanish,
                            nightMode,
                            isOpen,
                            setIsOpen,
                        })
                    )}
                </nav>
            </div>
        </header>
    )
}

const tabsDesktopView = ({ 
    scrollToSection,
    setNightMode,
    setSpanish,
    spanish,
    nightMode,
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
                <Select 
                    defaultValue={spanish ? "spanish" : "english"} 
                    onValueChange={() => setSpanish(!spanish)}
                >
                    <SelectTrigger 
                        className={`w-[100px] ${nightMode ? 'bg-black border-zinc-600' : 'bg-white border-zinc-300'} m-0 border`}
                    >
                        <SelectValue placeholder={spanish ? spanish ? "Español" : "Spanish" : spanish ? "Inglés" : "English"} />
                    </SelectTrigger>
                    <SelectContent 
                        className={`${nightMode ? 'bg-black text-zinc-200 border-zinc-800' : 'bg-white text-zinc-800 border-zinc-200'}`}
                    >
                        <SelectItem className="focus:bg-zinc-800 focus:text-zinc-200" value="spanish">{spanish ? 'Español' : 'Spanish'}</SelectItem>
                        <SelectItem className="focus:bg-zinc-800 focus:text-zinc-200" value="english">{spanish ? 'Inglés' : 'English'}</SelectItem>
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
    isOpen,
    setIsOpen,
} : TabProps ) => {
    return (
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger>
                <HiQueueList size={30}/>
            </SheetTrigger>
            <SheetContent className={`${nightMode ? 'bg-black border-zinc-800 pt-10' : 'pt-10 border-zinc-300' }`}>
                <SheetHeader>
                    <SheetTitle className={`text-2xl pb-10 text-start ${nightMode ? 'text-zinc-200' : 'text-zinc-800'}`}>
                        <button 
                            onClick={() => setIsOpen(false)} 
                            className="absolute top-0 right-0 m-5 cursor-pointer text-lg"
                        >
                            {nightMode ? '❌' : '✖️'}
                        </button>
                        AsNeeed
                    </SheetTitle>
                    <SheetDescription className="flex flex-col items-start gap-5">
                        {tabs.map((tab) => (
                            <span 
                                key={tab.id}
                                onClick={() => {
                                    setIsOpen(false)
                                    scrollToSection(tab.section)
                                }}
                                className="text-lg"
                            >
                                {spanish ? tab.titleSpanish : tab.titleEnglish}
                            </span>    
                        ))}
                        <>
                            <Select 
                                defaultValue={spanish ? "spanish" : "english"} 
                                onValueChange={() => setSpanish(!spanish)}
                            >
                                <SelectTrigger 
                                    className={`w-[100px] ${nightMode ? 'bg-black border-zinc-600' : 'bg-white border-zinc-300'} m-0 border`}
                                >
                                    <SelectValue placeholder={spanish ? spanish ? "Español" : "Spanish" : spanish ? "Inglés" : "English"} />
                                </SelectTrigger>
                                <SelectContent 
                                    className={`${nightMode ? 'bg-black text-zinc-200 border-zinc-800' : 'bg-white text-zinc-800 border-zinc-200'}`}
                                >
                                    <SelectItem className="focus:bg-zinc-800 focus:text-zinc-200" value="spanish">{spanish ? 'Español' : 'Spanish'}</SelectItem>
                                    <SelectItem className="focus:bg-zinc-800 focus:text-zinc-200" value="english">{spanish ? 'Inglés' : 'English'}</SelectItem>
                                </SelectContent>
                            </Select>
                        </>
                        <button
                            className="cursor-pointer"
                            onClick={() => setNightMode(!nightMode)}
                        >
                            {nightMode 
                                ? <MdWbSunny size={20}/>
                                : <MdNightlight size={20}/>}
                        </button>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

const tabs = [
    {
        id: 1,
        titleSpanish: 'Nuestra Filosofía',
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