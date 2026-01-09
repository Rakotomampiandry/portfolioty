import { AiOutlineGithub } from "react-icons/ai";
import { CgFigma } from "react-icons/cg";
import { FiLinkedin } from "react-icons/fi";
import { TbBrandGmail } from "react-icons/tb";
import { SiWhatsapp } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
import Footer from "../footer/footer";
import Header from "../header/header";
import { Cadre, CadreShadow, CadreTech } from "../component/cadre";
import { Button } from "antd";
import { Skil } from "../component/skil";
import { SiMysql } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { DiNodejs } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import Link from "antd/es/typography/Link";
import { Link as Linke } from "react-router-dom";
import AnimatedText, { AnimatedSection, Anime } from "../component/animation";
import { Service, ServiceP } from "../component/service";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef, useState } from "react";

const Section = ({ id, children, className = '' }: {
  id: string;
  children?: React.ReactNode;
  className?: string;
}) => (
  <section
    id={id}
    className={`relative min-h-screen flex flex-col justify-center px-4 py-20 text-center overflow-hidden ${className}`}
  >
    {children}
  </section>
);

export default function Page() {
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

  return (
    <div className="bg-black">
      <div>
        <header>
          <Header />
        </header>

        {/* Section Accueil */}
        <Section id="home" className="bg-gradient-to-r from-[#000000] to-[#0D0716]">
          <div className="">
            <div className="px-[5%]">
              <div className="lg:text-left md:text-left">
                <p className="text-white font-bold text-[30px]">Rakotomampiandry <span className="bg-gradient-to-r from-[#ffff] to-[#9936AF] bg-clip-text text-transparent">Mickaël</span></p>
                <p className="text-white opacity-80 font-bold text-[25px]">Développeur et designer web</p>
                <p className="text-white text-center text-[15px] px-[10%] mt-[5%] md:text-[15px] md:px-0 md:pr-[35%] md:text-left md:mt-[2%] lg:text-[15px] lg:pr-[60%] lg:mt-[1%]">Développeur et designer, j’allie esthétique, stratégie et technologie pour donner vie à des projets modernes.</p>
              </div>

              <div className="mt-[15%] md:mt-[5%] lg:mt-[2%]">
                <Button className="text-white bg-gradient-to-r from-[#000] to-[#9936AF] border border-white font-bold w-[75%] h-[7vh] rounded-3xl lg:rounded-2xl md:w-[50%] md:h-[5vh] md:ml-[-50%] lg:w-[15%] lg:h-[7vh] lg:ml-[-85%] ">
                  <Link
                    href="/web.pdf"
                    download
                  >
                    Télecharger mon CV
                  </Link>

                </Button>

                <div className="mt-[10%] flex space-x-2 md:mt-[4%] lg:mt-[1.5%]">
                  <div className="p-[2px] rounded-2xl bg-gradient-to-tr w-[18%] from-[#ffff] to-[#9936AF] shadow-[0_0_15px_#9936af55] animate-[gradientMove_4s_ease_infinite] bg-[length:300%_300%] md:w-[10%] lg:w-[4%]">
                    <div className="bg-gradient-to-r from-[#000000] to-[#0D0716] rounded-2xl py-4 px-3 flex items-center justify-center cursor-pointer">
                      <BsFacebook className="  text-white md:w-[10vh]"/>
                    </div>
                  </div>

                  <div className="p-[2px] rounded-2xl bg-gradient-to-tr w-[18%] h-[5%] from-[#9936AF] to-[#fff] shadow-[0_0_15px_#9936af55] animate-[gradientMove_4s_ease_infinite] bg-[length:300%_300%] md:w-[10%] lg:w-[4%]">
                    <div className="bg-gradient-to-r from-[#000000] to-[#0D0716] rounded-2xl p-4 flex items-center justify-center cursor-pointer">
                      <FiLinkedin className=" w-[5vh] text-white md:w-[10vh]" />
                    </div>
                  </div>

                  <div className="p-[2px] rounded-2xl bg-gradient-to-tr w-[18%] h-[5%] from-[#ffff] to-[#9936AF] shadow-[0_0_15px_#9936af55] animate-[gradientMove_4s_ease_infinite] bg-[length:300%_300%] md:w-[10%] lg:w-[4%]">
                    <div className="bg-gradient-to-r from-[#000000] to-[#0D0716] rounded-2xl p-4 flex items-center justify-center cursor-pointer">
                      <AiFillGithub className=" w-[5vh] text-white md:w-[10vh]" />
                    </div>
                  </div>

                  <div className="p-[2px] rounded-2xl bg-gradient-to-tr w-[18%] h-[5%] from-[#9936AF] to-[#fff] shadow-[0_0_15px_#9936af55] animate-[gradientMove_4s_ease_infinite] bg-[length:300%_300%] md:w-[10%] lg:w-[4%]">
                    <div className="bg-gradient-to-r from-[#000000] to-[#0D0716] rounded-2xl p-4 flex items-center justify-center">
                      <SiWhatsapp className=" w-[5vh] text-white md:w-[10vh]" />
                    </div>
                  </div>

                  <div className="p-[2px] rounded-2xl bg-gradient-to-tr w-[18%] h-[5%] from-[#ffff] to-[#9936AF] shadow-[0_0_15px_#9936af55] animate-[gradientMove_4s_ease_infinite] bg-[length:300%_300%] md:w-[10%] lg:w-[4%]">
                    <div className="bg-gradient-to-r from-[#000000] to-[#0D0716] rounded-2xl p-4 flex items-center justify-center cursor-pointer">
                      <TbBrandGmail className=" w-[5vh] text-white md:w-[5vh]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block md:block">
              <div className="absolute ml-[75%] mt-[-45%] lg:mt-[-22%] lg:ml-[60%]" data-aos="fade-left">
                <Anime divclassname="absolute h-[1px] w-[15vh] h-[1px] blur-[1px] ml-[12%] rounded-lg" spanclassname="animate-shine" />
                <Cadre Icon={BiCodeAlt} divClassName="lg:w-[20vh] lg:h-[20vh] md:w-[13vh] md:h-[13vh] animate-whiteGlow" />;
              </div>
              <div className="absolute ml-[65%] mt-[-32%] lg:mt-[-15%] lg:ml-[53%] md:ml-[60%]" data-aos="fade-right">
                <Anime divclassname="absolute h-[1px] w-[15vh] blur-[1px] ml-[12%] rounded-lg" spanclassname="animate-shineInverse" />
                <Cadre Icon={CgFigma} divClassName="lg:w-[20vh] lg:h-[20vh] md:w-[13vh] md:h-[13vh]" />;
              </div>
              <div className="absolute lg:mt-[-7%] lg:ml-[60%] md:mt-[-18%] md:ml-[70%]" data-aos="fade-up">
                <Anime divclassname="absolute w-[15vh] h-[1px] blur-[1px] ml-[12%] rounded-lg" spanclassname="animate-shine" />
                <Cadre Icon={AiOutlineGithub} divClassName="lg:w-[20vh] lg:h-[20vh] md:w-[13vh] md:h-[13vh]" />;
              </div>
            </div>
          </div>
        </Section>

        <Skil />

        {/* Section Projets */}
        <Section id="projects" className="bg-gradient-to-r from-[#0D0716] to-[#000000]">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 lg:mt-[-8%]">
            <div className="grid place-items-center">
              <div className="rounded-xl shadow-sm shadow-[#9936AF] border border-t-[#9936AF] border-b-0 border-l-0 border-r-0 md:w-[70%] lg:w-[80%]" data-aos="fade-down">
                <img src="../images/portfolio.png" alt="Ancien portfolio" className="rounded-xl" />
              </div>
              <div className="rounded-xl shadow-sm shadow-[#9936AF] w-[30vh] absolute ml-[-5%] mt-[75%] border border-t-[#9936AF] border-b-0 border-l-0 border-r-0 md:w-[50%] md:ml-[5%] md:mt-[40%] lg:w-[25%] lg:mt-[20%] lg:ml-[30%]" data-aos="fade-up">
                <img src="../images/life.png" alt="design ui/ux up life" className="rounded-xl" />
              </div>
            </div>

            <div className="mt-[50%] md:mt-[25%] lg:mt-[5%]">
              <p className="text-white font-bold text-[20px] md:text-[25px] lg:text-[30px]">Quelques<span className="bg-gradient-to-r from-[#ffff] to-[#9936AF] bg-clip-text text-transparent"> projets</span></p>
              <p className="text-white opacity-80 text-[14px] px-[2%] font-bold md:text-[15px] md:px-[15%]">Quelques projets académiques et personnells Des projets pensés, conçus et livrés avec précision.</p>
              <div className="w-[10vh] h-[2px] bg-white mx-auto bg-gradient-to-r from-[#9936AF] to-[#fff] mt-[3%] mb-[5%] rounded-xl md:mt-[4%] md:mb-[2%]"></div>
              <p className="text-white opacity-90 text-[14px] text-center px-[6%] md:text-[15px] md:px-[15%] lg:px-[20%]">Découvrez une sélection de réalisations qui reflètent mon style, mon expertise et ma vision. Chaque projet raconte une histoire : un besoin, une idée, une solution concrète et mesurable.</p>

              <div className="mt-[10%] w-[50%] rounded-full p-[2px] bg-gradient-to-r from-[#fff] to-[#9936AF] mx-auto md:mt-[7%] lg:w-[30%]">
                <Button className="w-full h-[6vh] rounded-full bg-gradient-to-r from-[#0D0716] to-[#000000] text-white border-none md:text-[15px]">
                  <Linke to="/projet">
                    Tous les projets
                  </Linke>
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* Section À propos */}
        <Section id="about" className="bg-gradient-to-r from-[#000000] to-[#0D0716] grid place-content-start">
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

            {/* <div className="absolute ml-[2%] mt-[10%] md:mt-[-40%] lg:hidden">
              <CadreShadow Icon={SiMysql} divClassName="w-[10vh] h-[10vh] ml-[5%]" />
              <CadreShadow Icon={CgFigma} divClassName="w-[10vh] h-[10vh] mt-[-15%] ml-[40%]" />
              <CadreShadow Icon={SiPostgresql} divClassName="w-[10vh] h-[10vh] mt-[-140%] ml-[120%]" />
              <CadreShadow Icon={DiNodejs} divClassName="w-[10vh] h-[10vh] mt-[35%] ml-[45%]" />
              <CadreShadow Icon={SiNestjs} divClassName="w-[10vh] h-[10vh] mt-[-10%] ml-[-15%]" />
              <CadreShadow Icon={TbBrandNextjs} divClassName="w-[10vh] h-[10vh] mt-[-30%] ml-[-90%]" />
              <CadreShadow Icon={GrReactjs} divClassName="w-[10vh] h-[10vh] mt-[-20%] ml-[-160%]" />
              <CadreShadow Icon={SiTailwindcss} divClassName="w-[10vh] h-[10vh] mt-[-170%] ml-[65%]" />
              <CadreShadow Icon={IoLogoNodejs} divClassName="w-[10vh] h-[10vh] mt-[-85%] ml-[-250%]" />
            </div> */}

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
        </Section>

        {/* Section service */}
        <Section id="service" className="bg-gradient-to-r from-[#0D0716] to-[#000000] grid place-content-start">
          <Service />
          <ServiceP />
        </Section>

        <Skil />

        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}