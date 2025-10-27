"use client";

import { PortfolioTop } from "@/components";
import { useTranslations } from "next-intl";

const JuanchoPage = () => {
    const t = useTranslations("common");
    return (
        <div className="flex flex-col w-full h-full pt-[120px]">
            <PortfolioTop 
                title="Juancho Café"
                description1={t('JuanchoDescription1')}
                description2={t('JuanchoDescription2')}
                image="/images/juancho_main.png"
                back={t('back')}
            />
        </div>
    );
};

export default JuanchoPage;