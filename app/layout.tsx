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

const BASE_URL = "https://pulsexmanagement.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    template: "%s | PulseX Management",
    default: "PulseX Management | Talent & Creator Representation",
  },
  description: "PulseX Management is the talent and creator representation division of Play To Sky.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/logo-pulse-x-management.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "PulseX Management | Talent & Creator",
    description: "PulseX Management is the talent and creator representation division of Play To Sky.",
    url: BASE_URL,
    siteName: "PulseX Agency",
    images: [
      {
        url: "/logo-pulse-x-management.png",
        width: 1200,
        height: 630,
        alt: "PulseX Management Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PulseX Management | Talent & Creator",
    description: "PulseX Management is the talent and creator representation division of Play To Sky.",
    images: ["/logo-pulse-x-management.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PulseX Management",
  alternateName: "Pulse X Management",
  url: BASE_URL,
  logo: `${BASE_URL}/logo-pulse-x-management.png`,
  description: "PulseX Management is the talent and creator representation division of Play To Sky.",
  parentOrganization: {
    "@type": "Organization",
    name: "Play To Sky Group",
    url: "https://playtosky.com",
  },
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Business Inquiries",
    url: `${BASE_URL}/contact`,
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "PulseX Management",
  url: BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${BASE_URL}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
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