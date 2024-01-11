import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, setNavbarOpen }) => {
    const clickHandler = () => {
        setNavbarOpen(false);
    };

    return (
        <ul className="flex flex-col py-2 items-center">
            {links.map((item) => (
                <p onClick={clickHandler} key={item.title}>
                    <NavLink href={item.path} title={item.title}></NavLink>
                </p>
            ))}
        </ul>
    );
};

export default MenuOverlay;
