import GlobeMap from "@/app/components/Map/GlobeMap";
import { Metadata } from "next";
import Link from "next/link";

// 1. SEO in English
export const metadata: Metadata = {
  title: "Our Locations",
  description:
    "Discover the global network of Pulse X Management. Our worldwide presence connects top creators with the most innovative brands.",
  alternates: {
    canonical: "/locations",
  },
  openGraph: {
    title: "Our Locations | PulseX Management",
    description:
      "Discover the global network of Pulse X Management. Our worldwide presence connects top creators with the most innovative brands.",
    url: "/locations",
  },
  twitter: {
    title: "Our Locations | PulseX Management",
    description:
      "Discover the global network of Pulse X Management. Our worldwide presence connects top creators with the most innovative brands.",
  },
};

// 2. Schema JSON-LD in English
const locationsSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Locations at PulseX Management",
  description: "Discover the global network of Pulse X Management.",
  url: "https://pulsexmanagement.com/locations",
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://pulsexmanagement.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Locations",
        item: "https://pulsexmanagement.com/locations",
      },
    ],
  },
};

export default function LocationsPage() {
  return (
    <div className="w-full min-h-[calc(100vh-100px)] bg-black text-white flex flex-col items-center">
      {/* JSON-LD injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationsSchema) }}
      />

      {/* Header section with pulse-pink glow */}
      <section className="flex flex-col items-center justify-center gap-y-8 md:gap-y-12 py-12 md:py-20 px-4 w-full bg-[radial-gradient(circle_at_top_left,rgba(239,90,152,0.15)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(239,90,152,0.1)_0%,transparent_45%)]">
        {/* Badge */}
        <span className="uppercase text-pulse-pink border border-pulse-pink/30 bg-pulse-pink/10 py-2 px-6 rounded-full text-xs md:text-sm font-bold tracking-widest">
          Global Network
        </span>

        <h1 className="text-center font-bold max-w-4xl text-3xl md:text-5xl lg:text-6xl tracking-wide">
          A global presence for boundless talent.
        </h1>

        <p className="text-white/60 text-center text-base md:text-lg max-w-2xl font-light">
          Pulse X Management operates internationally to connect the best
          creators with the most innovative brands across the globe.
        </p>
      </section>

      {/* 3D Globe */}
      <section className="w-full max-w-6xl mx-auto p-4">
        <GlobeMap />
      </section>

      {/* Final Call to Action */}
      <section className="w-full flex justify-center items-center p-4 md:p-5 my-10">
        <div className="max-lg:w-full lg:w-[calc(100%-20px)] max-w-7xl bg-white flex flex-col justify-center items-center py-12 md:py-20 px-5 gap-y-6 md:gap-y-8 rounded-[40px]">
          <h2 className="font-bold text-center text-black text-2xl md:text-4xl tracking-tight">
            Ready to take your digital empire global?
          </h2>

          <Link
            href="/contact"
            className="group text-sm md:text-base py-4 md:py-5 px-8 md:px-10 bg-black text-white hover:bg-pulse-pink transition-colors duration-300 w-fit rounded-full flex justify-center items-center gap-3 font-semibold shadow-lg"
          >
            Contact our team
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform group-hover:translate-x-1 transition-transform duration-300"
            >
              <path
                d="M1.4 15L0 13.6L11.6 2H5V0H15V10H13V3.4L1.4 15Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
