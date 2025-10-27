'use client';

import { ReactNode, useEffect, useState } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import Cookies from 'js-cookie';

type Locale = 'en' | 'fr' | 'es';

interface Messages {
    [key: string]: Record<string, unknown>;
}

interface ClientLocaleProviderProps {
    children: ReactNode;
    messages: Messages;
}

export function ClientLocaleProvider({ children, messages }: ClientLocaleProviderProps) {
    const [locale, setLocale] = useState<Locale>('en');

    useEffect(() => {
        const cookieLocale = Cookies.get('locale') as Locale;
        if (cookieLocale && ['en', 'fr', 'es'].includes(cookieLocale)) {
            setLocale(cookieLocale);
        }
    }, []);

    return (
        <NextIntlClientProvider locale={locale} messages={messages[locale]}>
            {children}
        </NextIntlClientProvider>
    );
} 