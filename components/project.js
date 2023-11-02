import gradpic from "../public/gradpic.jpg"
import Image from "next/image";
import Skill from "./skill";
import { IoMdOpen } from "react-icons/io";
import portfolio_dark from "../public/portfolio_dark.png"
import portfolio_light from "../public/portfolio_light.png"
import rsteam from "../public/rsteam.png"
import tags from "../public/tags.png"
import studymates from "../public/studymates.png"
import design from "../public/design.png"

const Project = ({name}) => {
    var pic = 0;
    var projRole = 'error - role';
    var projTime = 'error - time';
    var projLinks = ['error - link'];
    var projLinkDesc = ['error - linkDesc'];
    var projDesc = 'error - desc';
    var projConts = ['error - contributions'];
    var projTools = ['error - tools'];
    
    switch(name) {
        case 'My Portfolio':
            pic = 1;
            projRole = 'Front-End Engineer';
            projTime = '2023';
            projLinks = ['/'];
            projLinkDesc = ['You are here.'];
            projDesc = "My personal website to showcase my projects and skills.";
            projConts = ['Designed, developed, and deployed full-stack, cross-platform website.', 
            'Utilized breakpoints to ensure responsive design across screen-sizes.',
            'Implemented light / dark mode based on system settings.']
            projTools = ['Next.js', 'JavaScript', 'Tailwind', 'CSS', 'HTML', 'Figma'];
            break;
        case 'StudyMates!':
            pic = 2;
            projRole = 'Full-Stack Developer';
            projTime = 'Fall 2022 - Winter 2023';
            projLinks = ['https://drive.google.com/file/d/1MAS2dJy8uLlLVPGiHDmMTKwPlyQI4dTV/view', 'https://github.com/galva041/StudyMates-App.git'];
            projLinkDesc = ['Demo', 'Github',];
            projDesc = "Pomodoro timer app with virtual pet game incentives.";
            projConts = ['Led UI design of 5+ screen app.', 
            'Developed home, timer screens, analytics, and settings screens.', 
            'Collaborated composing Firebase document system.',
            'Implemented CRUD operations on database ensuring dynamic data display of user info.',
            ];
            projTools = ['React Native', 'Google Firebase', 'NativeWind', 'StyleSheet', 'Figma'];
            break;
        case 'tagAlong':
            pic = 3;
            projRole = 'Full-Stack Developer';
            projTime = 'Aug 2022';
            projLinks = ['https://tags-5903e.web.app/'];
            projLinkDesc = ['Live Site'];
            projDesc = "College club website that connects club signees for companionship to meetings.";
            projTools = ['Vue.js', 'JavaScript','HTML', 'CSS', 'Google Firebase'];
            projConts = ['Collaborated composing database fostering easy access and future scalability.', 
            'Implemented components and No-SQL Firebase queries utilized by team across website.', 
            'Developed key feature of club category to club name filtering using said queries.'
            ];
            break;
        case 'R\'Steam': 
            pic = 4;
            projRole = 'Full-Stack Developer';
            projTime = 'Spring 2022';
            projLinks = ['https://github.com/galva041/CS180SteamDatabaseWeb.git'];
            projLinkDesc = ['GitHub'];
            projDesc = "Steam game database page to search and favorite your games.";
            projTools = ['Django', 'Python', 'HTML', 'CSS', 'NumPy'];
            projConts = ['Displayed Steam game data from a Kaggle .csv file.',
            'Preformed CRUD operations on user\'s searched and favorited games list.', 
            'Implemented game platform bar chart and game developer pie chart to visualize data.'];
            break;
        case 'Design@UCR':
            pic = 5;
            projRole = 'Front-End Engineer';
            projTime = 'Spring 2023';
            projLinks = ['https://www.designatucr.com/'];
            projLinkDesc = ['Live Site (updated since)'];
            projDesc = "Website for UC Riverside's student club that focuses on UI/UX and web design.";
            projTools = ['Next.js', 'JavaScript', 'Tailwind', 'CSS', 'HTML', 'Figma'];
            projConts = ['Implemented the About page Figma designs using Next.js, JavaScript, and Tailwind CSS.',
            'Ensured reactivity to different screen sizes and devices utilizing breakpoints.', 
            'Assisted teammates with troubleshooting Git obstacles and initializing project.', 
            ];
            break;
        default:
    }

    return (
        <div className="group flex flex-col justify-between hover:justify-evenly items-center h-96 w-72 rounded-md bg-periwinkle hover:bg-yellow dark:bg-med-gray dark:hover:bg-yellow drop-shadow-lg">
                {/* <div className="h-3/4 w-full rounded-t-md bg-gray-600 group-hover:h-2/4"></div> */}

                <Image
                    alt="graduation picture"
                    src={pic == 1? portfolio_light : pic == 2? studymates : pic == 3? tags : pic == 4? rsteam : design}
                    className="object-scale-down object-center p-3 h-4/6 w-full rounded-t-md bg-gray-600 group-hover:hidden"
                />
                <div className="px-2.5 pb-6 justify-center items-start">
                    <h2 className="text-xl font-bold text-black dark:text-white group-hover:hidden">
                        {name}
                    </h2>

                    <h4 className="text-gray-400 text-sm text-left group-hover:hidden">
                        {projRole}
                    </h4>
                    
                    <h3 className="text-black dark:text-white text-sm text-left group-hover:hidden">
                        {projDesc}
                    </h3>
                </div>
                
                <div className="hidden group-hover:flex group-hover:flex-col h-[95%] w-[87%] justify-around items-center">
                    <div className="flex flex-col justify-center items-center">
                        <h2 className="text-xl font-bold text-black">
                            {name}
                        </h2>
                        <p className="italic text-sm dark:text-black">{projTime}</p>

                        <h3 className="flex text-black text-base text-center">
                            {projLinks.map((link, index) => (
                                <a href={link} target="_blank" className="flex items-center dark:hover:text-periwinkle" key={index}>
                                    {projLinkDesc[index]} 
                                    <IoMdOpen className="mx-1"/>
                                </a>
                            ))}  
                        </h3>
                    </div>
                    
                    <div>
                        

                        <h3 className="text-black text-sm text-left">
                            <ul className="list-disc pl-1.5 pr-1">
                                {projConts.map((cont) => (
                                <li className="py-0.5" key={cont}>{cont}</li>
                                ))} 
                            </ul>
                        </h3>
                    </div>

                    <div className="grid grid-cols-3 gap-1">
                        {projTools.map((skillProp) => (
                            <Skill skill={skillProp} key={skillProp}/>
                        ))}
                    </div>
                </div>
        </div>
    )
};

export default Project;