import Link from "next/link";

export default function ProfilesCard() {
  const profiles = ["Talent", "Creators", "Artists", "Celebrity"];

  return (
    /* SECTION 3 : 4 CARDS PROFILS with Link cards (retaining previous logic) */
    <section className="w-full bg-linear-to-b from-pulse-pink to-pulse-burgundy py-24 px-2 border-b border-white">
      <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
        {profiles.map((profile) => (
          <Link
            key={profile}
            href="/careers" // Redirection directe vers la page Coming Soon
            className="border-2 border-white bg-transparent aspect-4/3 sm:aspect-square flex items-center justify-center p-4 cursor-pointer group hover:bg-white/10 transition-all duration-300"
          >
            <h3 className="text-1xl sm:text-2xl md:text-3xl tracking-widest uppercase text-white transition-transform duration-300 group-hover:scale-105">
              {profile}
            </h3>
          </Link>
        ))}
      </div>
      <button>Postuler en tant qu’artiste</button>
    </section>
  );
}
