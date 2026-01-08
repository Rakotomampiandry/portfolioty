import { MdDiamond } from "react-icons/md";
import React from "react";

const Header = () => {
    return (
        <header className="flex items-center bg-gradient-to-r from-[#000000] to-[#0D0716] text-white py-[2%] pl-[5%] space-x-[2%] lg:py-[1%] lg:pl-[1%] lg:space-x-[0.5%]">
            <MdDiamond />
            <p className="font-bold">Rakotomampiandry .</p>
        </header>
    );
};

export default Header;