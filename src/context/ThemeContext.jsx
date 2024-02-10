"use client";

import { createContext, useState } from 'react';



export const ThemeContext = createContext();

const getFromLocalStorage = () => {
    let theme = 'light';
    if (typeof window !== 'undefined') {
        theme = localStorage.getItem('theme');
    }
    return theme;
};

export const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return getFromLocalStorage();
    });

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}