'use client'


import { useNightMode } from "@/app/context/NightModeContext"


export const LineSeparator = () => {
    const { nightMode } = useNightMode()

    return (
        <div className={`py-20 ${nightMode ? 'bg-black' : ''}`}>
            <div className={`md:w-1/3 w-[70%]  bg-gradient-to-r ${nightMode ? 'from-blue-400 to-blue-800 h-[0.5px]' : 'from-blue-400 to-blue-900 h-[1px]'} mx-auto rounded-full`}></div>
        </div>
    )
}