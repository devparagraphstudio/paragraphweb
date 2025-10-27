"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components";

const TopSection = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <section className={`relative flex flex-col items-center justify-start w-full h-screen  overflow-hidden`}>
            {isClient && (
                <video
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    poster="/images/main-bg.png"
                >
                    <source src="/videos/video-overty.mov" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            )}
            <Navbar />
        </section>
    );
};

export default TopSection;
