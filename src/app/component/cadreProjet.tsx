import { BiCodeAlt } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { IconType } from "react-icons";
import { Tooltip } from "antd";
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Desktopp
interface detailDroit {
    image: string;
    titre: string;
    texte: string;
    role: string;
    divClassName?: string;
    alt: string;
    Icone1: IconType
    techno1: string
    Icone2: IconType
    techno2: string
    Icone3: IconType
    techno3: string
    Icone4: IconType
    techno4: string
}

export function CadreProjetDroit({ image, titre, texte, role, alt, Icone1, techno1, Icone2, techno2, Icone3, techno3, Icone4, techno4, divClassName }: detailDroit) {
    return (
        <div className={`hidden lg:flex justify-center min-h-screen text-white pt-[2%] ${divClassName}`}>
            <div className=" h-[60vh] w-[60%] bg-mangabe rounded-2xl flex">
                <div className="w-[65%]">
                    <img src={image} alt={alt} className="rounded-2xl w-full h-[100%]" loading="lazy"/>
                </div>

                <div className=" w-[35%]">
                    <div className="bg-[#5618B8] flex justify-center bg-opacity-15 p-2 ml-[40vh] w-[10%] rounded-md cursor-pointer hover:bg-[#5618B8] hover:bg-opacity-30 hover:transition duration-200 mt-[4%]">
                        <Tooltip title="Lien GitHub" placement="topLeft">
                            <AiFillGithub className="p-[1%]" />
                        </Tooltip>
                    </div>

                    <div className="ml-[5%] mt-[3%]">
                        <p className="text-[18px] font-bold mb-[2%]">{titre}</p>
                        <p className="break-words overflow-hidden pr-[5%] text-[12px] opacity-80 text-justify">{texte}</p>
                        <p className="text-[12px] mt-[2%]"><span className="font-bold">Rôle:</span> <span>{role}</span></p>

                        <div className="flex mt-[12%] space-x-2">
                            <div className="w-[20%] h-[9vh] place-content-center place-items-center bg-[#9936AF] bg-opacity-20 rounded-xl text-[#9936AF]">
                                {Icone1 && <Icone1 className={`text-[22px]`} />}
                                <p className="text-[12px] font-bold">{techno1}</p>
                            </div>
                            <div className="w-[20%] h-[9vh] place-content-center place-items-center bg-[#9936AF] bg-opacity-20 rounded-xl text-[#9936AF]">
                                {Icone2 && <Icone2 className={`text-[22px]`} />}
                                <p className="text-[12px] font-bold">{techno2}</p>
                            </div>
                            <div className="w-[20%] h-[9vh] place-content-center place-items-center bg-[#9936AF] bg-opacity-20 rounded-xl text-[#9936AF]">
                                {Icone3 && <Icone3 className={`text-[22px]`} />}
                                <p className="text-[12px] font-bold">{techno3}</p>
                            </div>
                            <div className="w-[20%] h-[9vh] place-content-center place-items-center bg-[#9936AF] bg-opacity-20 rounded-xl text-[#9936AF]">
                                {Icone4 && <Icone4 className={`text-[22px]`} />}
                                <p className="text-[12px] font-bold">{techno4}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface detailGauche {
    image: string;
    titre: string;
    texte: string;
    role: string;
    alt: string;
    Icone1: IconType
    techno1: string
    Icone2: IconType
    techno2: string
    Icone3: IconType
    techno3: string
    Icone4: IconType
    techno4: string
}

export function CadreProjetGauche({ image, titre, texte, role, alt, Icone1, techno1, Icone2, techno2, Icone3, techno3, Icone4, techno4 }: detailGauche) {
    return (
        <div className="hidden lg:flex justify-center min-h-screen text-white pt-[2%] mt-[-15%]">
            <div className=" h-[60vh] w-[60%] bg-mangabe rounded-2xl flex">
                <div className="w-[65%] order-2">
                    <img src={image} alt={alt} className="rounded-2xl w-full h-[100%]" loading="lazy" />
                </div>

                <div className=" w-[35%] order-1">
                    <div className="bg-[#5618B8] flex justify-center bg-opacity-15 p-2 ml-[2vh] w-[10%] rounded-md cursor-pointer hover:bg-[#5618B8] hover:bg-opacity-30 hover:transition duration-200 mt-[4%]">
                        <Tooltip title="Lien GitHub" placement="topRight">
                            <AiFillGithub className="p-[1%]" />
                        </Tooltip>
                    </div>

                    <div className="ml-[5%] mt-[3%]">
                        <p className="text-[18px] font-bold mb-[2%]">{titre}</p>
                        <p className="break-words overflow-hidden pr-[5%] text-[12px] opacity-80 text-justify">{texte}</p>
                        <p className="text-[12px] mt-[2%]"><span className="font-bold">Rôle:</span> <span>{role}</span></p>

                        <div className="flex mt-[12%] space-x-2">
                            <div className="w-[20%] h-[9vh] place-content-center place-items-center bg-[#9936AF] bg-opacity-20 rounded-xl text-[#9936AF]">
                                {Icone1 && <Icone1 className={`text-[22px]`} />}
                                <p className="text-[12px] font-bold">{techno1}</p>
                            </div>
                            <div className="w-[20%] h-[9vh] place-content-center place-items-center bg-[#9936AF] bg-opacity-20 rounded-xl text-[#9936AF]">
                                {Icone2 && <Icone2 className={`text-[22px]`} />}
                                <p className="text-[12px] font-bold">{techno2}</p>
                            </div>
                            <div className="w-[20%] h-[9vh] place-content-center place-items-center bg-[#9936AF] bg-opacity-20 rounded-xl text-[#9936AF]">
                                {Icone3 && <Icone3 className={`text-[22px]`} />}
                                <p className="text-[12px] font-bold">{techno3}</p>
                            </div>
                            <div className="w-[20%] h-[9vh] place-content-center place-items-center bg-[#9936AF] bg-opacity-20 rounded-xl text-[#9936AF]">
                                {Icone4 && <Icone4 className={`text-[22px]`} />}
                                <p className="text-[12px] font-bold">{techno4}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Tablette
interface detailTablette{
    image: string;
    titre: string;
    texte: string;
    role: string;
    divClassName?: string;
    alt: string;
    Icone1: IconType
    techno1: string
    Icone2: IconType
    techno2: string
    Icone3: IconType
    techno3: string
    Icone4: IconType
    techno4: string
}

export function CadreTabletteD({ image, titre, texte, role, alt, Icone1, techno1, Icone2, techno2, Icone3, techno3, Icone4, techno4, divClassName }: detailTablette){
    return(
        <div className={`flex justify-center min-h-screen text-white pt-[2%] ${divClassName}`}>
            <div className=" h-[30vh] w-[80%] bg-mangabe rounded-2xl flex">
                <div className="w-[65%]">
                    <img src={image} alt={alt} className="rounded-2xl w-full h-[100%]" loading="lazy"/>
                </div>

                <div className=" w-[35%]">
                    <div className="bg-[#5618B8] flex justify-center bg-opacity-15 p-2 ml-[80%] w-[15%] rounded-md cursor-pointer hover:bg-[#5618B8] hover:bg-opacity-30 hover:transition duration-200 mt-[4%]">
                        <Tooltip title="Lien GitHub" placement="topLeft">
                            <AiFillGithub className="p-[1%]" />
                        </Tooltip>
                    </div>

                    <div className="ml-[5%] mt-[3%]">
                        <p className="text-[12px] font-bold mb-[2%]">{titre}</p>
                        <p className="break-words overflow-hidden pr-[5%] text-[10px] opacity-80 text-justify">{texte}</p>
                        <p className="text-[10px] mt-[2%]"><span className="font-bold">Rôle:</span> <span>{role}</span></p>

                        <div className="flex mt-[3%] space-x-2">
                            <div className="w-[20%] h-[4vh] place-content-center place-items-center bg-[#9936AF] bg-opacity-20 rounded-lg text-[#9936AF]">
                                {Icone1 && <Icone1 className={`text-[18px]`} />}
                                <p className="text-[8px] font-bold">{techno1}</p>
                            </div>
                            <div className="w-[20%] h-[4vh] place-content-center place-items-center bg-[#9936AF] bg-opacity-20 rounded-lg text-[#9936AF]">
                                {Icone2 && <Icone2 className={`text-[18px]`} />}
                                <p className="text-[8px] font-bold">{techno2}</p>
                            </div>
                            <div className="w-[20%] h-[4vh] place-content-center place-items-center bg-[#9936AF] bg-opacity-20 rounded-lg text-[#9936AF]">
                                {Icone3 && <Icone3 className={`text-[18px]`} />}
                                <p className="text-[8px] font-bold">{techno3}</p>
                            </div>
                            <div className="w-[20%] h-[4vh] place-content-center place-items-center bg-[#9936AF] bg-opacity-20 rounded-lg text-[#9936AF]">
                                {Icone4 && <Icone4 className={`text-[18px]`} />}
                                <p className="text-[8px] font-bold">{techno4}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface detailTabletteG{
    image: string;
    titre: string;
    texte: string;
    role: string;
    divClassName?: string;
    alt: string;
    Icone1: IconType
    techno1: string
    Icone2: IconType
    techno2: string
    Icone3: IconType
    techno3: string
    Icone4: IconType
    techno4: string
}

export function CadreTabletteG({ image, titre, texte, role, alt, Icone1, techno1, Icone2, techno2, Icone3, techno3, Icone4, techno4 }: detailTabletteG) {
    return (
        <div className="flex justify-center min-h-screen text-white pt-[2%]">
            <div className=" h-[30vh] w-[80%] bg-mangabe rounded-2xl flex">
                <div className="w-[65%] order-2">
                    <img src={image} alt={alt} className="rounded-2xl w-full h-[100%]" loading="lazy" />
                </div>

                <div className=" w-[35%] order-1">
                    <div className="bg-[#5618B8] flex justify-center bg-opacity-15 p-2 ml-[1vh] w-[16%] rounded-md cursor-pointer hover:bg-[#5618B8] hover:bg-opacity-30 hover:transition duration-200 mt-[4%]">
                        <Tooltip title="Lien GitHub" placement="topRight">
                            <AiFillGithub className="p-[1%]" />
                        </Tooltip>
                    </div>

                    <div className="ml-[5%] mt-[3%]">
                        <p className="text-[12px] font-bold mb-[2%]">{titre}</p>
                        <p className="break-words overflow-hidden pr-[5%] text-[10px] opacity-80 text-justify">{texte}</p>
                        <p className="text-[10px] mt-[2%]"><span className="font-bold">Rôle:</span> <span>{role}</span></p>

                        <div className="flex mt-[3%] space-x-2">
                            <div className="w-[20%] h-[4vh] place-content-center place-items-center bg-[#9936AF] bg-opacity-20 rounded-lg text-[#9936AF]">
                                {Icone1 && <Icone1 className={`text-[18px]`} />}
                                <p className="text-[8px] font-bold">{techno1}</p>
                            </div>
                            <div className="w-[20%] h-[4vh] place-content-center place-items-center bg-[#9936AF] bg-opacity-20 rounded-lg text-[#9936AF]">
                                {Icone2 && <Icone2 className={`text-[18px]`} />}
                                <p className="text-[8px] font-bold">{techno2}</p>
                            </div>
                            <div className="w-[20%] h-[4vh] place-content-center place-items-center bg-[#9936AF] bg-opacity-20 rounded-lg text-[#9936AF]">
                                {Icone3 && <Icone3 className={`text-[18px]`} />}
                                <p className="text-[8px] font-bold">{techno3}</p>
                            </div>
                            <div className="w-[20%] h-[4vh] place-content-center place-items-center bg-[#9936AF] bg-opacity-20 rounded-lg text-[#9936AF]">
                                {Icone4 && <Icone4 className={`text-[18px]`} />}
                                <p className="text-[8px] font-bold">{techno4}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Phone
interface detailPhone{
    image: string;
    titre: string;
    texte: string;
    role: string;
    alt: string;
    Icone1: IconType;
    Icone2: IconType
    Icone3: IconType
    Icone4: IconType
}

export function CadrePhone({image, titre, texte, role, alt, Icone1, Icone2, Icone3, Icone4}:detailPhone) {
    const [showTech, setShowTech] = useState(false);

    return (
        <div className="bg-mangabe w-[90%] rounded-lg">
            <div className="flex space-x-2 ml-[10%]">
                <div onClick={() => setShowTech(true)} className="float-left bg-[#5618B8] text-white flex justify-center bg-opacity-15 p-2 w-[10%] rounded-md cursor-pointer hover:bg-[#5618B8] hover:bg-opacity-30 hover:transition duration-200 mt-[4%] ml-[75%]">
                    <Tooltip title="Technologies" placement="topLeft">
                        <BiCodeAlt className="" />
                    </Tooltip>
                </div>
                <div className="bg-[#5618B8] text-white flex justify-center bg-opacity-15 p-2 w-[10%] rounded-md cursor-pointer hover:bg-[#5618B8] hover:bg-opacity-30 hover:transition duration-200 mt-[4%]">
                    <Tooltip title="Lien GitHub" placement="topLeft">
                        <AiFillGithub className="p-[1%]" />
                    </Tooltip>
                </div>
            </div>

            <div className="relative mt-[5%]">
                <img
                    src={image}
                    alt={alt}
                    className="rounded-lg w-full"
                    loading="lazy"
                    onClick={() => setShowTech(false)}
                />

                {showTech && (
                    <div className={`absolute w-full h-[30%] mt-[-26%] rounded-lg backdrop-blur-md bg-white/10 animate-fadeSlide`}>
                        <div className=" flex justify-center items-center space-x-1 pt-[4%]">
                            <div className="bg-black text-white rounded-2xl bg-opacity-50 w-[20%] flex place-content-center py-[5%] animate-fadeSlide">
                                {Icone1 && <Icone1 className="text-[30px]"/>}
                            </div>
                            <div className="bg-black text-white rounded-2xl bg-opacity-50 w-[20%] flex place-content-center py-[5%] animate-fadeSlide">
                                {Icone2 && <Icone2 className="text-[30px]"/>}
                            </div>
                            <div className="bg-black text-white rounded-2xl bg-opacity-50 w-[20%] flex place-content-center py-[5%] animate-fadeSlide">
                                {Icone3 && <Icone3 className="text-[30px]"/>}
                            </div>
                            <div className="bg-black text-white rounded-2xl bg-opacity-50 w-[20%] flex place-content-center py-[5%] animate-fadeSlide">
                                {Icone4 && <Icone4 className="text-[30px]"/>}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="py-[5%] px-[2%] space-y-2">
                <p className="text-white font-bold">{titre}</p>
                <p className="text-white text-[10px] text-justify">{texte}</p>
                <p className="text-white text-[12px] text-justify"><span className="font-bold">Rôle:</span> <span>{role}</span></p>
            </div>
        </div>
    )
}