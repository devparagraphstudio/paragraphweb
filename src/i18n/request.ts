import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { hasLocale } from 'next-intl';

export default getRequestConfig(async ({ locale }) => {
  const selectedLocale = hasLocale(routing.locales, locale)
    ? locale
    : routing.defaultLocale;

  const messages = (await import(`../../messages/${selectedLocale}.json`)).default;

  return {
    locale: selectedLocale,
    messages
  };
});
