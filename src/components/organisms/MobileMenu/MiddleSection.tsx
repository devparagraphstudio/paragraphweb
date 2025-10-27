"use client";

import { Button } from "@/components/ui";
import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { Waves } from "@/components";

const phrases = [
    "BOOST",
    "BRAND",
    "STRATEGY",
    "IMPACT",
];

const MiddleSection = () => {
    const t = useTranslations("common");
    const [displayedLength, setDisplayedLength] = useState(0);
    const [phraseIndex, setPhraseIndex] = useState(0);
    const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const resetTimeoutRef = useRef<NodeJS.Timeout | null>(null);
    const firstCharRef = useRef<HTMLSpanElement | null>(null);
    const containerRef = useRef<HTMLDivElement | null>(null);
    // const [firstCharPosition, setFirstCharPosition] = useState<number>(0);
    const router = useRouter();
    const locale = useLocale();

    const fullText = t(phrases[phraseIndex]);

    useEffect(() => {
        let i = 0;

        const type = () => {
            if (i <= fullText.length) {
                setDisplayedLength(i);
                i++;
                typingTimeoutRef.current = setTimeout(type, 80);
            } else {
                resetTimeoutRef.current = setTimeout(() => {
                    setDisplayedLength(0);
                    setPhraseIndex((prev) => (prev + 1) % phrases.length);
                }, 5000);
            }
        };

        type();

        return () => {
            if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
            if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
        };
    }, [phraseIndex, fullText]);

    // useEffect(() => {
    //     if (displayedLength === fullText.length && firstCharRef.current && containerRef.current) {
    //         const firstCharRect = firstCharRef.current.getBoundingClientRect();
    //         const containerRect = containerRef.current.getBoundingClientRect();
    //         const relativeLeft = firstCharRect.left - containerRect.left;
    //         setFirstCharPosition(relativeLeft);
    //     }
    // }, [displayedLength, fullText.length]);

    return (
        <div className="relative h-full flex flex-col items-center justify-center text-center text-black overflow-hidden ">
            <Waves
                lineColor="red"
                backgroundColor="transparent"
                waveSpeedX={0.02}
                waveSpeedY={0.01}
                waveAmpX={40}
                waveAmpY={20}
                friction={0.9}
                tension={0.01}
                maxCursorMove={120}
                xGap={10}
                yGap={30}
            />

            {/* Typewriter Effect */}
            <div className=" w-full mt-[60px] md:mt-[120px] xl:mt-[138px] pl-[40px] xl:pl-[154px] flex justify-start items-center text-left ">
                <div
                    ref={containerRef}
                    className="relative flex items-center justify-start w-full mr-10 text-left"
                >
                    <div className="w-full font-thin text-[8vw] sm:text-[6vw] md:text-[7vw] lg:text-[90px] xl:text-[100px] text-left z-20 relative text-wrap flex flex-col leading-none lowercase ">
                        {t("GET YOUR")
                            .split(" ")
                            .map((word, index) => (
                                <div key={index}>{word}</div>
                            ))}

                        <div className="inline-block">
                            {fullText.split(" ").map((word, wordIndex) => {
                                const startCharIndex = fullText
                                    .split(" ")
                                    .slice(0, wordIndex)
                                    .join(" ").length + (wordIndex > 0 ? 1 : 0);

                                return (
                                    <span key={wordIndex} style={{ whiteSpace: "pre", position: "relative" }}>
                                        {word.split("").map((char, charIndex) => {
                                            const globalCharIndex = startCharIndex + charIndex;
                                            const isLastWord = wordIndex === fullText.split(" ").length - 1;
                                            const isCursorHere = isLastWord && globalCharIndex === displayedLength - 1;

                                            return (
                                                <span
                                                    key={charIndex}
                                                    ref={globalCharIndex === 0 ? firstCharRef : null}
                                                    className={`inline-block ${globalCharIndex < displayedLength ? "opacity-100" : "opacity-0"}`}
                                                    style={{ position: "relative" }}
                                                >
                                                    {char}
                                                    {isCursorHere && (
                                                        <motion.span
                                                            className="absolute left-full top-1/2 -translate-y-1/2 w-[3px] h-[1em] bg-black ml-[15px]"
                                                            style={{ verticalAlign: "middle" }}
                                                            animate={{ opacity: [1, 0, 1] }}
                                                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                        />
                                                    )}
                                                </span>
                                            );
                                        })}

                                        {wordIndex < fullText.split(" ").length - 1 && " "}
                                    </span>
                                );
                            })}
                        </div>
                    </div>
                    {/* 
                    {displayedLength === fullText.length && firstCharPosition > 0 && (
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{
                                duration: 0.8,
                                ease: "easeInOut",
                                delay: 0.4,
                            }}
                            className="absolute top-0 h-full bg-accent"
                            style={{
                                left: `${firstCharPosition - 10}px`,
                                height: "100%",
                                background: "rgba(255,255,0,1)",
                            }}
                        />
                    )} */}
                </div>
            </div>

            {/* Button */}
            <div className="relative flex flex-row justify-start  pl-[40px] xl:pl-[154px] w-full mt-[120px] mb-[150px]">
                <div className="flex justify-start sm:w-25/100 pr-[30px]">
                    <Button className="h-13 w-[311px] px-10 py-4 bg-black text-white font-normal text-xl rounded-none border-none shadow-none hover:cursor-pointer transition-all duration-300 ease-in-out uppercase tracking-[0.24em] hover:bg-accent "
                        onClick={() => {
                            router.push(`/${locale}/${t("contact")}`);
                        }}
                    >
                        {t("Talk")}!
                    </Button>
                </div>
            </div>

            
        </div>
    );
};

export default MiddleSection;