import { AiOutlineArrowRight } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { Button, Input } from "antd";
import { motion } from "framer-motion";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export function About() {
    // Animation AOS
    useEffect(() => {
        AOS.init({ duration: 1200, once: false });

        return () => {
            AOS.refresh();
        }
    }, []);

    const [startTyping, setStartTyping] = useState(false);

    return (
        <div className="">
            <p
                className="text-white font-bold text-[20px] mb-[2%] pt-[2%] text-center 
                 md:text-[25px] lg:mb-[0.5%] lg:text-[30px]"
            >
                {/* A */}
                <motion.span
                    initial={{ y: -60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0 }}
                    className="inline-block"
                >
                    A
                </motion.span>

                {/* propos */}
                <motion.span
                    initial={{ y: -60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="inline-block ml-2"
                >
                    propos
                </motion.span>

                {/* du Mickaël */}
                <motion.span
                    initial={{ y: -60, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="inline-block ml-2 bg-gradient-to-r from-[#ffffff] to-[#9936AF] bg-clip-text text-transparent"
                >
                    du Mickaël
                </motion.span>
            </p>
            <p className="text-white opacity-70 text-center text-[14px] px-[5%] lg:px-[32%]">Quelques mots pour me présenter et partager mon parcours, mes motivations et ma vision du développement web.</p>
            <div className="w-[10vh] h-[2px] bg-white mx-auto bg-gradient-to-r from-[#9936AF] to-[#fff] mt-[3%] rounded-xl lg:mt-[1%] lg:w-[15vh]"></div>

            <div className="w-[20vh] h-[20vh] bg-violeta blur-3xl opacity-60 lg:opacity-80 relative z-0 mb-[-30%] lg:mb-[-5%] md:mb-[-22%] animate-pulse"></div>

            <div className="grid grid-cols-1 px-[5%] lg:grid-cols-2">
                <div className="w-full space-y-[2%] order-1 lg:order-2">
                    <div className="h-[10vh] bg-[#1A122E] bg-opacity-30 rounded-lg flex items-center" data-aos="fade-left">
                        <BsCodeSlash className="bg-violeta text-white p-[4%] text-[50px] ml-[4%] mr-[4%] rounded-lg lg:p-[2%] lg:text-[40px] md:p-[2%]" />
                        <p className="text-white text-[15px] font-bold ml-[5%] lg:ml-0 md:ml-0 md:text-[16px]">Développeur web Junior</p>
                    </div>
                    <div className="pb-[8%] bg-[#1A122E] bg-opacity-30 rounded-lg w-full px-[5%] lg:pb-[5%]" data-aos="fade-up">
                        <br />
                        <img src="./images/micka.jpg" alt="photo de Mickael" className="object-contain w-[20%] rounded-full mx-auto lg:w-[10%]" />
                        <p className="text-center mt-[2%] text-white font-bold text-[14px] opacity-95">Rakotomampiandry Mickaël</p>
                        <p className="mt-[2%] text-white text-center text-[12px] px-[3%] lg:mt-[1%] lg:px-[10%] md:px-[10%] md:mt-[2%]">Je suis un développeur web passionné par la création d’applications modernes, performantes et faciles à utiliser.</p>
                        <div className="bg-white w-full h-[6vh] mt-[10%] rounded-lg flex items-center lg:mt-[4%] lg:w-[40%] lg:mx-auto md:mt-[5%] md:w-[50%] md:h-[5vh] md:mx-auto">
                            <p className="font-bold ml-[15%] text-[14px] opacity-70 lg:ml-[10%]">Plus d'information</p>
                            <Button className="bg-violeta left-[20%] lg:left-[15%]">
                                <AiOutlineArrowRight className="text-white py-[2%]" />
                            </Button>
                        </div>
                    </div>
                    <div className="lg:hidden bg-[#1A122E] bg-opacity-30 rounded-lg px-[5%] py-[5%]">
                        <p className="text-white text-[14px] text-justify leading-relaxed">
                            <Typewriter
                                words={[
                                    "Développeur web passionné par l’univers du digital et les technologies modernes. Mon parcours m’a permis d’acquérir une solide expérience dans la conception et le développement de solutions web performantes, alliant interfaces intuitives, architectures efficaces et respect des bonnes pratiques en matière d’accessibilité et de responsive design."
                                ]}
                                cursor
                                cursorStyle="█"
                                typeSpeed={30}
                                deleteSpeed={0}
                                delaySpeed={1000}
                            />
                        </p>

                        <p className="text-white text-[14px] text-justify leading-relaxed mt-[2%]">
                            <Typewriter
                                words={[
                                    "Curieux et en constante veille technologique, j’accorde une grande importance à la qualité du code, à l’optimisation des performances et à l’accessibilité, afin de proposer des expériences numériques cohérentes, modernes et durables."
                                ]}
                                cursor={false}
                                typeSpeed={30}
                                deleteSpeed={0}
                                delaySpeed={6000}
                            />
                        </p>
                    </div>
                </div>

                <motion.div
                    className="hidden md:hidden lg:block h-[50vh] bg-[#1A122E] bg-opacity-30 
                 lg:mr-[3%] rounded-lg order-2 lg:order-1 px-[6%] py-[10%]"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    onViewportEnter={() => setStartTyping(true)}
                >
                    <p className="text-white text-[14px] text-justify leading-relaxed">
                        {startTyping && (
                            <Typewriter
                                words={[
                                    "Développeur web passionné par l’univers du digital et les technologies modernes. Mon parcours m’a permis d’acquérir une solide expérience dans la conception et le développement de solutions web performantes, alliant interfaces intuitives, architectures efficaces et respect des bonnes pratiques en matière d’accessibilité et de responsive design."
                                ]}
                                cursor
                                cursorStyle="█"
                                typeSpeed={30}
                                deleteSpeed={0}
                                delaySpeed={1000}
                            />
                        )}
                    </p>

                    <p className="text-white text-[14px] text-justify leading-relaxed mt-[2%]">
                        {startTyping && (
                            <Typewriter
                                words={[
                                    "Curieux et en constante veille technologique, j’accorde une grande importance à la qualité du code, à l’optimisation des performances et à l’accessibilité, afin de proposer des expériences numériques cohérentes, modernes et durables."
                                ]}
                                cursor={false}
                                typeSpeed={30}
                                deleteSpeed={0}
                                delaySpeed={6000}
                            />
                        )}
                    </p>
                </motion.div>
            </div>
        </div>
    )
}