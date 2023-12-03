import React from "react";

const ProjectTag = ({ name, handleTag, isSelected }) => {
    const buttonStyle = isSelected
        ? "border-teal-700"
        : "border-slate-600 hover:border-gray-500 text-[#ADB7BE]";
    return (
        <button
            onClick={() => handleTag(name)}
            className={`rounded-full border-2 
                px-6 py-2 text-lg ${buttonStyle}`}
        >
            {name}
        </button>
    );
};

export default ProjectTag;
