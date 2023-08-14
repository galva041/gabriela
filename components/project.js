
const Project = ({name, desc, tools}) => {
    return (
        <button className="group flex flex-col justify-between items-center gap-2 h-96 w-72 rounded-md bg-periwinkle hover:bg-yellow dark:bg-med-gray drop-shadow-md">
            <div className="h-3/4 w-full rounded-t-md bg-gray-600 group-hover:h-2/4"></div>
            
            <div className="text-center">
                <h2 className="mb-8 text-lg font-bold text-black dark:text-white h-1/4 ">
                    {name}
                </h2>
                
                {/* <h3 className="text-black text-sm text-left dark:text-white group-hover:h-1/4">
                    {desc}
                </h3> */}
            </div>
        </button>
    )
};

export default Project;