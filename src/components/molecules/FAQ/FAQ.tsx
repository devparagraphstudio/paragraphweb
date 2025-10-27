"use client"

import { BlurText } from "@/components";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui";
import { motion, } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

const FAQ = () => {
    const t = useTranslations("services");

    return (
        <motion.div
            className="flex flex-col w-full h-fit justify-between items-start  mt-[60px] md:mt-[100px] xl:mt-[192px] relative "
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
                duration: 0.8,
                ease: "easeOut"
            }}
        >
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
                            animate={{ opacity: 1 }}
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
                        animate={{ opacity: 1 }}
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
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
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
        </motion.div>
    );
}

export default FAQ;