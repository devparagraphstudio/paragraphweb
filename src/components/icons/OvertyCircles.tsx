'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CircleAnimation() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    const pathVariants = {
        hidden: { pathLength: 0 },
        visible: {
            pathLength: 1,
            transition: {
                duration: 2,
                ease: 'easeInOut',
            },
        },
    };

    return (
        <svg
            ref={ref}
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g clipPath="url(#clip0_27_1182)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M100.001 4L91.6811 13.091V49.4545H45.4551V4H100.001Z"
                    fill="white"
                />

                <motion.path
                    d="M15.2269 27.1612C10.4167 33.5242 7.57617 41.4403 7.57617 50C7.57617 70.907 24.5442 87.875 45.4512 87.875C66.3582 87.875 83.3262 70.907 83.3262 50C83.3262 29.093 66.3582 12.125 45.4512 12.125"
                    stroke="black"
                    strokeWidth="5.68"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={pathVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                />
                <motion.path
                    d="M18.9375 50.0003C18.9375 64.6578 30.7923 76.5128 45.45 76.5128C60.1075 76.5128 71.9625 64.6578 71.9625 50.0003C71.9625 35.3425 60.1075 23.4878 45.45 23.4878"
                    stroke="black"
                    strokeWidth="5.68"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={pathVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ duration: 2, ease: 'easeInOut', delay: 0.3 }}
                />
                <motion.path
                    d="M45.4512 65.1506C53.8214 65.1506 60.6012 58.3708 60.6012 50.0006C60.6012 41.6301 53.8214 34.8506 45.4512 34.8506"
                    stroke="black"
                    strokeWidth="5.68"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    variants={pathVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ duration: 2, ease: 'easeInOut', delay: 0.6 }}
                />
            </g>
            <defs>
                <clipPath id="clip0_27_1182">
                    <rect width="100" height="100" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
}
