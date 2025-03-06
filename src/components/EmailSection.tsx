"use client";

import React, { FormEvent, SyntheticEvent, useState } from "react";
import githubIcon from "../../public/images/icons/github.svg";
import tgIcon from "../../public/images/icons/telegram.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
    const [emailSubmited, setEmailSubmited] = useState(false);
    const [errorSumbit, setErrorSubmit] = useState(false);
    const [sending, setSending] = useState(false);

    const [areaText, setAreaText] = useState<string>("");
    const [buttonText, setButtonText] = useState<string>("Отправить");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setSending(true);
        setButtonText("Отправка...");

        const target = e.target as typeof e.target & {
            email: { value: string };
            subject: { value: string };
            message: { value: string };
        };

        const data = {
            email: target.email.value,
            subject: target.subject.value,
            message: target.message.value,
        };

        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSONdata,
        };

        try {
            const response = await fetch(endpoint, options);

            if (response.status === 200) {
                console.log("Message sent.");
                setAreaText("");
                setButtonText("Письмо отправлено!");
                setEmailSubmited(true);
            } else {
                setErrorSubmit(true);
            }
        } catch (error) {
            console.error("Error occurred:", error);
            setErrorSubmit(true);
            setButtonText("");
        } finally {
            setSending(false);
            setTimeout(() => {
                setButtonText("Отправить");
                setEmailSubmited(false);
            }, 2000);
        }
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
                        onSubmit={handleSubmit}
                        className="flex flex-col gap-4"
                    >
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium"
                            >
                                Ваша почта
                            </label>
                            <input
                                name="email"
                                type="email"
                                id="email"
                                required
                                placeholder="example@gmail.com"
                                autoComplete="off"
                                className="mt-4 bg-[#191919] border border-[#33353F] placeholder=[#9CA2A9] text-gray-200 text-sm rounded=lg block w-full p-2"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="subject"
                                className="mt-2 block text-sm font-medium"
                            >
                                Тема
                            </label>
                            <input
                                name="subject"
                                type="text"
                                id="subject"
                                required
                                placeholder="Привет, Илья..."
                                autoComplete="off"
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
                                value={areaText}
                                onChange={(e) => setAreaText(e.target.value)}
                                required
                                name="message"
                                id="message"
                                className="mt-4 bg-[#191919] border border-[#33353F] placeholder=[#9CA2A9] text-gray-200 text-sm rounded=lg block w-full p-2"
                                placeholder="Как ты смотришь на то, чтобы..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className={`mt-2 bg-gradient-to-r from-violet-900 to-teal-950 font-medium p-2 rounded-lg ${
                                sending || !areaText.length
                                    ? "cursor-default"
                                    : "hover:from-violet-800 hover:to-teal-900 cursor-pointer"
                            }`}
                            disabled={sending}
                        >
                            <span
                                className={
                                    emailSubmited
                                        ? "text-green-600"
                                        : areaText.length
                                        ? "text-white"
                                        : "text-gray-400"
                                }
                            >
                                {buttonText}
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default EmailSection;
