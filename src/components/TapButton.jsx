import React from "react";

const TapButton = ({ active, selectTab, children }) => {
    const buttonClasses = active ? "border-b border-purple-600 text-white" : "";

    return (
        <span onClick={selectTab}>
            <p
                className={`hover:text-white cursor-pointer font-semibold ${buttonClasses}`}
            >
                {children}
            </p>
        </span>
    );
};

export default TapButton;
