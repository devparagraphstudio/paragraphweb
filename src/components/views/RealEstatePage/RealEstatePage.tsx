"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent, Button, } from "@/components/ui";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowUpRight } from "@/components/icons";
import { BeforeAfterComponent, BlurText, CardSwap, CardSwapCard, CustomImageGallery, ModelViewer, PricingTable } from "@/components";
import { useRouter } from "next/navigation";


const RealEstatePage = () => {
    const t = useTranslations("services");
    const [currentTab, setCurrentTab] = useState("3d");
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();
    const locale = useLocale();
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
            <div className="flex flex-row items-center justify-between w-full pt-[200px] pr-[156px] gap-[150px] pl-[30px] bg-transparent">
                <div className="flex flex-col items-start justify-start w-fit">
                    <BlurText
                        text={t("RealEstate")}
                        className="text-base font-medium uppercase text-black tracking-[0.5em]"
                        direction="top"
                        delay={100}
                        stepDuration={0.4}
                    />
                </div>
                <div className="flex flex-col items-start justify-start w-full">
                    <div className="text-[40px] font-semibold text-black">
                        <BlurText
                            text={t("RealEstateIntro1")}
                            className="inline"
                            direction="top"
                        />
                        <motion.span
                            className="text-[40px] font-light"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2 }}
                        >
                            <BlurText
                                text={` ${t("RealEstateIntro2")}`}
                                className="inline"
                                direction="top"
                            />
                        </motion.span>
                    </div>
                </div>
            </div>

            {/* Services Section */}
            <motion.div
                className="flex flex-col  justify-between w-full pt-[400px] px-[156px] gap-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.2
                }}
            >
                <h2 className="text-[18px] font-semibold text-black text-start tracking-[.16em]">
                    {t("3D")} <span className="text-[18px] font-light">{t("renders")}</span>
                </h2>
                <BeforeAfterComponent
                    beforeImage="/images/before.webp"
                    afterImage="/images/after.webp"
                    style={{ width: '100%', height: '500px' }}
                />
            </motion.div>
            <div className="flex flex-row items-center justify-between w-full pt-[30px] px-[156px] gap-16 font-thin text-black">
                <p>
                    {t("standard")}
                </p>
                <p>
                    {t("photorealistic")}
                </p>
            </div>

            {/* Showcase Section */}
            <motion.div
                className="flex flex-row items-center justify-center w-full pt-[100px] px-[156px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.2
                }}
            >
                <h2 className="text-[70px] font-thin text-black">{t("showcase")}</h2>
            </motion.div>

            {/* Plans Section */}
            <motion.div
                className="flex flex-row items-center justify-start w-full pt-[300px] px-[156px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.2
                }}
            >
                <h2 className="text-[18px] font-medium tracking-[.16em] text-black">{t("plans")}</h2>
            </motion.div>
            <Tabs defaultValue="3d" value={currentTab} onValueChange={setCurrentTab} className="w-full px-[156px] mt-[60px] ">
                <TabsContent key="3d" value="3d" asChild>
                    <motion.div
                        variants={tabVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.9, ease: "easeInOut" }}
                    >
                        <div className="flex justify-center ">
                            <div className="flex flex-row items-center justify-center w-full h-[613px] relative cursor-grab">
                                <ModelViewer
                                    url="/images/ToyCar.glb"
                                    width={740}
                                    height={613}
                                />

                            </div>
                        </div>
                    </motion.div>
                </TabsContent>
                <TabsContent key="2dplan" value="2dplan" asChild>
                    <motion.div
                        variants={tabVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.9, ease: "easeInOut" }}
                    >
                        <div className="flex justify-center">
                            <div className="flex flex-row items-center justify-center w-full h-[613px] relative">
                                <Image
                                    src="/images/property-blueprint.svg"
                                    alt={t("2dPlanShowcase")}
                                    width={740}
                                    height={613}
                                    className="w-full h-full object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>
                </TabsContent>
                <TabsContent key="2ddesign" value="2ddesign" asChild>
                    <motion.div
                        variants={tabVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        transition={{ duration: 0.9, ease: "easeInOut" }}
                    >
                        <div className="flex justify-center">
                            <div className="flex flex-row items-center justify-center w-full h-[613px] relative">
                                <Image
                                    src="/images/2dplaceholder.jpg"
                                    alt={t("2dDesignShowcase")}
                                    width={740}
                                    height={613}
                                    className="w-full h-full object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>
                </TabsContent>
                <div className="flex flex-row items-center justify-center w-full">
                    <TabsList className="w-full max-w-[400px] h-12 px-3 mt-10  bg-[#D9D9D9] rounded-[6px]">
                        <TabsTrigger value="3d" className="h-8 text-xl font-normal rounded-[3px] hover:cursor-pointer">{t("3dfurnished")}</TabsTrigger>
                        <TabsTrigger value="2dplan" className="h-8 text-xl font-normal hover:cursor-pointer">{t("2dplan")}</TabsTrigger>
                        <TabsTrigger value="2ddesign" className="h-8 text-xl font-normal hover:cursor-pointer">{t("2ddesign")}</TabsTrigger>
                    </TabsList>
                </div>
            </Tabs>
            {/* Videos Section */}
            <motion.div
                className="flex flex-row items-center justify-start w-full pt-[190px] px-[156px] pb-[70px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.2
                }}
            >
                <h2 className="text-[18px] font-semibold text-black text-start tracking-[.16em]">{t("videos")}</h2>
            </motion.div>
            <motion.div
                className="lg:flex justify-between items-center  flex-row gap-10 pb-[40px] px-[156px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.2
                }}
            >
                {/* Left video column with macbook frame */}
                <div className={`device device-macbook-pro scale-90 mx-auto`}>
                    <div className="device-frame">
                        <div className="device-content bg-white dark:bg-gray-900">
                            {isClient && (
                                <video
                                    src={"/videos/video1.mp4"}
                                    autoPlay
                                    loop
                                    muted
                                    className="w-full h-full object-cover"
                                />
                            )}
                        </div>
                    </div>
                    <div className="device-stripe"></div>
                    <div className="device-header"></div>
                    <div className="device-sensors"></div>
                    <div className="device-btns"></div>
                    <div className="device-power"></div>
                </div>
                <div className="w-full lg:w-1/2 z-[9999]">
                    <div className="h-fit py-1 w-full ">
                        <div className="flex flex-row items-center justify-start gap-12 mb-[64px]">
                            <h2 className="text-[18px] font-thin tracking-[.16em] leading-[1] cursor-pointer hover:opacity-80 transition-opacity">
                                {t("motiongraphics")}
                            </h2>
                            <div className="w-12 h-12">
                                <ArrowUpRight height={64} width={64} />
                            </div>

                        </div>
                        <p className="text-base font-thin leading-[1.6]">
                            {t("motiongraphicsDescription")}
                        </p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                className="lg:flex justify-between items-center  flex-row gap-10 pb-[40px] px-[156px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.2
                }}
            >
                {/* Left video column with macbook frame */}

                <div className="w-full lg:w-1/2 z-[9999]">
                    <div className="h-fit py-1 w-full ">
                        <div className="flex flex-row items-center justify-start gap-12 mb-[64px]">
                            <h2 className="text-[18px] font-thin tracking-[.16em] leading-[1] cursor-pointer hover:opacity-80 transition-opacity">
                                {t("cinematic")}
                            </h2>
                            <div className="flex items-center justify-center w-12 h-12">
                                <ArrowUpRight height={64} width={64} />
                            </div>

                        </div>
                        <p className="text-base font-thin leading-[1.6]">
                            {t("cinematicDescription")}
                        </p>
                    </div>
                </div>
                <div className={`device device-macbook-pro scale-90 mx-auto`}>
                    <div className="device-frame">
                        <div className="device-content bg-white dark:bg-gray-900">
                            {isClient && (
                                <video
                                    src={"/videos/video2.mp4"}
                                    autoPlay
                                    loop
                                    muted
                                    className="w-full h-full object-cover"
                                />
                            )}
                        </div>
                    </div>
                    <div className="device-stripe"></div>
                    <div className="device-header"></div>
                    <div className="device-sensors"></div>
                    <div className="device-btns"></div>
                    <div className="device-power"></div>
                </div>
            </motion.div>
            <motion.div
                className="lg:flex justify-between items-center  flex-row gap-10 pb-[40px] px-[156px] mt-[300px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.2
                }}
            >
                {/* Left video column with macbook frame */}
                <div className="flex flex-col lg:flex-row items-center justify-center w-1/2 min-w-[500px] h-[900px] relative">
                    <Image
                        src="/images/branding.png"
                        alt={t("brandingImage")}
                        width={400}
                        height={900}
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="w-full lg:w-1/2 z-[9999]">
                    <div className="h-fit py-1 w-full ">
                        <div className="flex flex-row items-center justify-start gap-12 mb-[64px]">
                            <h2 className="text-[18px] font-thin tracking-[.16em] leading-[1] cursor-pointer hover:opacity-80 transition-opacity">
                                {t("branding")}
                            </h2>
                            <div className="w-12 h-12">
                                <ArrowUpRight height={64} width={64} />
                            </div>
                        </div>
                        <p className="text-base font-thin leading-[1.6]">
                            {t("brandingDescription")}
                        </p>
                    </div>
                </div>
            </motion.div>
            <motion.div
                className="flex flex-row items-start justify-start w-full h-full pt-[20px] pl-[156px] gap-36 mt-[300px] overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.2
                }}
            >
                <div className="flex flex-col items-start w-[30%] h-[900px] justify-start gap-[200px]">
                    <div>
                        <h2 className="text-[18px] font-medium tracking-[.16em] text-black mb-8">{t("websiteDesign")}</h2>

                    </div>
                    <div className="flex flex-col items-start justify-start gap-[50px]">
                        <p className="text-base font-thin leading-[1.6] ">{t("interactive")}</p>
                        <p className="text-base font-thin leading-[1.6]">{t("websiteDesignDescription")}</p>
                    </div>
                </div>
                <div className="w-full h-full relative ">
                    <CardSwap
                        cardDistance={80}
                        verticalDistance={120}
                        delay={4000}
                        pauseOnHover={true}
                        height={600}
                        width={800}
                    >
                        <CardSwapCard>
                            <h3>{t("card1")}</h3>
                            <p>{t("cardContent")}</p>
                        </CardSwapCard>
                        <CardSwapCard>
                            <h3>{t("card2")}</h3>
                            <p>{t("cardContent")}</p>
                        </CardSwapCard>
                        <CardSwapCard>
                            <h3>{t("card3")}</h3>
                            <p>{t("cardContent")}</p>
                        </CardSwapCard>
                    </CardSwap>
                </div>
            </motion.div>
            <motion.div
                className="flex flex-row items-center justify-start w-full pt-[150px] mb-[100px] px-[156px]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.2
                }}
            >
                <h2 className="text-[18px] font-medium tracking-[.16em] text-black mb-8">{t("interactive3D")}</h2>
            </motion.div>
            <motion.div className="flex flex-row items-center justify-center w-full h-full pt-[20px] ">
                <div className="w-6/10 h-full">
                    <CustomImageGallery images={["images/apt1.jpg", "images/apt2.jpg", "images/apt3.jpg", "images/apt4.jpg", "images/apt5.jpg"]} />
                </div>
            </motion.div>
            <motion.div className="w-full h-full mt-[300px] "
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.2
                }}
            >
                <PricingTable />
            </motion.div>

            <motion.div
                className="flex flex-col w-full  justify-between h-[900px] items-center  mt-[60px] md:mt-[100px] xl:mt-[192px] relative "
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                    duration: 0.8,
                    ease: "easeOut",
                    delay: 0.2
                }}
            >
                <div className="absolute top-[-20px] left-[107px] w-7/10 h-full "
                >
                    <Image src="/images/paragraph-dots-lg.svg" alt={t("decorativeDots")} fill className="object-contain object-left " />
                </div>
                <div className="flex flex-row items-center justify-end w-full h-full   gap-[150px] ">

                    <div className="flex h-full flex-col justify-center items-start w-7/10  text-[40px] font-semibold text-black gap-20 pr-[156px]">

                        <div className="text-[40px] font-semibold text-black">
                            <BlurText
                                text={t("customProject")}
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
                                    {` ${t("customProjectDescription")}`}
                                </p>
                            </motion.span>
                        </div>
                        <Button className="h-13 w-[311px] px-10 py-4 bg-black text-white font-normal text-xl rounded-none border-none shadow-none hover:cursor-pointer transition-all duration-300 ease-in-out uppercase tracking-[0.24em] hover:bg-accent "
                            onClick={() => {
                                router.push(`/${locale}/${t("contact")}`);
                            }}
                        >
                            {t("Talk")}!
                        </Button>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default RealEstatePage;