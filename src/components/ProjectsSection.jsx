"use client";
import React, { useState, useRef } from "react";
import ProjectCart from "./ProjectCart";
import { projectsArray } from "@/assets/projects";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

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
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTag = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectsArray.filter((item) =>
        item.tag.includes(tag)
    );

    const cardVarients = {
        initial: { y: 50, opacity: 0 },
        animate: { y: 0, opacity: 1 },
    };

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
            <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((item, index) => (
                    <motion.li
                        key={item.id}
                        variants={cardVarients}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.4 }}
                    >
                        <ProjectCart
                            imageUrl={item.image}
                            title={item.title}
                            description={item.description}
                            gitUrl={item.gitUrl}
                            previewUrl={item.previewUrl}
                        ></ProjectCart>
                    </motion.li>
                ))}
            </ul>
        </section>
    );
};

export default ProjectsSection;
