export default function Hero() {
    return (
        <section className="border-t border-white/40 w-full min-h-[calc(100vh-140px)] flex flex-col justify-between items-center text-center px-4 relative z-10 bg-linear-to-b from-pulse-pink to-white">

            {/* Espace invisible pour équilibrer */}
            <div className="flex-1"></div>

            {/* Conteneur du texte text-center */}
            <div className="flex-none w-full max-w-5xl mx-auto mt-8">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] tracking-tight leading-none uppercase w-full">
                    {/* Lignes Blanches */}
                    <span className="block text-white text-center md:text-left">
                        Creator &
                    </span>
                    <span className="block text-white text-center">
                        Influencer
                    </span>
                    {/* Lignes Roses */}
                    <span className="block text-pulse-pink md:text-right mt-2 md:mt-4">
                        Management
                    </span>
                    <span className="block text-pulse-pink md:text-right">
                        Agency
                    </span>
                </h1>
            </div>

            {/* Flèche d'indication de scroll */}
            <div className="flex-1 flex flex-col justify-end pb-12 items-center gap-1 text-pulse-pink/60 text-[10px] tracking-widest uppercase font-light">
                <span>Select a city</span>
                <span className="animate-bounce text-xs mt-1">↓</span>
            </div>

        </section>
    );
}