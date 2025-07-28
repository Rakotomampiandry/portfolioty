import { SiGmail } from "react-icons/si";
import { BiCodeCurly } from "react-icons/bi";
import { RiFileCodeFill, RiWhatsappFill } from "react-icons/ri";
import { BsArrowRight, BsFacebook, BsLinkedin } from "react-icons/bs";
import { DiCss3Full } from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbCodeDots } from "react-icons/tb";
import { TbBrandJavascript } from "react-icons/tb";
import { TbBrandTypescript } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { SiMysql } from "react-icons/si";
import { SiPostgresql } from "react-icons/si";
import { SiNestjs } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { DiJsBadge } from "react-icons/di";
import { CgFigma } from "react-icons/cg";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { FaCode } from "react-icons/fa";
import { IoLogoPython } from "react-icons/io";
import { TbBrandLaravel } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
"use client"
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Tooltip } from "antd";
import { Typewriter } from 'react-simple-typewriter'
import Link from "antd/es/typography/Link";
import { useInView } from 'react-intersection-observer';
import Navbar from "../navbar/nav";
import Footer from "../footer/footer";
import Modal from "antd/es/modal/Modal";
import { Link as Linke } from "react-router-dom";

const Section = ({ id, title, children, Icon }: {
  id: string;
  title: string;
  children?: React.ReactNode;
  Icon: React.ElementType;
}) => (
  <section id={id} className="relative min-h-screen flex flex-col justify-center bg-gray-100 px-4 py-20 text-center overflow-hidden lg:items-center">
    {/* Background Icon */}
    <div className="absolute text-gray-300 opacity-10 text-[350px] pointer-events-none select-none justify-center">
      <Icon className="animate-bounce-y" />
    </div>

    <h2 className="text-4xl font-bold mb-8 relative z-10">{title}</h2>

    <div className="relative z-10">
      <Modal />
      {children}
    </div>
  </section>
);

// Animation aos 
const Tous = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: false });

    return () => {
      AOS.refresh();
    }
  }, []);

  //animtion progression pourcentage
  const { ref, inView } = useInView({ triggerOnce: false });
  const [progress, setProgress] = useState(0);
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [progress3, setProgress3] = useState(0);
  const [progress4, setProgress4] = useState(0);
  const [progress5, setProgress5] = useState(0);

  useEffect(() => {
    if (inView && progress === 0) {
      let current = 0;
      const target = 65;
      const interval = setInterval(() => {
        current += 1;
        setProgress(current);
        if (current >= target) clearInterval(interval);
      }, 50); // vitesse de l'animation
    }

    if (inView && progress1 === 0) {
      let current = 0;
      const target = 60;
      const interval = setInterval(() => {
        current += 1;
        setProgress1(current);
        if (current >= target) clearInterval(interval);
      }, 50); // vitesse de l'animation
    }

    if (inView && progress2 === 0) {
      let current = 0;
      const target = 25;
      const interval = setInterval(() => {
        current += 1;
        setProgress2(current);
        if (current >= target) clearInterval(interval);
      }, 50); // vitesse de l'animation
    }

    if (inView && progress3 === 0) {
      let current = 0;
      const target = 100;
      const interval = setInterval(() => {
        current += 1;
        setProgress3(current);
        if (current >= target) clearInterval(interval);
      }, 50); // vitesse de l'animation
    }


    if (inView && progress4 === 0) {
      let current = 0;
      const target = 80;
      const interval = setInterval(() => {
        current += 1;
        setProgress4(current);
        if (current >= target) clearInterval(interval);
      }, 50); // vitesse de l'animation
    }


    if (inView && progress5 === 0) {
      let current = 0;
      const target = 10;
      const interval = setInterval(() => {
        current += 1;
        setProgress5(current);
        if (current >= target) clearInterval(interval);
      }, 50); // vitesse de l'animation
    }

  }, [inView]);

  return (
    <div>
      <Navbar />
      <div>
        {/* Section Accueil */}
        <Section id="home" title="" Icon={BiCodeCurly}>
          <div className="">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 text-zinc-200" data-aos="fade-left">
                Micka RAKOTOMAMPIANDRY
              </h1>
              <span className="text-2xl mb-[10px] md:text-4xl font-bold text-zinc-200" data-aos="fade-left">
                <Typewriter
                  words={['Développeur Frontend & Designer UI/UX']}
                  loop={1}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={2000}
                />
              </span>
              <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mt-[3%] mb-[3%] lg:ml-[11%]" data-aos="fade-left">
                Passionné par la création d’interfaces modernes, performantes et intuitives.
                Capable de m’adapter également au développement Backend selon les besoins du projet.
              </p>

              <button className="bg-zinc-200 px-6 rounded-lg font-semibold hover:bg-slate-50 transition hover:scale-100 mt-[1%] mb-[7%]" data-aos="fade-left">
                <Link
                  href="/cv_micka.pdf"
                  download
                >
                  <p className="text-black pt-4 lg:pt-5">Télécharger mon CV</p>
                </Link>
              </button>

              <div className="flex justify-center" >
                <a href="https://www.facebook.com/micka.hasniaina" target="_blank" rel="noopener noreferrer">
                  <div className="text-zinc-200 cursor-pointer text-[150%] ml-1 mr-4" data-aos="fade-left">
                    <BsFacebook className="hover:text-blue-500 transition" />
                  </div>
                </a>

                <a href="https://wa.me/+261348984604" target="_blank" rel="noopener noreferrer">
                  <div className="text-zinc-200 cursor-pointer text-[170%] mr-4" data-aos="fade-left">
                    <RiWhatsappFill className="hover:text-green-500 transition" />
                  </div>
                </a>

                <a href="https://www.linkedin.com/in/mickael-rakotomampiandry-888320312" target="_blank" rel="noopener noreferrer">
                  <div className="text-zinc-200 cursor-pointer text-[150%] mr-4" data-aos="fade-left">
                    <BsLinkedin className="hover:text-blue-400 transition" />
                    {/* -888320312 miampy anio chifre io re ts mande io lien io*/}
                  </div>
                </a>

                <a href="mailto:rakotomampiandry@gmail.com" target="_blank" rel="noopener noreferrer">
                  <div className="text-zinc-200 cursor-pointer text-[170%] mr-4" data-aos="fade-left">
                    <SiGmail className="hover:text-gray-100 transition" />
                  </div>
                </a>

                <a href="https://github.com/rakotomampiandry" target="_blank" rel="noopener noreferrer">
                  <div className="text-zinc-200 cursor-pointer text-[170%] mr-4" data-aos="fade-left">
                    <BsGithub className="hover:text-zinc-400 transition" />
                  </div>
                </a>

              </div>
            </div>
          </div>

        </Section>

        {/* Section Projets */}
        <Section id="projects" title="" Icon={TbBrandNextjs}>
          <div className="">
            <h1 className="text-white flex items-center gap-2" data-aos="fade-left">
              <hr className="w-[20px] border-gray-400" />
              <span className="text-[25px] font-semibold">Projet</span>
            </h1>

            {/* grid projet */}
            <div className="grid grid-cols-1 lg:grid-cols-2 space-y-4 items-start gap-6 lg:space-x-6">
              <div className="mt-3 h-[100%] rounded-xl bg-maintybe opacity-90 lg:h-[480px]">
                <div className="text-white mt-4 ml-[2%]" data-aos="fade-left">
                  <img src="../images/Home.png" alt="webb" className="w-[98%] h-[280px] rounded-md mb-3" />
                </div>
                <div className="items-center justify-center text-white lg:w-[530px] mt-1 lg:mt-4" data-aos="fade-left">
                  <div className="mb-3 mr-1">
                    <h1 className="text-white text-[18px] ml-[-40%] font-semibold lg:ml-[-62%]">Mini site e-commerce</h1>
                    <p className="text-justify ml-4 lg:text-ellipsis">Développement d'une application e-commerce compléte avec une interface utilisateur moderne et responsive.
                      Projet mettant en pratique l'ensemble du cycle de developpement webb du design à la mise en production. C'est un projet personnel</p>
                    <p className="ml-[-45%] font-semibold lg:ml-[-66%]"><span className="font-semibold">Rôle: </span>Developpeur fullstack</p>
                  </div>
                  <div className=" text-zinc-400 flex items-center ml-3 cursor-pointer lg:justify-center" data-aos="fade-left">
                    <Tooltip title="React" placement="bottom">
                      <RiReactjsLine className="text-[400%] bg-maintykely p-1 px-3 rounded-md mr-2" />
                    </Tooltip>
                    <Tooltip title="Nestjs" placement="bottom">
                      <SiNestjs className="text-[400%] bg-maintykely p-1 px-3 rounded-md mr-2" />
                    </Tooltip>
                    <Tooltip title="PostgersSql" placement="bottom">
                      <SiPostgresql className="text-[400%] bg-maintykely p-1 px-3 rounded-md mr-2" />
                    </Tooltip>
                    <Tooltip title="Tailwind css" placement="bottom">
                      <SiTailwindcss className="text-[400%] bg-maintykely p-1 px-3 rounded-md mr-2" />
                    </Tooltip>
                    <Tooltip title="Figma" placement="bottom">
                      <CgFigma className="text-[400%] bg-maintykely p-1 px-3 rounded-md mr-2" />
                    </Tooltip>
                    <Tooltip title="Lien gitHub" placement="bottom">
                      <BsGithub className="text-[400%] bg-maintykely p-1 px-3 rounded-md mr-2" />
                    </Tooltip>
                  </div>
                </div>
              </div>

              <div className="mt-4 h-[525px] rounded-xl bg-maintybe opacity-90 lg:h-[478px]" data-aos="fade-left">
                <div className="text-white mt-4 ml-[2%]" data-aos="fade-left">
                  <img src="../images/avo.png" alt="personnel" className="w-[98%] h-[280px] rounded-md mb-3 lg:h-[260px]" />
                </div>
                <div className="w-full h-[280px] items-center justify-center text-white lg:w-[500px] mt-1 lg:mt-4">
                  <div className="mb-2" data-aos="fade-left">
                    <h1 className="text-white text-[18px] ml-[-11%] font-semibold lg:ml-[-42%]">Gestion des tâches du personnel</h1>
                    <p className="text-justify ml-4">Gestion des tâches du personnel au sein du cyber Ny Avo, une application webb de gestion des tâches destinées à organiser
                      et suivre les missions des employées au sein du cyber. L'objectif est d'améliorer l'efficacité et le transparence du travail
                      en repartissant les tâches. Réalisé en binôme.
                    </p>
                    <p className="ml-[-18%] font-semibold lg:ml-[-45%]"><span className="font-semibold">Rôle: </span>Developpeur frontend | Designer UI/UX</p>
                  </div>
                  <div className=" text-zinc-400 flex items-center ml-3 cursor-pointer lg:justify-center" data-aos="fade-left">
                    <Tooltip title="React" placement="bottom">
                      <RiReactjsLine className="text-[400%] bg-maintykely p-1 px-3 rounded-md mr-2" />
                    </Tooltip>
                    <Tooltip title="Laravel" placement="bottom">
                      <TbBrandLaravel className="text-[400%] bg-maintykely p-1 px-3 rounded-md mr-2" />
                    </Tooltip>
                    <Tooltip title="PostgersSql" placement="bottom">
                      <SiPostgresql className="text-[400%] bg-maintykely p-1 px-3 rounded-md mr-2" />
                    </Tooltip>
                    <Tooltip title="Tailwind css" placement="bottom">
                      <SiTailwindcss className="text-[400%] bg-maintykely p-1 px-3 rounded-md mr-2" />
                    </Tooltip>
                    <Tooltip title="Figma" placement="bottom">
                      <CgFigma className="text-[400%] bg-maintykely p-1 px-3 rounded-md mr-2" />
                    </Tooltip>
                    <Tooltip title="Lien gitHub" placement="bottom">
                      <BsGithub className="text-[400%] bg-maintykely p-1 px-3 rounded-md mr-2" />
                    </Tooltip>
                  </div>
                </div>
              </div>

              <div className="mt-3 h-[440px] rounded-xl bg-maintybe opacity-90 lg:h-[420px] lg:justify-center" data-aos="fade-left">
                <div className="text-white mt-4 ml-[2%]" data-aos="fade-left">
                  <img src="../images/logo.png" alt="labo" className="w-[98%] h-[200px] rounded-md " />
                </div>
                <div className="w-full h-[280px] items-center justify-center text-white lg:w-[500px] mt-1 lg:mt-4">
                  <div className="mb-2" data-aos="fade-left">
                    <h1 className="text-white text-[18px] ml-[-8%] font-semibold lg:ml-[-39%]">Gestion de laboratoire CHU F/tsoa</h1>
                    <p className="text-justify ml-4">Projet rélisé en groupe de 4 personnes, visant à digitaliser la gestion du laboratoire du CHU Tambohobe Fianarantsoa. Il s'agit
                      d'une application web permettant de centraliser les informations des patients, de suivre les analyses médicales et d'optimiser la communication
                      entre les différents acteurs du laboratoire.
                    </p>
                    <p className="ml-[-18%] font-semibold lg:ml-[-45%]"><span className="font-semibold">Rôle: </span>Developpeur fullstack | Designer UI/UX</p>
                  </div>
                  <div className=" text-zinc-400 flex items-center ml-3 cursor-pointer lg:justify-center" data-aos="fade-left">
                    <Tooltip title="Nextjs" placement="bottom">
                      <TbBrandNextjs className="text-[400%] bg-maintykely p-1 px-3 rounded-md mr-2" />
                    </Tooltip>
                    <Tooltip title="Nestjs" placement="bottom">
                      <SiNestjs className="text-[400%] bg-maintykely p-1 px-3 rounded-md mr-2" />
                    </Tooltip>
                    <Tooltip title="PostgersSql" placement="bottom">
                      <SiPostgresql className="text-[400%] bg-maintykely p-1 px-3 rounded-md mr-2" />
                    </Tooltip>
                    <Tooltip title="Tailwind css" placement="bottom">
                      <SiTailwindcss className="text-[400%] bg-maintykely p-1 px-3 rounded-md mr-2" />
                    </Tooltip>
                    <Tooltip title="Figma" placement="bottom">
                      <CgFigma className="text-[400%] bg-maintykely p-1 px-3 rounded-md mr-2" />
                    </Tooltip>
                    <Tooltip title="Lien gitHub" placement="bottom">
                      <BsGithub className="text-[400%] bg-maintykely p-1 px-3 rounded-md mr-2" />
                    </Tooltip>
                  </div>
                </div>
              </div>

              <div className="mt-3 h-[510px] rounded-xl bg-maintybe opacity-90 grid grid-cols-1 lg:h-[420px]">
                <div className="text-white mt-4 ml-[2%]" data-aos="fade-left">
                  <img
                    src="../images/banck.png"
                    alt="bank"
                    className="block lg:hidden w-[98%] h-[280px] rounded-md mb-3"
                  />

                  {/* Image pour laptop et plus (lg+) */}
                  <img
                    src="../images/bancki.png"
                    alt="bank"
                    className="hidden lg:block w-[98%] h-[200px] rounded-md mb-3"
                  />

                </div>
                <div className="w-full h-[280px] items-center justify-center text-white lg:w-[500px] mt-1 lg:mt-4" data-aos="fade-left">
                  <div className="mb-5">
                    <h1 className="text-white text-[18px] ml-[-40%] font-semibold lg:ml-[-60%]">Dev HUb Acces Banck</h1>
                    <p className="text-justify ml-4">Participation au Dev HUb d'Access Bank au sein d'une équipe de 5 personnes. Réalisation d'une soution web de gestion d'achat.
                      Projet développé dans le cadre d'un hackathon visant à digitaliser le processus d'achat en entreprise
                    </p>
                    <p className="ml-[-18%] font-semibold lg:ml-[-45%]"><span className="font-semibold">Rôle: </span>Developpeur frontend | Designer UI/UX</p>
                  </div>
                  <div className=" text-zinc-400 flex items-center ml-3 cursor-pointer lg:justify-center" data-aos="fade-left">
                    <Tooltip title="React" placement="bottom">
                      <RiReactjsLine className="text-[400%] bg-maintykely p-1 px-3 rounded-md mr-2" />
                    </Tooltip>
                    <Tooltip title="Python" placement="bottom">
                      <IoLogoPython className="text-[400%] bg-maintykely p-1 px-3 rounded-md mr-2" />
                    </Tooltip>
                    <Tooltip title="PostgersSql" placement="bottom">
                      <SiPostgresql className="text-[400%] bg-maintykely p-1 px-3 rounded-md mr-2" />
                    </Tooltip>
                    <Tooltip title="Tailwind css" placement="bottom">
                      <SiTailwindcss className="text-[400%] bg-maintykely p-1 px-3 rounded-md mr-2" />
                    </Tooltip>
                    <Tooltip title="Figma" placement="bottom">
                      <CgFigma className="text-[400%] bg-maintykely p-1 px-3 rounded-md mr-2" />
                    </Tooltip>
                    <Tooltip title="Lien gitHub" placement="bottom">
                      <BsGithub className="text-[400%] bg-maintykely p-1 px-3 rounded-md mr-2" />
                    </Tooltip>
                  </div>
                </div>
              </div>
            </div>

            {/* voir plus */}
            <Linke to="/projet">
            <div className="flex items-center text-zinc-200 border-b-[1px] hover:text-white hover:border-b-white transition float-right mt-2 cursor-pointer" data-aos="fade-left">
              <span>Voir plus</span>
              <BsArrowRight />
            </div>
            </Linke>
          </div>
        </Section>

        {/* Section À propos */}
        <Section id="about" title="" Icon={FaCode}>
          <div className="">
            <h1 className="text-white flex items-center gap-2 lg:content-center lg:ml-[9%]" data-aos="fade-left">
              <hr className="w-[20px] border-gray-400" />
              <span className="text-[25px] font-semibold">A propos</span>
            </h1>

            <div className="grid grid-cols-1 lg:justify-items-center">
              <div className="text-white mt-2 lg:w-[70%]">
                <h1 className="flex text-white text-[15px] font-semibold lg:text-[18px]" data-aos="fade-left">Bonjour!</h1>
                <p className="text-justify mb-3 lg:text-[15px]" data-aos="fade-left">
                  Développeur frontend passionné par le monde du web et les technologies modernes. Mon parcours m’a permis d’acquérir
                  une solide expérience dans la création d’interfaces utilisateurs dynamiques, responsives et accessibles.
                </p>
                <p className="text-justify mb-3  lg:text-[15px]" data-aos="fade-left">
                  Bien que mon cœur de métier soit le développement frontend, je me suis également formé au backend, notamment avec NestJS, ce qui
                  me permet d’avoir une vision complète d’une application, de l’interface utilisateur jusqu’à la logique serveur.
                  Cette polyvalence me permet de m’adapter facilement à divers projets, que ce soit côté client ou côté serveur.
                </p>
                <p className="text-justify  lg:text-[15px]" data-aos="fade-left">
                  Attiré par l’aspect visuel et ergonomique des interfaces, je m’intéresse aussi à l’UI/UX design.
                  J’accorde une grande importance à l’expérience utilisateur, en veillant à créer des interfaces non
                  seulement fonctionnelles mais aussi esthétiques et intuitives.
                </p>
              </div>

              <div className="mt-5">
                <h1 className="flex text-white text-[15px] font-semibold items-center lg:text-[18px]" data-aos="fade-left"><span>Mon univers tech </span> <TbCodeDots className="text-[26px] ml-1" /></h1>
                <div className="grid grid-cols-2 space-y-4 lg:grid-cols-7 lg:space-x-3 " data-aos="fade-left">
                  <div className="flex text-zinc-200 text-[15px] items-center"><FaReact className="text-[30px] ml-1 mr-2 lg:text-[50px]" /><span>React</span></div>
                  <div className="flex text-zinc-200 text-[15px] items-center"><TbBrandNextjs className="text-[30px] ml-1 mr-2 lg:text-[50px]" /><span>Nextjs</span></div>
                  <div className="flex text-zinc-200 text-[15px] items-center"><SiTailwindcss className="text-[30px] ml-1 mr-2 lg:text-[50px]" /><span>Tailwind css</span></div>
                  <div className="flex text-zinc-200 text-[15px] items-center"><CgFigma className="text-[30px] ml-1 mr-2 lg:text-[50px]" /><span>Figma</span></div>

                  <div className="flex text-zinc-200 text-[15px] items-center"><IoLogoNodejs className="text-[30px] ml-1 mr-2 lg:text-[50px]" /><span>Node js</span></div>
                  <div className="flex text-zinc-200 text-[15px] items-center"><SiNestjs className="text-[30px] ml-1 mr-2 lg:text-[50px]" /><span>Nestjs</span></div>
                  <div className="flex text-zinc-200 text-[15px] items-center"><SiPostgresql className="text-[30px] ml-1 mr-2 lg:text-[50px]" /><span>PostgreSql</span></div>
                  <div className="flex text-zinc-200 text-[15px] items-center"><SiMysql className="text-[30px] ml-1 mr-2 lg:text-[50px]" /><span>MySql</span></div>

                  <div className="flex text-zinc-200 text-[15px] items-center"><TbBrandTypescript className="text-[30px] ml-1 mr-2 lg:text-[50px]" /><span>Typescript</span></div>
                  <div className="flex text-zinc-200 text-[15px] items-center"><DiJsBadge className="text-[30px] ml-1 mr-2 lg:text-[50px]" /><span>Jsx</span></div>
                  <div className="flex text-zinc-200 text-[15px] items-center"><TbBrandJavascript className="text-[30px] ml-1 mr-2 lg:text-[50px]" /><span>Javascript</span></div>
                  <div className="flex text-zinc-200 text-[15px] items-center"><BsGithub className="text-[30px] ml-1 mr-2 lg:text-[50px]" /><span>GitHUb</span></div>

                  <div className="flex text-zinc-200 text-[15px] items-center"><AiOutlineHtml5 className="text-[30px] ml-1 mr-2 lg:text-[50px]" /><span>Html5</span></div>
                  <div className="flex text-zinc-200 text-[15px] items-center"><DiCss3Full className="text-[30px] ml-1 mr-2 lg:text-[50px]" /><span>CSS</span></div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Section Contact */}
        <Section id="contact" title="" Icon={TbBrandVscode}>
          <div>
            <h1 className="text-white flex items-center gap-2" data-aos="fade-left">
              <hr className="w-[20px] border-gray-400" />
              <span className="text-[25px] font-semibold">Technologie</span>
            </h1>

            <div className="grid grid-cols-1 space-y-5 mt-6 lg:flex lg:space-x-5" data-aos="fade-left">
              <div className="bg-maintybe opacity-95 h-[330px] rounded-xl items-center justify-items-center lg:w-[300px] lg:mt-[15px]" ref={ref}>
                <h1 className="text-zinc-200 font-semibold pt-3 text-[18px]" data-aos="fade-left">Technologie React</h1>
                <p className="text-zinc-300 mb-6" data-aos="fade-left">Coté frontend</p>
                <RiReactjsLine className="text-[600%] bg-maintykely p-1 px-3 rounded-full mr-2 text-zinc-200 mb-8" data-aos="fade-left" />
                <hr className="w-[80%] opacity-45" data-aos="fade-left" />
                <div className="flex items-center space-x-8 space-y-2" data-aos="fade-left">
                  <div className="">
                    <p className="text-white font-semibold text-[30px]">{progress}%</p>
                    <p className="text-zinc-200"> de mon projet</p>
                  </div>
                  <div className="h-[50px] w-[2px] bg-zinc-500 opacity-45"></div>
                  <div>
                    <p className="text-white font-semibold text-[30px]">{progress1}%</p>
                    <p className="text-zinc-200">en Typescript</p>
                  </div>
                </div>

                <button className="bg-zinc-50 rounded-lg w-[80%] h-[10%] text-[15px] mt-[10%] font-medium hover:bg-zinc-200 transition" data-aos="fade-left">
                  voir projet
                </button>
              </div>

              <div className="bg-maintybe opacity-95 h-[330px] rounded-xl items-center justify-items-center lg:w-[300px]" data-aos="fade-left" ref={ref}>
                <h1 className="text-zinc-200 font-semibold pt-3 text-[18px]" data-aos="fade-left">Technologie Nextjs</h1>
                <p className="text-zinc-300 mb-6" data-aos="fade-left">Coté frontend</p>
                <TbBrandNextjs className="text-[600%] bg-maintykely p-1 px-3 rounded-full mr-2 text-zinc-200 mb-8" data-aos="fade-left" />
                <hr className="w-[80%] opacity-45 text-zinc-500" data-aos="fade-left" />
                <div className="flex items-center space-x-8 space-y-2" data-aos="fade-left">
                  <div className="">
                    <p className="text-white font-semibold text-[30px]">{progress2}%</p>
                    <p className="text-zinc-200"> de mon projet</p>
                  </div>
                  <div className="h-[50px] w-[2px] bg-zinc-500 opacity-45"></div>
                  <div>
                    <p className="text-white font-semibold text-[30px]">{progress3}%</p>
                    <p className="text-zinc-200">en Typescript</p>
                  </div>
                </div>

                <button className="bg-zinc-50 rounded-lg w-[80%] h-[10%] text-[15px] mt-[10%] font-medium hover:bg-zinc-200 transition" data-aos="fade-left">
                  voir projet
                </button>
              </div>

              <div className="bg-maintybe opacity-95 h-[330px] rounded-xl items-center justify-items-center lg:w-[300px]" data-aos="fade-left" ref={ref}>
                <h1 className="text-zinc-200 font-semibold pt-3 text-[18px]" data-aos="fade-left">Technologie Nestjs</h1>
                <p className="text-zinc-300 mb-6" data-aos="fade-left">Coté backend</p>
                <SiNestjs className="text-[600%] bg-maintykely p-1 px-3 rounded-full mr-2 text-zinc-200 mb-8" data-aos="fade-left" />
                <hr className="w-[80%] opacity-45" data-aos="fade-left" />
                <div className="flex items-center space-x-8 space-y-2" data-aos="fade-left">
                  <div className="">
                    <p className="text-white font-semibold text-[30px]">{progress4}%</p>
                    <p className="text-zinc-200"> de mon projet</p>
                  </div>
                  <div className="h-[50px] w-[2px] bg-zinc-500 opacity-45"></div>
                  <div>
                    <p className="text-white font-semibold text-[30px]">{progress3}%</p>
                    <p className="text-zinc-200">en Typescript</p>
                  </div>
                </div>

                <button className="bg-zinc-50 rounded-lg w-[80%] h-[10%] text-[15px] mt-[10%] font-medium hover:bg-zinc-200 transition" data-aos="fade-left">
                  voir projet
                </button>
              </div>

              <div className="bg-maintybe opacity-95 h-[330px] rounded-xl items-center justify-items-center lg:w-[300px]" data-aos="fade-left">
                <h1 className="text-zinc-200 font-semibold pt-3 text-[18px]" data-aos="fade-left">Autre Technologie</h1>
                <p className="text-zinc-300 mb-6" data-aos="fade-left">Coté backend/frontend</p>
                <RiFileCodeFill className="text-[600%] bg-maintykely p-1 px-3 rounded-full mr-2 text-zinc-200 mb-8" />
                <hr className="w-[80%] opacity-45" data-aos="fade-left" />
                <div className="flex items-center space-x-8 space-y-2" data-aos="fade-left">
                  <div className="">
                    <p className="text-white font-semibold text-[30px]">{progress5}%</p>
                    <p className="text-zinc-200"> de mon projet</p>
                  </div>
                  <div className="h-[50px] w-[2px] bg-zinc-500 opacity-45"></div>
                  <div>
                    <p className="text-white font-semibold text-[30px]">{progress3}%</p>
                    <p className="text-zinc-200">en jsx/Javascript</p>
                  </div>
                </div>

                <button className="bg-zinc-50 rounded-lg w-[80%] h-[10%] text-[15px] mt-[10%] font-medium hover:bg-zinc-200 transition" data-aos="fade-left">
                  voir projet
                </button>
              </div>
            </div>
          </div>
        </Section>
        <Footer/>
      </div>
    </div>
  );

};

export default Tous;