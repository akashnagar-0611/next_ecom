"use client"

import { error } from "console";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    resolvedTheme: "light" | "dark"
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
    const [theme, setTheme] = useState<Theme>("system");
    const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as Theme | null;
        const initialTheme = savedTheme || 'system'
        setTheme(initialTheme);
    }, [])

    useEffect(() => {
        const mediaQuery = window.matchMedia(
            "(prefers-color-scheme: dark)"
        );

        const applyTheme = () => {
            const resolved =
                theme === "system"
                    ? mediaQuery.matches ? "dark" : "light"
                    : theme;

            setResolvedTheme(resolved);

            document.documentElement.setAttribute(
                "data-theme",
                resolved
            );
        };

        applyTheme();

        mediaQuery.addEventListener("change", applyTheme);

        return () => {
            mediaQuery.removeEventListener("change", applyTheme);
        };
    }, [theme]);

    const updateTheme = (newTheme: Theme) => {
        localStorage.setItem("theme", newTheme);
        setTheme(newTheme)
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme: updateTheme,
                resolvedTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    )
}

export function useTheme(){
    const context = useContext(ThemeContext)

    if(!context){
        throw new Error(
            "useTheme must be used inside Themeprovide"
        );
    }

    return context;
}