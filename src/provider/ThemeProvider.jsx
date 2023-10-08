import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

// eslint-disable-next-line react/prop-types
export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    const toggleTheme = (newTheme) => {
        setTheme(newTheme);
    };

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
