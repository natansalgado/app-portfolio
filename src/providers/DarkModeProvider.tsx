
import React, { createContext, useContext, useState } from 'react';

const DarkModeContext = createContext({ darkMode: false, toggleDarkMode: () => { } });

export const DarkModeProvider = ({ children }: any) => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode((prevDarkMode) => !prevDarkMode);
    };

    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    return context;
};