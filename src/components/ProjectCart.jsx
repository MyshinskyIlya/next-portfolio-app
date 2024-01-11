import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import Image from "next/image";

const ProjectCart = ({ imageUrl, title, description, gitUrl, previewUrl }) => {
    return (
        <div className="flex flex-col">
            <div className="h-44 md:h-52 rounded-t-xl relative group ">
                <Image src={imageUrl} alt="Project" fill></Image>
                <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 space-x-4">
                    <Link href={gitUrl} target="_blank">
                        <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] m-2 cursor-pointer hover:text-white"></CodeBracketIcon>
                    </Link>
                </div>
            </div>
            <div className="text-white rounded-b-xl bg-[#181818] py-6 px-4 h-56 md:h-48">
                <h5 className="text-lg font-semibold">{title}</h5>
                <p className="mt-2 text-[#ADB7BE]">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCart;
