import { ReactNode } from 'react';
import { BackgroundAnimationProvider } from '@/lib/context/BackgroundAnimationContext';
import { Toaster } from '@/components/ui';
import { Footer, Navbar } from '@/components';
import { ClientLocaleProvider } from '@/components/ClientLocaleProvider';
import { RouteLoader } from '@/components';
import './globals.css';
import { Metadata } from 'next';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: "Paragraph Studio",
  // description:
  //   "Aivana ofrece servicios de inteligencia artificial y desarrollo web en Colombia. Creamos soluciones digitales modernas, rápidas y seguras para impulsar tu negocio.",
  // keywords: [
  //   "inteligencia artificial Medellín",
  //   "Inteligencia artificial Colombia",
  //   "desarrollo web Medellín",
  //   "desarrollo web Colombia",
  //   "AI",
  //   "Aivana",
  //   "soluciones digitales",
  //   "automatización empresarial",
  //   "sitios web modernos",
  //   "automatización de procesos",
  //   "automatización de tareas",
  //   "automatización de negocios",
  //   "automatización de empresas",
  //   "automatización de empresas",

  // ],
  authors: [{ name: "Paragraph Studio" }],
  creator: "Paragraph Studio",
  publisher: "Aivana",
  openGraph: {
    title: "Paragraph Studio",
    description:
      "Servicios de inteligencia artificial y desarrollo web en Colombia. Innovación digital para tu empresa.",
    // url: "https://www.aivana.com", // tu dominio personalizado
    siteName: "Paragraph Studio",
    images: [
      {
        url: "/images/logo.svg", // pon un logo o imagen en public/
        width: 1200,
        height: 630,
        alt: "Paragraph Studio",
      },
    ],
    // locale: "es_CO",
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Aivana | Soluciones en IA y Desarrollo Web",
  //   description:
  //     "Servicios de inteligencia artificial y desarrollo web en Medellín.",
  //   creator: "@aivana", // si creas Twitter/X para tu marca
  //   images: ["/aivana-og.png"],
  // },
  // robots: {
  //   index: true,
  //   follow: true,
  //   googleBot: {
  //     index: true,
  //     follow: true,
  //     "max-snippet": -1,
  //     "max-image-preview": "large",
  //     "max-video-preview": -1,
  //   },
  // },
  // metadataBase: new URL("https://www.aivana.com"),
  // alternates: {
  //   canonical: "https://www.aivana.com",
  // },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
    other: {
      rel: "icon",
      url: "/favicon.ico",
    },
  },
};

export default async function Layout({ children }: { children: ReactNode }) {
  const enMessages = (await import('../../messages/en.json')).default;
  const frMessages = (await import('../../messages/fr.json')).default;
  const esMessages = (await import('../../messages/es.json')).default;

  const messages = {
    en: enMessages,
    fr: frMessages,
    es: esMessages,
  };

  return (
    <html lang="en">
      <body className={` bg-white antialiased min-w-[320px]`}>
        <ClientLocaleProvider messages={messages}>
          <BackgroundAnimationProvider>
            <RouteLoader />
            <Navbar />
            {children}
            <Footer />
            <Toaster />
          </BackgroundAnimationProvider>
        </ClientLocaleProvider>
      </body>
    </html>
  );
}
