"use client";

import { useState, useEffect, useCallback } from "react";
// import { LanguageSelector } from "@/components";
import { Close, Linkedin, Instagram, Mail, Whatsapp, Facebook, Logo, LogoDots, Menu } from "@/components/icons";
import {
    Button,
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils/helpers";
import Cookies from "js-cookie";
import { AnimatePresence, motion } from "framer-motion";
import { MobileMenu } from "../MobileMenu";

const Navbar = () => {
    const t = useTranslations("common");
    const router = useRouter();
    const pathname = usePathname();
    const isHomePage = pathname === "/" || /^\/[a-z]{2}$/.test(pathname || "");
    const locale = useLocale();
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [language, setLanguage] = useState<string>(() => {
        const storedLanguage = Cookies.get("locale");
        return storedLanguage || "en";
    });
    const [navLinks, setNavLinks] = useState<Array<{ href: string; label: string }>>([]);

    const getLocalizedLinks = useCallback((lang: string) => {
        const agencyLink = (() => {
            switch (lang) {
                case 'en':
                    return '/the_studio';
                case 'fr':
                    return '/l_studio';
                case 'es':
                    return '/el_studio';
                default:
                    return '/the_studio';
            }
        })();

        const solutionsLink = (() => {
            switch (lang) {
                case 'en':
                    return '/solutions';
                case 'fr':
                    return '/solutions';
                case 'es':
                    return '/soluciones';
                default:
                    return '/solutions';
            }
        })();

        const achievementsLink = (() => {
            switch (lang) {
                case 'en':
                    return '/achievements';
                case 'fr':
                    return '/realisations';
                case 'es':
                    return '/logros';
                default:
                    return '/achievements';
            }
        })();

        const contactLink = (() => {
            switch (lang) {
                case 'en':
                    return '/contact';
                case 'fr':
                    return '/contact';
                case 'es':
                    return '/contacto';
                default:
                    return '/contact';
            }
        })();

        return [
            { href: "/", label: t("Home") },
            { href: agencyLink, label: t("About") },
            { href: solutionsLink, label: t("Solutions") },
            { href: achievementsLink, label: t("Achievements") },
            { href: contactLink, label: t("Contact") },
        ];
    }, [t]);

    useEffect(() => {
        setNavLinks(getLocalizedLinks(language));
    }, [language, t, getLocalizedLinks]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        const storedLanguage = Cookies.get("locale");
        if (storedLanguage) {
            setLanguage(storedLanguage);
        } else {
            // If no cookie exists, set default language based on pathname
            const pathname = window.location.pathname;
            const locale = pathname.split("/")[1];
            const supportedLocales = ["en", "fr", "es"];
            const defaultLanguage = supportedLocales.includes(locale) ? locale : "en";
            setLanguage(defaultLanguage);
            Cookies.set("locale", defaultLanguage, { expires: 365 });
        }
    }, []);

    // Watch for cookie changes
    useEffect(() => {
        const storedLanguage = Cookies.get("locale");
        if (storedLanguage && storedLanguage !== language) {
            setLanguage(storedLanguage);
        }
    }, [language]);

    const handleLanguageChange = (value: string) => {
        setLanguage(value);
        Cookies.set("locale", value, { expires: 365 });

        const currentPath = window.location.pathname;
        const segments = currentPath.split("/");

        // Check if the first segment is a supported locale
        const supportedLocales = ["en", "fr", "es"];
        const isLocaleInPath = supportedLocales.includes(segments[1]);

        // Replace the existing locale or add a new one
        const newPath = isLocaleInPath
            ? `/${value}/${segments.slice(2).join("/")}`
            : `/${value}${currentPath}`;

        window.location.href = newPath;
    };

    const handleReturnToHome = () => {
        router.push("/");
    };

    return (
        <motion.nav
            initial={{ opacity: 0 }}
            animate={(!isOpen && isVisible) ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}

            className={cn(
                "fixed top-0 left-0 right-0 z-50",
                isHomePage
                    ? "bg-[#D9D9D9]/60 backdrop-blur-md"
                    : "bg-white/60 backdrop-blur-md"
            )}
        >
            <div className="flex w-full justify-between items-center mx-auto py-[34px] px-4 lg:px-[30px]">
                <Button
                    variant={"ghost"}
                    className="relative flex justify-start w-fit h-[44px] hover:cursor-pointer p-0 bg-transparent hover:bg-transparent"
                    onClick={handleReturnToHome}
                >
                    <Image
                        src={"/images/logo.svg"}
                        alt="Paragraph"
                        width={53}
                        height={44}
                        className="object-cover w-full h-full"
                        priority
                    />
                </Button>

                <div className="relative flex flex-row items-start justify-end gap-9 w-full h-full z-10">
                    {/* <LanguageSelector /> */}
                    {/* <LanguageSelector /> */}
                    <Dialog open={isOpen} onOpenChange={setIsOpen}>
                        <DialogTrigger asChild>
                            <motion.button
                                className="hover:cursor-pointer p-0 m-0 top-0 right-0 flex items-center justify-center"
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <AnimatePresence mode="wait">

                                    <motion.div
                                        key="menu"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.3 }}

                                    >
                                        <Menu />
                                    </motion.div>

                                </AnimatePresence>
                            </motion.button>
                        </DialogTrigger>
                        <DialogContent
                            className="w-full h-full  rounded-none border-none shadow-none p-0 gap-0 overflow-hidden"
                            closeIcon={
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key="close-icon"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.3 }}
                                        className="flex mr-[30px] mt-[34px] w-[60px] h-[44px] justify-end items-center"
                                        onClick={() => {
                                            setIsOpen(false);
                                            setIsVisible(true);
                                        }}

                                    >
                                        <Close height={24} width={24} color="white" />
                                    </motion.div>
                                </AnimatePresence>
                            }
                        >
                            <DialogTitle className="hidden" />
                            <DialogDescription className="hidden" />
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="relative bg-[#f54d4d] flex flex-row h-full justify-between w-full overflow-auto"
                            >

                                <div className="relative flex flex-col h-full w-full justify-between md:px-[60px] lg:px-[154px] pt-20 lg:pt-[120px]  lg:pb-[80px]">
                                    <div className="px-[30px] md:px-0 h">
                                        <div className="flex flex-col ">
                                            {navLinks.map(({ href, label }) => {
                                                const localizedHref = `/${locale}${href}`;
                                                const isActive =
                                                    href === "/"
                                                        ? pathname === `/${locale}` || pathname === `/${locale}/`
                                                        : pathname.startsWith(`/${locale}${href}`);

                                                const handleNavigation = () => {
                                                    if (pathname !== localizedHref) {
                                                        router.push(localizedHref);
                                                        // Add a small delay to allow the route change to start before closing the dialog
                                                        setTimeout(() => {
                                                            setIsOpen(false);
                                                        }, 100);
                                                    } else {
                                                        setIsOpen(false);
                                                    }
                                                };

                                                return (
                                                    <Button
                                                        key={href}
                                                        variant="ghost"
                                                        onClick={isActive ? undefined : handleNavigation}
                                                        disabled={isActive}
                                                        className="p-0 h-auto bg-transparent hover:bg-transparent w-fit"
                                                    >
                                                        <motion.div
                                                            initial="initial"
                                                            whileHover="hover"
                                                            className={`flex flex-row items-center w-fit   ${isActive ? "pointer-events-none cursor-default font-thin text-white/80" : "cursor-pointer font-extralight text-white"} text-[30px] sm:text-[40px] md:text-[56px] xl:text-[64px]  uppercase`}
                                                        >

                                                            <motion.div
                                                                variants={{
                                                                    initial: { width: 0 },
                                                                    hover: { width: 50, marginLeft: 0, transition: { duration: 0.3, ease: "easeInOut" } },
                                                                }}
                                                                className="h-[3px] bg-white"
                                                            />
                                                            {/* text */}
                                                            <motion.span
                                                                variants={{
                                                                    initial: { x: 0 },
                                                                    hover: !isActive ? { x: 5, transition: { duration: 0.3, ease: "easeInOut" } } : {},
                                                                }}
                                                                className={cn(
                                                                    "block"
                                                                )}
                                                            >
                                                                {label}
                                                            </motion.span>
                                                        </motion.div>
                                                    </Button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                    <MobileMenu language={language} handleLanguageChange={handleLanguageChange} />
                                    <div className="md:flex hidden flex-row items-center justify-start w-full h-[102px] gap-2  text-2xl text-white">
                                        <div
                                            className={` ${language === "en" ? "font-semibold" : "font-normal"} hover:cursor-pointer    `}
                                            onClick={() => handleLanguageChange("en")}
                                        >
                                            EN
                                        </div>
                                        <span className="text-base font-light">•</span>
                                        <div
                                            className={` ${language === "fr" ? "font-semibold" : "font-normal"} hover:cursor-pointer    `}
                                            onClick={() => handleLanguageChange("fr")}
                                        >
                                            FR
                                        </div>
                                        <span className="text-base font-light">•</span>
                                        <div
                                            className={` ${language === "es" ? "font-semibold" : "font-normal"} hover:cursor-pointer    `}
                                            onClick={() => handleLanguageChange("es")}
                                        >
                                            ES
                                        </div>
                                    </div>

                                </div>
                                <div className="hidden md:flex flex-col h-full justify-between  pt-20 lg:pt-[120px]  lg:pb-[80px] min-w-[400px] ">
                                    <div className="flex flex-col h-full justify-between border-l border-white  pl-[60px] lg:pl-[80px]">
                                        <div className="flex flex-col gap-3 pt-6">
                                            <div className="pl-3">
                                                <LogoDots color="white" />
                                            </div>

                                            <Logo width={220} height={44} color="white" />
                                        </div>
                                        <div className="text-white text-2xl font-thin leading-[1.3] max-w-[254px] pl-3">
                                            <p>{t("menuText")}</p>
                                        </div>
                                        <div className="flex flex-row min-w-[200px] items-end justify-start gap-3  pl-3 mb-10">
                                            <div className="flex flex-row items-center justify-center bg-[#00020B] rounded-full w-[30px] h-[30px] p-0">
                                                <Button
                                                    variant="ghost"
                                                    onClick={() => window.open("https://www.facebook.com/", "_blank")}
                                                    className="p-0 h-auto bg-transparent hover:bg-transparent"
                                                >
                                                    <Facebook color={"#f54d4d"} />
                                                </Button>
                                            </div>
                                            <div className="flex flex-row items-center justify-center bg-[#00020B] rounded-full w-[30px] h-[30px] p-0">
                                                <Button
                                                    variant="ghost"
                                                    onClick={() => window.open("https://www.instagram.com/", "_blank")}
                                                    className="p-0 h-auto bg-transparent hover:bg-transparent"
                                                >
                                                    <Instagram color={"#f54d4d"} />
                                                </Button>
                                            </div>
                                            <div className="flex flex-row items-center justify-center bg-[#00020B] rounded-full w-[30px] h-[30px] p-0">
                                                <Button
                                                    variant="ghost"
                                                    onClick={() => window.open("https://www.linkedin.com/", "_blank")}
                                                    className="p-0 h-auto bg-transparent hover:bg-transparent"
                                                >
                                                    <Linkedin color={"#f54d4d"} />
                                                </Button>
                                            </div>
                                            <div className="flex flex-row items-center justify-center bg-[#00020B] rounded-full w-[30px] h-[30px] p-0">
                                                <Button
                                                    variant="ghost"
                                                    onClick={() => window.open("mailto:hello@overty.xyz", "_blank")}
                                                    className="p-0 h-auto bg-transparent hover:bg-transparent"
                                                >
                                                    <Mail color={"#f54d4d"} />
                                                </Button>
                                            </div>
                                            <div className="flex flex-row items-center justify-center bg-[#00020B] rounded-full w-[30px] h-[30px] p-0">
                                                <Button
                                                    variant="ghost"
                                                    onClick={() => window.open("tel:+5731055512319", "_blank")}
                                                    className="p-0 h-auto bg-transparent hover:bg-transparent"
                                                >
                                                    <Whatsapp color={"#f54d4d"} />
                                                </Button>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                                {/* <div className="hidden md:flex md:px-[60px] lg:px-[154px] mb-[60px] w-full h-fit flex-row items-center justify-start gap-8">
                                        <div className="flex flex-row h-fit w-fit justify-end gap-5">
                                            <div className="hidden xs:flex flex-row min-w-[200px] items-center justify-between gap-3">
                                                <div className="flex flex-row items-center justify-center bg-[#00020B] rounded-full w-[30px] h-[30px] p-0">
                                                    <Link href="https://www.facebook.com/" target="_blank">
                                                        <Facebook color={"white"} />
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
                                    </div> */}

                            </motion.div>

                        </DialogContent>
                    </Dialog>

                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;