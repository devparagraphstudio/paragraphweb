'use client';

import { ArrowUpRight } from '@/components/icons';
import { Button } from '@/components/ui';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils/helpers';

interface HoverVideoProps {
    videoSrc: string;
    title: string;
    descriptions: string[];
    className?: string;
    onClick?: () => void;
}

const HoverVideo: React.FC<HoverVideoProps> = ({ videoSrc, title, descriptions, className, onClick }) => {
    const desktopVideoRef = useRef<HTMLVideoElement>(null);
    const mobileVideoRef = useRef<HTMLVideoElement>(null);
    const [hasMounted, setHasMounted] = useState(false);
    const [isHoveredDesktop, setIsHoveredDesktop] = useState(false);
    const [isHoveredMobile, setIsHoveredMobile] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    const handleMouseEnter = (
        ref: React.RefObject<HTMLVideoElement | null>,
        setHover: (val: boolean) => void
    ) => {
        setHover(true);
        if (ref.current) {
            const playPromise = ref.current.play();
            if (playPromise !== undefined) {
                playPromise.catch((err) => {
                    console.error('Video play error:', err);
                });
            }
        }
    };

    const handleMouseLeave = (
        ref: React.RefObject<HTMLVideoElement | null>,
        setHover: (val: boolean) => void
    ) => {
        setHover(false);
        ref.current?.pause();
    };

    const half = Math.ceil(descriptions.slice(1).length / 2);
    const firstHalf = descriptions.slice(1).slice(0, half);
    const secondHalf = descriptions.slice(1).slice(half);

    if (!hasMounted) return null;

    return (
        <div className="relative w-full">
            {/* Desktop section (tall scrollable section) */}
            <div className="lg:flex justify-between hidden flex-row xl:gap-32 gap-10">
                {/* Left video column */}
                <div
                    className={cn("h-[400px] lg:h-[600px] relative flex items-center justify-center z-[9999]  px-2 pb-2 bg-white min-w-4/10 w-full max-w-[1030px]", className)}
                    onMouseEnter={() => handleMouseEnter(desktopVideoRef, setIsHoveredDesktop)}
                    onMouseLeave={() => handleMouseLeave(desktopVideoRef, setIsHoveredDesktop)}
                >
                    <video
                        ref={desktopVideoRef}
                        className={`w-full h-full object-cover transition-all duration-500 ${!isHoveredDesktop ? 'grayscale' : ''}`}
                        muted
                        loop
                        playsInline
                    >
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <motion.div
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="absolute top-4 right-4 z-50"
                    >
                        <Button variant="ghost" className="h-16 w-16 p-0 bg-transparent hover:bg-transparent">
                            <ArrowUpRight color={'#fafa00'} height={64} width={64} />
                        </Button>
                    </motion.div>
                </div>

                {/* Right sticky text */}
                <div className="relative w-full max-w-4/10 z-[9999] mr-[60px] 2xl:mr-[154px]">
                    <div className="sticky top-0 h-fit py-1 w-full min-w-[400px] xl:min-w-[550px]">
                        <h1
                            className="text-xl lg:text-4xl font-light mb-[64px] uppercase tracking-[.16em] leading-[1] cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={onClick}
                        >
                            {title}
                        </h1>
                        <p className="text-base font-light leading-[1.6]">
                            {descriptions[0]}
                        </p>
                        <div className="mt-12 hidden xl:grid grid-cols-2 gap-x-6 w-full mb-10">
                            <div className="list-disc list-inside ">
                                {firstHalf.map((desc, index) => (
                                    <p key={index} className="text-base font-light leading-[1.6] text-nowrap border-b-2 border-black pb-1 mt-10">
                                        {desc}
                                    </p>
                                ))}
                            </div>
                            <div className="list-disc list-inside">
                                {secondHalf.map((desc, index) => (
                                    <p key={index + half} className="text-base font-light leading-[1.6] text-nowrap border-b-2 border-black pb-1 mt-10">
                                        {desc}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className="mt-12 xl:hidden grid grid-cols-1 gap-x-6 mb-10">
                            <div className="list-disc list-inside">
                                {descriptions.slice(1).map((desc, index) => (
                                    <p key={index} className="text-base font-light leading-[1.6] text-nowrap border-b-2 border-black pb-1 mt-10">
                                        {desc}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile version (no sticky) */}
            <div
                className="lg:hidden relative flex items-center justify-center py-4 px-4 bg-white z-[9999] "
                onMouseEnter={() => handleMouseEnter(mobileVideoRef, setIsHoveredMobile)}
                onMouseLeave={() => handleMouseLeave(mobileVideoRef, setIsHoveredMobile)}
            >
                <video
                    ref={mobileVideoRef}
                    className={`w-full h-full object-cover transition-all duration-500 ${!isHoveredMobile ? 'grayscale' : ''}`}
                    muted
                    loop
                    playsInline
                >
                    <source src={videoSrc} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <motion.div transition={{ duration: 0.4, ease: 'easeInOut' }} className="absolute top-5 right-10 z-50">
                    <Button variant="ghost" className="h-16 w-16 p-0 bg-transparent hover:bg-transparent">
                        <ArrowUpRight color={'#fafa00'} height={64} width={64} />
                    </Button>
                </motion.div>
            </div>
            <div className="flex flex-col lg:hidden gap-5 px-4 mb-10">
                <div className="py-8 z-[9999] ">
                    <h1
                        className="text-[18px] md:text-xl font-light mb-6 uppercase tracking-[0.1em] cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={onClick}
                    >
                        {title}
                    </h1>
                    <p className="text-xs md:text-base font-light leading-[1.6]">{descriptions[0]}</p>
                    <div className="mt-10 2xs:grid hidden grid-cols-2 gap-x-6">
                        <div className="list-disc list-inside">
                            {firstHalf.map((desc, index) => (
                                <p key={index} className="text-xs md:text-base font-light leading-[1.6] text-nowrap border-b-2 border-black pb-1 mt-10">
                                    {desc}
                                </p>
                            ))}
                        </div>
                        <div className="list-disc list-inside">
                            {secondHalf.map((desc, index) => (
                                <p key={index + half} className="text-xs md:text-base font-light leading-[1.6] text-nowrap border-b-2 border-black pb-1 mt-10">
                                    {desc}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div className="mt-10 2xs:hidden grid grid-cols-1 gap-x-6">
                        <div className="list-disc list-inside">
                            {descriptions.slice(1).map((desc, index) => (
                                <p key={index} className="text-xs font-light leading-[1.6] text-nowrap border-b-2 border-black">
                                    {desc}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default HoverVideo;
