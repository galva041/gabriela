import React from "react";
import {PiMoonStarsBold,PiSunBold} from "react-icons/pi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const Navbar = () => {
    var [currTheme, setTheme] = useState(null);
    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }

        setTheme(localStorage.theme);
        console.log(currTheme);
    }, []);
    
    // var currTheme = localStorage.theme;

    const setLightTheme = () => {
        localStorage.theme = 'light';
    };

    const setDarkTheme = () => {
        localStorage.theme = 'dark';
    };

    return (
        <header className="flex justify-between items-center h-16 px-4 z-10 sticky top-0">
            <h1 className="font-worksans text-lg font-bold hover:font-extrabold">
                <a href="#">Gabriela Alvarez</a>
            </h1>
            <nav className="justify-self-center">
                <ul className="flex justify-between">
                    <li><a href="#">About</a></li>
                    <li><a href="#">Work</a></li>
                    <li><a href="#">Resume</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>

            {currTheme === 'dark' ? (
                <button onClick={setLightTheme} className="drop-shadow-sm hover:text-yellow">
                    <PiMoonStarsBold color="white" size={25}/>
                </button>
            ): (
                <button onClick={setDarkTheme} className="drop-shadow-sm hover:text-yellow">
                    <PiSunBold color="black" size={25}/>
                </button>
            )}
        </header>
    )
};

export default Navbar;