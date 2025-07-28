import { MdEmail } from "react-icons/md"; 
import { BsGithub } from "react-icons/bs"; 
import { BsLinkedin } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { BsFacebook } from "react-icons/bs";
import { MdDiamond } from "react-icons/md";
import { RiMenu4Line } from "react-icons/ri";
import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const menuItems = [
        { label: 'Accueil', to: 'home' },
        { label: 'Projets', to: 'projects' },
        { label: 'À propos', to: 'about' },
        { label: 'Technologie', to: 'contact' },
    ];

    return (
        <nav
            className="fixed top-0 left-0 w-full z-50 bg-maintybe shadow-md px-4 py-2 lg:px-20 lg:py-4"
            // data-aos="fade-down"
        >
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold text-zinc-200 flex"><MdDiamond className="text-[150%] mr-2" /> Rakotomampiandry<span>.</span></h1>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex space-x-6">
                    {menuItems.map(item => (
                        <li key={item.to}>
                            <Link
                                to={item.to}
                                smooth={true}
                                duration={500}
                                className="cursor-pointer text-zinc-200 hover:text-white hover:border-b-2 hover:border-white border-dotted transition-colors hover:transition"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                {/* <ul className="">
              
                    <div className="hidden laptop:flex">
                        <div className="text-zinc-200 cursor-pointer text-[150%] ml-1 mr-4"><BsFacebook className="hover:text-blue-500 transition"/></div>
                        <div className="text-zinc-200 cursor-pointer text-[170%] mr-4"><RiWhatsappFill className="cursor-pointer hover:text-green-500 transition"/></div>
                        <div className="text-zinc-200 cursor-pointer text-[150%] mr-4"><BsLinkedin className="cursor-pointer hover:text-blue-400 transition"/></div>
                        <div className="text-zinc-200 cursor-pointer text-[170%] mr-4"><MdEmail className="cursor-pointer hover:text-gray-100 transition"/></div>
                        <div className="text-zinc-200 cursor-pointer text-[170%] mr-4"><BsGithub className="cursor-pointer hover:text-zinc-400 transition"/></div>
                    </div>
                </ul> */}

                {/* Mobile Button */}
                <Button
                    className="lg:hidden bg-maintykely border-none text-white hover:bg-maintymatroka transition"
                    icon={<RiMenu4Line />}
                    onClick={() => setOpen(true)}
                />
            </div>

            {/* Drawer for Mobile */}
            <Drawer
                title="Menu"
                placement="right"
                onClose={() => setOpen(false)}
                open={open}
                closeIcon={<span className="text-white text-xl">×</span>}
                rootClassName="custom-drawer"
            >
                <ul className="flex flex-col space-y-4 items-center">
                    {menuItems.map(item => (
                        <li key={item.to}>
                            <Link
                                to={item.to}
                                smooth={true}
                                duration={500}
                                onClick={() => setOpen(false)}
                                className="cursor-pointer text-zinc-200 hover:text-white hover:border-b-2 hover:border-white border-dotted transition-colors hover:transition"
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* RÉSEAUX SOCIAUX (affichés en mobile aussi) */}
                <div className="flex justify-center mt-8 space-x-6 text-2xl text-white">
                    <BsFacebook className="cursor-pointer hover:text-blue-500" />
                    <RiWhatsappFill className="cursor-pointer hover:text-green-500" />
                    <BsLinkedin className="cursor-pointer hover:text-blue-400" />
                    <MdEmail className="cursor-pointer hover:text-gray-100" />
                    <BsGithub className="cursor-pointer hover:text-zinc-400 transition"/>
                </div>
            </Drawer>
        </nav>
    );
};

export default Navbar;