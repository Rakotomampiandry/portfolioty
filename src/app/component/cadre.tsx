import AOS from 'aos';
import 'aos/dist/aos.css';
import { IconType } from "react-icons";

interface CadreProps {
  Icon?: IconType; 
  divClassName?: string; 
  iconClassName?: string
}

export function Cadre({Icon, divClassName, iconClassName}: CadreProps){
    return(
        <div className={`grid place-items-center rounded-2xl bg-none border-2 border-[#9936AF] blur-[1.5px] border-b-0 ${divClassName}`}>
          {Icon && <Icon className={`text-[#9936AF] w-[50%] h-[50%] ${iconClassName}`}  />}
        </div>
    )
}

export function CadreShadow({Icon, divClassName, iconClassName}: CadreProps){
  return(
      <div className={`grid place-items-center rounded-2xl bg-none shadow-[inset_0_8px_8px_-8px_#9936AF,_inset_8px_0_8px_-8px_#9936AF,_inset_-10px_0_8px_-8px_#9936AF] blur-[1px] ${divClassName}`}>
          {Icon && <Icon className={`text-[#aa7ab5] opacity-50 w-[50%] h-[50%] ${iconClassName}`}  />}
      </div>
  )
}

interface CadreTechnlogie{
  Icon?: IconType; 
  Icon1?: IconType;
  Icon2?: IconType;
  Titre?: string;
  divClassName?: string; 
  iconClassName?: string;
  animation?: string
}

export function CadreTech({Icon, Icon1, Icon2, Titre, divClassName, iconClassName, animation}: CadreTechnlogie){
  return(
    <div className="bg-[#171028] bg-opacity-60 w-full h-[25vh] rounded-xl border-t-2 border-t-violeta border-opacity-30 blur-[0.5px]" data-aos={animation}>
        <p className="text-white font-bold mt-[3%] float-left ml-[5%] text-[12px] md:text-[15px]">{Titre}</p>
        <div className="w-[4vh] h-[2px] bg-white bg-gradient-to-r from-[#9936AF] to-[#fff] mt-[8%] ml-[5%] rounded-xl md:mt-[8%] md:w-[4vh]"></div>

        <div className="flex place-content-center  space-x-[5%] text-white text-[70px] blur-[1.5px] mt-[12%] md:text-[100px] md:mt-[10%]">
          {Icon && <Icon className={`${iconClassName} animate-float [animation-duration:2.5s]`}/>}
          {Icon1 && <Icon1 className={`${iconClassName} animate-float [animation-duration:2s]`}/>}
          {Icon2 && <Icon2 className={`${iconClassName} animate-float [animation-duration:2.5s]`}/>}
        </div>
    </div>
  )
}

interface cadreSkil{
  alt?: string;
  titre?: string;
  text?: string;
  image?: string
  classImage?: string
}

export function CadreSkil({alt, titre, text, image, classImage}:cadreSkil){
  return(
    <div className="bg-[#1A122E] bg-opacity-30 rounded-xl backdrop-blur-xl w-full py-[10%] flex flex-col items-center justify-center lg:py-[8%]">
      <img src={image} alt={alt} className="w-[50%] mb-4 lg:w-[30%]" />
      <div className="text-white text-start ml-[-20%] lg:ml-[-50%] lg:mt-[5%]">
        <p className="font-bold text-[12px] lg:text-[15px]">{titre}</p>
        <p className="text-[10px] opacity-80 lg:text-[12px]">{text}</p>
      </div>
    </div>

  )
}