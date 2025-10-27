"use client";

import { ArrowLg } from "@/components/icons";
import { Button } from "@/components/ui";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface PortfolioTopProps {
    title: string;
    description1: string;
    description2: string;
    image: string;
    back: string;
}

const PortfolioTop = ({ title, description1, description2, image, back }: PortfolioTopProps) => {
    const router = useRouter();
    const t = useTranslations("common");
    const handleBack = () => {
        router.back();
    };

    return (
        <div className="flex flex-col w-full h-full gap-[221px]">
            <div className="flex flex-row w-full h-full gap-[42px] px-4 lg:px-[30px]">
                <div className="flex items-center gap-2">
                    <Button 
                        variant="ghost"
                        onClick={handleBack}
                        className="px-0 m-0 flex items-center gap-2 hover:bg-transparent transition-opacity cursor-pointer"
                    >
                        <ArrowLg width={20} rotate={180} />
                        <span className="text-sm">{back}</span>
                    </Button>
                </div>
                <div className="flex flex-col w-full h-full">
                    <h1 className="text-5xl font-light">{title}</h1>
                </div>
            </div>
            <div className="flex flex-row w-full h-full px-[168px] justify-between items-start mb-[260px]">
                <div>
                    <span className="text-[18px] uppercase font-medium tracking-[0.16px]">{t('overview')}</span>
                </div>
                <div className="flex flex-col max-w-1/2 w-full h-full gap-[20px]">
                    <p className="text-base font-light">{description1}</p>
                    <p className="text-base font-light">{description2}</p>
                </div>
            </div>
            <div className="flex flex-row w-full h-full">
                <Image 
                    src={image} 
                    alt={title} 
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-full h-auto"
                />
            </div>
        </div>
    );
};

export default PortfolioTop;