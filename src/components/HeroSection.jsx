"use client";

import React from "react";
import Image from "next/image";
import heroImg from "../../public/images/avatar.png";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
    return (
        <section>
            <div className=" mt-4 grid grid-cols-1 sm:grid-cols-12 mb-16">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-7 place-self-center text-center sm:text-left sm:mr-10"
                >
                    <h1 className="mb-4 lg:text-6xl text-3xl md:text-4xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-teal-600">
                            Hello I`m{" "}
                        </span>
                        <br></br>
                        <TypeAnimation
                            sequence={[
                                "Myshinsky Ilya",
                                1000,
                                "Web Developer",
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
                    <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aspernatur, culpa labore, itaque quasi voluptatibus
                        mollitia nostrum.
                    </p>
                    <div>
                        <button
                            className="px-6 py-3 rounded-full w-full sm:w-fit mr-3
                             bg-gradient-to-br from-blue-600 via-green-400 to-teal-950 text-cyan-50 border border-transparent opacity-90 hover:opacity-100"
                        >
                            Hire Me
                        </button>
                        <button className="px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-teal-900 via-violet-600 to-green-950 hover:bg-zinc-900 border border-transparent mt-4">
                            <span className="block bg-[#121212] hover:bg-slate-950 rounded-full px-5 py-2">
                                Download CV
                            </span>
                        </button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 120 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="col-span-5 place-self-center mt-5 lg:mt-0 sm:ml-10"
                >
                    <div className="rounded-full bg-[#181818] w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] relative hidden md:block">
                        <Image
                            className="transform absolute -translate-x-1/2 -translate-y-1/2 top-[160px] -right-[115px] lg:top-[240px] lg:right-[-42px]"
                            src={heroImg}
                            width={320}
                            height={320}
                            priority={true}
                            alt="hero image"
                        ></Image>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
