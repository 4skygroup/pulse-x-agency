import Image from "next/image";

export default function CitiesHub() {
    const cities = ["Paris", "New York", "London", "Miami", "Dubaï", "Milan", "Madrid", "Los Angeles"];

    return (
        <section className="w-full bg-white text-black py-16 md:py-24 px-6 relative overflow-hidden">

            {/* DISPOSITION MOBILE */}
            <div className="flex flex-col items-center gap-8 md:hidden w-full max-w-sm mx-auto relative z-10">
                <div className="w-48 h-48 rounded-full bg-pulse-pink flex items-center justify-center p-6 text-white text-center shadow-md">
                    <Image
                        /* On remplace les espaces par %20 pour forcer Next.js à lire l'image correctement */
                        src="/Logo-Pulse-x-management.png"
                        alt="PulseX Logo"
                        width={140}
                        height={60}
                        priority
                        className="w-auto h-auto object-contain"
                    />
                </div>
                <div className="flex flex-col gap-4 text-center">
                    {cities.map((city) => (
                        <h2 key={`${city}-mobile`} className="text-4xl tracking-wide uppercase leading-none">
                            {city}
                        </h2>
                    ))}
                </div>
            </div>

            {/* DISPOSITION DESKTOP */}
            <div className="hidden md:flex w-full max-w-6xl mx-auto relative items-center justify-between min-h-150 z-10">

                {/* 1. Villes à gauche (Tailles ajustées et espacées) */}
                <div className="flex flex-col gap-5 z-10 w-2/5 text-left">
                    {cities.map((city) => (
                        <div key={city} className="group cursor-pointer">
                            <h2 className="text-4xl lg:text-[4rem] tracking-wide uppercase transition-colors duration-300 group-hover:text-pulse-pink leading-none">
                                {city}
                            </h2>
                        </div>
                    ))}
                </div>

                {/* 2. Logo flottant au centre */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                    <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-pulse-pink flex items-center justify-center p-8 text-white shadow-lg">
                        <Image
                            src="/Logo-Pulse-x-agency-removebg.png"
                            alt="Logo Pulse X Management"
                            width={220}
                            height={100}
                            priority
                            className="w-auto h-auto object-contain"
                        />
                    </div>
                </div>

                {/* 3. Villes miroirs à droite */}
                <div className="flex flex-col gap-5 z-10 w-2/5 text-right">
                    {cities.map((city) => (
                        <h2 key={`${city}-mirror`} className="text-4xl lg:text-[4rem] tracking-wide uppercase text-gray-200/60 select-none leading-none">
                            {city}
                        </h2>
                    ))}
                </div>

            </div>
        </section>
    );
}