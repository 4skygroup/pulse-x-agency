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
  title: 'PulseX Agency | Talent & Creator Representation',
  description: 'PulseX Agency is the talent and creator representation division of Play To Sky.',
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