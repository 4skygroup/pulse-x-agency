import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer/Footer';
import { policy } from "@/utils/constants/policy";
import { services } from "@/utils/constants/service";

const glacialIndifference = localFont({
  src: [
    {
      path: "../public/fonts/GlacialIndifference-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/GlacialIndifference-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-glacial",
});

export const metadata: Metadata = {
  title: {
    template: "%s | PulseX Management",
    default: "PulseX Management | Talent & Creator Representation", // Utilisé sur la Home
  },
  description: "PulseX Management is the talent and creator representation division of Play To Sky.",

  // 2. OPEN GRAPH (Réseaux Sociaux & iMessage/WhatsApp)
  openGraph: {
    title: "PulseX Management | Talent & Creator",
    description: "PulseX Management is the talent and creator representation division of Play To Sky.",
    url: "https://pulse-x-agency.vercel.app", // à Changer en cas de déploiement
    siteName: "PulseX Agency",
    images: [
      {
        url: "/logo-pulse-x-management.png", // Ton logo qui fonctionne enfin !
        width: 1200, // Format idéal pour les cartes LinkedIn/Twitter
        height: 630,
        alt: "PulseX Management Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Fond en dégradé rose vers blanc comme sur les maquettes */}
      <body className={`${glacialIndifference.className} bg-linear-to-b from-pulse-pink via-white to-white text-black min-h-screen flex flex-col antialiased`}>
        <Header />
        <main className="grow flex flex-col w-full">
          {children}
        </main>
        <Footer policy={policy} services={services} />
      </body>
    </html>
  );
}