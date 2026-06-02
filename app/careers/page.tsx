import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Careers",
    description: "Join the PulseX Management team. Explore career opportunities in talent management, digital marketing, and content strategy within the Play To Sky Group.",
    alternates: {
        canonical: "/careers",
    },
    openGraph: {
        title: "Careers | PulseX Management",
        description: "Join the PulseX Management team. Explore career opportunities in talent management, digital marketing, and content strategy within the Play To Sky Group.",
        url: "/careers",
    },
    twitter: {
        title: "Careers | PulseX Management",
        description: "Join the PulseX Management team. Explore career opportunities in talent management, digital marketing, and content strategy within the Play To Sky Group.",
    },
};

const careersSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Careers at PulseX Management",
    description: "Join the PulseX Management team. Explore career opportunities in talent management, digital marketing, and content strategy.",
    url: "https://pulsexmanagement.com/careers",
    breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://pulsexmanagement.com" },
            { "@type": "ListItem", position: 2, name: "Careers", item: "https://pulsexmanagement.com/careers" },
        ],
    },
};

export default function Careers() {
    return (
        <div className="w-full min-h-[calc(100vh-100px)] border-t border-b border-white flex flex-col items-center justify-center bg-[linear-gradient(to_bottom,var(--tw-gradient-from),white_40%,white_72%,var(--tw-gradient-to))] from-pulse-pink to-pulse-pink">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(careersSchema) }}
            />
            {/* 2. Le texte ultra-clean (sans ombre, juste la couleur de la maquette) */}
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-light tracking-wide text-pulse-pink">
                Coming soon...
            </h1>

            {/* Bouton de retour épuré et proportionné */}
            <div className="mt-10">
                <Link
                    href="/"
                    className="inline-block border-2 border-pulse-pink text-pulse-pink font-bold tracking-widest uppercase text-xs sm:text-sm px-8 py-3 rounded-full hover:bg-pulse-pink hover:text-white transition-all duration-300 shadow-sm"
                >
                    Back to Home
                </Link>
            </div>

        </div>
    );
}