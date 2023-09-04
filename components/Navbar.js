import React from "react";
import Link from 'next/link';
import {PiMoonStarsBold,PiSunBold} from "react-icons/pi";
import {HiMenu, HiX} from "react-icons/hi"
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

const Navbar = () => {
    const router = useRouter();
    var [currTheme, setTheme] = useState(null);
    // useEffect(() => {
    //     if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    //         document.documentElement.classList.add('dark')
    //     } else {
    //         document.documentElement.classList.remove('dark')
    //     }

    //     setTheme(localStorage.theme);
    //     console.log(currTheme);
    // }, []);

    const [mobileNav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!mobileNav)
    };

    const [color, setColor] = useState('transparent');
    const [shadow, setShadow] = useState('0px 0px 0px #262323')
    const [home, setWindow] = useState(true);

    
    const pageChange = (page) => {
        if (page === 'home') {
            // setColor('transparent'),
            setWindow(true)
        } else (
            // setColor('#323743'),
            setWindow(false)
        )
    };
    useEffect(() => {

        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark')
                } else {
                    document.documentElement.classList.remove('dark')
                }
        
                setTheme(localStorage.theme);
                console.log(currTheme);

        const changeColor = (url) => {
            const isLandingPage = (url === '/');
            // console.log(url);

            if (window.scrollY >= 60 || !isLandingPage) {
                setColor('#323743');
                setShadow('0px 5px 10px rgba(0,0,0,0.2)')
            } else if (window.scrollY === 0 && isLandingPage) {
                setColor('transparent');
                setShadow('0px 0px 0px #262323')
            }
        }

        window.addEventListener("scroll", changeColor);
        router.events.on('routeChangeComplete', changeColor);

        // return () => {
        //     router.events.off('routeChangeComplete', changeColor);
        // };
    }, [router.events]);

    const setLightTheme = () => {
        localStorage.theme = 'light';
    };

    const setDarkTheme = () => {
        localStorage.theme = 'dark';
    };

    return (
        <header style={{backgroundColor: `${color}`, boxShadow:`${shadow}`}} className="flex justify-between items-start sm:items-center w-screen h-max pt-10 sm:pt-5 pb-5 px-4 z-10 fixed top-0 sm:top-0 ">
            <h1 className="font-worksans text-lg font-bold hover:font-extrabold hover:text-yellow">
                <Link href="/">Gabriela Alvarez</Link>
            </h1>

            <div className="hidden sm:flex items-end">
                <nav className="justify-self-center">
                    <ul className="flex justify-between">
                        <li><Link href="/about" >About</Link></li>
                        <li><Link href="/#work" >Work</Link></li>
                        <li><Link href="/resume" >Resume</Link></li>
                        {/* <li><a href="#">Contact</a></li> */}
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
            </div>

            <div style={{backgroundColor: `${color}`}} className="sm:hidden flex flex-col justify-end items-end relative ">
                <div>
                    {mobileNav? 
                    <button onClick={handleNav}><HiX color="white" size={25}/></button>
                    : <button onClick={handleNav}><HiMenu color="white" size={25}/></button>}
                </div>

                <div className={mobileNav? "flex flex-col justify-center items-center text-right sm:hidden" : "hidden"}>
                    <nav className="my-2">
                        <ul className="flex flex-col">
                            <li><Link href="/about" onClick={handleNav}>About</Link></li>
                            <li><Link href="/#work" onClick={handleNav}>Work</Link></li>
                            <li><Link href="/resume" onClick={handleNav}>Resume</Link></li>
                            {/* <li><a href="#">Contact</a></li> */}
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
                </div>
            </div>
        </header>
    )
};

export default Navbar;