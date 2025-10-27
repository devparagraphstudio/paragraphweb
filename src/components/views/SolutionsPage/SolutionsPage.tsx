'use client';

import { BlurText, StrategySteps } from "@/components";
import { ArrowLg } from "@/components/icons";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Button } from "@/components/ui";
import { motion, useInView } from "framer-motion";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useRef } from "react";
import Image from "next/image";

const SolutionsPage = () => {
    const t = useTranslations("services");
    const containerRef = useRef(null);
    const isStrategiesInView = useInView(containerRef, { amount: 0.1, once: true });
    const currentPath = usePathname();
    const router = useRouter();

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 2, ease: "easeOut" },
        },
    };

    const handleDetailsClick = (title: string) => {
        // Get the translated title and convert it to a route
        const translatedTitle = t(title);
        const route = translatedTitle.replace(/\s+/g, '_').toLowerCase();

        // Remove trailing slash from currentPath if it exists, then add the route
        const cleanPath = currentPath.endsWith('/') ? currentPath.slice(0, -1) : currentPath;
        const newPath = `${cleanPath}/${route}`;
        router.push(newPath);
    };

    return (
        <div className="flex flex-col items-center justify-start w-full bg-white pb-16 pt-[200px]">
            <div className="flex flex-row items-center justify-between w-full   pr-[30px] gap-[150px]">
                <div className="flex flex-col items-start justify-start w-fit">
                    <BlurText
                        text={t("Services")}
                        className="text-base font-medium uppercase text-black tracking-[0.5em] "
                        direction="top"
                        delay={100}
                        stepDuration={0.4}
                    />
                </div>
                <div className="flex flex-col items-start justify-start w-full font-light text-[40px]">
                    <BlurText
                        text={t("ServicesIntro")}
                        className="inline"
                        direction="top"
                        delay={100}
                    />
                </div>
            </div>

            <div className="flex flex-row items-center justify-between w-full mt-[150px]  pr-[30px] gap-[150px]">

                <div className="hidden md:flex flex-col items-start w-full gap-6 lg:gap-14 mb-[30px] mt-16 pl-[120px]  ">
                    {[{
                        title: "serviceTitle1",
                        description1: "serviceDescription1",
                        description2: "serviceDescription1_1",
                        listItems: [
                            "companiesDescription1", "companiesDescription2", "companiesDescription3", "companiesDescription4",
                            "companiesDescription5", "companiesDescription6", "companiesDescription7", "companiesDescription8"
                        ]
                    }, {
                        title: "serviceTitle2",
                        description1: "serviceDescription2",
                        description2: "serviceDescription2_1",
                        listItems: [
                            "productsDescription1", "productsDescription2", "productsDescription3", "productsDescription4",
                            "productsDescription5", "productsDescription6", "productsDescription7", "productsDescription8"
                        ]
                    }, {
                        title: "serviceTitle3",
                        description1: "serviceDescription3",
                        description2: "serviceDescription3_1",
                        listItems: [
                            "realestateDescription1", "realestateDescription2", "realestateDescription3", "realestateDescription4",
                            "realestateDescription5", "realestateDescription6", "realestateDescription7", "realestateDescription8"
                        ]
                    }].map((item) => (
                        <motion.div
                            key={item.title}
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.4 }}
                            className="w-full flex flex-col items-start justify-between gap-8"
                        >
                            <div className="w-full">
                                <p className="text-[18px] font-normal mb-12">
                                    {t(item.title)}
                                </p>
                                <div className="flex flex-row items-start justify-start w-full gap-[148px]">
                                    <div className="flex-1 w-full">
                                        <p className="text-[18px] font-normal leading-[1.6]">
                                            {t(item.description1)} <span className="font-thin">{t(item.description2)}</span>
                                        </p>
                                    </div>
                                    <div className="flex-1 w-full">
                                        <ul className="grid grid-cols-2 gap-x-8 gap-y-2">
                                            {item.listItems.map((listItem, index) => (
                                                <li key={index} className="text-[16px] font-normal text-gray-700">
                                                    {t(listItem)}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {item.title === "serviceTitle3" && (
                                <Button className="text-xl uppercase font-normal tracking-[.24em] rounded-none px-6  hover:bg-accent/80 hover:cursor-pointer text-white h-[52px]"
                                    onClick={() => handleDetailsClick(item.title)}
                                >
                                    {t("details")}
                                    <ArrowLg color="white" />
                                </Button>
                            )}

                        </motion.div>
                    ))}


                </div>

                {/* Mobile Layout */}
                <div className="md:hidden flex flex-col items-start w-full gap-8 mb-[30px] mt-16 px-4">
                    {[{
                        title: "serviceTitle1",
                        description1: "serviceDescription1",
                        description2: "serviceDescription1_1",
                        listItems: [
                            "companiesDescription1", "companiesDescription2", "companiesDescription3", "companiesDescription4",
                            "companiesDescription5", "companiesDescription6", "companiesDescription7", "companiesDescription8"
                        ]
                    }, {
                        title: "serviceTitle2",
                        description1: "serviceDescription2",
                        description2: "serviceDescription2_1",
                        listItems: [
                            "productsDescription1", "productsDescription2", "productsDescription3", "productsDescription4",
                            "productsDescription5", "productsDescription6", "productsDescription7", "productsDescription8"
                        ]
                    }, {
                        title: "serviceTitle3",
                        description1: "serviceDescription3",
                        description2: "serviceDescription3_1",
                        listItems: [
                            "realestateDescription1", "realestateDescription2", "realestateDescription3", "realestateDescription4",
                            "realestateDescription5", "realestateDescription6", "realestateDescription7", "realestateDescription8"
                        ]
                    }].map((item) => (
                        <motion.div
                            key={item.title}
                            variants={fadeInUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.4 }}
                            className="w-full flex flex-col items-start gap-6"
                        >
                            <div className="w-full">
                                <p className="text-[18px] font-medium mb-6">
                                    {t(item.title)}
                                </p>
                                <div className="flex flex-col items-start justify-start mb-6 gap-6">
                                    <div className="w-full">
                                        <p className="text-[16px] font-normal leading-[1.6]">
                                            {t(item.description1)} <span className="font-thin">{t(item.description2)}</span>
                                        </p>
                                    </div>
                                    <div className="w-full">
                                        <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                                            {item.listItems.map((listItem, index) => (
                                                <li key={index} className="text-[14px] font-normal text-gray-700">
                                                    {t(listItem)}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="flex flex-row items-center justify-between w-full mt-[300px]   pr-[30px] gap-[150px]">
                <div className="flex flex-col items-start justify-start w-fit">
                    <BlurText
                        text={t("OurMethod")}
                        className="text-base font-medium uppercase text-black tracking-[0.5em] "
                        direction="top"
                        delay={100}
                        stepDuration={0.4}
                    />
                </div>
                <div className="flex flex-col items-start justify-start w-full font-light text-[40px]">
                    <BlurText
                        text={t("ServicesIntro")}
                        className="inline"
                        direction="top"
                        delay={100}
                    />
                </div>
            </div>
            <motion.div
                ref={containerRef}
                initial={{ opacity: 0, x: -100 }}
                animate={isStrategiesInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-row items-center justify-between w-full  pr-[30px] gap-[150px]"
            >
                <StrategySteps />
            </motion.div>

            <div className="flex flex-col w-full h-fit justify-between items-start  mt-[60px] md:mt-[100px] xl:mt-[192px] relative ">
                <div className="absolute top-[-20px] left-[-300px] w-full h-full "
                >
                    <Image src="/images/exclamation.svg" alt="a" fill className="object-contain object-top " />
                </div>
                <div className="flex flex-row items-center justify-between w-full   pr-[156px] gap-[150px] ">

                    <div className="flex flex-col items-start justify-start w-fit">
                        <BlurText
                            text="FAQ"
                            className="text-base font-medium uppercase text-black tracking-[0.5em] "
                            direction="top"
                            delay={100}
                            stepDuration={0.4}
                        />
                    </div>
                    <div className="flex flex-col justify-end w-7/10  text-[40px] font-semibold text-black ">

                        <div className="text-[40px] font-semibold text-black">
                            <BlurText
                                text={t("gotQuestions")}
                                className="inline"
                                direction="top"
                            />
                            <motion.span
                                className="text-[40px] font-light"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{
                                    delay: 0.5,
                                    duration: 0.5,
                                    ease: "easeInOut"
                                }}
                            >
                                <p
                                    className="inline"
                                >
                                    {` ${t("FAQDescription")}`}
                                </p>
                            </motion.span>
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{
                                delay: 1,
                                duration: 0.5,
                                ease: "easeInOut"
                            }}
                        >
                            <p
                                className="inline font-light"
                            >
                                {t("FAQDescription2")}
                            </p>
                        </motion.div>
                    </div>
                </div>
                <motion.div
                    className="flex w-full  mt-[30px] md:mt-[80px] flex-row justify-end pr-[156px]"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{
                        duration: 0.8,
                        ease: "easeOut"
                    }}
                >
                    <div className="w-full md:w-45/100  h-full">
                        <Accordion type="single" collapsible className="w-full h-full ">
                            <AccordionItem value="item-1" className="border-3 border-black p-[10px] mb-[26px]">
                                <AccordionTrigger className="font-medium text-base min-h-[68px] pl-[10px]">{t("FAQ1")}</AccordionTrigger>
                                <AccordionContent className="font-light text-base px-2">
                                    {t("FAQ1Answer")}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2" className="border-3 border-black p-[10px] mb-[26px]">
                                <AccordionTrigger className="font-medium text-base min-h-[68px] pl-[10px]">{t("FAQ2")}</AccordionTrigger>
                                <AccordionContent className="font-light text-base px-2">
                                    {t("FAQ2Answer")}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3" className="border-3 border-black p-[10px] mb-[26px]">
                                <AccordionTrigger className="font-medium text-base min-h-[68px] pl-[10px]">{t("FAQ3")}</AccordionTrigger>
                                <AccordionContent className="font-light text-base px-2">
                                    {t("FAQ3Answer")}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-4" className="border-3 border-black p-[10px] mb-[26px]">
                                <AccordionTrigger className="font-medium text-base min-h-[68px] pl-[10px]">{t("FAQ4")}</AccordionTrigger>
                                <AccordionContent className="font-light text-base px-2">
                                    {t("FAQ4Answer")}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-5" className="border-3 border-black p-[10px] mb-[26px]">
                                <AccordionTrigger className="font-medium text-base min-h-[68px] pl-[10px]">{t("FAQ5")}</AccordionTrigger>
                                <AccordionContent className="font-light text-base px-2">
                                    {t("FAQ5Answer")}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-6" className="border-3 border-black p-[10px] mb-[26px]">
                                <AccordionTrigger className="font-medium text-base min-h-[68px] pl-[10px]">{t("FAQ6")}</AccordionTrigger>
                                <AccordionContent className="font-light text-base px-2">
                                    {t("FAQ6Answer")}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-7" className="border-3 border-black p-[10px] mb-[26px]">
                                <AccordionTrigger className="font-medium text-base min-h-[68px] pl-[10px]">{t("FAQ7")}</AccordionTrigger>
                                <AccordionContent className="font-light text-base px-2">
                                    {t("FAQ7Answer")}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-8" className="border-3 border-black !border-b-3  p-[10px]">
                                <AccordionTrigger className="font-medium text-base min-h-[68px] pl-[10px]">{t("FAQ8")}</AccordionTrigger>
                                <AccordionContent className="font-light text-base px-2">
                                    {t("FAQ8Answer")}
                                </AccordionContent>
                            </AccordionItem>

                        </Accordion>
                    </div>
                </motion.div>
            </div>
            <div className=" h-[100px] lg:h-[300px] z-0">
            </div>
        </div>
    );
};

export default SolutionsPage;
