"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils/helpers";
import { useTranslations } from "next-intl";

const steps = [
    { number: "01", title: "Strategy1", description: "Strategy1Description" },
    { number: "02", title: "Strategy2", description: "Strategy2Description" },
    { number: "03", title: "Strategy3", description: "Strategy3Description" },
    { number: "04", title: "Strategy4", description: "Strategy4Description" },
];

const StrategySteps = () => {
    const t = useTranslations("services");

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [scrollIndex, setScrollIndex] = useState<number | null>(null);
    const refs = useRef<(HTMLDivElement | null)[]>([]);

    const [isMobile, setIsMobile] = useState(false);

    // Update mobile flag on resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Scroll listener for mobile
    useEffect(() => {
        if (!isMobile) return;

        const handleScroll = () => {
            const centerY = window.innerHeight / 2;
            let closestIdx = -1;
            let closestDistance = Infinity;

            refs.current.forEach((el, index) => {
                if (el) {
                    const rect = el.getBoundingClientRect();
                    const elementCenter = rect.top + rect.height / 2;
                    const distance = Math.abs(centerY - elementCenter);

                    if (distance < closestDistance) {
                        closestDistance = distance;
                        closestIdx = index;
                    }
                }
            });

            if (closestIdx !== -1) {
                setScrollIndex(closestIdx);
            }
        };

        const onScroll = () => requestAnimationFrame(handleScroll);
        window.addEventListener("scroll", onScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener("scroll", onScroll);
    }, [isMobile]);

    return (
        <div className="flex flex-col items-center w-full mx-auto py-12 pr-4 ">
            {steps.map((step, index) => {
                const isActive = isMobile
                    ? scrollIndex === index
                    : hoveredIndex === index;

                return (
                    <motion.div
                        key={index}
                        ref={(el) => {
                            refs.current[index] = el;
                        }}
                        onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                        onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                        className={cn(
                            "w-full relative flex flex-row items-center border-b-3 border-black py-8 transition-all duration-300",
                        )}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        <div className="flex flex-col sm:flex-row w-full justify-between">
                            <div className="flex  flex-row items-center sm:items-center justify-between  ml-[20px] lg:ml-[60px] gap-[142px] relative w-full max-w-[500px]">
                                <motion.div
                                    className="absolute left-0 top-1/2 -translate-y-1/2 w-full bg-[#D9D9D9] h-[60px]"
                                    initial={{ opacity: 0, scaleX: 0 }}
                                    animate={{
                                        opacity: isActive ? 1 : 0,
                                        scaleX: isActive ? 1 : 0
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeInOut"
                                    }}
                                    style={{ transformOrigin: "left center" }}
                                />
                                <p className="w-[110px] sm:w-fit font-medium text-[54px] sm:text-[64px] lg:text-[100px] ml-[23px] z-10 mb-2">
                                    {step.number}
                                </p>
                                <motion.p
                                    layout
                                    className={cn(
                                        "flex w-full justify-start sm:w-[200px] text-base sm:text-base lg:text-[18px] font-normal text-left  sm:mr-4  transition-all duration-600 ease-in-out leading-[1.5]  pr-[60px] sm:p-2 z-10"
                                    )}
                                    style={{ maxWidth: "100%" }}
                                    dangerouslySetInnerHTML={{ __html: t(step.title).replace(/&/g, '<br>&') }}
                                />
                            </div>
                            <div className="flex items-center sm:w-5/10 min-w-42/100 mr-[60px] sm:mr-[120px] ml-[44px] sm:ml-0 mt-[30px] sm:mt-0 max-w-[700px]">
                                <motion.p
                                    className="text-left text-xs sm:text-base leading-[1.5] w-full"
                                    animate={{
                                        fontWeight: isActive ? 400 : 100
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeInOut"
                                    }}
                                    style={{
                                        wordBreak: "keep-all",
                                        overflowWrap: "break-word"
                                    }}
                                >
                                    {t(step.description)}
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default StrategySteps;
