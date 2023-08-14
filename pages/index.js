import {FaChevronDown} from 'react-icons/fa'
import {RiArrowRightDoubleFill} from 'react-icons/ri'
import Featured from "@/components/featured"
import Category from '@/components/category'
import Project from '@/components/project'

export default function Home() {
  return (
    <main className="z-1">
      <section className="flex flex-col justify-evenly items-center h-screen">
        <div className='flex flex-col gap-5'>
          <h1 className="text-center text-7xl text-black dark:text-white">Gabriela Alvarez</h1>
          <h3 className="font-worksans text-center text-3xl dark:text-yellow text-glow-gray">
            Software Engineer
          </h3>
        </div>

        <div className='flex flex-col gap-3'>
          <h4 className="text-lg text-start font-karla font-medium ml-1 text-black dark:text-white">
            Featured Work
          </h4>

          <div className='flex gap-10'>
            <Featured name="StudyMates!" type="React Native App"/>
            <Featured name="tagAlong" type="Vue.js Website"/>
          </div>

          <div className='flex items-center ml-1 text-black dark:text-white'>
            <FaChevronDown/> 
            <hr className="h-px w-full ml-3 mr-1 border-0 bg-black dark:bg-white"/>
          </div>
        </div>
      </section>

      <section className='flex flex-col px-14 py-5 pb-8 justify-between items-center'>
        <h2 className='text-3xl xl:text-4xl font-bold text-start self-baseline mb-2.5 text-black dark:text-white'>
          Work
        </h2>
        
        <div className='flex gap-2 my-5 self-baseline'>
          <Category name="All"/>
          <Category name="Web Dev"/>
          <Category name="App Dev"/>
          <Category name="Embedded Systems"/>
          <Category name="Data"/>
        </div>
        
        <div className='my-5 mb-5 grid gap-10 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
          <Project name="My Portfolio" desc="Connecting college students and organizations more efficiently to further enhance the college experience."/>
          <Project name="StudyMates!" desc="Connecting college students and organizations more efficiently to further enhance the college experience."/>
          <Project name="tagAlong" desc="Connecting college students and organizations more efficiently to further enhance the college experience."/>
          <Project name="R'Steam" desc="Connecting college students and organizations more efficiently to further enhance the college experience."/>
          <Project name="Smart Water Bottle" desc="Connecting college students and organizations more efficiently to further enhance the college experience."/>
        </div>

        <button className='flex justify-center items-center px-10 py-7 rounded-md bg-yellow drop-shadow-lg'>
          <h2 className="text-lg font-bold text-black">
             GitHub
          </h2>
          <RiArrowRightDoubleFill size={25}/>
        </button>
      </section>
    </main>
  )
}
