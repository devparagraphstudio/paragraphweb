'use client';

import { ContactForm, MapComponent, MovingBackground, BlurText, PaperPlane } from "@/components";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const AboutPage = () => {
    const t = useTranslations("contact");
    return (
        <div className="flex flex-col items-center justify-start w-full bg-white pb-16 overflow-x-hidden">
            <div className="relative w-full min-h-screen pb-[200px]">
                <MovingBackground
                    moveParticlesOnHover={true}
                    particleHoverFactor={0.25}
                    particleColors={['#000000']}
                    particleCount={700}
                    particleSpread={10}
                    speed={0.05}
                    particleBaseSize={100}
                    alphaParticles={false}
                    disableRotation={false}
                />
                {/* Blur overlay at the bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-b from-transparent via-white/60 to-white pointer-events-none z-10"></div>
                <div className="flex flex-row items-center justify-between w-full pt-[200px] pr-[156px] gap-[150px] pl-[30px] bg-transparent">
                    <div className="flex flex-col items-start justify-start w-fit">
                        <BlurText
                            text={t("Contact")}
                            className="text-base font-medium uppercase text-black tracking-[0.5em]"
                            direction="top"
                            delay={100}
                            stepDuration={0.4}
                        />
                    </div>
                    <div className="flex flex-col items-start justify-start w-full">
                        <div className="text-[40px] font-semibold text-black">
                            <BlurText
                                text={t("ContactIntro1")}
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
                                    text={` ${t("ContactIntro2")}`}
                                    className="inline"
                                    direction="top"
                                />
                            </motion.span>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full h-fit justify-between items-start z-10 pt-[40px] sm:pt-[80px]  lg:pt-[192px] px-4 md:px-[80px] xl:px-[154px] relative">
                    <ContactForm />
                    <div className="absolute bottom-0 right-0 w-full h-[400px] pointer-events-none">
                        <PaperPlane />
                    </div>
                </div>
            </div>

            <MapComponent />

            <div className="h-[100px] lg:h-[300px] z-0">

            </div>
        </div>

    );
};

export default AboutPage;
