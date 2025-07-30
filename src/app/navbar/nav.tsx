import { MdDiamond } from "react-icons/md";
import { RiMenu4Line } from "react-icons/ri";
import React, { useState } from 'react';
import { Drawer, Button } from 'antd';
import { Link } from 'react-scroll';
import { FiSun, FiMoon } from 'react-icons/fi';


const Navbar = () => {
    // mode sombre et claire
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const toggleTheme = () => {
        const newTheme: 'light' | 'dark' = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    // lien chaque projet 
    const [open, setOpen] = useState(false);
    const menuItems = [
        { label: 'Accueil', to: 'home' },
        { label: 'Projets', to: 'projects' },
        { label: 'À propos', to: 'about' },
        { label: 'Technologie', to: 'contact' },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-maintybe shadow-md px-4 py-2 lg:px-20 lg:py-4">
            <div className="flex items-center justify-between">
                <h1 className="text-xl font-bold text-zinc-200 flex"><MdDiamond className="text-[150%] mr-2" /> Rakotomampiandry<span>.</span></h1>
                {/* Desktop Menu */}
                <ul className="hidden lg:flex space-x-6">
                    {menuItems.map(item => (
                        <li key={item.to}>
                            <Link to={item.to} smooth={true} duration={500}
                                className="cursor-pointer text-zinc-200 hover:text-white hover:border-b-2 hover:border-white border-dotted transition-colors hover:transition">
                                {item.label}
                            </Link>
                        </li>
                    ))}

                    {/* <button
                        onClick={toggleTheme}
                        className="text-white text-xl ml-4 hover:text-red-500 transition"
                        aria-label="Toggle Theme"
                    >
                        {theme === 'light' ? <FiMoon /> : <FiSun />}
                    </button> */}

                </ul>

                <Button className="lg:hidden bg-maintykely border-none text-white hover:bg-maintymatroka transition" icon={<RiMenu4Line />} onClick={() => setOpen(true)} />
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

                <div className="justify-items-center mt-8">
                    <MdDiamond className="text-[350px] text-maintykely opacity-20" />
                </div>
            </Drawer>
        </nav>
    );
};

export default Navbar;