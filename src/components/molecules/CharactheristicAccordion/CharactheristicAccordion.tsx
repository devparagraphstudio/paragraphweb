"use client";

import React from "react";
import { useTranslations } from "next-intl";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui";
import { ChevronWithLineDown } from "@/components/icons";
import { motion } from "framer-motion";

interface CharactheristicAccordionProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const CharactheristicAccordion: React.FC<CharactheristicAccordionProps> = ({
    icon,
    title,
    description
}) => {
    const [accordionValue, setAccordionValue] = React.useState<string | undefined>(undefined);
    const t = useTranslations("about");

    return (
        <div className="flex flex-row md:flex-col h-[200px] justify-between items-start w-full md:max-w-[240px] z-[9999] gap-8 md:gap-0">
            <motion.div
                animate={{ opacity: accordionValue ? 0 : 1, scale: accordionValue ? 0.8 : 1 }}
                transition={{ duration: 0.3 }}
                className="z-[9999]"
            >
                {!accordionValue && icon}
            </motion.div>
            {accordionValue === "item-1" && <motion.h4
                animate={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-[18px] font-light uppercase leading-[1.3] tracking-[0.16em] mt-3  "
            >
                {t(title)}
            </motion.h4>}
            <div className="relative flex flex-col md:w-full w-[250px] min-w-[250px]">
                <motion.div
                    animate={{ opacity: accordionValue ? 0 : 1, y: accordionValue ? -20 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {!accordionValue && <h4 className="text-[18px] font-light uppercase leading-[1.3] tracking-[0.16em] mt-3">
                        {t(title)}
                    </h4>}
                </motion.div>
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    value={accordionValue}
                    onValueChange={setAccordionValue}
                >
                    <AccordionItem value="item-1" className="w-full">
                        <AccordionTrigger
                            className="w-full flex items-center justify-between text-left text-[18px] font-light uppercase leading-[1] tracking-[0.16em] mt-4 hover:cursor-pointer z-[9999]"
                            showChevron={false}
                        >
                            <motion.div
                                animate={{ rotate: accordionValue === "item-1" ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                                className="z-[9999]"
                            >
                                <ChevronWithLineDown />
                            </motion.div>
                        </AccordionTrigger>
                        <AccordionContent className="absolute top-0 sm:relative sm:translate-x-0 -translate-x-1/3 sm:flex w-full mt-20 md:mt-4 ">
                            <motion.p
                                animate={{ opacity: accordionValue === "item-1" ? 1 : 0, y: accordionValue === "item-1" ? 0 : -20 }}
                                initial={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4 }}
                                className="mt-11 normal-case font-light text-base leading-[1.3]"
                            >
                                {t(description)}
                            </motion.p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};

export default CharactheristicAccordion;
