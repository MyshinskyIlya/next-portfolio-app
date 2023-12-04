"use client";

import React from "react";
import githubIcon from "../../public/images/icons/github.svg";
import tgIcon from "../../public/images/icons/telegram.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
    return (
        <section className="relative">
            <div className="pointer-events-none backdrop-blur-sm bg-gradient-to-r from-violet-700 to-teal-950 absolute top-20 left-1/2 h-96 w-full rounded-full opacity-5 blur-3xl"></div>
            <div className="pointer-events-none backdrop-blur-sm bg-gradient-to-r from-violet-700 to-teal-950 absolute -bottom-56 -left-40 h-96 w-96 rounded-full opacity-30 blur-3xl"></div>
            <div className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 z-20">
                <div>
                    <h5 className="text-xl font-bold text-white my-2">
                        Let`s Connect
                    </h5>
                    <p className="text-[#ADB7BE] mb-4 max-w-md">
                        I`m currently looking for new opportunities, my inbox is
                        always open. Whether you have a question or just want to
                        say hi, I`ll try my best to get back to you!
                    </p>
                    <div className="socials flex flex-row gap-4">
                        <Link href={"https://github.com/MyshinskyIlya"}>
                            <Image
                                src={githubIcon}
                                width={32}
                                height={32}
                                color="#191919"
                                alt="github icon"
                            ></Image>
                        </Link>
                        <Link href={"https://t.me/myprogramminghours"}>
                            <Image
                                src={tgIcon}
                                width={32}
                                height={32}
                                color="#191919"
                                alt="tg icon"
                            ></Image>
                        </Link>
                    </div>
                </div>
                <div className="text-white">
                    <form action="" className="flex flex-col gap-4">
                        <div>
                            <label
                                htmlFor="email"
                                type="email"
                                className="block text-sm font-medium"
                            >
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                required
                                placeholder="example@gmail.com"
                                className="mt-4 bg-[#191919] border border-[#33353F] placeholder=[#9CA2A9] text-gray-200 text-sm rounded=lg block w-full p-2"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="subject"
                                type="email"
                                className="mt-2 block text-sm font-medium"
                            >
                                Subject
                            </label>
                            <input
                                type="text"
                                id="subject"
                                required
                                placeholder="Just saying hi"
                                className="mt-4 bg-[#191919] border border-[#33353F] placeholder=[#9CA2A9] text-gray-200 text-sm rounded=lg block w-full p-2"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="mt-2 block text-sm font-medium"
                            >
                                Message
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                className="mt-4 bg-[#191919] border border-[#33353F] placeholder=[#9CA2A9] text-gray-200 text-sm rounded=lg block w-full p-2"
                                placeholder="Let`s talk about..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="mt-2 bg-gradient-to-r hover:from-violet-800 hover:to-teal-900 from-violet-900 to-teal-950  text-white font-medium p-2 rounded-lg"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default EmailSection;
