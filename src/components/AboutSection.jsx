"use client";

import Image from "next/image";
import React, { useRef, useState, useTransition } from "react";
import descriptionImage from "../../public/images/description.jpg";
import TapButton from "./TapButton";
import { motion, useInView } from "framer-motion";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <>
                <h3 className="mb-4 text-xl  font-semibold">Tech Stack</h3>
                <ul className="font-light md:text-lg space-y-0.5 list-disc pl-5 grid md:grid-cols-3">
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Node</li>
                    <li>NextJS</li>
                    <li>Redux Toolkit</li>
                    <li>MongoDB</li>
                    <li>Vue</li>
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
                    Национальный исследовательский университет «Высшая школа
                    экономики» г. Москва.
                </h3>
                <p className="font-light md:text-lg space-y-0.5 list-disc">
                    Дизайн и разработка информационных продуктов.
                </p>
            </>
        ),
    },
    {
        title: "Experience",
        id: "experience",
        content: (
            <>
                <h3 className="mb-4 text-xl font-semibold">
                    Коммерческий опыт
                </h3>
                <ul className="font-light md:text-lg space-y-0.5 list-disc pl-5">
                    <li>
                        Архитектурное бюро Jadoo. Разработка веб-приложения
                        2023г.
                    </li>
                </ul>
                <br />
                <h3 className="mb-4 text-xl font-semibold">
                    Некоммерческий опыт
                </h3>
                <ul className="font-light md:text-lg space-y-0.5 list-disc pl-5">
                    <li>Более 1200 часов программирования.</li>
                    <li>Более 10 полномасштабных приложений.</li>
                </ul>
            </>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTapChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    const cardVarients = {
        initial: { x: -60, opacity: 0 },
        animate: { x: 0, opacity: 1 },
    };
    return (
        <section id="about" className="text-white md:mt-12 pt-16">
            <motion.div
                ref={ref}
                variants={cardVarients}
                initial="initial"
                animate={isInView ? "animate" : "initial"}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
            >
                <Image
                    src={descriptionImage}
                    alt="description image"
                    width={500}
                    height={500}
                    className="rounded border-l-2 border-l-purple-950"
                ></Image>
                <div className="mt-8 md:mt-0 text-left flex flex-col h-full">
                    <h2 className="text-4xl font-bold">ОБО МНЕ</h2>
                    <p className="mt-4 text-base lg:text-lg font-light">
                        Веб-разработчик почти с 2-летнем стажем, специализируюсь
                        на создании интуитивно-понятных отзывчивых
                        пользовательских интерфейсов и полноценных
                        веб-приложений. <br /> <br /> Работаю над разнообразными
                        проектами включая масштабные коммерции и инновационные
                        стартапы. Приверженость обучению и лучшим практикам
                        разработки.
                    </p>
                    <div className="flex flex-row mt-8 gap-3 text-[#ADB7BE] text-xs md:text-lg">
                        <TapButton
                            selectTab={() => handleTapChange("skills")}
                            active={tab === "skills"}
                        >
                            Технологии
                        </TapButton>
                        <TapButton
                            selectTab={() => handleTapChange("education")}
                            active={tab === "education"}
                        >
                            Образование
                        </TapButton>
                        <TapButton
                            selectTab={() => handleTapChange("experience")}
                            active={tab === "experience"}
                        >
                            Опыт работы
                        </TapButton>
                    </div>
                    <div className="mt-8 md:min-h-[226px] min-h-[286px]">
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default AboutSection;
