import Image from "next/image";
import gradpic from "../../public/gradpic.jpg"
import { Document, Page} from "react-pdf";
import { ImMail4, ImLinkedin } from "react-icons/im";


const Resume = () => {
    return (
        <main className="flex flex-col justify-evenly items-start w-screen px-14 py-8 pt-28 h-screen sm:h-fit">
            <h2 className="text-3xl xl:text-4xl font-bold text-start self-baseline text-black dark:text-white">
                My Resume
            </h2>

            <h3 className="text-black dark:text-white mt-3 mb-1">
                For more information or inqueries, contact me on LinkedIn or via E-Mail.
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 text-gun-metal dark:text-white">
                <a href="mailto:ghalvarez0@gmail.com" target="_blank" className="flex hover:text-yellow justify-start items-center">
                    <ImMail4 size={20}/> <p className="mx-3">ghalvarez0@gmail.com</p>
                </a>
                <a href="https://www.linkedin.com/in/gabriela-h-alvarez/" target="_blank" className="flex hover:text-yellow justify-start items-center">
                    <ImLinkedin size={20}/> <p className="ml-3">linkedin.com/in/gabriela-h-alvarez/</p>
                </a>
            </div>

            {/* <Document file='/GabrielaAlvarez_resume1.pdf'>
                <Page pageNumber={1}></Page>
            </Document> */}

            <div className="self-center h-108 sm:h-152 w-11/12 my-10 rounded border-8 border-gun-metal dark:border-ghost-white">
                <iframe src="https://drive.google.com/file/d/17ei-DDhUN-x6uzNOa1HmL_64wsan5H7d/preview" width="100%" height="100%" allow="autoplay"></iframe>
            </div>

            {/* <iframe src="https://scratch.mit.edu/projects/916662409/embed" allowtransparency="true" width="385" height="202" frameborder="0" scrolling="no" allowfullscreen></iframe> */}
        </main>
    );
};

export default Resume;