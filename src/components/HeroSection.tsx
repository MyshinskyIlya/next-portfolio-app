"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section>
            <div className=" mt-4 grid grid-cols-1 sm:grid-cols-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-7 place-self-center text-center sm:text-left sm:mr-10"
                >
                    <h1 className="mb-4 lg:text-6xl text-[32px] leading-10 md:text-4xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-teal-600">
                            ПРИВЕТ, Я{" "}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                "Мышинский Илья",
                                1000,
                                "Веб-Разработчик",
                                1000,
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{
                                display: "inline-block",
                            }}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-[14px] sm:text-lg mb-6 lg:text-xl">
                        Мне 23 года, проживаю в Тбилиси, занимаюсь
                        программированием с 2021 года.
                    </p>
                    <div className="space-x-0 lg:space-x-3">
                        <Link href={"https://t.me/bvllone"} target="_blank">
                            <button
                                className="px-6 py-3 rounded-full w-full sm:w-fit mr-0 md:mr-3 lg:mr-0
                             bg-gradient-to-br from-blue-700 via-green-600 to-teal-950 border border-transparent hover:from-blue-900 hover:via-green-700 hover:text-white"
                            >
                                Мой Telegram
                            </button>
                        </Link>
                        <Link
                            href={"https://github.com/MyshinskyIlya"}
                            target="_blank"
                        >
                            <button className="px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-teal-900 via-violet-600 to-green-950 hover:bg-zinc-900 border border-transparent mt-4">
                                <span className="block bg-[#121212] hover:bg-slate-950 rounded-full px-5 py-2">
                                    GitHub
                                </span>
                            </button>
                        </Link>
                        <Link
                            href={"https://t.me/myprogramminghours"}
                            target="_blank"
                        >
                            <button className="px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-green-800 via-teal-600 to-yellow-500 hover:bg-zinc-900 border border-transparent mt-4">
                                <span className="block bg-[#121212] hover:bg-slate-950 rounded-full px-5 py-2">
                                    Часы программирования
                                </span>
                            </button>
                        </Link>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 120 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="col-span-5 place-self-center mt-5 lg:mt-0 sm:ml-10"
                >
                    <div>
                        <Image
                            className="hidden md:block top-[260px] -right-[90px] lg:top-[280px] lg:right-[-2px] rounded-full border border-yellow-400 shadow-md shadow-yellow-500"
                            src={"/images/me.jpg"}
                            width={320}
                            height={280}
                            priority
                            alt="hero image"
                        ></Image>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
