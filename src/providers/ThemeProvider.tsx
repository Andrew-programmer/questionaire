import {ThemeContext, themes} from "../contexts/ThemeContext";
import React, {ReactNode, useEffect, useState} from "react";

const getTheme = () => {
    const theme = localStorage.getItem('theme');
    if (typeof theme === 'string' && Object.values(themes).includes(theme)) {
        return theme;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: light)');
    if (userMedia.matches) {
        return themes.light;
    }

    return themes.dark;
};

type ThemeProviderProps = {
    children: ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
    const [theme, setTheme] = useState(getTheme());

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme])

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
