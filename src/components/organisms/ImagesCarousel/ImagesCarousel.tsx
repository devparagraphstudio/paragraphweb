"use client"
import {
    Card, CardContent,
} from "@/components/ui"
import Image from "next/image"
import useEmblaCarousel from 'embla-carousel-react'
import './ImagesCarousel.css'
import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from "framer-motion"
import { useTranslations } from "next-intl"

const teamMembers = [
    { name: "Jean-Laurent Cans", image: "https://res.cloudinary.com/dhyqazlq8/image/upload/v1747770181/JEAN_wpqacd.svg", position: "Founder", description: "JeanDescription" },
    { name: "Julio Beltran", image: "https://res.cloudinary.com/dhyqazlq8/image/upload/v1747770181/JULIO_zduadc.svg", position: "Designer", description: "JulioDescription" },
    { name: "Catalina Sotelo", image: "https://res.cloudinary.com/dhyqazlq8/image/upload/v1747770183/CATALINA_yawywq.svg", position: "Community Manager", description: "CatalinaDescription" },
    { name: "Carlos Ruiz", image: "https://res.cloudinary.com/dhyqazlq8/image/upload/v1747770184/CARLOS_bnarkp.svg", position: "Web Developer", description: "CarlosDescription" },
    { name: "Jean-Laurent Cans", image: "https://res.cloudinary.com/dhyqazlq8/image/upload/v1747770181/JEAN_wpqacd.svg", position: "Founder", description: "JeanDescription" },
    { name: "Julio Beltran", image: "https://res.cloudinary.com/dhyqazlq8/image/upload/v1747770181/JULIO_zduadc.svg", position: "Designer", description: "JulioDescription" },
    { name: "Catalina Sotelo", image: "https://res.cloudinary.com/dhyqazlq8/image/upload/v1747770183/CATALINA_yawywq.svg", position: "Community Manager", description: "CatalinaDescription" },
    { name: "Carlos Ruiz", image: "https://res.cloudinary.com/dhyqazlq8/image/upload/v1747770184/CARLOS_bnarkp.svg", position: "Web Developer", description: "CarlosDescription" },
]

const ImagesCarousel = () => {
    const t = useTranslations("about")
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: 'start',
        loop: true,
        duration: 20,
        inViewThreshold: 0.5,
        dragFree: false,
    })

    useEffect(() => {
        if (!emblaApi) return
        const onSelect = () => {
            setSelectedIndex(emblaApi.selectedScrollSnap())
        }
        emblaApi.on('select', onSelect)
        onSelect() // Set initial index
        return () => {
            emblaApi.off('select', onSelect)
        }
    }, [emblaApi])

    return (
        <div className="flex flex-col md:flex-row relative">

            <div className="hidden md:flex w-[240px] h-full justify-center mr-8 lg:mr-16">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={selectedIndex}
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 50, scale: 0.8 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}

                        className="hidden sm:flex flex-col h-full justify-center"
                    >
                        <p className="w-[195px] text-base font-light leading-[1.6] mt-8 xl:mt-[60px]">
                            {t(teamMembers[selectedIndex].description)}
                        </p>
                        <div className="flex flex-col mt-6 md:mt-[44px] h-10 xl:h-fit gap-2">
                            <p className="font-medium md:text-2xl leading-[1.3]">{teamMembers[selectedIndex].name}</p>

                            <p className="text-base tracking-[0.5em] font-light text-wrap leading-[1.3] ">{t(teamMembers[selectedIndex].position)}</p>
                        </div>

                    </motion.div>
                </AnimatePresence>
            </div>
            <h3 className="flex md:hidden text-[64px] font-light uppercase z-50 mb-[74px]">{t("Team")}</h3>
            <div className="relative w-full mx-auto overflow-hidden hover:cursor-grab active:cursor-grabbing">
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container flex">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="embla__slide lg:min-w-[600px] flex justify-center">
                                <motion.div
                                    initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.1,
                                        ease: [0.4, 0, 0.2, 1]
                                    }}
                                    whileHover={{
                                        scale: 1.02,
                                        transition: { duration: 0.2 }
                                    }}
                                >
                                    <Card className="m-2 bg-transparent border-none rounded-none p-0 shadow-none h-full flex flex-col aspect-[3/4] max-w-[300px] min-w-[300px] md:min-w-[400px] md:max-w-[400px] lg:max-w-[600px] lg:min-w-[600px] w-full">
                                        <CardContent className="p-0 flex flex-col h-full">
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src={member.image}
                                                    alt={member.name}
                                                    width={400}
                                                    height={600}
                                                    className="object-cover w-full h-full"
                                                    unoptimized
                                                />
                                            </div>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedIndex}
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.8 }}
                    transition={{ duration: 0.8, ease: "easeOut" }} className="flex flex-col ml-8 md:hidden w-[300px] mr-8 lg:mr-16 mt-12">
                    <div className="flex flex-col mt-6 md:mt-[44px]  xl:h-fit gap-2 mb-9">
                        <p className="font-medium md:text-2xl leading-[1.3]">{teamMembers[selectedIndex].name}</p>

                        <p className="text-base tracking-widest font-light text-wrap leading-[1.6] uppercase">{t(teamMembers[selectedIndex].position)}</p>
                    </div>
                    <div
                        className="flex flex-col"
                    >
                        <p className="w-[195px] text-base font-light leading-[1.6] mt-8 xl:mt-[60px]">
                            {t(teamMembers[selectedIndex].description)}
                        </p>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}

export default ImagesCarousel
