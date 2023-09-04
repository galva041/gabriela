import {FaChevronDown} from 'react-icons/fa'
import {RiArrowRightDoubleFill} from 'react-icons/ri'
import Featured from "@/components/featured"
import Category from '@/components/category'
import Project from '@/components/project'
import Stars from '@/components/stars'
import Typewriter from 'typewriter-effect'
import Link from 'next/link'


export default function Home() {
  return (
    <main className="z-9">
      <section className="flex flex-col justify-around items-center h-screen bg-gradient-radial dark:from-glow-gray dark:to-gun-metal from-gradi-yellow to-powder-blue z-1">
        <Stars className="z-2"/>
        <div className='flex flex-col gap-20 sm:gap-5 justify-between'>
          <h1 className="z-9 text-center text-7xl text-black dark:text-white">
            Gabriela Alvarez
          </h1>

          <h3 className="font-worksans text-center text-2xl sm:text-3xl dark:text-yellow text-glow-gray">
            <Typewriter
              options={{
                strings: ['Software Engineer', 'Educator', 'Southern California'],
                autoStart: true,
                loop: true,
              }}
            />
          </h3>
        </div>

        <div className='hidden sm:flex flex-col gap-3 invisible sm:visible'>
          <h4 className="text-lg text-start font-karla font-medium ml-1 text-black dark:text-white">
            Featured Work
          </h4>

          <div className='flex gap-10'>
            <Featured name="StudyMates!" type="React Native App"/>
            <Featured name="tagAlong" type="Vue.js Website"/>
          </div>

          <div className='flex items-center ml-1 text-black dark:text-white'>
            <Link href="/#work"><FaChevronDown className='animate-bounce'/></Link>
            <hr className="h-px w-full ml-3 mr-1 border-0 bg-black dark:bg-white"/>
          </div>
        </div>

        <div className='flex justify-center items-center text-black dark:text-white sm:hidden mb-5 mt-36'>
          <hr className="h-0.5 w-24 border-0 bg-black dark:bg-white"/>
          <Link href="/#work"><FaChevronDown className='animate-bounce mx-5'/></Link>
          <hr className="h-0.5 w-24 border-0 bg-black dark:bg-white"/>
        </div>
      </section>

      <section id="work" className='flex flex-col px-14 py-10 justify-between items-center'>
        <h2 className='text-3xl xl:text-4xl font-bold text-start self-baseline mt-14 mb-2.5 text-black dark:text-white'>
          Work
        </h2>

        <h3 className='text-md sm:text-lg text-start self-baseline text-black dark:text-white'>
          Click any for a description and links to visit the GitHub and/or Demo.
        </h3>
        
        <div className='flex gap-2 my-5 self-baseline'>
          <Category name="All"/>
          <Category name="Web Dev"/>
          <Category name="App Dev"/>
          <Category name="Embedded Systems"/>
          <Category name="Data"/>
        </div>
        
        <div className='my-5 mb-5 grid gap-10 grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
          <Project name="My Portfolio"/>
          <Project name="StudyMates!"/>
          <Project name="tagAlong"/>
          <Project name="R'Steam"/>
          <Project name="Smart Water Bottle"/>
        </div>

        <a className='flex justify-center items-center px-10 py-7 rounded-md bg-yellow hover:bg-gradi-yellow drop-shadow-lg'
        target="_blank" href="https://github.com/galva041">
          <h2 className="text-lg font-bold text-black">
            GitHub
          </h2>
          <RiArrowRightDoubleFill size={25}/>
        </a>
      </section>
    </main>
  )
}
