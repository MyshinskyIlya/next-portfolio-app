"use client";
import React, { useState } from "react";
import ProjectCart from "./ProjectCart";
import { projectsArray } from "@/assets/projects";
import ProjectTag from "./ProjectTag";

const tags = [
    {
        name: "All",
    },
    {
        name: "Web",
    },
    {
        name: "Mobile",
    },
];

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");

    const handleTag = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsArray.filter((item) =>
        item.tag.includes(tag)
    );
    return (
        <section>
            <h2 className="text-4xl font-bold text-center">My Projects</h2>
            <div
                className="text-white flex flex-row justify-center
                 items-center py-6 mt-6 gap-4 md:gap-6 "
            >
                {tags.map((item) => (
                    <ProjectTag
                        key={item.name}
                        name={item.name}
                        handleTag={handleTag}
                        isSelected={item.name === tag}
                    ></ProjectTag>
                ))}
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((item) => {
                    return (
                        <ProjectCart
                            key={item.id}
                            imageUrl={item.image}
                            title={item.title}
                            description={item.description}
                            gitUrl={item.gitUrl}
                            previewUrl={item.previewUrl}
                        ></ProjectCart>
                    );
                })}
            </div>
        </section>
    );
};

export default ProjectsSection;
