import Image from "next/image";
import gradpic from "../../public/gradpic.jpg"
import hobbies from "../../public/hobbies.jpg"
import Iframe from "react-iframe";

const About = () => {
    return (
        <main className="flex flex-col gap-14 justify-center items-center w-screen px-14 py-8 pt-28">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center">
                <h2 className="text-2xl text-center sm:text-start md:hidden font-bold text-black dark:text-white">
                    Welcome!
                </h2>

                <Image
                    alt="graduation picture"
                    src={gradpic}
                    className="object-scale-down h-108 md:h-112 xl:h-120"
                />

                <div className="flex flex-col justify-evenly items-start">
                    <h2 className="hidden md:block sm:text-3xl xl:text-4xl font-bold mb-8 text-black dark:text-white">
                        Welcome!
                    </h2>

                    <p>My name is Gabriela Alvarez. You can call me Gaby.
                    <br/><br/>I am an <span className="font-semibold">educator</span> & <span className="font-bold">software engineer</span> located in Ventura, CA. I recently graduated from the <span className="font-semibold">University of California, Riverside</span> with a B.S. in Computer Science.
                    <br/><br/>I currently work as a <span className="font-semibold">TK-5th grade para educator</span>, where I get to hangout with students and occasionally share my passion and knowledge in Comp Sci through Minecraft coding lessons.
                    <br/><br/>I also do some freelance <span className="font-semibold">web dev</span> on the side :-)</p>
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center">
                <Image
                    alt="hobbies"
                    src={hobbies}
                    className="md:hidden object-scale-down h-112 md:h-120 xl:h-128"
                />

                <div className="flex flex-col justify-evenly items-start">
                    <p>
                        When I am not coding or playing Heads up, 7 up with little kids, I enjoy listening to music, traveling, and picnicking at my current favorite viewpoint.
                        <br/><br/>
                        Through my degree, hobbies, and current positions, I have learned the importance of an <span className="font-semibold">open-mind</span>, <span className="font-semibold">adaptability</span>, and a <span className="font-semibold">positive attitude</span>. I hope to carry on this valuable knowledge to my next team I find on my journey. 
                        <br/><br/>
                        If you’d like to chat some more, feel free to reach me on <span className="font-semibold">LinkedIn</span>!
                    </p>
                </div>

                <Image
                    alt="hobbies"
                    src={hobbies}
                    className="hidden md:block object-scale-down h-112 md:h-120"
                />
            </section>

            <section className="pb-7">
                <p className="text-end mb-2">Check out my current fave tunes :{')'}</p>
                <div className="h-96 w-auto sm:w-96 rounded-xl border-8 border-gun-metal dark:border-ghost-white">
                    <iframe 
                        src="https://open.spotify.com/embed/playlist/0bp2DMNvd1VhdRE7a0vO8H?utm_source=generator&theme=0" 
                        width="100%" 
                        height="100%" 
                        // allowfullscreen="" 
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                        loading="lazy"></iframe>
                </div>
            </section>
        </main>
    );
};

export default About;