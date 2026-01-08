import { IoLogoPython } from "react-icons/io"; 
import { TbBrandLaravel } from "react-icons/tb"; 
import { CgFigma } from "react-icons/cg"; 
import { SiTailwindcss } from "react-icons/si"; 
import { SiPostgresql } from "react-icons/si"; 
import { SiNestjs } from "react-icons/si"; 
import { FaReact } from "react-icons/fa"; 
import { BiArrowBack } from "react-icons/bi"; 
import { CadrePhone, CadreProjetDroit, CadreProjetGauche, CadreTabletteD, CadreTabletteG } from "../component/cadreProjet";
import { Link as Linke } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Projet(){
    return(
        <div  className="bg-gradient-to-r from-[#000000] to-[#0D0716] relative min-h-screen pt-[1%] pl-[1%]">
            <div className="hidden md:hidden lg:block bg-violeta bg-opacity-20 w-[3%] py-[1%] rounded-full place-content-center place-items-center text-violeta cursor-pointer duration-200 hover:bg-opacity-30">
                <Linke to="/" className="place-content-center place-items-center flex">
                    <BiArrowBack className="text-[18px]" />
                </Linke>
            </div>

             <div className="bg-violeta bg-opacity-20 w-[10%] py-[2.5%] rounded-full place-content-center place-items-center text-violeta cursor-pointer duration-200 hover:bg-opacity-30 md:w-[5%] md:py-[1.5%] lg:hidden">
                <Linke to="/" className="place-content-center place-items-center flex">
                    <BiArrowBack className="text-[18px]" />
                </Linke>
            </div>

            <div className="">
                <h1 className="text-center text-white font-bold text-[28px]">Projets</h1>
                <p className="text-white opacity-80 text-center mb-[5%] text-[12px] px-[10%] lg:px-[25%] lg:text-[15px] lg:mb-0">Une sélection de projets académiques et personnels mettant en avant les compétences techniques, la créativité et la capacité à concevoir des solutions modernes et fonctionnelles.</p>
                <div className="w-[15vh] h-[2px] bg-white mx-auto bg-gradient-to-r from-[#9936AF] to-[#fff] mt-[1.5%] mb-[3%] rounded-xl"></div>
            </div>

            {/* DESKOTOP */}
            <div>
                <CadreProjetDroit 
                    image="../images/Home.png" 
                    titre="Mini e-commerce"
                    texte="Projet mettant en pratique l’ensemble du cycle de développement web : 
                          de la conception graphique (UI/UX) à l’intégration front-end, en passant 
                          par le développement back-end, les tests, l’optimisation des performances 
                          et la mise en production. Il s’agit d’un projet personnel réalisé pour 
                          renforcer les compétences techniques et maîtriser chaque étape du processus 
                          de création d’une application web moderne. "
                    role="Développeur full-stack"
                    alt="mini site e-commerce"
                    Icone1={FaReact}
                    techno1="React"
                    Icone2={SiNestjs}
                    techno2="NestJs"
                    Icone3={SiPostgresql}
                    techno3="Postgres"
                    Icone4={SiTailwindcss}
                    techno4="Taillwind"
                />

                <CadreProjetGauche
                    image="../images/portfolio.png" 
                    titre="Ancien portfolio"
                    texte="Ancien portfolio réalisé lors de mes débuts. Il met en avant l’évolution progressive de mes compétences : de la création d’interfaces simples à des designs plus structurés, de l’intégration basique aux premières logiques dynamiques. Ce projet reflète mes premières démarches en UI/UX, mon sens de l’organisation, ainsi que ma volonté d’améliorer continuellement la qualité de mes réalisations."
                    role="Développeur frontend | designer"
                    alt="portfolio"
                    Icone1={FaReact}
                    techno1="React"
                    Icone2={CgFigma}
                    techno2="Figma"
                    Icone3={SiPostgresql}
                    techno3="Postgres"
                    Icone4={SiTailwindcss}
                    techno4="Taillwind"
                />

                <CadreProjetDroit 
                    image="../images/logo.png" 
                    titre="Gestion de laboratoire"
                    texte="Projet réalisé en équipe de 4 personnes, visant à digitaliser le CHU Tambohobe à Fianarantsoa. L’application centralise toutes les données patients, permettant un suivi précis des analyses médicales et facilitant la communication entre les différents acteurs du laboratoire (secrétaires, techniciens, médecins biologistes, chef de service)."
                    role="Développeur full-stack | designer"
                    alt="gestion de laboratoire"
                    Icone1={FaReact}
                    techno1="React"
                    Icone2={SiNestjs}
                    techno2="NestJs"
                    Icone3={SiPostgresql}
                    techno3="Postgres"
                    Icone4={SiTailwindcss}
                    techno4="Taillwind"
                    divClassName="mt-[-15%]"
                />

                <CadreProjetGauche
                    image="../images/avo.png" 
                    titre="Gestion des tâches"
                    texte="Projet réalisé en binôme, visant à créer une solution efficace pour organiser et suivre les missions des employés. L’application permet de répartir les tâches de manière claire, d’assurer un suivi précis de leur avancement et d’améliorer la transparence et l’efficacité au sein de l’équipe.Objectif : optimiser la gestion du temps, faciliter la coordination et garantir que chaque tâche est suivie jusqu’à sa complétion."
                    role="Développeur frontend | designer"
                    alt="gestion des taches"
                    Icone1={FaReact}
                    techno1="React"
                    Icone2={TbBrandLaravel}
                    techno2="Laravel"
                    Icone3={SiPostgresql}
                    techno3="Postgres"
                    Icone4={SiTailwindcss}
                    techno4="Taillwind"
                />

                <CadreProjetDroit 
                    image="../images/banck.png" 
                    titre="Dev HUb Acces Bank"
                    texte="Participation au Dev Hub d’Access Bank au sein d’une équipe de 5 personnes, avec le développement d’une solution web de gestion des achats. Le projet, réalisé dans le cadre d’un hackathon, visait à digitaliser et optimiser le processus d’achat en entreprise afin d’améliorer l’efficacité et la transparence."
                    role="Développeur frontend"
                    alt="access banck"
                    Icone1={FaReact}
                    techno1="React"
                    Icone2={IoLogoPython}
                    techno2="Python"
                    Icone3={SiPostgresql}
                    techno3="Postgres"
                    Icone4={SiTailwindcss}
                    techno4="Taillwind"
                    divClassName="mt-[-15%]"
                />
            </div>

            {/* Tablette */}
            <div className="hidden lg:hidden md:grid md:place-content-center">
                <CadreTabletteD 
                    image="../images/Home.png" 
                    titre="Mini e-commerce"
                    texte="Projet mettant en pratique l’ensemble du cycle de développement web : 
                          de la conception graphique (UI/UX) à l’intégration front-end, en passant 
                          par le développement back-end, les tests, l’optimisation des performances 
                          et la mise en production. Il s’agit d’un projet personnel réalisé pour 
                          renforcer les compétences techniques et maîtriser chaque étape du processus 
                          de création d’une application web moderne. "
                    role="Développeur full-stack"
                    alt="mini site e-commerce"
                    divClassName="mb-[-85%]"
                    Icone1={FaReact}
                    techno1="React"
                    Icone2={SiNestjs}
                    techno2="NestJs"
                    Icone3={SiPostgresql}
                    techno3="Postgres"
                    Icone4={SiTailwindcss}
                    techno4="Taillwind"
                />

                <CadreTabletteG
                    image="../images/portfolio.png" 
                    titre="Ancien portfolio"
                    texte="Ancien portfolio réalisé lors de mes débuts. Il met en avant l’évolution progressive de mes compétences : de la création d’interfaces simples à des designs plus structurés, de l’intégration basique aux premières logiques dynamiques. Ce projet reflète mes premières démarches en UI/UX, mon sens de l’organisation, ainsi que ma volonté d’améliorer continuellement la qualité de mes réalisations."
                    role="Développeur frontend | designer"
                    alt="portfolio"
                    divClassName="mt-[-85%]"
                    Icone1={FaReact}
                    techno1="React"
                    Icone2={CgFigma}
                    techno2="Figma"
                    Icone3={SiPostgresql}
                    techno3="Postgres"
                    Icone4={SiTailwindcss}
                    techno4="Taillwind"
                />

                <CadreTabletteD
                    image="../images/logo.png" 
                    titre="Gestion de laboratoire"
                    texte="Projet réalisé en équipe de 4 personnes, visant à digitaliser le CHU Tambohobe à Fianarantsoa. L’application centralise toutes les données patients, permettant un suivi précis des analyses médicales et facilitant la communication entre les différents acteurs du laboratoire (secrétaires, techniciens, médecins biologistes, chef de service)."
                    role="Développeur full-stack | designer"
                    alt="gestion de laboratoire"
                    Icone1={FaReact}
                    techno1="React"
                    Icone2={SiNestjs}
                    techno2="NestJs"
                    Icone3={SiPostgresql}
                    techno3="Postgres"
                    Icone4={SiTailwindcss}
                    techno4="Taillwind"
                    divClassName="mt-[-83%] mb-[-103%]"
                />

                 <CadreTabletteG
                    image="../images/avo.png" 
                    titre="Gestion des tâches"
                    texte="Projet réalisé en binôme, visant à créer une solution efficace pour organiser et suivre les missions des employés. L’application permet de répartir les tâches de manière claire, d’assurer un suivi précis de leur avancement et d’améliorer la transparence et l’efficacité au sein de l’équipe.Objectif : optimiser la gestion du temps, faciliter la coordination et garantir que chaque tâche est suivie jusqu’à sa complétion."
                    role="Développeur frontend | designer"
                    alt="gestion des taches"
                    // divClassName="mt-[-83%]"
                    Icone1={FaReact}
                    techno1="React"
                    Icone2={TbBrandLaravel}
                    techno2="Laravel"
                    Icone3={SiPostgresql}
                    techno3="Postgres"
                    Icone4={SiTailwindcss}
                    techno4="Taillwind"
                />

                 <CadreTabletteD
                    image="../images/banck.png" 
                    titre="Dev HUb Acces Bank"
                    texte="Participation au Dev Hub d’Access Bank au sein d’une équipe de 5 personnes, avec le développement d’une solution web de gestion des achats. Le projet, réalisé dans le cadre d’un hackathon, visait à digitaliser et optimiser le processus d’achat en entreprise afin d’améliorer l’efficacité et la transparence."
                    role="Développeur frontend"
                    alt="access banck"
                    Icone1={FaReact}
                    techno1="React"
                    Icone2={IoLogoPython}
                    techno2="Python"
                    Icone3={SiPostgresql}
                    techno3="Postgres"
                    Icone4={SiTailwindcss}
                    techno4="Taillwind"
                    divClassName="mt-[-83%]"
                />
            </div>

            {/* PHONE */}
            <div className="place-items-center mt-[10%] pb-[10%] space-y-[5%] lg:hidden md:hidden">
               <CadrePhone
                    image="../images/Home.png"
                    titre="Mini e-commerce"
                    texte="Projet mettant en pratique l'ensemble du cycle de developpement webb du design à la mise en production. C'est un projet personnel"
                    role="Développeur fullstack"
                    alt="mini e-commerce"
                    Icone1={FaReact}
                    Icone2={SiNestjs}
                    Icone3={SiPostgresql}
                    Icone4={SiTailwindcss}
               />
               <CadrePhone
                    image="../images/portfolio.png"
                    titre="Ancien portfolio"
                    texte="Portfolio de mes débuts, illustrant l’évolution de mes compétences en UI/UX et en développement front-end."
                    role="Développeur frontend | designer"
                    alt="ancien portfolio"
                    Icone1={FaReact}
                    Icone2={CgFigma}
                    Icone3={SiPostgresql}
                    Icone4={SiTailwindcss}
               />
               <CadrePhone
                    image="../images/logo.png"
                    titre="Gestion de laboratoire"
                    texte="Application développée en équipe pour digitaliser la gestion du laboratoire du CHU Tambohobe, en centralisant les données patients et le suivi des analyses médicales."
                    role="Développeur full-stack | designer"
                    alt="gestion de laboratoire"
                    Icone1={FaReact}
                    Icone2={SiNestjs}
                    Icone3={SiPostgresql}
                    Icone4={SiTailwindcss}
               />
               <CadrePhone
                    image="../images/avo.png"
                    titre="Gestion des tâches"
                    texte="Application développée en binôme pour organiser, suivre et optimiser la gestion des missions des employés."
                    role="Développeur frontend "
                    alt="gestion des taches"
                    Icone1={FaReact}
                    Icone2={TbBrandLaravel}
                    Icone3={SiPostgresql}
                    Icone4={SiTailwindcss}
               />
               <CadrePhone
                    image="../images/banck.png"
                    titre="Dev HUb Acces Bank"
                    texte="Participation à un hackathon (Dev Hub – Access Bank) avec le développement d’une solution web de gestion des achats en entreprise."
                    role="Développeur frontend"
                    alt="dev hub"
                    Icone1={FaReact}
                    Icone2={IoLogoPython}
                    Icone3={SiPostgresql}
                    Icone4={SiTailwindcss}
               />
            </div>
        </div>
    )
}