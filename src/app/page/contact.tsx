import { TbBrandGmail } from "react-icons/tb";
import { BsWhatsapp } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link as Linke } from "react-router-dom";
import { Button, Input } from "antd";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const { TextArea } = Input;

export default function Contact() {
    // Envoye email
    const formRef = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formRef.current) return;

        emailjs
            .sendForm(
                "service_vcm7j79",
                "template_j1z11kp",
                formRef.current,
                "WKpuVKejfqtyMShXj"
            )
            .then(() => {
                alert("Message envoyé avec succès 🚀");
                formRef.current?.reset();
            })
            .catch((error) => {
                alert("Erreur lors de l'envoi ❌");
                console.error(error);
            });
    };


    return (
        <div className="relative w-full h-screen overflow-hidden">
            {/* Vidéo de fond */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover "
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="./videos/fond1.mp4" type="video/mp4" />
            </video>

            {/* Overlay sombre (optionnel mais conseillé) */}
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 h-full">
                <br />
                <div className="hidden md:hidden lg:block bg-gray-400 ml-[1%] bg-opacity-20 w-[3%] py-[1%] rounded-full place-content-center place-items-center text-white cursor-pointer duration-200 hover:bg-opacity-30">
                    <Linke to="/" className="place-content-center place-items-center flex">
                        <BiArrowBack className="text-[18px]" />
                    </Linke>
                </div>

                <div className="bg-gray-400 bg-opacity-20 w-[10%] ml-[3%] py-[2.5%] rounded-full place-content-center place-items-center text-white cursor-pointer duration-200 hover:bg-opacity-30 md:w-[5%] md:py-[1.5%] lg:hidden">
                    <Linke to="/" className="place-content-center place-items-center flex">
                        <BiArrowBack className="text-[18px]" />
                    </Linke>
                </div>

                <div className="text-center">
                    <h1 className="text-white font-bold text-[22px] lg:text-[28px] md:text-[25px]">Plus d'information</h1>
                    <h2 className="text-white opacity-70 px-[15%]">Envoyer un message direct vers mon Email</h2>
                    <div className="w-[10vh] h-[2px] bg-white mx-auto bg-gradient-to-r from-[#243c5d] to-[#fff] mt-[3%] mb-[5%] rounded-xl md:mt-[2%] md:mb-[2%] lg:mt-[1%]"></div>
                </div>

                {/* Phone */}
                <div className="mt-[2%] lg:hidden md:hidden">
                    <div className="w-[90%] rounded-2xl bg-white h-[65vh] bg-opacity-5 mx-auto text-center">
                        <p className="text-white pt-[5%] font-bold text-[18px]">Message direct vers mon Email</p>
                        <p className="text-white opacity-80 text-[12px]">Envoyer un message direct vers mon Email</p>
                        <div className="w-[7vh] h-[2px] bg-white mx-auto bg-gradient-to-r from-[#243c5d] to-[#fff] mt-[3%] mb-[5%] rounded-xl md:mt-[2%] md:mb-[2%] lg:mt-[1%]"></div>
                        <form ref={formRef} onSubmit={sendEmail} >
                            <p className="text-white text-start ml-[9%] font-bold mt-[8%] mb-[2%]">Nom</p>
                            <Input className="w-[80%] h-[6vh]"
                                type="text"
                                name="from_name"
                                required
                                placeholder="votre nom"
                            />
                            <p className="text-white text-start ml-[9%] font-bold mt-[8%] mb-[2%]">Email</p>
                            <Input className="w-[80%] h-[6vh]"
                                type="Email"
                                placeholder="exemple@gmail.com"
                                name="reply_to"
                                required
                            />
                            <p className="text-white text-start ml-[9%] font-bold mt-[8%] mb-[2%]">Message</p>
                            <TextArea className="w-[80%] h-[5vh]"
                                rows={5}
                                name="message"
                                placeholder="Votre message..."
                                required
                            />
                            <Button htmlType="submit" className="bg-black border-2 border-white rounded-xl text-white w-[80%] mt-[10%]">
                                Envoyer
                            </Button>
                        </form>

                    </div>

                    <div className="flex items-center justify-center mt-[5%] space-x-[4%] text-white text-[35px] cursor-pointer">
                        <a href="https://www.facebook.com/micka.hasniaina" target="_blank" rel="noopener noreferrer">
                            <FiFacebook className="border-2 border-white rounded-xl p-[15%] hover:scale-110 transition-all duration-200" />
                        </a>
                        <a href="https://www.linkedin.com/in/mickael-rakotomampiandry-888320312" target="_blank" rel="noopener noreferrer">
                            <FiLinkedin className="border-2 border-white rounded-xl p-[15%] hover:scale-110 transition-all duration-200" />
                        </a>
                        <a href="https://wa.me/+261348984604" target="_blank" rel="noopener noreferrer">
                            <BsWhatsapp className="border-2 border-white rounded-xl p-[15%] hover:scale-110 transition-all duration-200" />
                        </a>
                        <a href="mailto:rakotomampiandry@gmail.com" target="_blank" rel="noopener noreferrer">
                            <TbBrandGmail className="border-2 border-white rounded-xl p-[15%] hover:scale-110 transition-all duration-200" />
                        </a>
                    </div>
                </div>

                {/* Desktop */}
                <div className="hidden lg:grid grid-cols-2">
                    <div className="text-white ml-[10%]">
                        <p className="font-bold text-[25px]">RAKOTOMAMPIANDRY Mickaël</p>
                        <p className="opacity-80 font-semibold text-[13px] pr-[40%]">Développeur web, j’allie esthétique, stratégie et technologie pour donner vie à des projets modernes</p>

                        <div className="text-white mt-[8%]">
                            <p className="text-[18px] font-bold">Réseaux sociaux</p>
                            <div className="flex justify-center ml-[-75%] mt-[1%] space-x-[1%] text-white text-[35px] cursor-pointer">
                                <a href="https://www.facebook.com/micka.hasniaina" target="_blank" rel="noopener noreferrer">
                                    <FiFacebook className="border-2 border-white rounded-xl p-[15%] hover:scale-110 transition-all duration-200" />
                                </a>
                                <a href="https://www.linkedin.com/in/mickael-rakotomampiandry-888320312" target="_blank" rel="noopener noreferrer">
                                    <FiLinkedin className="border-2 border-white rounded-xl p-[15%] hover:scale-110 transition-all duration-200" />
                                </a>
                                <a href="https://wa.me/+261348984604" target="_blank" rel="noopener noreferrer">
                                    <BsWhatsapp className="border-2 border-white rounded-xl p-[15%] hover:scale-110 transition-all duration-200" />
                                </a>
                                <a href="mailto:rakotomampiandry@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <TbBrandGmail className="border-2 border-white rounded-xl p-[15%] hover:scale-110 transition-all duration-200" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="w-[50%] rounded-2xl bg-white h-[70vh] bg-opacity-5 mx-auto text-center">
                        <p className="text-white pt-[5%] font-bold text-[18px]">Message direct vers mon Email</p>
                        <p className="text-white opacity-80 text-[12px]">Envoyer un message direct vers mon Email</p>
                        <div className="w-[7vh] h-[2px] bg-white mx-auto bg-gradient-to-r from-[#243c5d] to-[#fff] mt-[3%] mb-[2%] rounded-xl"></div>

                        <form ref={formRef} onSubmit={sendEmail}>
                            <p className="text-white text-start ml-[10%] text-[12px] font-bold mt-[8%] mb-[2%]">Nom</p>
                            <Input className="w-[80%] h-[5vh]" 
                                type="text"
                                name="from_name"
                                required
                                placeholder="votre nom"
                             />

                            <p className="text-white text-start ml-[10%] font-bold mt-[2%] mb-[2%] text-[12px]">Email</p>
                            <Input className="w-[80%] h-[5vh]" 
                                type="Email" 
                                placeholder="exemple@gmail.com" 
                                name="reply_to"
                                required
                            />
                            <p className="text-white text-start ml-[10%] text-[12px] font-bold mt-[2%] mb-[2%]">Message</p>
                            <TextArea className="w-[80%] h-[5vh]" 
                                rows={5}
                                name="message"
                                placeholder="Votre message..."
                                required
                            />
                            <Button htmlType="submit" className="bg-black border-2 border-white rounded-xl text-white w-[80%] mt-[8%] py-[2%]">
                                Envoyer
                            </Button>
                        </form>
                    </div>
                </div>

                {/* Tablette */}
                <div className="hidden lg:hidden md:block">
                    <div className="w-[70%] rounded-2xl bg-white h-[55vh] mb-[5%] bg-opacity-5 mx-auto text-center">
                        <p className="text-white pt-[5%] font-bold text-[18px]">Message direct vers mon Email</p>
                        <p className="text-white opacity-80 text-[12px]">Envoyer un message direct vers mon Email</p>
                        <div className="w-[7vh] h-[2px] bg-white mx-auto bg-gradient-to-r from-[#243c5d] to-[#fff] mt-[3%] mb-[2%] rounded-xl"></div>

                        <p className="text-white text-start ml-[10%] text-[12px] font-bold mt-[8%] mb-[2%]">Nom</p>
                        <Input className="w-[80%] h-[5vh]"
                            type="text"
                            name="from_name"
                            required
                            placeholder="votre nom"
                        />

                        <p className="text-white text-start ml-[10%] font-bold mt-[2%] mb-[2%] text-[12px]">Email</p>
                        <Input className="w-[80%] h-[5vh]" 
                            type="Email"
                            placeholder="exemple@gmail.com" 
                            name="reply_to"
                            required
                        />

                        <p className="text-white text-start ml-[10%] text-[12px] font-bold mt-[2%] mb-[2%]">Message</p>
                        <TextArea className="w-[80%] h-[5vh]" 
                            rows={5} 
                            name="message"
                            placeholder="Votre message..."
                            required
                        />
                        <Button htmlType="submit" className="bg-black border-2 border-white rounded-xl text-white w-[80%] mt-[8%] py-[2%]">
                            Envoyer
                        </Button>
                    </div>

                    <div className="text-white ml-[15%]">
                        <p className="font-bold text-[25px]">RAKOTOMAMPIANDRY Mickaël</p>
                        <p className="opacity-80 font-semibold text-[13px] pr-[40%]">Développeur web, j’allie esthétique, stratégie et technologie pour donner vie à des projets modernes</p>

                        <div className="text-white mt-[5%]">
                            <p className="text-[18px] font-bold">Réseaux sociaux</p>
                            <div className="flex justify-center ml-[-70%] mt-[1%] space-x-[1%] text-white text-[45px] cursor-pointer">
                                <a href="https://www.facebook.com/micka.hasniaina" target="_blank" rel="noopener noreferrer">
                                    <FiFacebook className="border-2 border-white rounded-xl p-[15%] hover:scale-110 transition-all duration-200" />
                                </a>
                                <a href="https://www.linkedin.com/in/mickael-rakotomampiandry-888320312" target="_blank" rel="noopener noreferrer">
                                    <FiLinkedin className="border-2 border-white rounded-xl p-[15%] hover:scale-110 transition-all duration-200" />
                                </a>
                                <a href="https://wa.me/+261348984604" target="_blank" rel="noopener noreferrer">
                                    <BsWhatsapp className="border-2 border-white rounded-xl p-[15%] hover:scale-110 transition-all duration-200" />
                                </a>
                                <a href="mailto:rakotomampiandry@gmail.com" target="_blank" rel="noopener noreferrer">
                                    <TbBrandGmail className="border-2 border-white rounded-xl p-[15%] hover:scale-110 transition-all duration-200" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}