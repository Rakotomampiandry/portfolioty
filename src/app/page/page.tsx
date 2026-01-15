import { AiOutlineGithub } from "react-icons/ai";
import { CgFigma } from "react-icons/cg";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { TbBrandGmail } from "react-icons/tb";
import { SiWhatsapp } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { BiCodeAlt } from "react-icons/bi";
import Footer from "../footer/footer";
import Header from "../header/header";
import { Cadre, CadreShadow, CadreTech } from "../component/cadre";
import { Button } from "antd";
import { Skil } from "../component/skil";
import Link from "antd/es/typography/Link";
import { Link as Linke } from "react-router-dom";
import AnimatedText, { AnimatedSection, Anime } from "../component/animation";
import { Service, ServiceP } from "../component/service";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef, useState } from "react";
import { About } from "./about";
import { Propos } from "./propos";
import { Tech } from "./Tech";
import Home from "./home";
import { FaWhatsapp } from "react-icons/fa";

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
    <div className="">
      <div>

        {/* Section Accueil */}
        <Section id="home" className="relative w-full h-screen overflow-hidden">
          {/* Vidéo de fond */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover "
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="./videos/fond2.mp4" type="video/mp4" />
          </video>

          {/* Overlay sombre (optionnel mais conseillé) */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Contenu au-dessus */}
          <div className="relative z-10 h-full flex items-center justify-center text-white">
            <div className="grid justify-center text-center">
              <p className="font-bold text-[12px]"> Développeur web Junior</p>
              <h1 className="text-[25px] lg:text-[40px] font-extrabold tracking-widest text-transparent px-[10%] lg:px-0 md:px-0 hover:text-white transition-all duration-300 cursor-pointer md:text-[25px]"
                style={{ WebkitTextStroke: "1px #ffffff" }}
              >
                RAKOTOMAMPIANDRY <span className="tracking-normal">Mickaël</span>
              </h1>

              <div className="flex justify-center space-x-2 mt-[8%] text-[25px] lg:mt-[3%] lg:text-[30px] cursor-pointer md:mt-[5%] opacity-80">
                <FiFacebook className="hover:scale-125 hover:text-blue-600 duration-200 transition-all" />
                <FiLinkedin className="hover:scale-125 hover:text-sky-400 duration-200 transition-all" />
                <FaWhatsapp className="hover:scale-125 hover:text-green-500 duration-200 transition-all" />
                <TbBrandGmail className="hover:scale-125 hover:text-red-500 duration-200 transition-all" />
                <BsGithub className="hover:scale-125 hover:text-gray-600 duration-200 transition-all" />
              </div>

              <div className="flex justify-center items-center h-full mt-[10%] lg:mt-[5%]">
                <img
                  src="./gif/gif.gif"
                  alt="gif scroll vers le bas"
                  className="w-[15%] lg:w-[8%]"
                />
              </div>

            </div>
          </div>
        </Section>

        <Skil />

        {/* Section Projets */}
        <Section id="projects" className="bg-gradient-to-r from-[#0A0F16] to-[#000000]">
          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 lg:mt-[-8%]">
            <div className="grid place-items-center">
              <div className="rounded-xl shadow-sm shadow-[#243c5d] border border-t-[#243c5d] border-b-0 border-l-0 border-r-0 md:w-[70%] lg:w-[80%]" data-aos="fade-down">
                <img src="../images/portfolio.png" alt="Ancien portfolio" className="rounded-xl" />
              </div>
              <div className="rounded-xl shadow-sm shadow-[#243c5d] w-[30vh] absolute ml-[-5%] mt-[75%] border border-t-[#243c5d] border-b-0 border-l-0 border-r-0 md:w-[50%] md:ml-[5%] md:mt-[40%] lg:w-[25%] lg:mt-[20%] lg:ml-[30%]" data-aos="fade-up">
                <img src="../images/life.png" alt="design ui/ux up life" className="rounded-xl" />
              </div>
            </div>

            <div className="mt-[50%] md:mt-[25%] lg:mt-[5%]">
              <p className="text-white font-bold text-[20px] md:text-[25px] lg:text-[30px]">Quelques<span className="bg-gradient-to-r from-[#ffff] via-[#0A0F16] to-[#243c5d] bg-clip-text text-transparent"> projets</span></p>
              <p className="text-white opacity-80 text-[14px] px-[2%] font-bold md:text-[15px] md:px-[15%]">Quelques projets académiques et personnells Des projets pensés, conçus et livrés avec précision.</p>
              <div className="w-[10vh] h-[2px] bg-white mx-auto bg-gradient-to-r from-[#243c5d] to-[#fff] mt-[3%] mb-[5%] rounded-xl md:mt-[4%] md:mb-[2%]"></div>
              <p className="text-white opacity-90 text-[14px] text-center px-[6%] md:text-[15px] md:px-[15%] lg:px-[20%]">Découvrez une sélection de réalisations qui reflètent mon style, mon expertise et ma vision. Chaque projet raconte une histoire : un besoin, une idée, une solution concrète et mesurable.</p>

              <div className="mt-[10%] w-[50%] rounded-full p-[2px] bg-gradient-to-r from-[#fff] to-[#243c5d] mx-auto md:mt-[7%] lg:w-[30%]">
                <Button className="w-full h-[6vh] rounded-full bg-gradient-to-r from-[#243c5d] to-[#000000] text-white border-none md:text-[15px]">
                  <Linke to="/projet">
                    Tous les projets
                  </Linke>
                </Button>
              </div>
            </div>
          </div>
        </Section>

        {/* Technologie */}
        <Section id="tech" className="bg-gradient-to-r from-[#000] to-[#0A0F16] grid place-content-start">
          <Tech />
        </Section>

        {/* Section À propos */}
        <Section id="about" className="bg-gradient-to-r from-[#0A0F16] to-[#000] grid place-content-start">
          <About />
          {/* <Propos/> */}
        </Section>

        {/* Section service */}
        <Section id="service" className="bg-gradient-to-r from-[#000] to-[#0A0F16] grid place-content-start">
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