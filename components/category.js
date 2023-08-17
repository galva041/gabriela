
const Category = ({name}) => {
    return (
        <button className="rounded-md bg-ghost-white hover:bg-yellow">
            <h5 className="xl:text-lg sm:text-base text-sm font-medium text-center text-black mx-3 my-1">
                {name}
            </h5>
        </button>
    )
};

export default Category;