"use client";

import { useTheme } from "@/app/[locale]/context/themeContext";

export default function ThemeToggle() {
    const { theme, setTheme } = useTheme();

    return (
        <div className="theme-toggle">
            <button
                type="button"
                onClick={() => setTheme("light")}
                className={theme === "light" ? "active" : ""}
                aria-label="Light theme"
                aria-pressed={theme === "light"}
                title="Light"
            >
                ☀️
            </button>

            <button
                type="button"
                onClick={() => setTheme("dark")}
                className={theme === "dark" ? "active" : ""}
                aria-label="Dark theme"
                aria-pressed={theme === "dark"}
                title="Dark"
            >
                🌙 
            </button>

            <button
                type="button"
                onClick={() => setTheme("system")}
                className={theme === "system" ? "active" : ""}
                aria-label="System theme"
                aria-pressed={theme === "system"}
                title="System"
            >
                💻
            </button>
        </div>
    );
}