import Image from "next/image";
import gradpic from "../../public/gradpic.jpg"
import hobbies from "../../public/hobbies.jpg"
import Iframe from "react-iframe";
import smstar from "../../public/smstar.png"

const About = () => {
    return (
        <main className="flex flex-col gap-14 justify-center items-center w-screen px-8 sm:px-14 py-8 pt-28">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-7 justify-center items-center">
                <div className="flex md:hidden">
                    <h2 className="font-corben text-xl text-start mt-5  font-bold text-black dark:text-white">
                        Hello, friends!
                    </h2>

                    <Image
                        alt="smstar"
                        src={smstar} 
                        width='100%'
                        height='100%'
                        className="object-contain animate-pulse ml-5 mb-2"
                    /> 
                    <Image
                        alt="smstar"
                        src={smstar} 
                        width='100%'
                        height='100%'
                        className="object-contain animate-pulse ml-1 pt-7"
                    />
                </div>

                <h3 className="font-corben text-md text-start md:hidden font-bold text-black dark:text-white">
                    My name is Gabriela Alvarez.<br></br>But my students call me Ms. Gaby.
                </h3>

                {/* <div style={{borderRadius: '5px', overflow: 'hidden'}}>
                    <Image src={gradpic} layout="fill" objectFit="cover" />
                </div> */}
                <Image
                    alt="graduation picture"
                    src={gradpic}
                    className="object-cover h-108 w-3/4 ml-8 md:h-112 xl:h-120 rounded-md"
                />

                <div className="flex flex-col justify-evenly items-start">
                    <div className="justify-center items-center hidden md:flex">
                        <h2 className=" font-corben sm:text-3xl xl:text-4xl font-bold mb-8 text-black dark:text-white">
                            Hello, friends! 
                        </h2>
                        <Image
                            alt="smstar"
                            src={smstar} 
                            width='100%'
                            height='100%'
                            className="object-contain animate-pulse ml-4 mb-2"
                        /> 
                        <Image
                            alt="smstar"
                            src={smstar} 
                            width='100%'
                            height='100%'
                            className="object-contain animate-pulse pb-16 "
                        />
                    </div>

                    <h3 className="hidden md:block font-corben sm:text-lg xl:text-xl font-bold mb-8 text-black dark:text-white">
                        My name is Gabriela Alvarez.<br></br> But my students call me Ms. Gaby. 😊
                    </h3>

                    <p>
                    I am a software engineer & educator located in Ventura, CA. I recently graduated from the University of California, Riverside with a B.S. in Computer Science.
                    <br/><br/>I currently work as a <span className="underline">coding instructor @ codeCampus</span>, where I get to hangout with students and share my passion and knowledge in Comp Sci through Scratch coding lessons.
                    <br/><br/>I also do some freelance web dev on the side :-)</p>
                </div>
            </section>

            <div className='flex justify-center items-center text-black dark:text-white w-screen px-8 sm:px-14'>
                <hr className="h-0.5 w-full border-0 bg-black dark:bg-white"/>
                    <Image
                        alt="smstar"
                        src={smstar} 
                        width='100%'
                        height='100%'
                        className="object-contain animate-pulse mx-5 md:mx-20"
                    />
                <hr className="h-0.5 w-full border-0 bg-black dark:bg-white"/>
            </div>

            {/* className="grid gap-5 grid-cols-1 md:grid-cols-3" */}
            <section className="grid gap-5 md:gap-x-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-3">
                <div className="flex flex-col justify-around w-80 row-span-1 p-5 rounded-md bg-periwinkle drop-shadow-md">
                    <h5 className="font-karla text-md font-semibold">
                        What is my "Why?"
                    </h5>
                    <p className="font-worksans text-sm font-light dark:text-black">The sheer delight of witnessing young minds engaged in learning, and I'm passionate about creating user-friendly platforms for people of all ages, be it my students or my parents. 🤗</p>
                </div>
                <div className="flex flex-col justify-around w-80 row-span-2 p-5 rounded-md bg-periwinkle drop-shadow-md">
                    <h5 className="font-karla text-md font-semibold">
                        Fave tunes?
                    </h5>
                    <iframe src="https://open.spotify.com/embed/playlist/5DKdH64OBHCreu1zn34fwO?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
                <div className="flex flex-col justify-around w-80 row-span-1 p-5 rounded-md bg-periwinkle drop-shadow-md">
                    <h5 className="font-karla text-md font-semibold">
                        Fun Facts!
                    </h5>
                    <ul className="font-worksans text-sm font-light text-black list-disc"><li className="py-0.5">I ran an entire after school program for a couple months.</li> <li className="py-0.5">I studied abroad in Paris, FR 🥖 the summer before my senior year.</li> <li className="py-0.5">I love the beach but I don’t know how to swim.</li></ul>
                </div>
                <div className="flex flex-col justify-around items-center text-start w-80 row-span-2 p-5 rounded-md bg-periwinkle drop-shadow-md">
                    <h5 className="font-karla text-md place-self-start font-semibold">
                        Some Scratch Fun:
                    </h5>

                    <iframe className="mb-0 sm:mb-5 mt-3 sm:mt-0" src="https://scratch.mit.edu/projects/916662409/embed" allowtransparency="true" width="290" height="265" frameborder="0" scrolling="no" allowfullscreen></iframe>
                </div>
                
                <div className="flex flex-col justify-around w-80 row-span-2 p-5 rounded-md bg-periwinkle drop-shadow-md">
                    <h5 className="font-karla text-md font-semibold">
                        Where you can find me:
                    </h5>

                </div>

                <div className="flex flex-col justify-around w-80 row-span-1 p-5 rounded-md bg-periwinkle drop-shadow-md">
                    <h5 className="font-karla text-md font-semibold">
                        How I spend my time:
                    </h5>
                    <p className="font-worksans text-sm font-light dark:text-black">Going on sunset jogs. ☀️ <br/><span className="line-through">TikTok</span><br/>Thrift store shopping.<br/><span className="line-through">Napping</span><br/>Finding viewpoints to picnic at. 🧺</p>
                </div>
            </section>
            
        </main>
    );
};

export default About;