'use client';

import { BlurText, ImagesCarousel } from "@/components";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const AboutSection = () => {
    const t = useTranslations("about");

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 2, ease: "easeOut" },
        },
    };

    return (
        <div className="flex flex-col items-center justify-start w-full bg-white pb-16 pt-[200px]">
            {/* Header Section */}
            <div className="flex flex-col w-full relative">
                <div className="absolute top-0 right-[30px] w-1/3 h-full"
                >
                    <Image src="/images/a.svg" alt="a" fill className="object-contain object-top" />
                </div>

                <div className="flex flex-row items-center justify-between w-full  pl-[30px] pr-[156px] gap-[150px]">
                    <div className="flex flex-col items-start justify-start w-fit">
                        <BlurText
                            text={t("TheStudio")}
                            className="text-base font-medium uppercase text-black tracking-[0.5em] "
                            direction="top"
                            delay={100}
                            stepDuration={0.4}
                        />
                    </div>
                    <div className="flex flex-col items-start justify-start w-full font-light text-[40px]">
                        <BlurText
                            text={t("StudioIntro")}
                            className="inline"
                            direction="top"
                            delay={100}
                        />
                    </div>
                </div>
                <div className="flex flex-col w-full h-fit justify-between items-start  pt-[40px] sm:pt-[80px]  lg:pt-[100px] px-4 sm:pl-[40px] xl:pl-[154px] pr-[30px]">

                    <div className="hidden md:flex flex-col items-start w-full gap-6 lg:gap-14 mb-[30px] mt-16  md:flex-row">
                        {[{
                            title: "characteristic1Title",
                            description: "characteristic1Description"
                        }, {
                            title: "characteristic2Title",
                            description: "characteristic2Description"
                        }, {
                            title: "characteristic3Title",
                            description: "characteristic3Description"
                        }].map((item) => (
                            <motion.div
                                key={item.title}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.4 }}
                                className="w-[250px] lg:w-[477px]  "
                            >
                                <p className="text-[18px] font-medium tracking-[0.16em] lowercase">
                                    {(() => {
                                        const title = t(item.title);
                                        const firstSpaceIdx = title.indexOf(" ");
                                        if (firstSpaceIdx === -1) return title;
                                        return (
                                            <>
                                                {title.slice(0, firstSpaceIdx)}
                                                <br />
                                                {title.slice(firstSpaceIdx + 1)}
                                            </>
                                        );
                                    })()}
                                </p>
                            </motion.div>
                        ))}

                    </div>
                    <div className="hidden md:flex flex-col items-start w-full gap-6 lg:gap-14 mb-16  mt-8 md:flex-row ">
                        {[
                            {
                                title: "characteristic1Title",
                                description: "characteristic1Description"
                            },
                            {
                                title: "characteristic2Title",
                                description: "characteristic2Description"
                            },
                            {
                                title: "characteristic3Title",
                                description: "characteristic3Description"
                            }
                        ].map((item) => (
                            <motion.div
                                key={item.description}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.4 }}
                                className="w-[250px] lg:w-[477px]  "
                            >
                                <p className="text-base font-light leading-[1.6] min-h-[4.8em]">
                                    {t(item.description)}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                    <div className="flex md:hidden flex-col items-start w-full gap-6 lg:gap-14 mb-[30px] mt-16  md:flex-row ">
                        {[{
                            title: "characteristic1Title",
                            description: "characteristic1Description"
                        }, {
                            title: "characteristic2Title",
                            description: "characteristic2Description"
                        }, {
                            title: "characteristic3Title",
                            description: "characteristic3Description"
                        }].map((item) => (
                            <motion.div
                                key={item.title}
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.4 }}
                                className="w-full  "
                            >
                                <p className="text-[18px] font-medium tracking-[0.16em] uppercase">
                                    {(() => {
                                        const title = t(item.title);
                                        const firstSpaceIdx = title.indexOf(" ");
                                        if (firstSpaceIdx === -1) return title;
                                        return (
                                            <>
                                                {title.slice(0, firstSpaceIdx)}
                                                <br />
                                                {title.slice(firstSpaceIdx + 1)}

                                            </>
                                        );
                                    })()}
                                </p>
                                <div className="flex md:hidden w-full h-[2px] bg-black my-6" />
                                <p className="text-base font-light leading-[1.6] min-h-[4.8em] w-90/100">
                                    {t(item.description)}
                                </p>
                            </motion.div>
                        ))}

                    </div>

                </div>
            </div>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 40 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 2, ease: "easeInOut" },
                    },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                className="flex justify-start  w-full h-full  px-4 sm:pl-[40px] xl:pl-[154px] pr-[30px] mt-12 relative"
            >
                <div className="absolute top-0 left-[30px] w-[240px] h-full"
                >
                    <Image src="/images/team.svg" alt="team" fill className="object-contain object-top" />
                </div>
                <ImagesCarousel />
            </motion.div>
        </div>
    );
};

export default AboutSection;
