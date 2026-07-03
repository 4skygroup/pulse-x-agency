import Link from "next/link";

export default function ProfilesCard() {
  const profiles = ["Talent", "Creators", "Artists", "Celebrity"];

  return (
    <section className="w-full bg-linear-to-b from-pulse-pink to-pulse-burgundy py-24 px-4 border-b border-white flex flex-col items-center">
      {/* La grille des profils */}
      <div className="max-w-2xl mx-auto w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
        {profiles.map((profile) => (
          <Link
            key={profile}
            href="/careers"
            className="border-2 border-white bg-transparent aspect-4/3 sm:aspect-square flex items-center justify-center p-4 cursor-pointer group hover:bg-white/10 transition-all duration-300"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl tracking-widest uppercase text-white transition-transform duration-300 group-hover:scale-105">
              {profile}
            </h3>
          </Link>
        ))}
      </div>

      {/* TÂCHE 1 : Le nouveau bouton Postuler */}
      <div className="mt-16">
        <Link
          href="/contact"
          className="inline-block bg-white text-pulse-burgundy border-2 border-white font-bold tracking-widest uppercase text-sm px-10 py-4 rounded-full hover:bg-transparent hover:text-white transition-all duration-300 shadow-lg"
        >
          Postuler en tant qu&apos;artiste
        </Link>
      </div>
    </section>
  );
}
