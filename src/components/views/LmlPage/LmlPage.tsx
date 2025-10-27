"use client";

import { PortfolioTop } from "@/components";
import { useTranslations } from "next-intl";

const LmlPage = () => {
    const t = useTranslations("common");
    return (
        <div className="flex flex-col w-full h-full pt-[120px]">
            <PortfolioTop 
                title="LML — Courtage Immobilier"
                description1={t('LMLDescription1')}
                description2={t('LMLDescription2')}
                image="/images/lml_main.png"
                back={t('back')}
            />
        </div>
    );
};

export default LmlPage;