import React from "react";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
    return (
        <ul className=" flex flex-col py-2 items-center">
            {links.map((item) => (
                <NavLink
                    key={item.title}
                    href={item.path}
                    title={item.title}
                ></NavLink>
            ))}
        </ul>
    );
};

export default MenuOverlay;
