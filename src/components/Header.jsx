import { useEffect, useState } from "react";
import IconMoon from "./icons/IconMoon";
import IconSun from "./icons/IconSun";

const inicialStateDarkMode = localStorage.getItem("theme") === "dark";                                    // Video 111 (DarkMode: Detectar sistema operativo)

const Header = () => {                                                                                    // video 98 (modularizar parte 1)
    const [darkMode, setDarkMode] = useState(inicialStateDarkMode);                                       // Video 108 (Darkmode luna y sol)

    useEffect(() => {                                                                                     // video 109 (DarkMode: Cambiar con boton)
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <header className="container mx-auto px-4 pt-8 md:max-w-xl">
            <div className="flex justify-between">
                <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
                    Todo
                </h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <IconSun /> : <IconMoon />}                                                 {/* Video 108 (Darkmode luna y sol) */} 
                </button>
            </div>
        </header>
    );
};

export default Header;