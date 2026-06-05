import Hero from "./components/Hero";
import dynamic from "next/dynamic";

// 1. On remplace les imports classiques par des imports dynamiques pour ce qui est "en bas" de la page
const CitiesHub = dynamic(() => import("./components/CitiesHub"), {
  loading: () => <div className="h-64 w-full animate-pulse bg-gray-200" /> // Un bloc gris qui clignote en attendant
}); const ProfileCard = dynamic(() => import("./components/ProfileCard"));


export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">

      {/* 2. Le Hero se charge instantanément avec la page (zéro délai pour le LCP) */}
      <Hero />

      {/* 3. Next.js va télécharger le code de ces composants uniquement quand le navigateur aura fini d'afficher le Hero */}
      <CitiesHub />

      <ProfileCard />

    </div>
  );
}