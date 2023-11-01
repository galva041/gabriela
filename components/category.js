
const Category = ({name}) => {
    return (
        <button className="rounded-md bg-yellow hover:bg-ghost-white">
            <input className="hidden" type="radio" id={{name}} name="row1" />
            <label className="xl:text-lg sm:text-base text-sm font-medium text-center text-black mx-3 my-1"
            htmlFor={{name}}>
                {name}
            </label>
        </button>
    )
};

export default Category;