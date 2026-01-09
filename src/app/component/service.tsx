import { Button } from "antd";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

export function Service() {

    // Animation AOS
    useEffect(() => {
        AOS.init({ duration: 1200, once: false });

        return () => {
            AOS.refresh();
        }
    }, []);

    return (
        <div className="hidden md:hidden lg:flex pt-6 px-[10%] space-x-2">
            {/* Texte */}
            <div className="bg-black text-white w-[40%] p-4 pl-[5%] pt-[8%]" data-aos="fade-right">
                <p className="mb-2 text-[18px] font-bold text-left">
                    Des solutions innovantes pour donner vie à vos idées et créer des expériences uniques.
                </p>
                <p className="text-[12px] text-justify pr-[5%]">
                    Des solutions innovantes conçues pour donner vie à vos idées, en combinant créativité, stratégie et technologie. Chaque projet est pensé pour offrir une expérience utilisateur fluide, moderne et impactante, tout en garantissant performance, cohérence visuelle et évolutivité. Mon objectif est de transformer chaque concept en une solution digitale unique, alignée avec vos besoins et vos ambitions.
                </p>

                <Button className="text-white bg-gradient-to-r from-[#000] to-[#9936AF] border border-white font-bold w-[40%] h-[5vh] rounded-2xl mt-[5%] float-left">
                    <Link to="/detailS">
                        Détail
                    </Link>
                </Button>
            </div>

            {/* Images */}
            <div className="space-y-2 w-[60%]">
                <div className="flex space-x-2">
                    <div className="w-[40%] h-[290px] overflow-hidden group" data-aos="fade-down">
                        <img
                            src="./images/responsive.jpeg"
                            alt="Interface responsive"
                            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                        />

                        <div className="absolute mt-[-100%] ml-[6%] py-[1vh] w-[62%]
                                      bg-black/30 backdrop-blur-xl
                                    text-white font-bold rounded-lg text-center
                                      border-t border-white/20 text-[12px]
                        px-4" >
                            Création du site web
                        </div>
                    </div>

                    <div className="w-[60%] space-y-2" >
                        <div className="h-[150px] overflow-hidden group" data-aos="fade-left">
                            <img
                                src="./images/mainte.jpg"
                                alt="Développement web"
                                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                            />

                            <div className="absolute mt-[-33%] ml-[37%] py-[1vh] w-[60%]
                                      bg-black/30 backdrop-blur-xl
                                    text-white font-bold rounded-lg text-center
                                      border-t border-white/20 text-[12px]
                        px-4">
                                Optimisation & Maintenance web
                            </div>
                        </div>

                        <div className="h-[130px] overflow-hidden group" data-aos="fade-left">
                            <img
                                src="./images/site.png"
                                alt="Site web moderne"
                                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
                            />

                            <div className="absolute mt-[-30%] ml-[2%] py-[1vh] w-[45%]
                                      bg-black/30 backdrop-blur-xl
                                    text-white font-bold rounded-lg text-center
                                      border-t border-white/20 text-[12px]
                        px-4">
                                Intégration responsive
                            </div>
                        </div>
                    </div>
                </div>

                <div className="h-[40vh] overflow-hidden group" data-aos="fade-up">
                    <img
                        src="./images/ty.jpeg"
                        alt="Projet web moderne"
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110" 
                    />
                    <div className="absolute mt-[-37%] ml-[2%] py-[1vh] w-[20%]
                                      bg-black/20 backdrop-blur-lg
                                    text-white font-bold rounded-lg text-center
                                      border-t border-white/20 text-[12px]
                        px-4">
                        Design web
                    </div>
                </div>
            </div>
        </div>

    )
}

export function ServiceP() {
    return (
        <div className="px-[2%] pt-2 space-y-2 lg:hidden">
            <div className="w-full h-[20vh] overflow-hidden cursor-pointer group md:h-[32vh]" data-aos="fade-down">
                <img
                    src="./images/responsive.jpeg"
                    alt="Interface responsive"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />

                <div className="absolute mt-[-40%] ml-[40%] py-[1vh] w-[55%]
                                      bg-black/30 backdrop-blur-xl
                                    text-white font-bold rounded-lg text-center
                                      border-t border-white/20 text-[12px]
                        px-4 md:ml-[68%] md:mt-[-45%] md:w-[30%]">
                    Création du site web
                </div>
            </div>

            <div className="flex space-x-1">
                <div className="h-[18vh] overflow-hidden group md:w-full" data-aos="fade-right">
                    <img
                        src="./images/mainte.jpg"
                        alt="Développement web"
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />

                    <div className="absolute mt-[-22%] ml-[2%] py-[1vh] w-[80%]
                                      bg-black/30 backdrop-blur-xl
                                    text-white font-bold rounded-lg text-center
                                      border-t border-white/20 text-[10px]
                        px-4 md:ml-[5%] md:mt-[-48%] md:w-[40%]">
                        Optimisation web
                    </div>
                </div>

                <div className="h-[18vh] overflow-hidden group md:w-full" data-aos="fade-left">
                    <img
                        src="./images/site.png"
                        alt="Site web moderne"
                        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    />

                    <div className="absolute mt-[-25%] ml-[2%] py-[1vh] w-[65%]
                                      bg-black/30 backdrop-blur-xl
                                    text-white font-bold rounded-lg text-center
                                      border-t border-white/20 text-[12px]
                        px-4 md:mt-[-48%] md:ml-[63%] md:w-[35%]">
                        responsive
                    </div>
                </div>
            </div>

            <div className="w-full h-[20vh] overflow-hidden cursor-pointer group md:h-[25vh]" data-aos="fade-up">
                <img
                    src="./images/ty.jpeg"
                    alt="Interface responsive"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />

                <div className="absolute mt-[-13%] ml-[52%] py-[1vh] w-[45%]
                                      bg-black/30 backdrop-blur-xl
                                    text-white font-bold rounded-lg text-center
                                      border-t border-white/20 text-[12px]
                        px-4 md:mt-[-35%] md:ml-[2%] md:w-[20%]">
                    Design Web
                </div>
            </div>

            <div className="bg-black text-white px-[5%] py-[10%] pb-[25%]" data-aos="fade-right">
                <p className="mb-2 text-[15px] font-bold text-left md:text-[15px]">
                    Des solutions innovantes pour donner vie à vos idées et créer des expériences uniques.
                </p>
                <p className="text-[13px] text-justify pr-[5%]">
                    Des solutions innovantes conçues pour donner vie à vos idées, en combinant créativité, stratégie et technologie. Chaque projet est pensé pour offrir une expérience utilisateur fluide, moderne et impactante, tout en garantissant performance, cohérence visuelle et évolutivité. Mon objectif est de transformer chaque concept en une solution digitale unique, alignée avec vos besoins et vos ambitions.
                </p>

                <Button className="text-white bg-gradient-to-r from-[#000] to-[#9936AF] border border-white font-bold w-[40%] h-[5vh] rounded-2xl mt-[5%] float-left md:rounded-3xl md:w-[30%] md:h-[4vh]">
                    <Link to="/detailS">
                        Détail
                    </Link>
                </Button>
            </div>

        </div>
    )
}