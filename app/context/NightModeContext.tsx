
import { createContext, useState, useContext, Dispatch, SetStateAction } from "react";

interface NightModeContextType {
    nightMode: boolean;
    setNightMode: Dispatch<SetStateAction<boolean>>; 
}

const NightModeContext = createContext<NightModeContextType | undefined>(undefined);

export const NightModeProvider = ({ children }: { children: React.ReactNode }) => {
    const [nightMode, setNightMode] = useState(true);

    return (
        <NightModeContext.Provider value={{ nightMode, setNightMode }}>
            {children}
        </NightModeContext.Provider>
    );
}

export const useNightMode = () => {
    const context = useContext(NightModeContext);
    if (!context) {
        throw new Error('useNightMode must be used within a NightModeProvider');
    }
    return context;
}