"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent, } from "@/components/ui";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { BeforeAfterComponent, PricingTable } from "@/components";


const ProductsPage = () => {
    const t = useTranslations("services");
    const [currentTab, setCurrentTab] = useState("design");
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const tabVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -50 }
    };

    return (
        <div className="flex flex-col items-center justify-start w-full bg-white min-h-screen pb-[200px]">
            {/* Header Section */}
            <div className="flex flex-row items-center justify-between w-full pt-[200px] pr-[156px] gap-[150px]">
                <div className="flex flex-col items-start justify-start w-fit">
                    <h2 className="text-base font-medium uppercase text-black">{t("Products")}</h2>
                </div>
                <div className="flex flex-col items-start justify-start w-full ">
                    <h2 className="text-[40px] font-semibold text-black">
                        {t("ProductsIntro1")} <span className="text-[40px] font-light">{t("ProductsIntro2")}</span>
                    </h2>
                </div>
            </div>

            {/* Services Section */}
            <div className="flex flex-col  justify-between w-full pt-[60px] px-[156px] gap-16">
                <h2 className="text-[18px] font-semibold text-black text-start">
                    {t("ProductDesign")} <span className="text-[18px] font-light">{t("services")}</span>
                </h2>
                <BeforeAfterComponent
                    beforeImage="/images/before.webp"
                    afterImage="/images/after.webp"
                    style={{ width: '100%', height: '400px' }}
                />
            </div>

            {/* Tabs Section */}
            <div className="flex flex-col w-full pt-[60px] px-[156px] gap-16">
                <h2 className="text-[18px] font-semibold text-black text-start">
                    {t("OurServices")}
                </h2>

                {isClient && (
                    <Tabs value={currentTab} onValueChange={setCurrentTab} className="w-full">
                        <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="design">{t("Design")}</TabsTrigger>
                            <TabsTrigger value="development">{t("Development")}</TabsTrigger>
                            <TabsTrigger value="marketing">{t("Marketing")}</TabsTrigger>
                        </TabsList>

                        <TabsContent value="design" className="mt-8">
                            <motion.div
                                key="design"
                                variants={tabVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {[1, 2, 3, 4, 5, 6].map((item) => (
                                    <div key={item} className="relative group cursor-pointer">
                                        <div className="relative w-full h-64 overflow-hidden">
                                            <Image
                                                src={`/images/branding${item}.jpg`}
                                                alt={`Design ${item}`}
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                                            <ArrowUpRight className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </TabsContent>

                        <TabsContent value="development" className="mt-8">
                            <motion.div
                                key="development"
                                variants={tabVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {[1, 2, 3, 4, 5, 6].map((item) => (
                                    <div key={item} className="relative group cursor-pointer">
                                        <div className="relative w-full h-64 overflow-hidden">
                                            <Image
                                                src={`/images/audience${item}.jpg`}
                                                alt={`Development ${item}`}
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                                            <ArrowUpRight className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </TabsContent>

                        <TabsContent value="marketing" className="mt-8">
                            <motion.div
                                key="marketing"
                                variants={tabVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                            >
                                {[1, 2, 3, 4, 5, 6].map((item) => (
                                    <div key={item} className="relative group cursor-pointer">
                                        <div className="relative w-full h-64 overflow-hidden">
                                            <Image
                                                src={`/images/content${item}.jpg`}
                                                alt={`Marketing ${item}`}
                                                fill
                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                                            <ArrowUpRight className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </TabsContent>
                    </Tabs>
                )}
            </div>

            {/* Pricing Section */}
            <div className="flex flex-col w-full pt-[60px] px-[156px] gap-16">
                <h2 className="text-[18px] font-semibold text-black text-start">
                    {t("Pricing")}
                </h2>
                <PricingTable />
            </div>
        </div>
    );
};

export default ProductsPage;
