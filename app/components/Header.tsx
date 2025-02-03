'use client'


import { MdNightlight } from "react-icons/md";
import { MdWbSunny } from "react-icons/md";
import { HiQueueList } from "react-icons/hi2";

import { useNightMode } from "@/app/context/NightModeContext";
import { useLenguage } from "@/app/context/LenguageContext";
import { useMobileView } from "@/app/context/MobileViewContext";

import logoDark from '@/app/img/logos/newDarkLogo.png'
import logoLight from '@/app/img/logos/newLightLogo.png'

import argFlag from '@/app/img/others/argentina.png'
import usaFlag from '@/app/img/others/usa.png'

import Image from "next/image";
import Link from "next/link";

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

    return (
        <header className={` ${nightMode ? 'text-zinc-300 bg-black' : ''}`}>
            <div className="flex justify-between items-center md:w-[80%] w-[90%] mx-auto my-auto md:py-3 py-8 ">
                <Link href='/' className="flex items-center gap-1">
                    <Image 
                        src={nightMode ? logoDark : logoLight} 
                        alt="logo" 
                        className="md:w-[85px] w-16" 
                    />
                    <div className="flex flex-col">    
                        <h1 className='md:text-2xl text-lg'>AsNeeed</h1>
                        <h4 className="text-zinc-500 md:text-sm text-xs">{spanish ? 'Tu Propio Negocio' : 'Own Your Business'}</h4>
                    </div>
                </Link>
                <nav className="flex gap-10 items-center">
                    {isMobile ? (
                        tabsMobileView({
                            setNightMode,
                            setSpanish,
                            spanish,
                            nightMode,
                            isOpen,
                            setIsOpen,
                        })
                    ) : (
                        tabsDesktopView({
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
    setNightMode,
    setSpanish,
    spanish,
    nightMode,
} : TabProps ) => {
    return (
        <>
            {tabs.map((tab) => (
                <Link 
                    key={tab.id}
                    href={tab.url}
                    className="text-xl cursor-pointer hover:scale-105 duration-200"
                >
                    {spanish ? tab.titleSpanish : tab.titleEnglish}
                </Link>    
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
                        className={`w-[125px] ${nightMode ? 'bg-black border-zinc-600' : 'bg-white border-zinc-300'} m-0 border`}
                    >
                        <SelectValue placeholder={spanish ? spanish ? "Español" : "Spanish" : spanish ? "Inglés" : "English"} />
                    </SelectTrigger>
                    <SelectContent 
                        className={`${nightMode ? 'bg-black text-zinc-200 border-zinc-800' : 'bg-white text-zinc-800 border-zinc-200'}`}
                    >
                        <SelectItem className="focus:bg-zinc-800 focus:text-zinc-200 " value="spanish">
                            <div className="flex items-center gap-2">
                                {spanish ? 'Español' : 'Spanish'}
                                <Image
                                    src={argFlag}
                                    alt="Argentina Flag"
                                    width={20}
                                />
                            </div>
                        </SelectItem>
                        <SelectItem className="focus:bg-zinc-800 focus:text-zinc-200" value="english">
                            <div className="flex items-center gap-2">
                                {spanish ? 'Inglés' : 'English'}    
                                <Image
                                    src={usaFlag}
                                    alt="USA Flag"
                                    width={20}
                                />
                            </div>
                        </SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </>
    )
}


const tabsMobileView = ({ 
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
                            <Link 
                                key={tab.id}
                                onClick={() => {
                                    setIsOpen(false)
                                }}
                                href={tab.url}
                                className="text-lg"
                            >
                                {spanish ? tab.titleSpanish : tab.titleEnglish}
                            </Link>    
                        ))}
                        <>
                            <Select 
                                defaultValue={spanish ? "spanish" : "english"} 
                                onValueChange={() => setSpanish(!spanish)}
                            >
                                <SelectTrigger 
                                    className={`w-[125px] ${nightMode ? 'bg-black border-zinc-600' : 'bg-white border-zinc-300'} m-0 border`}
                                >
                                    <SelectValue placeholder={spanish ? spanish ? "Español" : "Spanish" : spanish ? "Inglés" : "English"} />
                                </SelectTrigger>
                                <SelectContent 
                                    className={`${nightMode ? 'bg-black text-zinc-200 border-zinc-800' : 'bg-white text-zinc-800 border-zinc-200'}`}
                                >
                                    <SelectItem className="focus:bg-zinc-800 focus:text-zinc-200" value="spanish">
                                        <div className="flex items-center gap-2">
                                            {spanish ? 'Español' : 'Spanish'}
                                            <Image
                                                src={argFlag}
                                                alt="Argentina Flag"
                                                width={15}
                                            />
                                        </div>
                                    </SelectItem>
                                    <SelectItem className="focus:bg-zinc-800 focus:text-zinc-200" value="english">
                                        <div className="flex items-center gap-2">
                                            {spanish ? 'Inglés' : 'English'}    
                                            <Image
                                                src={usaFlag}
                                                alt="USA Flag"
                                                width={15}
                                            />
                                        </div>
                                    </SelectItem>
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
        titleSpanish: 'Nuestro Trabajo',
        titleEnglish: 'Our Work',
        url: '/our-work'
    },
    {
        id: 2,
        titleSpanish: 'Precios',
        titleEnglish: 'Pricing',
        url: '/pricing'
    },
    {
        id: 3,
        titleSpanish: 'Empezar Ya',
        titleEnglish: 'Start Now',
        url: '/start-now'
    }
]