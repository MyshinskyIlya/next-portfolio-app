import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface TapButtonProps {
    active: boolean;
    selectTab: () => void;
    children: ReactNode;
}

const variants = {
    default: { width: 0 },
    active: { width: "calc(100% - 0.75rem)" },
};

const TapButton = ({ active, selectTab, children }: TapButtonProps) => {
    const buttonClasses = active ? "text-white" : "";

    return (
        <span onClick={selectTab}>
            <p
                className={`hover:text-white cursor-pointer font-semibold ${buttonClasses}`}
            >
                {children}
            </p>
            <motion.div
                animate={active ? "active" : "default"}
                variants={variants}
                className="h-1 bg-violet-500 mt-2 mr-3"
            ></motion.div>
        </span>
    );
};

export default TapButton;
