import { AiOutlineHtml5 } from "react-icons/ai"; 
import { SiMysql } from "react-icons/si"; 
import { CgFigma } from "react-icons/cg"; 
import { SiPostgresql } from "react-icons/si"; 
import { IoLogoNodejs } from "react-icons/io"; 
import { DiNodejs } from "react-icons/di"; 
import { SiTailwindcss } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";

export function Skil() {
    return (
        <div className="overflow-hidden relative bg-black h-[20vh] flex items-center justify-center">
            <div className="flex animate-scroll opacity-50 space-x-[5%] lg:hidden">
                <GrReactjs className="text-white text-[10vh] blur-[1.5px]" />
                <TbBrandNextjs className="text-white text-[10vh] blur-[1.5px]" />
                <SiNestjs className="text-white text-[10vh] blur-[1.5px]" />
                <SiTailwindcss className="text-white text-[10vh] blur-[1.5px]" />
                {/* répète les icônes pour que le scroll soit continu */}
                <GrReactjs className="text-white text-[10vh] blur-[1.5px]" />
                <TbBrandNextjs className="text-white text-[10vh] blur-[1.5px]" />
                <SiNestjs className="text-white text-[10vh] blur-[1.5px]" />
                <SiTailwindcss className="text-white text-[10vh] blur-[1.5px]" />
            </div>

            <div className="hidden lg:flex space-x-[5%] opacity-50">
                <GrReactjs className="text-white text-[15vh] blur-[1.5px] animate-float [animation-duration:2s]"/>
                <TbBrandNextjs className="text-white text-[15vh] blur-[1.5px] animate-float [animation-duration:2.5s]" />
                <SiNestjs className="text-white text-[15vh] blur-[1.5px] animate-float [animation-duration:2s]" />
                <SiTailwindcss className="text-white text-[15vh] blur-[1.5px] animate-float [animation-duration:2.5s]" />
                <DiNodejs className="text-white text-[15vh] blur-[1.5px] animate-float [animation-duration:2s]"/>
                <IoLogoNodejs className="text-white text-[15vh] blur-[1.5px] animate-float [animation-duration:2.5s]"/>
                <SiPostgresql className="text-white text-[15vh] blur-[1.5px] animate-float [animation-duration:2s]"/>
                <CgFigma className="text-white text-[15vh] blur-[1.5px] animate-float [animation-duration:2.5s]"/>
                <SiMysql className="text-white text-[15vh] blur-[1.5px] animate-float [animation-duration:2s]"/>
                {/* répète les icônes pour que le scroll soit continu */}
            </div>
        </div>
    )
}