
import { Tooltip } from "antd";
import { BiArrowBack } from "react-icons/bi";
import { RiReactjsLine } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Projet() {
    return (
        <div className="bg-maintybe text-white min-h-screen relative">
            <div className=" pt-4 flex ">
                <Link to="/">
                    <BiArrowBack className="text-[400%] text-zinc-200 bg-maintykely p-1 px-3 rounded-full ml-3" />
                </Link>

                <h1 className="text-white items-center content-center ml-[28%]">
                    <span className="text-[25px] font-semibold">Projet</span>
                </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 mt-3">
                <div className=" items-center justify-center w-[92%] bg-maintybe opacity-90 ml-5 rounded-xl">
                    <div className="mt-4">
                        <img src="../images/Home.png" alt="webb" className="w-[95%] h-[280px] rounded-md ml-3" />
                    </div>

                    <div className="mb-3 mr-1">
                        <h1 className="text-white text-[18px] font-semibold">Mini site e-commerce</h1>
                        <p className="text-justify ml-4 lg:text-ellipsis">Développement d'une application e-commerce compléte avec une interface utilisateur moderne et responsive.
                            Projet mettant en pratique l'ensemble du cycle de developpement webb du design à la mise en production. C'est un projet personnel</p>
                        <p className="font-semibold"><span className="font-semibold">Rôle: </span>Developpeur fullstack</p>
                    </div>

                    <div>
                        <Tooltip title="React" placement="bottom">
                            <RiReactjsLine className="text-[400%] bg-maintykely p-1 px-3 rounded-md mr-2" />
                        </Tooltip>
                    </div>
                </div>

                <div className="flex items-center justify-center w-[92%] bg-maintykely ml-5">

                </div>
            </div>
        </div>
    )
}