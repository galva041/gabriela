import Link from "next/link";

const Featured = ({name, type}) => {
    return (
        <Link href="/#work">
        <button className="flex justify-evenly items-center h-24 w-52 border border-black dark:border-white rounded-lg hover:bg-gradient-to-r hover:from-yellow hover:to-gradi-yellow hover:dark:text-black dark:text-white text-black drop-shadow-sm">
            
            <div className="h-16 w-16 rounded-full bg-gray-500"></div>
            <div>
                <h4 className="w-28 text-md text-start font-karla font-bold">
                    {name}
                </h4>
                <h5 className="w-28 text-sm text-start font-worksans">
                    {type}
                </h5>
            </div>
            
        </button>
        </Link>
    )
};

export default Featured;