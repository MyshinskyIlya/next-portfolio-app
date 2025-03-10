"use client";

import Image from "next/image";
import React, { useRef, useState, useTransition } from "react";
import descriptionImage from "../../public/images/description.jpg";
import TapButton from "./TapButton";
import { AnimatePresence, motion, useInView } from "framer-motion";

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <>
                <h3 className="mb-4 text-xl font-semibold">Tech Stack</h3>
                <ul className="font-light text-base md:text-lg space-y-0.5 list-disc pl-5 grid grid-cols-2 max-sm:gap-x-20 md:grid-cols-3">
                    <li>React</li>
                    <li>TypeScript</li>
                    <li>Node</li>
                    <li>Next.js</li>
                    <li>Vue</li>
                    <li>Tailwind</li>
                    <li>Zustand</li>
                    <li>Redux Toolkit</li>
                    <li>MobX</li>
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                    <li>Webpack</li>
                    <li>AWS</li>
                    <li>Eleventy JS</li>
                    <li>Linux/MacOS</li>
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
                <p className="font-light text-base md:text-lg space-y-0.5 list-disc">
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
                <ul className="font-light text-base md:text-lg space-y-0.5 list-disc pl-5">
                    <li>
                        <p>
                            Фриланс - создание и сопровождение веб-приложений,
                            включая редизайн и обновление технологического
                            стека.
                        </p>
                        <p className="flex justify-end w-full text-yellow-300">
                            2023г.
                        </p>
                    </li>
                    <li>
                        <p>
                            Jadoo - архитектурное бюро. Frontend-разработчик.
                            Сольная разработка веб-приложения, поддержка и
                            обновление.
                        </p>
                        <p className="flex justify-end w-full text-yellow-300">
                            2023-2024г.
                        </p>
                    </li>
                    <li>
                        <p>
                            AI Boost - Fullstack-разработчик. Сервис для
                            создания и редактирования изображений с помощью
                            нейронных сетей.
                        </p>
                        <p className="flex justify-end w-full text-yellow-300">
                            2024-2025г.
                        </p>
                    </li>
                </ul>
                <br />
                <h3 className="mb-4 text-xl font-semibold">
                    Некоммерческий опыт
                </h3>
                <ul className="font-light text-base md:text-lg space-y-0.5 list-disc pl-5">
                    <li>Более 3000 часов программирования.</li>
                    <li>Более 10 полномасштабных приложений.</li>
                </ul>
            </>
        ),
    },
];

const AboutSection = React.memo(() => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const handleTapChange = (id: string) => {
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
                className="md:grid md:grid-cols-2 gap-8 items-start max-sm:text-sm py-8 xl:gap-16 sm:py-16 xl:px-16"
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
                        Веб-разработчик почти с 4-летнем стажем, специализируюсь
                        на создании интуитивно-понятных отзывчивых
                        пользовательских интерфейсов и полноценных
                        веб-приложений. <br /> <br /> Работаю над разнообразными
                        проектами включая масштабные коммерции и инновационные
                        стартапы. Приверженость обучению и лучшим практикам
                        разработки.
                    </p>
                    <div className="flex flex-row mt-8 gap-3 text-[#ADB7BE] text-[16px] md:text-lg whitespace-nowrap">
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
                    <AnimatePresence initial={false}>
                        <motion.div
                            key={tab}
                            className="mt-8 md:min-h-[226px] min-h-[286px]"
                        >
                            {TAB_DATA.find((t) => t.id === tab) && (
                                <motion.div
                                    initial={{ opacity: 0, x: -100 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    {
                                        TAB_DATA.find((t) => t.id === tab)
                                            ?.content
                                    }
                                </motion.div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>
        </section>
    );
});

export default AboutSection;
