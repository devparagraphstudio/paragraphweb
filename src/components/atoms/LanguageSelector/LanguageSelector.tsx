"use client";

import { useEffect, useState } from "react";
import { SelectTransparent, SelectContent, SelectItem, SelectTrigger } from "@/components";
import Cookies from "js-cookie";
import { Planet } from "@/components/icons";

interface LanguageSelectorProps {
    className?: string;
    onLanguageChange?: (value: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onLanguageChange }) => {
    const [open, setOpen] = useState(false);
    const [language, setLanguage] = useState<string>(() => {
        const storedLanguage = Cookies.get("locale");
        return storedLanguage || "en";
    });

    useEffect(() => {
        if (open) {
            document.body.style.setProperty("overflow-y", "auto", "important");
        } else {
            document.body.style.removeProperty("overflow-y");
        }
    }, [open]);

    useEffect(() => {
        const pathname = window.location.pathname;
        const locale = pathname.split("/")[1];
        const storedLanguage = Cookies.get("locale") || locale || "en";
        setLanguage(storedLanguage);
    }, []);

    const handleLanguageChange = (value: string) => {
        setLanguage(value);
        Cookies.set("locale", value, { expires: 365 });
        onLanguageChange?.(value);

        const currentPath = window.location.pathname;
        const segments = currentPath.split("/");
        const supportedLocales = ["en", "fr", "es"];
        const isLocaleInPath = supportedLocales.includes(segments[1]);

        // Get the current route name and translate it to the new language
        const currentRoute = segments[2];
        const translatedRoute = (() => {
            switch (currentRoute) {
                case 'the_agency':
                case 'l_agence':
                case 'la_agencia':
                    return value === 'en' ? 'the_agency' : value === 'fr' ? 'l_agence' : 'la_agencia';
                case 'achievements':
                case 'realisations':
                case 'logros':
                    return value === 'en' ? 'achievements' : value === 'fr' ? 'realisations' : 'logros';
                case 'solutions':
                case 'soluciones':
                    return value === 'en' ? 'solutions' : value === 'fr' ? 'solutions' : 'soluciones';
                case 'contact':
                case 'contacto':
                    return value === 'en' ? 'contact' : value === 'fr' ? 'contact' : 'contacto';
                default:
                    return currentRoute;
            }
        })();

        const newPath = isLocaleInPath
            ? `/${value}/${translatedRoute}`
            : `/${value}${currentPath}`;

        // Force a full page reload when changing language
        window.location.href = newPath;
    };

    return (
        <SelectTransparent value={language} onValueChange={handleLanguageChange} open={open} onOpenChange={setOpen}>
            <SelectTrigger className="hidden md:flex w-20 h-11  items-center justify-center hover:cursor-pointer uppercase p-0 m-0 z-10">
                <Planet height={32} width={32} />
            </SelectTrigger>
            <SelectContent align="center" side="left" className="bg-transparent border-none rounded-none shadow-none w-full z-20">
                <SelectItem value="en" className="w-full">EN</SelectItem>
                <SelectItem value="fr" className="w-full">FR</SelectItem>
                <SelectItem value="es" className="w-full">ES</SelectItem>
            </SelectContent>
        </SelectTransparent>
    );
};

export default LanguageSelector;
