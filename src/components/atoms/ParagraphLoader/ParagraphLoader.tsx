"use client";

import { motion } from "framer-motion";

const ParagraphLoader = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.1 }
        }
    };

    const pathVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: (i: number) => ({
            scale: 1,
            opacity: 1,
            transition: {
                scale: { duration: 0.3, ease: "easeOut", delay: i * 0.2 },
                opacity: { duration: 0.2, delay: i * 0.2 }
            }
        })
    };

    const pulseVariants = {
        initial: { scale: 1 },
        animate: {
            scale: [1, 1.03, 1],
            transition: {
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.svg
                width="240"
                height="240"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                variants={pulseVariants}
                initial="initial"
                animate="animate"
            >
                <circle cx="30" cy="30" r="30" fill="black" />
                <motion.path
                    custom={0}
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                    d="M14.7909 33.939C16.9946 33.939 18.781 32.1525 18.781 29.9489C18.781 27.7452 16.9946 25.9587 14.7909 25.9587C12.5872 25.9587 10.8008 27.7452 10.8008 29.9489C10.8008 32.1525 12.5872 33.939 14.7909 33.939Z"
                    fill="white"
                />
                <motion.path
                    custom={1}
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                    d="M29.9491 33.939C32.1528 33.939 33.9392 32.1525 33.9392 29.9489C33.9392 27.7452 32.1528 25.9587 29.9491 25.9587C27.7454 25.9587 25.959 27.7452 25.959 29.9489C25.959 32.1525 27.7454 33.939 29.9491 33.939Z"
                    fill="white"
                />
                <motion.path
                    custom={2}
                    variants={pathVariants}
                    initial="hidden"
                    animate="visible"
                    d="M45.1063 33.939C47.31 33.939 49.0965 32.1525 49.0965 29.9489C49.0965 27.7452 47.31 25.9587 45.1063 25.9587C42.9026 25.9587 41.1162 27.7452 41.1162 29.9489C41.1162 32.1525 42.9026 33.939 45.1063 33.939Z"
                    fill="white"
                />
            </motion.svg>
        </motion.div>
    );
};

export default ParagraphLoader;
