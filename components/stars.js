import Image from "next/image";
import lgstar from "../public/lgstar.png"
import mdstar from "../public/mdstar.png"
import smstar from "../public/smstar.png"

const Stars = () => {
    return (
        <div>
            <Image
                alt="lgstar"
                src={lgstar} 
                width='100%'
                height='100%'
                className="object-contain z-1 absolute top-[15%] right-[80%] animate-pulse"
            /> 

            <Image
                alt="mdstar"
                src={mdstar} 
                width='100%'
                height='100%'
                className="object-contain z-1 absolute top-[40%] sm:top-[35%] right-[87%] sm:right-[90%] animate-pulse"
            /> 

            <Image
                alt="smstar"
                src={smstar} 
                width='100%'
                height='100%'
                className="object-contain z-1 hidden sm:block absolute top-[58%] right-[80%] animate-pulse"
            /> 

            <Image
                alt="smstar"
                src={smstar} 
                width='100%'
                height='100%'
                className="sm:hidden object-contain z-1 absolute top-[60%] right-[70%] animate-pulse"
            /> 

            <Image
                alt="lgstar"
                src={lgstar} 
                width='100%'
                height='100%'
                className="object-contain z-1 absolute top-[77%] sm:top-[80%] right-[80%] sm:right-[85%] animate-pulse"
            /> 

            

            <Image
                alt="mdstar"
                src={mdstar} 
                width='100%'
                height='100%'
                className="object-contain z-1 absolute top-[13%] left-[80%] animate-pulse"
            /> 

            <Image
                alt="smstar"
                src={smstar} 
                width='100%'
                height='100%'
                className="object-contain z-1 absolute top-[30%] left-[91%] animate-pulse"
            /> 

            <Image
                alt="smstar"
                src={smstar} 
                width='100%'
                height='100%'
                className="sm:hidden object-contain z-1 absolute top-[48%] left-[84%] animate-pulse"
            /> 

            <Image
                alt="lgstar"
                src={lgstar} 
                width='100%'
                height='100%'
                className="hidden sm:block object-contain z-1 absolute top-[52%] left-[80%] animate-pulse"
            /> 

            <Image
                alt="mdstar"
                src={mdstar} 
                width='100%'
                height='100%'
                className="hidden sm:block object-contain z-1 absolute top-[65%] left-[91%] animate-pulse"
            /> 

            <Image
                alt="smstar"
                src={smstar} 
                width='100%'
                height='100%'
                className="object-contain z-1 absolute top-[58%] sm:top-[84%] left-[70%] sm:left-[90%] animate-pulse"
            /> 

            <Image
                alt="lgstar"
                src={lgstar} 
                width='100%'
                height='100%'
                className="sm:hidden object-contain z-1 absolute top-[78%] left-[79%] animate-pulse"
            />
        </div>
    );
};

export default Stars;