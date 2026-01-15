import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link as Linke } from "react-router-dom";

export default function Contact(){
    return(
        <div className="bg-gradient-to-r from-[#0D0716] to-[#000000] h-screen">
            <br />
            <div className="hidden md:hidden ml-[2%] lg:block bg-violeta bg-opacity-20 w-[3%] py-[1%] rounded-full place-content-center place-items-center text-violeta cursor-pointer duration-200 hover:bg-opacity-30">
                <Linke to="/" className="place-content-center place-items-center flex">
                    <BiArrowBack className="text-[18px]" />
                </Linke>
            </div>
            <div className="bg-violeta bg-opacity-20 w-[10%] py-[2.5%] ml-[2%] rounded-full place-content-center place-items-center text-violeta cursor-pointer duration-200 hover:bg-opacity-30 md:w-[5%] md:py-[1.5%] lg:hidden">
                <Linke to="/" className="place-content-center place-items-center flex">
                    <BiArrowBack className="text-[18px]" />
                </Linke>
            </div>

            <div className="text-center">
                <p className="text-white font-bold text-[20px] opacity-80">Plus d'information</p>
            </div>
        </div>
    )
}