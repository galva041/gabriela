import Link from "next/link";
import Image from "next/image";
import mates from "../public/mates.png"
import smile from "../public/smile.png"

const Featured = ({name, type}) => {
    
    return (
        <Link href="/#projects">
        <button className="flex justify-evenly items-center h-24 w-56 border border-black dark:border-white rounded-lg hover:bg-gradient-to-r hover:from-yellow hover:to-gradi-yellow hover:dark:text-black dark:text-white text-black drop-shadow-sm">
            
            <div className="h-16 w-16 rounded-full bg-gray-500 relative">
                <Image
                    src={name === 'tagAlong'? smile : mates}
                    alt="Picture of the mates"
                    className="object-fill rounded-full"
                />
            </div>
            <div>
                <h4 className="w-32 text-md text-start font-karla font-bold">
                    {name}
                </h4>
                <h5 className="w-32 text-sm text-start font-worksans">
                    {type}
                </h5>
            </div>
            
        </button>
        </Link>
    )
};

export default Featured;
