"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui"
import { useTranslations, useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { ArrowUpRight } from "@/components/icons";

const getImages = (locale: string) => {
    const achievementsPath = locale === 'es' ? 'logros' : locale === 'fr' ? 'realisations' : 'achievements';
    
    return {
        images1: [
            { src: "/images/branding1.jpg", alt: "Branding Project", title: "Lorem Ipsum ", link: `/${locale}/${achievementsPath}/juancho` },
            { src: "/images/branding2.jpg", alt: "Branding Project", title: "Consectetur Adipiscing ", link: `/${locale}/${achievementsPath}/lml` },
            { src: "/images/branding3.jpg", alt: "Branding Project", title: "Sed Do Eiusmod Tempor", link: `/${locale}/${achievementsPath}/lml` },
            { src: "/images/branding4.jpg", alt: "Branding Project", title: "Incididunt Ut", link: `/${locale}/${achievementsPath}/juancho` },
            { src: "/images/branding5.jpg", alt: "Branding Project", title: "Magna Aliqua", link: `/${locale}/${achievementsPath}/lml` },
            { src: "/images/branding6.jpg", alt: "Branding Project", title: "Ad Minim", link: `/${locale}/${achievementsPath}/juancho` },
        ],
        images2: [
            { src: "/images/content1.jpg", alt: "Content Project", title: "Lorem Ipsum", link: `/${locale}/${achievementsPath}/juancho` },
            { src: "/images/content2.jpg", alt: "Content Project", title: "Dolor Sit", link: `/${locale}/${achievementsPath}/lml` },
            { src: "/images/content3.jpg", alt: "Content Project", title: "Amet Consectetur", link: `/${locale}/${achievementsPath}/lml` },
            { src: "/images/content4.jpg", alt: "Content Project", title: "Adipiscing Elit", link: `/${locale}/${achievementsPath}/juancho` },
            { src: "/images/content5.jpg", alt: "Content Project", title: "Sed Do", link: `/${locale}/${achievementsPath}/lml` },
            { src: "/images/content6.jpg", alt: "Content Project", title: "Eiusmod Tempor", link: `/${locale}/${achievementsPath}/lml` },
        ],
        images3: [
            { src: "/images/audience1.jpg", alt: "Audience Project", title: "Audience Engagement", link: `/${locale}/${achievementsPath}/juancho`},
            { src: "/images/audience2.jpg", alt: "Audience Project", title: "Target Audience", link: `/${locale}/${achievementsPath}/lml` },
            { src: "/images/audience3.jpg", alt: "Audience Project", title: "Market Research", link: `/${locale}/${achievementsPath}/lml` },
            { src: "/images/audience4.jpg", alt: "Audience Project", title: "Customer Insights", link: `/${locale}/${achievementsPath}/juancho` },
            { src: "/images/audience5.jpg", alt: "Audience Project", title: "Brand Awareness", link: `/${locale}/${achievementsPath}/lml` },
            { src: "/images/audience6.jpg", alt: "Audience Project", title: "User Experience", link: `/${locale}/${achievementsPath}/juancho` },
        ]
    };
};

const gridConfig1 = [
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
    "col-span-2 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
];
const gridConfig2 = [
    "col-span-2 row-span-1",
    "col-span-1 row-span-1",
    "col-span-1 row-span-1",
    "col-span-2 row-span-1",
    "col-span-2 row-span-1",
    "col-span-1 row-span-1",
];

const imageVariants = {
    initial: { scale: 1, filter: "grayscale(100%)" },
    hover: { scale: 1.05, filter: "grayscale(0%)" },
};

const overlayVariants = {
    initial: { opacity: 0 },
    hover: { opacity: 1 },
};

interface GalleryGridProps {
    type: string;
}

const GalleryGrid: React.FC<GalleryGridProps> = ({ type }) => {
    const t = useTranslations("portfolio");
    const locale = useLocale();
    const router = useRouter();
    
    const { images1, images2, images3 } = getImages(locale);
    
    const handleImageClick = (link: string) => {
        router.push(link);
    };

    return (
        <>
            <div className="hidden sm:grid grid-cols-3 grid-rows-[200px_200px_200px] md:grid-rows-[350px_350px_350px] lg:grid-rows-[500px_500px_500px] z-[9999] gap-2 p-2 bg-white">
                {(type === "1" ? images1 : type === "2" ? images2 : images3).map((img, index) => (
                    <motion.div
                        key={index}
                        className={`${type === "2" ? gridConfig2[index] : gridConfig1[index]} relative overflow-hidden z-[9999] cursor-pointer`}
                        initial="initial"
                        whileHover="hover"
                        whileTap="hover"
                        animate="initial"
                        onClick={() => handleImageClick(img.link)}
                    >
                        <motion.div
                            variants={imageVariants}
                            transition={{ duration: 0.6, ease: "easeInOut" }}
                            className="w-full h-full"
                        >
                            <Image
                                src={img.src}
                                alt={img.alt}
                                width={1000}
                                height={500}
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                        <motion.div
                            variants={overlayVariants}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="absolute top-[30px] left-[30px] z-50"
                        >
                            <p className="text-white font-light text-[36px] uppercase leading-[1] tracking-[0.1em]">
                                {img.title}
                            </p>
                        </motion.div>

                        <motion.div
                            variants={overlayVariants}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="absolute bottom-4 right-4 z-50"
                        >
                            <Button 
                                variant="secondary" 
                                className="text-xs font-medium uppercase tracking-[.24em] rounded-none px-10 bg-[#fafa00] hover:bg-[#fafa00]/80 hover:cursor-pointer"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleImageClick(img.link);
                                }}
                            >
                                {t("More")}
                            </Button>
                        </motion.div>
                        <motion.div
                            variants={overlayVariants}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="absolute top-4 right-4 z-50"
                        >
                            <Button variant="ghost" className="h-16 w-16 rounded-none p-0 bg-transparent hover:bg-transparent hover:cursor-pointer">
                                <ArrowUpRight color={"#fafa00"} height={64} width={64} />
                            </Button>
                        </motion.div>
                    </motion.div>
                ))}
            </div>
            <div className="flex flex-col sm:hidden z-[9999] gap-2 p-2 bg-white">
                {(type === "1" ? images1 : type === "2" ? images2 : images3).map((img, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        <motion.div
                            className={`${type === "2" ? gridConfig2[index] : gridConfig1[index]} relative overflow-hidden z-[9999] cursor-pointer`}
                            initial="initial"
                            whileHover="hover"
                            whileTap="hover"
                            animate="initial"
                            onClick={() => handleImageClick(img.link)}
                        >
                            <motion.div
                                variants={imageVariants}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="w-full h-full"
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    width={1000}
                                    height={500}
                                    className="w-full h-full object-cover"
                                />
                            </motion.div>
                            <motion.div
                                variants={overlayVariants}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="absolute top-[30px] left-[30px] z-50"
                            >
                                <p className="text-white font-light text-[36px] uppercase leading-[1] tracking-[0.1em]">
                                    {img.title}
                                </p>
                            </motion.div>


                            <motion.div
                                variants={overlayVariants}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="absolute top-4 right-4 z-50"
                            >
                                <Button variant="ghost" className="h-16 w-16 rounded-none p-0 bg-transparent hover:bg-transparent hover:cursor-pointer">
                                    <ArrowUpRight color={"#fafa00"} height={64} width={64} />
                                </Button>
                            </motion.div>
                        </motion.div>

                        <Button 
                            className="text-xs font-medium uppercase tracking-[.24em] rounded-none px-10 bg-[#fafa00] hover:bg-[#fafa00]/80 hover:cursor-pointer text-black"
                            onClick={() => handleImageClick(img.link)}
                        >
                            {t("More")}
                        </Button>
                    </div>
                ))}
            </div>

        </>
    );
};

export default GalleryGrid;
