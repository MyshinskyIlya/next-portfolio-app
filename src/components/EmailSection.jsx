"use client";

import React, { useState } from "react";
import githubIcon from "../../public/images/icons/github.svg";
import tgIcon from "../../public/images/icons/telegram.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
    const [emailSubmited, setEmailSubmited] = useState(false);
    const [errorSumbit, setErrorSubmit] = useState(false);
    const [sending, setSending] = useState(false);

    const handleSumbit = async (e) => {
        e.preventDefault();
        setSending(true);
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.message.value,
        };

        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "aplication/json",
            },
            body: JSONdata,
        };

        const response = await fetch(endpoint, options).then((res) => {
            if (res.status === 200) {
                console.log("Message sent.");
                setEmailSubmited(true);
            }

            if (res.status !== 200) {
                setErrorSubmit(true);
            }

            setSending(false);
        });
    };
    return (
        <section id="contact" className="relative pt-6">
            <div className="pointer-events-none backdrop-blur-sm bg-gradient-to-r from-violet-700 to-teal-950 absolute top-20 left-1/2 h-96 w-full rounded-full opacity-5 blur-3xl"></div>
            <div className="pointer-events-none backdrop-blur-sm bg-gradient-to-r from-violet-700 to-teal-950 absolute -bottom-56 -left-40 h-96 w-96 rounded-full opacity-30 blur-3xl"></div>
            <div className="grid md:grid-cols-2 md:my-12 py-12 gap-4 z-20">
                <div>
                    <h5 className="text-xl font-bold text-white my-2">
                        Связь со мной
                    </h5>
                    <p className="text-[#ADB7BE] mb-4 max-w-md">
                        Сейчас я ищу новые возможности и часто проверяю почту,
                        если возникнут вопросы или предложения постараюсь как
                        можно скорее ответить.
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
                        <Link href={"https://t.me/bvllone"}>
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
                    <form
                        onSubmit={handleSumbit}
                        className="flex flex-col gap-4"
                    >
                        <div>
                            <label
                                htmlFor="email"
                                type="email"
                                className="block text-sm font-medium"
                            >
                                Почта
                            </label>
                            <input
                                name="email"
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
                                Заголовок
                            </label>
                            <input
                                name="subject"
                                type="text"
                                id="subject"
                                required
                                placeholder="Привет, Илья..."
                                className="mt-4 bg-[#191919] border border-[#33353F] placeholder=[#9CA2A9] text-gray-200 text-sm rounded=lg block w-full p-2"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="message"
                                className="mt-2 block text-sm font-medium"
                            >
                                Сообщение
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                className="mt-4 bg-[#191919] border border-[#33353F] placeholder=[#9CA2A9] text-gray-200 text-sm rounded=lg block w-full p-2"
                                placeholder="Как ты смотришь на то, чтобы..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="mt-2 bg-gradient-to-r hover:from-violet-800 hover:to-teal-900 from-violet-900 to-teal-950  text-white font-medium p-2 rounded-lg"
                        >
                            {sending ? (
                                <p>Отправка...</p>
                            ) : emailSubmited ? (
                                <p className="text-green-600">
                                    Письмо отправлено!
                                </p>
                            ) : !errorSumbit ? (
                                <p>Отправить</p>
                            ) : (
                                <p className="text-red-600">
                                    Что-то пошло не так
                                </p>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default EmailSection;
