"use client";

import { Facebook, Linkedin, Mail, Instagram, Whatsapp } from "@/components/icons";
import { useTranslations } from "next-intl";
import Link from "next/link";

interface MobileMenuProps {
    language: string;
    handleLanguageChange: (language: string) => void;
}

const MobileMenu = ({ language, handleLanguageChange }: MobileMenuProps) => {
    const t = useTranslations("common");
    return (

        <div className="flex md:hidden flex-col w-full justify-start items-start text-[12px] gap-2  text-white" >
            <div className="flex flex-col justify-start ">

                <div className="text-white text-2xl font-thin leading-[1.3] w-full px-[30px]">
                    <p>{t("menuText")}</p>
                </div>
                <div className="flex flex-row min-w-[200px] items-center justify-start gap-3  h-8 mt-16 mb-12 pr-[30px] pl-11">
                    <div className="flex flex-row items-center justify-center bg-[#00020B] rounded-full w-[30px] h-[30px] ">
                        <Link href="https://www.facebook.com/" target="_blank">
                            <Facebook color={"#f54d4d"} />
                        </Link>
                    </div>
                    <div className="flex flex-row items-center justify-center bg-[#00020B] rounded-full w-[30px] h-[30px] p-0">
                        <Link href="https://www.instagram.com/" target="_blank">
                            <Instagram color={"#f54d4d"} />
                        </Link>
                    </div>
                    <div className="flex flex-row items-center justify-center bg-[#00020B] rounded-full w-[30px] h-[30px] p-0">
                        <Link href="https://www.linkedin.com/" target="_blank">
                            <Linkedin color={"#f54d4d"} />
                        </Link>
                    </div>
                    <div className="flex flex-row items-center justify-center bg-[#00020B] rounded-full w-[30px] h-[30px] p-0">
                        <Link href="mailto:hello@overty.xyz" target="_blank">
                            <Mail color={"#f54d4d"} />
                        </Link>
                    </div>
                    <div className="flex flex-row items-center justify-center bg-[#00020B] rounded-full w-[30px] h-[30px] p-0">
                        <Link href="tel:+5731055512319" target="_blank">
                            <Whatsapp color={"#f54d4d"} />
                        </Link>
                    </div>

                </div>


                <div className="flex flex-row items-center justify-start w-full h-20 gap-2 text-2xl text-white border-t border-white pl-11 pr-[30px]">
                    <div
                        className={` ${language === "en" ? "font-semibold" : "font-normal"}`}
                        onClick={() => handleLanguageChange("en")}
                    >
                        EN
                    </div>
                    <span className="text-base font-light">•</span>
                    <div
                        className={` ${language === "fr" ? "font-semibold" : "font-normal"}`}
                        onClick={() => handleLanguageChange("fr")}
                    >
                        FR
                    </div>
                    <span className="text-base font-light">•</span>
                    <div
                        className={` ${language === "es" ? "font-semibold" : "font-normal"}`}
                        onClick={() => handleLanguageChange("es")}
                    >
                        ES
                    </div>
                </div>
            </div>
        </div>

    )
}

export default MobileMenu;