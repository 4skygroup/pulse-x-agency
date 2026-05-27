import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const glacialIndifference = localFont({
  src: [
    { path: './fonts/GlacialIndifference-Regular.otf', weight: '400', style: 'normal' },
    { path: './fonts/GlacialIndifference-Bold.otf', weight: '700', style: 'normal' },
  ],
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
        <Footer />
      </body>
    </html>
  );
}