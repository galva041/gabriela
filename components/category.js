
const Category = ({name}) => {
    return (
        <button className="rounded-md bg-ghost-white hover:bg-yellow">
            <input className="hidden" type="radio" id={{name}} name="row1" />
            <label className="xl:text-lg sm:text-base text-sm font-medium text-center text-black mx-3 my-1"
            htmlFor={{name}}>
                {name}
            </label>
        </button>
    )
};

export default Category;