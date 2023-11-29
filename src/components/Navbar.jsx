"use client";

import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { useState } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
    { title: "About", path: "#about" },
    { title: "Projects", path: "#projects" },
    { title: "Contact", path: "#contact" },
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
            <div className="flex flex-wrap items-center justify-between mx-auto md:p-8 px-8 py-4">
                <Link href={"/"} className="md:text-5xl text-2xl font-semibold">
                    LOGO
                </Link>
                <div className="mobile-menu block md:hidden">
                    {!navbarOpen ? (
                        <button
                            onClick={() => setNavbarOpen(true)}
                            className="flex items-center px-3 py-2 text-slate-300 border border-slate-300 rounded hover:text-white hover:border-white"
                        >
                            <Bars3Icon className="h-5 w-5"></Bars3Icon>
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className="flex items-center px-3 py-2 text-slate-300 border border-slate-300 rounded hover:text-white hover:border-white"
                        >
                            <XMarkIcon className="h-5 w-5"></XMarkIcon>
                        </button>
                    )}
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar">
                    <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
                        {navLinks.map((item) => (
                            <li key={item.title}>
                                <NavLink
                                    href={item.path}
                                    title={item.title}
                                ></NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {navbarOpen && <MenuOverlay links={navLinks}></MenuOverlay>}
        </nav>
    );
};

export default Navbar;
