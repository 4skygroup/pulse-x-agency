import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Careers",
    description: "Join the PulseX Management team. Explore career opportunities in talent management, digital marketing, and content strategy within the Play To Sky Group.",
};

export default function Careers() {
    return (
        <div className="flex-1 flex flex-col items-center justify-center min-h-[65vh] px-4 text-center bg-linear-to-b from-pulse-pink via-white to-white text-black">

            {/* Grand titre "Coming soon..." */}
            <h1 className="text-4xl text-nowrap sm:text-7xl text-pulse-pink tracking-wide uppercase drop-shadow-sm">
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