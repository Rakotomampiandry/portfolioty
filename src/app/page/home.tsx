import { BsFacebook, BsGithub } from "react-icons/bs";
import { TbBrandGmail } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { Anime } from "../component/animation";
import { Cadre } from "../component/cadre";
import { BiCodeAlt } from "react-icons/bi";
import { CgFigma } from "react-icons/cg";
import { AiFillGithub, AiOutlineGithub } from "react-icons/ai";
import { SiWhatsapp } from "react-icons/si";
import { Button } from "antd";
import Link from "antd/es/typography/Link";

export default function Home() {
    return (
        <div className="">
            <div className="px-[5%]">
                <div className="lg:text-left md:text-left">
                    <p className="text-white font-bold text-[30px]">Rakotomampiandry <span className="bg-gradient-to-r from-[#ffff] to-[#9936AF] bg-clip-text text-transparent">Mickaël</span></p>
                    <p className="text-white opacity-80 font-bold text-[25px]">Développeur et designer web</p>
                    <p className="text-white text-center text-[15px] px-[10%] mt-[5%] md:text-[15px] md:px-0 md:pr-[35%] md:text-left md:mt-[2%] lg:text-[15px] lg:pr-[60%] lg:mt-[1%]">Développeur web, j’allie esthétique, stratégie et technologie pour donner vie à des projets modernes.</p>
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
                                <BsFacebook className="  text-white md:w-[10vh]" />
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
    )
}