import Image from "next/image";
import Link from "next/link";
import Hero from "./components/Hero";

export default function Home() {
  const cities = ["Paris", "New York", "London", "Miami", "Dubaï", "Milan", "Madrid", "Los Angeles"];
  const profiles = ["Talent", "Creators", "Artists", "Celebrity"];

  return (
    <div className="w-full flex flex-col items-center">

      {/* SECTION 1 : HERO SECTION CORRIGÉE */}
      <Hero/>

      {/* SECTION 2 : CITIES HUB (ULTRA-RESPONSIVE & UPDATED COLOSSAL FONT SIZE) */}
      <section className="w-full bg-white text-black py-16 md:py-24 px-6 relative overflow-hidden">

        {/* DISPOSITION MOBILE : Simple, propre et lisible (Masquée sur desktop) */}
        <div className="flex flex-col items-center gap-8 md:hidden w-full max-w-sm mx-auto">
          {/* Le logo repasse au-dessus de manière fluide */}
          <div className="w-48 h-48 rounded-full bg-pulse-pink flex items-center justify-center p-6 text-white text-center shadow-md">
            <Image
              src="/Pulse X agency bg.png"
              alt="PulseX Logo"
              width={140}
              height={60}
              priority
              className="w-auto h-auto object-contain"
            />
          </div>
          {/* Taille de police augmentée pour mobile */}
          <div className="flex flex-col gap-3 text-center">
            {cities.map((city) => (
              <h2 key={`${city}-mobile`} className="text-4xl font-bold tracking-wide uppercase leading-none">
                {city}
              </h2>
            ))}
          </div>
        </div>

        {/* DISPOSITION DESKTOP : Ta maquette d'origine (Masquée sur mobile) */}
        <div className="hidden md:flex w-full max-w-6xl mx-auto relative items-center justify-between min-h-175">

          {/* 1. Villes à gauche avec TAILLE COLOSSALE */}
          <div className="flex flex-col gap-3 z-10 w-1/3 text-left">
            {cities.map((city) => (
              <div key={city} className="group cursor-pointer">
                <h2 className="text-5xl lg:text-[8rem] font-bold tracking-wide uppercase transition-colors duration-300 group-hover:text-pulse-pink leading-none">
                  {city}
                </h2>
              </div>
            ))}
          </div>

          {/* 2. Logo flottant au centre parfait */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
            <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full bg-pulse-pink flex items-center justify-center p-8 text-white shadow-lg relative">
              <Image
                src="/Pulse X agency bg.png"
                alt="PulseX Logo"
                width={220}
                height={100}
                priority
                className="w-auto h-auto object-contain"
              />
            </div>
          </div>

          {/* 3. Villes miroirs à droite avec TAILLE COLOSSALE et couleur claire */}
          <div className="flex flex-col gap-3 z-10 w-1/3 text-right">
            {cities.map((city) => (
              <h2 key={`${city}-mirror`} className="text-5xl lg:text-[8rem] tracking-wide uppercase text-gray-200/60 font-light select-none leading-none">
                {city}
              </h2>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 3 : 4 CARDS PROFILS with Link cards (retaining previous logic) */}
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