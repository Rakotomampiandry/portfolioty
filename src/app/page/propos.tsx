import React, { useEffect, useRef, useState } from "react";
import { CadreShadow, CadreTech } from "../component/cadre";
import { SiMysql } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { DiNodejs } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CgFigma } from "react-icons/cg";

export function Propos(){
      // Animation AOS
      useEffect(() => {
        AOS.init({ duration: 1200, once: false });
    
        return () => {
          AOS.refresh();
        }
      }, []);
    
      // Animation pulsation
      const ref = useRef(null);
      const [play, setPlay] = useState(false);
    
      useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setPlay(true);
            } else {
              setPlay(false);
            }
          },
          { threshold: 0.4 }
        );
    
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
      }, []);
    
      // Modal
      const [open, setOpen] = useState(false);

    return(
        <div className="">
            <p className="text-white font-bold text-[20px] md:text-[25px] lg:text-[30px] lg:text-left md:text-left md:ml-[10%] lg:ml-[13%]">A propos<span className="bg-gradient-to-r from-[#ffff] to-[#9936AF] bg-clip-text text-transparent"> du Mickaël</span></p>
            <div className="w-[10vh] h-[2px] bg-white mx-auto bg-gradient-to-r from-[#9936AF] to-[#fff] mt-[3%] mb-[5%] rounded-xl md:mt-[4%] md:mb-[2%] md:mx-0 md:ml-[10%] lg:mx-0 lg:ml-[13%] lg:mt-[1%]"></div>
            <div className="">
                <div className=" lg:pr-[38%]">
                    <p className="text-white opacity-90 text-justify text-[14px] px-[6%] md:text-[15px] md:px-[15%] lg:px-[20%] lg:pr-[25%]">Développeur web passionné par l’univers du digital et les technologies modernes. Mon parcours m’a permis d’acquérir une solide expérience dans la conception et le développement de solutions web performantes, alliant interfaces intuitives, architectures efficaces et respect des bonnes pratiques en matière d’accessibilité et de responsive design.</p>
                    <p className="text-white opacity-90 text-[14px] text-justify px-[6%] mt-3 md:text-[15px] md:px-[15%] lg:px-[20%] lg:pr-[25%]">Curieux et en constante veille technologique, j’accorde une grande importance à la qualité du code, à l’optimisation des performances et à l’accessibilité, afin de proposer des expériences numériques cohérentes, modernes et durables.</p>
                </div>

                <div className="mt-[10%] px-[5%] space-y-[5%] md:px-[15%] md:mt-[5%] lg:hidden">
                    <CadreTech
                        Titre="Frontend"
                        Icon={GrReactjs}
                        Icon1={SiTailwindcss}
                        Icon2={TbBrandNextjs}
                        animation="fade-left"
                    />

                    <CadreTech
                        Titre="Backend"
                        Icon={DiNodejs}
                        Icon1={SiNestjs}
                        iconClassName="text-[80px]"
                        animation="fade-right"
                    />

                    <CadreTech
                        Titre="Base de données"
                        Icon={SiMysql}
                        Icon1={SiPostgresql}
                        animation="fade-up"
                    />
                </div>

                <div className="hidden md:hidden lg:block" ref={ref}>
                    <CadreShadow Icon={SiMysql} divClassName={`w-[20vh] h-[20vh] ml-[55%] mt-[-15%] absolute ${play ? "animate-pulseGlow [animation-iteration-count:1]" : ""}`} />
                    <CadreShadow Icon={CgFigma} divClassName={`w-[20vh] h-[20vh] ml-[61%] mt-[-8%] absolute ${play ? "animate-pulseGlow [animation-iteration-count:2]" : ""}`} />
                    <CadreShadow Icon={SiPostgresql} divClassName={`w-[20vh] h-[20vh] ml-[51%] mt-[-5%] absolute ${play ? "animate-pulseGlow [animation-iteration-count:3]" : ""}`} />
                    <CadreShadow Icon={DiNodejs} divClassName={`w-[20vh] h-[20vh] ml-[57%] mt-[2%] absolute ${play ? "animate-pulseGlow [animation-iteration-count:3]" : ""}`} />
                    <CadreShadow Icon={SiNestjs} divClassName={`w-[20vh] h-[20vh] ml-[68%] mt-[-2%] absolute ${play ? "animate-pulseGlow [animation-iteration-count:1]" : ""}`} />
                    <CadreShadow Icon={TbBrandNextjs} divClassName={`w-[20vh] h-[20vh] ml-[47%] mt-[5%] absolute ${play ? "animate-pulseGlow [animation-iteration-count:1]" : ""}`} />
                    <CadreShadow Icon={GrReactjs} divClassName={`w-[20vh] h-[20vh] ml-[66%] mt-[-18%] absolute ${play ? "animate-pulseGlow [animation-iteration-count:2]" : ""}`} />
                    <CadreShadow Icon={SiTailwindcss} divClassName={`w-[20vh] h-[20vh] ml-[79%] mt-[-5%] absolute ${play ? "animate-pulseGlow [animation-iteration-count:2]" : ""}`} />
                    <CadreShadow Icon={IoLogoNodejs} divClassName={`w-[20vh] h-[20vh] ml-[73%] mt-[-12%] absolute ${play ? "animate-pulseGlow [animation-iteration-count:3]" : ""}`} />
                </div>
            </div>
        </div>
    )
}