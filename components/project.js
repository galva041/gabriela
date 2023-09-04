import gradpic from "../public/gradpic.jpg"
import Image from "next/image";
import Skill from "./skill";
import { IoMdOpen } from "react-icons/io";

const Project = ({name}) => {
    var projTime = 'error - time';
    var projLinks = ['error - link'];
    var projLinkDesc = ['error - linkDesc'];
    var projDesc = 'error - desc';
    var projConts = ['error - contributions'];
    var projTools = ['error - tools'];
    
    switch(name) {
        case 'My Portfolio':
            projTime = '2023';
            projLinks = [''];
            projLinkDesc = ['You are here.'];
            projDesc = "My personal website to showcase my projects and skills.";
            projConts = ['Designed, developed, and deployed full-stack, cross-platform website.', 
            'Utilized Spotify Web API.', 'Continously updates and re-designs.', 
            'Light and dark mode development.']
            projTools = ['Next.js', 'JavaScript', 'Tailwind', 'CSS', 'HTML', 'Figma'];
            break;
        case 'StudyMates!':
            projTime = 'Fall 2022 - Winter 2023';
            projLinks = ['https://drive.google.com/file/d/1MAS2dJy8uLlLVPGiHDmMTKwPlyQI4dTV/view', 'https://github.com/galva041/StudyMates-App.git'];
            projLinkDesc = ['Demo', 'Github',];
            projDesc = "Pomodoro timer app with virtual pet game incentives- complete focus cycles, earn coins, buy items for pet.";
            projConts = ['Lead UI design.', 
            'Collaborated in creating reusable components for team.', 
            'Implemented CRUD operations on Firestore user documents displayed in real-time.'
            ];
            projTools = ['React Native', 'Google Firebase', 'NativeWind', 'StyleSheet', 'Figma'];
            break;
        case 'tagAlong':
            projTime = 'Aug 2022';
            projLinks = ['https://tags-5903e.web.app/'];
            projLinkDesc = ['Live Site'];
            projDesc = "An improved college club search web page that connects club signees for companionship to meetings.";
            projTools = ['Vue.js', 'JavaScript','HTML', 'CSS', 'Google Firebase'];
            projConts = ['Collaborated in composing Firestore Database for easy access and future scalability.', 
            'Implemented reusable components and queries.', 
            'Preformed CRUD operations on Firestore documents.'
            ];
            break;
        case 'R\'Steam':
            projTime = 'Spring 2022';
            projLinks = ['https://github.com/galva041/CS180SteamDatabaseWeb.git'];
            projLinkDesc = ['GitHub'];
            projDesc = "A Steam Game Database search platform to search and favorite your games.";
            projTools = ['Django', 'Python', 'HTML', 'CSS', 'NumPy'];
            projConts = ['Collaborated on preforming CRUD operations on data imported from csv.', 
            'Implemented data visualizations using NumPy library.'];
            break;
        case 'Smart Water Bottle':
            projTime = 'Spring 2022';
            projLinks = ['https://docs.google.com/document/d/1XRdUJLtG0ThLmGdhyGgaA7LjNVTf63NwWW8Jivmaxgc/edit?usp=sharing'];
            projLinkDesc = ['Documentation'];
            projDesc = "Water bottle that tracks water intake and motivates you to drink water.";
            projTools = ['Arduino Nano', 'LCD Screen'];
            projConts = ['Implemented daily water intake tracking using float switches, LCD screen, button, and blinking LED.', 
            'Tested and ensured proper functioning of all components.', 
            'Overcame challenges by researching and pivoting to different hardware.'
            ];
            break;
        default:
    }

    return (
        <div className="group flex flex-col justify-between hover:justify-evenly items-center h-96 w-72 rounded-md bg-periwinkle hover:bg-yellow dark:bg-med-gray drop-shadow-md">
                {/* <div className="h-3/4 w-full rounded-t-md bg-gray-600 group-hover:h-2/4"></div> */}

                <Image
                    alt="graduation picture"
                    src={gradpic}
                    className="object-cover object-center h-3/4 w-full rounded-t-md bg-gray-600 group-hover:hidden"
                />

                <h2 className="text-xl pb-9 font-bold text-black dark:text-white group-hover:hidden">
                    {name}
                </h2>
                
                <div className="hidden group-hover:flex group-hover:flex-col h-[95%] w-[87%] justify-around items-center">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-xl font-bold text-black dark:text-white">
                            {name}
                        </h2>
                        <p className="italic text-sm">{projTime}</p>

                        <h3 className="flex text-black text-base text-center dark:text-white">
                            {projLinks.map((link, index) => (
                                <a href={link} target="_blank" className="flex items-center hover:text-yellow" key={index}>
                                    {projLinkDesc[index]} 
                                    <IoMdOpen className="mx-1"/>
                                </a>
                            ))}  
                        </h3>
                    </div>
                    
                    <div>
                        <h3 className="text-black text-sm font-semibold pb-2 text-left dark:text-white">
                            {projDesc}
                        </h3>

                        <h3 className="text-black text-xs text-left dark:text-white">
                            <ul className="list-disc pl-1.5 pr-1">
                                {projConts.map((cont) => (
                                <li className="py-0.5">{cont}</li>
                                ))} 
                            </ul>
                        </h3>
                    </div>

                    <div className="grid grid-cols-3 gap-1">
                        {projTools.map((skillProp) => (
                            <Skill skill={skillProp} />
                        ))}
                    </div>
                </div>
        </div>
    )
};

export default Project;