'use client'


import { useNightMode } from "@/app/context/NightModeContext";
import Marquee from "react-fast-marquee";

export const CustomSeparator = () => {
    const { nightMode } = useNightMode()

    return (
        <div className={`py-40 flex flex-col gap-10 ${nightMode ? 'bg-black' : ''}`}>
            {Array.from({ length: 3 }).map((_, index) => (
                <Marquee speed={index == 0 ? 200 : index == 1 ? 150 : 250} key={index} direction={index == 1 ? "right" : "left"}>
                    <div className="flex">
                        {Array.from({ length: 14 }).map((_, index) => (
                            <div
                                key={index}
                                className={`w-[200px] h-[1px] border ${nightMode ? 'border-zinc-800' : 'border-zinc-300'} mx-5`}
                            ></div>
                        ))}
                    </div>
                </Marquee>
            ))}
        </div>
    );
};