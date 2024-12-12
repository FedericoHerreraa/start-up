'use client'

import { createContext, useState, useContext, Dispatch, SetStateAction } from "react";

interface LenguageContextType {
    spanish: boolean;
    setSpanish: Dispatch<SetStateAction<boolean>>; 
}

const LenguageContext = createContext<LenguageContextType | undefined>(undefined);

export const LenguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [spanish, setSpanish] = useState(true);

    return (
        <LenguageContext.Provider value={{ spanish, setSpanish }}>
            {children}
        </LenguageContext.Provider>
    );
}


export const useLenguage = () => {
    const context = useContext(LenguageContext);
    if (!context) {
        throw new Error('useLenguage must be used within a LenguageProvider');
    }
    return context;
}