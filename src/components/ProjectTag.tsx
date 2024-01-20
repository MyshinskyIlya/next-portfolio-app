import React from "react";

interface ProjectTagProps {
    name: string;
    handleTag: (tag: string) => void;
    isSelected: boolean;
}

const ProjectTag = React.memo(
    ({ name, handleTag, isSelected }: ProjectTagProps) => {
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
    }
);

export default ProjectTag;
