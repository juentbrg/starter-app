"use client"

import {useEffect, useState} from "react";
import {useTheme} from "next-themes"

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    const setDarkTheme = () => {
        if (resolvedTheme === "light") {
            setTheme("dark")
        }
    }

    const setLightTheme = () => {
        if (resolvedTheme === "dark") {
            setTheme("light")
        }
    }

    let isDarkTheme = resolvedTheme === "dark";

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <section>
            {isDarkTheme ?
            <button onClick={setLightTheme}>set light</button> : <button onClick={setDarkTheme}>set dark</button>
            }
        </section>
    )
}

export default ThemeSwitcher;