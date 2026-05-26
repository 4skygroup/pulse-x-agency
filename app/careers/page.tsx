import Link from "next/link";

export default function Careers() {
    return (
        <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
            {/* Grand titre "Coming soon..." fidèle à la maquette */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-pulse-pink tracking-wide animate-pulse">
                Coming soon...
            </h1>
            <Link
                href="/" // Redirection directe vers la page Home
                className="border-2 border-white bg-transparent aspect-4/3 sm:aspect-square flex items-center justify-center p-6 cursor-pointer group hover:bg-white/10 transition-all duration-300"
            >
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest uppercase text-white transition-transform duration-300 group-hover:scale-105">
                    Back to Home
                </h3>
            </Link>
        </div>
    );
}