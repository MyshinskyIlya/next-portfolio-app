"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { useState } from "react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { navLinks } from "@/assets/nav";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const toggleNavbar = () => {
        setNavbarOpen((prevOpen) => !prevOpen);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-90">
            <div className="flex flex-wrap items-center justify-between mx-auto md:py-4 px-8 py-4">
                <Link href={"/"} className="md:text-4xl text-2xl font-semibold">
                    <span>{"ПОРТФОЛИО"}</span>
                </Link>
                <div className="mobile-menu block md:hidden">
                    <motion.button
                        onClick={toggleNavbar}
                        className="flex items-center px-3 py-2 text-slate-300  hover:text-white hover:border-white"
                        initial={{ rotate: 0 }}
                        animate={{ rotate: navbarOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {navbarOpen ? (
                            <XMarkIcon className="h-8 w-10" />
                        ) : (
                            <Bars3Icon className="h-8 w-10" />
                        )}
                    </motion.button>
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
            <AnimatePresence>
                {navbarOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -60 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -60 }}
                        transition={{ duration: 0.2 }}
                    >
                        <MenuOverlay
                            links={navLinks}
                            setNavbarOpen={setNavbarOpen}
                        ></MenuOverlay>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
