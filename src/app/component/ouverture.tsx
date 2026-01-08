import { AiFillGithub } from "react-icons/ai";
import { BiCodeAlt } from "react-icons/bi";


export function Ouverture() {
    return (
        <div className="bg-gradient-to-r from-[#000000] to-[#0D0716] h-screen flex items-center justify-center">
            <div className="relative w-[50vh] h-[50vh] rounded-full bg-transparent border-2 border-violeta blur-[1px] animate-spin-slow">
                {/* Icône qui tourne */}
                <div className="absolute top-1/2 left-1/2 
                    -translate-x-1/2 -translate-y-[25vh]">
                    <div className="bg-[#401A49] bg-opacity-50 
                        w-[6vh] h-[6vh] 
                        flex justify-center items-center 
                        rounded-md mt-[-5%]">
                        <AiFillGithub className="text-violeta text-[30px]" />
                    </div>
                </div>
            </div>


            <div className="w-[70vh] h-[70vh] ml-[-31%] rounded-full bg-transparent border-2 border-violeta absolute blur-[1.5px]"></div>
            <div className="w-[70vh] h-[70vh] ml-[31%] rounded-full bg-transparent border-2 border-violeta absolute blur-[1.5px]"></div>

            <BiCodeAlt className="absolute z-10 text-[200px] text-violeta blur-[2px]" />
        </div>
    )
}