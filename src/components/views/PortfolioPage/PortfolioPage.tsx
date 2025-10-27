'use client';

import { GalleryGrid, } from "@/components";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { TabsUnderlined, TabsContentUnderlined, TabsListUnderlined, TabsTriggerUnderlined } from "@/components/ui";
import { useState, useEffect } from "react";

const fadeVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
};

const PortfolioPage = () => {
    const t = useTranslations("portfolio");
    const [tab, setTab] = useState("tab1");
    const [animateKey, setAnimateKey] = useState(0);

    // re-trigger animation every time tab changes
    useEffect(() => {
        setAnimateKey((prev) => prev + 1);
    }, [tab]);
    return (

        <section className="relative flex flex-col items-center justify-start w-full overflow-hidden z-10">
            <div className="h-[100px] lg:h-[192px]"></div>
            <div className="flex flex-col w-full h-fit justify-between items-start  ">
                <TabsUnderlined defaultValue="tab1" value={tab} onValueChange={setTab} className="w-full h-full ">
                    <TabsListUnderlined className="relative flex flex-col md:flex-row w-fit h-full justify-start gap-1 lg:gap-8 xl:gap-14 bg-transparent mx-2 lg:mx-[90px] xl:mx-[154px]  z-20 mb-16">
                        {["tab1", "tab2", "tab3", "tab4"].map((tabKey) => (
                            <TabsTriggerUnderlined
                                key={tabKey}
                                value={tabKey}
                                className={`flex h-full justify-start w-[190px] xl:w-[222px] shadow-none py-6 hover:cursor-pointer ${tab === tabKey ? "font-medium" : "font-light"}`}
                            >
                                <motion.p
                                    key={tabKey + (tab === tabKey ? "-active" : "-inactive")}
                                    initial={{ opacity: 0.5, scale: 0.95 }}
                                    animate={{
                                        opacity: 1,
                                    }}
                                    transition={{
                                        duration: 0.9,
                                        ease: [0.4, 0, 0.2, 1]
                                    }}
                                    className="text-nowrap text-left ml-4 text-[18px] w-full"
                                >
                                    {t(tabKey)}
                                </motion.p>
                            </TabsTriggerUnderlined>
                        ))}
                    </TabsListUnderlined>
                    <TabsContentUnderlined value="tab1" className="w-full  border-none z-20 ">
                        <motion.div
                            key={`tab1-${animateKey}`}
                            variants={fadeVariants}
                            initial="initial"
                            animate="animate"
                            transition={{ duration: 0.8 }}
                        >
                            <GalleryGrid type="1" />
                        </motion.div>
                    </TabsContentUnderlined>

                    <TabsContentUnderlined value="tab2" className="w-full  border-none z-20">
                        <motion.div
                            key={`tab2-${animateKey}`}
                            variants={fadeVariants}
                            initial="initial"
                            animate="animate"
                            transition={{ duration: 0.8 }}
                        >
                            <GalleryGrid type="2" />
                        </motion.div>
                    </TabsContentUnderlined>

                    <TabsContentUnderlined value="tab3" className="w-full -none z-20">
                        <motion.div
                            key={`tab3-${animateKey}`}
                            variants={fadeVariants}
                            initial="initial"
                            animate="animate"
                            transition={{ duration: 0.8 }}
                        >
                            <GalleryGrid type="3" />
                        </motion.div>
                    </TabsContentUnderlined>

                    <TabsContentUnderlined value="tab4" className="w-full  border-none z-20 ">
                        <motion.div
                            key={`tab4-${animateKey}`}
                            variants={fadeVariants}
                            initial="initial"
                            animate="animate"
                            transition={{ duration: 0.8 }}
                        >
                            <GalleryGrid type="1" />
                        </motion.div>
                    </TabsContentUnderlined>
                </TabsUnderlined>
            </div>
            {/* Scrolling Text Animation */}
            <div className="relative w-full h-full flex justify-start items-end mb-12 mt-[300px]">
                <motion.div
                    initial={{ x: "100vw" }}
                    animate={{ x: ["100vw", "-100vw"] }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="absolute left-1/2 -translate-x-1/2 w-max z-10 scroll-smooth-text"
                >
                    <p className="font-light italic text-[40px] md:text-[64px] whitespace-nowrap tracking-[.7em]">
                        {t("continuousScroll")}
                    </p>
                </motion.div>
            </div>
            <div className="h-[150px] z-0">

            </div>
        </section>

    );
};

export default PortfolioPage;
