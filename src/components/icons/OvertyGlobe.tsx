'use client';

import { IconType } from "@/lib/definitions";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const OvertyGlobe: React.FC<IconType> = () => {
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
            <g clipPath="url(#clip0_27_1193)">
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M99.9986 4L91.6791 13.091V49.4545H45.4531V4H99.9986Z"
                    fill="white"
                />

                {/* Animate on in-view */}
                <motion.path
                    d="M83.0586 53.2571C82.9828 53.9769 82.8691 54.6586 82.6796 55.3404C78.7408 52.0074 73.6276 49.9999 68.0601 49.9999C55.5234 49.9999 45.3351 60.1884 45.3351 72.7249C45.3351 78.2926 47.3424 83.4056 50.6754 87.3446C49.9936 87.5341 49.3119 87.6476 48.5924 87.7234C45.3728 88.0264 42.0779 87.8749 38.6691 87.3069C23.1024 84.6556 10.5656 72.0431 7.9901 56.4386C3.71035 30.4944 25.8293 8.37539 51.7738 12.6551C67.3783 15.2306 79.9906 27.7674 82.6418 43.3339C83.2101 46.7426 83.3616 50.0379 83.0586 53.2571Z"
                    stroke="black"
                    strokeWidth="5.68"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                />

                <motion.path
                    d="M82.6804 55.3405C82.1504 57.1962 81.1654 58.8628 79.7642 60.2643L55.5999 84.4285C54.1987 85.8297 52.5319 86.8145 50.6762 87.3447C47.3432 83.4057 45.3359 78.2927 45.3359 72.725C45.3359 60.1885 55.5242 50 68.0607 50C73.6284 50 78.7417 52.0075 82.6804 55.3405Z"
                    stroke="black"
                    strokeWidth="5.68"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
                    transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.3 }}
                />
            </g>

            <defs>
                <clipPath id="clip0_27_1193">
                    <rect width="100" height="100" fill="white" />
                </clipPath>
            </defs>
        </svg>
    );
};

export default OvertyGlobe;
