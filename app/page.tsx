import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const cities = ["Paris", "New York", "London", "Miami", "Dubaï", "Milan", "Madrid", "Los Angeles"];
  const profiles = ["Talent", "Creators", "Artists", "Celebrity"];

  return (
    <div className="w-full flex flex-col items-center">

      {/* SECTION 1 : HERO SECTION */}
      <section className="w-full text-center pt-12 pb-20 px-4 max-w-5xl mx-auto z-10">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-none uppercase max-w-4xl mx-auto">
          Creator & Influencer
          <span className="block text-pulse-pink md:text-right mt-2">
            Management
          </span>
          <span className="block text-pulse-pink md:text-right">
            Agency
          </span>
        </h1>

        {/* Flèche d'indication de scroll */}
        <div className="mt-16 flex flex-col items-center gap-1 text-white/60 text-[10px] tracking-widest uppercase font-light">
          <span>Select a city</span>
          <span className="animate-bounce text-xs mt-1">↓</span>
        </div>
      </section>

      {/* SECTION 2 : CITIES HUB (CORRIGÉE & ULTRA-RESPONSIVE) */}
      <section className="w-full bg-white text-black py-16 md:py-24 px-6 relative overflow-hidden">

        {/* DISPOSITION MOBILE : Simple, propre et lisible (Masquée sur desktop) */}
        <div className="flex flex-col items-center gap-8 md:hidden w-full max-w-sm mx-auto">
          {/* Le logo repasse au-dessus de manière fluide */}
          <div className="w-48 h-48 rounded-full bg-pulse-pink flex items-center justify-center p-6 text-white text-center shadow-md">
            <Image
              src="/Logo-Pulse-X-agency-bg.png"
              alt="PulseX Logo"
              width={140}
              height={60}
              priority
              className="w-auto h-auto object-contain"
            />
          </div>
          {/* Liste simple centrée pour le confort sur smartphone */}
          <div className="flex flex-col gap-3 text-center">
            {cities.map((city) => (
              <h2 key={`${city}-mobile`} className="text-2xl font-bold tracking-wide uppercase">
                {city}
              </h2>
            ))}
          </div>
        </div>

        {/* DISPOSITION DESKTOP : Ta maquette d'origine (Masquée sur mobile) */}
        <div className="hidden md:flex w-full max-w-5xl mx-auto relative items-center justify-between min-h-125">

          {/* 1. Villes à gauche */}
          <div className="flex flex-col gap-3 z-10 w-1/3 text-left">
            {cities.map((city) => (
              <div key={city} className="group cursor-pointer">
                <h2 className="text-3xl sm:text-4xl font-bold tracking-wide uppercase transition-colors duration-300 group-hover:text-pulse-pink">
                  {city}
                </h2>
              </div>
            ))}
          </div>

          {/* 2. Logo flottant au centre parfait */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-pulse-pink flex items-center justify-center p-8 text-white shadow-lg">
              <Image
                src="/Logo-Pulse-X-agency-bg.png"
                alt="PulseX Logo"
                width={220}
                height={100}
                priority
                className="w-auto h-auto object-contain"
              />
            </div>
          </div>

          {/* 3. Villes miroirs à droite */}
          <div className="flex flex-col gap-3 z-10 w-1/3 text-right">
            {cities.map((city) => (
              <h2 key={`${city}-mirror`} className="text-3xl sm:text-4xl font-bold tracking-wide uppercase text-gray-200/60 select-none">
                {city}
              </h2>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3 : 4 CARDS PROFILS */}
      <section className="w-full bg-linear-to-b from-white via-pulse-mid to-pulse-burgundy py-24 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {profiles.map((profile) => (
            <Link
              key={profile}
              href="/careers" // Redirection directe vers la page Coming Soon
              className="border-2 border-white bg-transparent aspect-4/3 sm:aspect-square flex items-center justify-center p-6 cursor-pointer group hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-widest uppercase text-white transition-transform duration-300 group-hover:scale-105">
                {profile}
              </h3>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}