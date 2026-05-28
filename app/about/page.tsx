import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us",
    description: "Discover the vision behind Pulse X Management and how we build sustainable digital empires.",
};

export default function About() {
    return (
        <div className="w-full min-h-screen border-t border-b border-white flex flex-col items-center px-4 py-12 md:py-20 bg-linear-to-b from-pulse-pink to-pulse-burgundy text-black">

            {/* Grand conteneur de la maquette avec effet de transparence et coins très arrondis */}
            <div className="max-w-4xl w-full mx-auto bg-white/40 backdrop-blur-md rounded-[2.5rem] p-8 md:p-16 shadow-sm border border-white/20 mt-8">

                {/* Titre principal centré */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl text-center uppercase tracking-wide mb-12 text-white drop-shadow-sm">
                    About us
                </h1>

                <div className="flex flex-col gap-10 text-gray-900 font-light max-w-3xl mx-auto">

                    {/* Section 1 : Who We Are ? */}
                    <div className="flex flex-col gap-3">
                        <h2 className="text-lg md:text-xl uppercase tracking-wider text-white">
                            Who We Are ?
                        </h2>
                        <p className="leading-relaxed text-sm md:text-base text-justify text-white">
                            Pulse X Management is the talent and user-generated content (UGC) management agency owned by the Play to Sky Group.
                            Born from the belief that talent deserves to be supported with high standards and strategic vision,
                            Pulse X has established itself as the go-to partner for anyone who treats their image as a valuable asset.
                        </p>
                    </div>

                    {/* Section 2 : What We Do ? */}
                    <div className="flex flex-col gap-3">
                        <h2 className="text-lg md:text-xl uppercase tracking-wider text-white">
                            What We Do ?
                        </h2>
                        <p className="leading-relaxed text-sm md:text-base text-justify text-white">
                            We support actors, celebrities, artists, influencers, content creators, and public figures in the comprehensive and strategic management of their image.
                            From building their digital identity to negotiating their contracts, through content production and brand awareness development,
                            we are involved at every stage of their career with a 360° approach. Our role goes beyond managing a schedule or signing deals.
                            We work with each talent to define what they want to embody and how they want to be perceived, and we translate that vision into
                            concrete, measurable, and sustainable opportunities.
                        </p>
                    </div>

                </div>
            </div>

        </div>
    );
}