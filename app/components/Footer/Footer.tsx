import type { FooterProp } from "@/types/FooterProp";
import { entityList } from "@/utils/constants/entity";
import { mediaList } from "@/utils/constants/media";
import Logo from "../Logo/Logo";
import IconsList from "./IconsList";
import ItemsList from "./ItemsList";

export default function Footer({
  policy,
  services,
  entities = entityList,
  media = mediaList,
  entityName = "Pulse X Management",
  color = "bg-linear-to-b from-pulse-pink to-pulse-burgundy",
}: FooterProp) {
  return (
    <footer className={`w-full text-white pt-16 pb-8 px-6 ${color}`}>
      <div className="max-w-6xl mx-auto flex flex-col items-center">

        {/* LOGO (Centré en haut) */}
        <div className="mb-12">
          <Logo />
        </div>

        {/* GRILLE RESPONSIVE : 1 col (Mobile) -> 2 cols (Tablette) -> 4 cols (Desktop) */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-white/20">

          <div className="flex flex-col gap-6 items-center sm:items-start">
            <h2 className="text-t3 font-bold uppercase tracking-wider">Politique</h2>
            <ul className="flex flex-col gap-4 items-center sm:items-start text-white/80 font-light">
              <ItemsList items={policy} />
            </ul>
          </div>

          <div className="flex flex-col gap-6 items-center sm:items-start">
            <h2 className="text-t3 font-bold uppercase tracking-wider">Services</h2>
            <ul className="flex flex-col gap-4 items-center sm:items-start text-white/80 font-light">
              <ItemsList items={services} />
            </ul>
          </div>

          <div className="flex flex-col gap-6 items-center sm:items-start">
            <h2 className="text-t3 font-bold uppercase tracking-wider">Nos entités</h2>
            <ul className="flex flex-col gap-4 items-center sm:items-start text-white/80 font-light">
              <ItemsList items={entities} />
            </ul>
          </div>

          <div className="flex flex-col gap-6 items-center sm:items-start">
            <h2 className="text-t3 font-bold uppercase tracking-wider text-center sm:text-left">
              Nos réseaux
            </h2>
            <ul className="flex gap-6">
              <IconsList icons={media} />
            </ul>
          </div>

        </div>

        {/* COPYRIGHT */}
        <p className="text-t3 font-light text-white/60 text-center mt-8 tracking-widest">
          © 2026 {entityName} - Une entité Play To Sky Group
        </p>

      </div>
    </footer>
  );
}