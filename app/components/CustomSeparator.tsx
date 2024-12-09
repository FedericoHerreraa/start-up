

import { useNightMode } from "../context/NightModeContext";
import Marquee from "react-fast-marquee";

export const CustomSeparator = () => {
    const { nightMode } = useNightMode()

    return (
        <div className={`py-40 flex flex-col gap-10 ${nightMode ? 'bg-black' : ''}`}>
            <Marquee speed={200}>
                <div className="flex">
                    {Array.from({ length: 14 }).map((_, index) => (
                        <div
                            key={index}
                            className={`w-[200px] h-[1px] border ${nightMode ? 'border-zinc-800' : 'border-zinc-300'} mx-5`}
                        ></div>
                    ))}
                </div>
            </Marquee>
            <Marquee speed={150} direction="right">
                <div className="flex">
                    {Array.from({ length: 14 }).map((_, index) => (
                        <div
                            key={index}
                            className={`w-[200px] h-[1px] border ${nightMode ? 'border-zinc-800' : 'border-zinc-300'} mx-5`}
                        ></div>
                    ))}
                </div>
            </Marquee>
            <Marquee speed={250}>
                <div className="flex">
                    {Array.from({ length: 14 }).map((_, index) => (
                        <div
                            key={index}
                            className={`w-[200px] h-[1px] border ${nightMode ? 'border-zinc-800' : 'border-zinc-300'} mx-5`}
                        ></div>
                    ))}
                </div>
            </Marquee>
        </div>
    );
};