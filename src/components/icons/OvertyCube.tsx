'use client';

import { IconType } from "@/lib/definitions";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const OvertyCube: React.FC<IconType> = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
        <svg
            ref={ref}
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_0_455)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M100.001 4.54541L91.6811 13.6362V49.9999H45.4551V4.54541H100.001Z"
                    fill="white"
                />
                <g clipPath="url(#clip1_0_455)">
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M100.588 4L92.2687 13.0908V49.4545H46.043V4H100.588Z"
                        fill="white"
                    />

                    {/* Animated paths triggered only when in view */}
                    <motion.path
                        d="M49.5227 12.6588L74.1794 25.9531C77.0579 27.5058 77.0579 31.9373 74.1794 33.4901L49.5227 46.7843C47.3259 47.9583 44.7504 47.9583 42.5537 46.7843L17.8972 33.4901C15.0187 31.9373 15.0187 27.5058 17.8972 25.9531L42.5537 12.6588C44.7504 11.4848 47.3259 11.4848 49.5227 12.6588Z"
                        stroke="black"
                        strokeWidth="5.68"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />

                    <motion.path
                        d="M14.2601 42.4669L37.1744 53.9429C40.0151 55.3822 41.8331 58.2987 41.8331 61.4802V83.1447C41.8331 86.2882 38.5379 88.2957 35.7351 86.8942L12.8209 75.4182C9.98011 73.9789 8.16211 71.0624 8.16211 67.8809V46.2164C8.16211 43.0729 11.4574 41.0654 14.2601 42.4669Z"
                        stroke="black"
                        strokeWidth="5.68"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                        transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
                    />

                    <motion.path
                        d="M77.8152 42.4669L54.9007 53.9429C52.0602 55.3822 50.2422 58.2987 50.2422 61.4802V83.1447C50.2422 86.2882 53.5372 88.2957 56.3399 86.8942L79.2544 75.4182C82.0949 73.9789 83.9129 71.0624 83.9129 67.8809V46.2164C83.9129 43.0729 80.6179 41.0654 77.8152 42.4669Z"
                        stroke="black"
                        strokeWidth="5.68"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                        transition={{ duration: 2.5, ease: "easeInOut", delay: 0.6 }}
                    />
                </g>
            </g>

            <defs>
                <clipPath id="clip0_0_455">
                    <rect width="100" height="100" fill="white" />
                </clipPath>
                <clipPath id="clip1_0_455">
                    <rect width="100" height="100" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default OvertyCube;
