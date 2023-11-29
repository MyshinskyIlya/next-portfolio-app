"use client";

import Image from "next/image";
import React, { useState, useTransition } from "react";
import descriptionImage from "../../public/images/description.jpg";
import TapButton from "./TapButton";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <>
                <h3 className="mb-4 text-xl font-semibold">Tech Stack</h3>
                <ul className="font-light text-lg space-y-0.5 list-disc pl-5">
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Node</li>
                    <li>NextJS</li>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                    <li>Tailwind</li>
                </ul>
            </>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <>
                <h3 className="mb-4 text-xl font-semibold">
                    YouTube Programming Chanels
                </h3>
                <ul className="font-light text-lg space-y-0.5 list-disc pl-5">
                    <li>Archakov Blog</li>
                    <li>Ulbi TV</li>
                    <li>Webdecoded</li>
                    <li>As For JS</li>
                    <li>Канал Алекса Лущенко</li>
                    <li>Михаил Непомнящий</li>
                </ul>
            </>
        ),
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <>
                <h3 className="mb-4 text-xl font-semibold">My Career</h3>
                <ul className="font-light text-lg space-y-0.5 list-disc pl-5">
                    <li>More than 1200 programming hours</li>
                    <li>Three non-commercial websites</li>
                </ul>
            </>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTapChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };
    return (
        <section className="text-white">
            <div className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <Image
                    src={descriptionImage}
                    alt="description image"
                    width={500}
                    height={500}
                    className="rounded border-l-2 border-l-purple-950"
                ></Image>
                <div className="mt-8 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold">About Me</h2>
                    <p className="mt-4 text-base lg:text-lg">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Pariatur cupiditate vitae sequi, aut, nihil voluptas
                        distinctio at nostrum ut dignissimos rerum sit
                        voluptatum?
                    </p>
                    <div className="flex flex-row mt-8 space-x-3 text-[#ADB7BE]">
                        <TapButton
                            selectTab={() => handleTapChange("skills")}
                            active={tab === "skills"}
                        >
                            Skills
                        </TapButton>
                        <TapButton
                            selectTab={() => handleTapChange("education")}
                            active={tab === "education"}
                        >
                            Education
                        </TapButton>
                        <TapButton
                            selectTab={() => handleTapChange("experience")}
                            active={tab === "experience"}
                        >
                            Experience
                        </TapButton>
                    </div>
                    <div className="mt-8">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
