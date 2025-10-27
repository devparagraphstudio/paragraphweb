"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Facebook, Instagram, Linkedin, Mail, Whatsapp } from "@/components/icons";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";

const Footer = () => {
    const router = useRouter();
    const t = useTranslations("common");
    const locale = useLocale();

    const navigateTo = (path: string) => {
        router.push(`/${locale}${path}`);
    };

    return (
        <footer className="relative flex flex-col items-center w-full min-h-[550px] bg-[#D9D9D9] sm:px-0 pb-4 z-20">
            <div className="absolute top-0 left-0 w-full h-2">
                <Image src="/images/gradient.svg" alt="Paragraph" width={1920} height={2} className="object-cover w-full h-full" />
            </div>
            <div className="relative flex w-full min-h-[550px] flex-row items-stretch justify-between">

                <div className="flex absolute top-[25px] left-[30px] md:top-[48px] lg:left-[30px] w-1/3 min-w-[130px]">
                    <Image src="/images/logo.svg" alt="Paragraph" width={510} height={44} className="object-cover w-full h-full max-w-[510px]" />
                </div>
                <div className="hidden sm:flex w-42/100 min-w-[128px]">

                </div>

                <div className="hidden sm:flex flex-col w-1/3 h-auto justify-between items-start font-normal text-primary text-sm   pt-[48px]">
                    <div className="flex flex-col justify-between gap-12 leading-[1.8] uppercase">
                        <div className="flex flex-col">
                            <Link href={`/${locale}/${t("the_agency")}`} onClick={() => navigateTo('/the_agency')}>
                                {t("About")}
                            </Link>
                            <Link href={`/${locale}/${t("solutions")}`} onClick={() => navigateTo('/solutions')}>
                                {t("Solutions")}
                            </Link>
                            <Link href={`/${locale}/${t("achievements")}`} onClick={() => navigateTo('/achievements')}>
                                {t("Achievements")}
                            </Link>

                            <Link href={`/${locale}/${t("contact")}`} onClick={() => navigateTo('/contact')}>
                                {t("Contact")}
                            </Link>
                        </div>
                        <div className="flex flex-row items-center justify-start gap-3 ">
                            <div className="flex flex-row items-center justify-center bg-[#00020B] rounded-full w-[30px] h-[30px] p-0">
                                <Link href="https://www.facebook.com/" target="_blank">
                                    <Facebook color={"white"} width={9} height={18} />
                                </Link>
                            </div>
                            <div className="flex flex-row items-center justify-center bg-[#00020B] rounded-full w-[30px] h-[30px] p-0">
                                <Link href="https://www.instagram.com/" target="_blank">
                                    <Instagram color={"white"} />
                                </Link>
                            </div>
                            <div className="flex flex-row items-center justify-center bg-[#00020B] rounded-full w-[30px] h-[30px] p-0">
                                <Link href="https://www.linkedin.com/" target="_blank">
                                    <Linkedin color={"white"} />
                                </Link>
                            </div>
                            <div className="flex flex-row items-center justify-center bg-[#00020B] rounded-full w-[30px] h-[30px] p-0">
                                <Link href="mailto:hello@paragraphstudio.io" target="_blank">
                                    <Mail />
                                </Link>
                            </div>
                            <div className="flex flex-row items-center justify-center bg-[#00020B] rounded-full w-[30px] h-[30px] p-0">
                                <Link href="tel:+5731055512319" target="_blank">
                                    <Whatsapp color={"white"} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* <div className="flex grow items-end h-full font-light gap-4 text-sm">
                        <p className="hover:cursor-pointer ">
                            {t("Terms")}
                        </p>
                        <p className="hover:cursor-pointer">
                            {t("PrivacyPolicy")}
                        </p>
                    </div> */}
                </div>
                <div className="hidden sm:flex flex-col w-25/100 justify-between items-start font-light  text-primary text-base  leading-[1.6] pt-[48px]">
                    <div className="flex flex-col h-[250px] justify-between">
                        <div className=" flex flex-col justify-between h-[150px] w-full leading-[2em] font-light gap-4">
                            <div>
                                <p className="font-normal tracking-[0.16em] text-sm mb-4">Paragraph Colombia</p>
                                <p >Carrera 19 # 100 - 45</p>
                                <p>110121 Bogotá D.C.</p>
                                <p>+57 310 555 123 19</p>
                            </div>
                            <br />
                            <div>
                                <p className="font-normal tracking-[0.16em] text-sm mb-4">Paragraph Switzerland</p>
                                <p >Avenue de la Gare</p>
                                <p>1920 Martigny</p>
                                <p>+41 79 576 39 90</p>
                            </div>
                            <br />
                            <div>
                                <p className="font-medium transform scale-x-[-1]">hello@paragraphstudio.io</p>
                            </div>
                        </div>
                    </div>
                    {/* <div className="flex flex-row items-end w-full justify-start  pr-[30px] h-[144px] font-light text-sm">
                        <p>
                            ®2025 OVERTY
                        </p>

                    </div> */}
                </div>
                <div className="flex sm:hidden flex-col w-screen h-full ">
                    <div className="flex sm:hidden flex-row w-full h-full justify-end items-start  pt-[54px]">
                        <div className="flex flex-col w-1/2 justify-between items-start">
                            <div className="hidden xs:flex flex-row w-full items-center justify-between pr-[30px]">
                                <div className="flex flex-row items-center justify-center bg-[#00020B] rounded-full w-[30px] h-[30px] p-0">
                                    <Link href="https://www.facebook.com/" target="_blank">
                                        <Facebook color={"white"} width={9} height={18} />
                                    </Link>
                                </div>
                                <div className="flex flex-row items-center justify-center bg-[#00020B] rounded-full w-[30px] h-[30px] p-0">
                                    <Link href="https://www.instagram.com/" target="_blank">
                                        <Instagram color={"white"} />
                                    </Link>
                                </div>
                                <div className="flex flex-row items-center justify-center bg-[#00020B] rounded-full w-[30px] h-[30px] p-0">
                                    <Link href="https://www.linkedin.com/" target="_blank">
                                        <Linkedin color={"white"} />
                                    </Link>
                                </div>
                                <div className="flex flex-row items-center justify-center bg-[#00020B] rounded-full w-[30px] h-[30px] p-0">
                                    <Link href="mailto:hello@overty.xyz" target="_blank">
                                        <Mail />
                                    </Link>
                                </div>
                                <div className="flex flex-row items-center justify-center bg-[#00020B] rounded-full w-[30px] h-[30px] p-0">
                                    <Link href="tel:+5731055512319" target="_blank">
                                        <Whatsapp color={"white"} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex sm:hidden flex-row w-full h-full justify-end items-end  pt-[54px]">
                        <div className="flex flex-col w-1/2 h-auto  justify-end items-start uppercase pl-9">
                            <div className="flex flex-col w-fit h-auto  text-sm font-medium leading-[1.8]">
                                <Link href={`/${locale}/${t("the_agency")}`} onClick={() => navigateTo(t('the_agency'))}>
                                    {t("About")}
                                </Link>
                                <Link href={`/${locale}/${t("solutions")}`} onClick={() => navigateTo(t('solutions'))}>
                                    {t("Solutions")}
                                </Link>
                                <Link href={`/${locale}/${t("achievements")}`} onClick={() => navigateTo(t('achievements'))}>
                                    {t("Achievements")}
                                </Link>

                                <Link href={`/${locale}/${t("contact")}`} onClick={() => navigateTo(t('contact'))}>
                                    {t("Contact")}
                                </Link>
                            </div>

                        </div>
                        <div className="flex flex-col w-1/2 justify-center items-start text-sm">
                            <div>
                                <p >Carrera 19 # 100 - 45</p>
                                <p>110121 Bogotá D.C.</p>
                                <p>Colombia</p>
                                <p>+57 310 555 123 19</p>
                            </div>
                            <br />
                            <div>
                                <p >Avenue de la Gare</p>
                                <p>1920 Martigny</p>
                                <p>Switzerland</p>
                                <p>+41 79 576 39 90</p>
                            </div>
                        </div>
                    </div>
                    <div className="font-light flex sm:hidden  w-full justify-between px-[30px] flex-row text-sm mt-[66px]">
                        <p>
                            ®2025 PARAGRAPH
                        </p>
                        <p className="hover:cursor-pointer">
                            {t("Terms")}
                        </p>
                        <p className="hover:cursor-pointer">
                            {t("PrivacyPolicy")}
                        </p>

                    </div>
                </div>
            </div>
            <div className="flex  w-full  px-[30px] ">
                <div className="flex w-full h-full justify-between items-center border-t border-black">
                </div>
            </div>
            <div className="flex items-center w-full h-[95px]">
                <div className="flex w-42/100">

                </div>
                <div className="flex w-1/3 gap-10">
                    <p className="hover:cursor-pointer ">
                        {t("Terms")}
                    </p>
                    <p className="hover:cursor-pointer">
                        {t("PrivacyPolicy")}
                    </p>
                </div>
                <div className="flex w-25/100">
                    <p>
                        ®2025 OVERTY
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;