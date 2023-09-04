import React from "react";
import {ImHeart, ImLinkedin, ImGithub, ImMail4,ImSpotify} from "react-icons/im"

const Footer = () => {
    return (
        <footer className="flex flex-col justify-center bottom-0 h-28">
            <ul className="flex justify-center mb-4">
                <li><a href="https://www.linkedin.com/in/gabriela-h-alvarez/" target="_blank"><ImLinkedin size={25}/></a></li>
                <li><a href="https://github.com/galva041" target="_blank"><ImGithub size={25}/></a></li>
                <li><a href="mailto:ghalvarez0@gmail.com" target="_blank"><ImMail4 size={25}/></a></li>
                <li><a href="https://open.spotify.com/user/alvarezgabriela-us?si=8f6f022b74114c18" target="_blank"><ImSpotify size={25}/></a></li>
            </ul>

            <div className="flex justify-center">
                <h1 className="font-worksans text-sm font-bold">
                    Made by Gaby with 
                </h1>
                <ImHeart className="mx-2"/>
                <h1 className="font-worksans text-sm font-semibold">
                    2023
                </h1>
            </div>
        </footer>
    )
};

export default Footer;