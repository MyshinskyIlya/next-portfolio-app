import React from "react";
import NavLink from "./NavLink";
import { navLink } from "@/@types/navLink";

import { AnimatePresence, motion } from "framer-motion";

interface MenuOverlayProps {
    links: navLink[];
    setNavbarOpen: (isOpen: boolean) => void;
}

const MenuOverlay = ({ links, setNavbarOpen }: MenuOverlayProps) => {
    const clickHandler = () => {
        setNavbarOpen(false);
    };

    return (
        <AnimatePresence>
            <motion.ul
                initial={{ opacity: 0, y: -60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -60 }}
                className="flex flex-col py-2 items-center"
            >
                {links.map((item) => (
                    <motion.li
                        key={item.title}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <p onClick={clickHandler}>
                            <NavLink
                                href={item.path}
                                title={item.title}
                            ></NavLink>
                        </p>
                    </motion.li>
                ))}
            </motion.ul>
        </AnimatePresence>
    );
};

export default MenuOverlay;
