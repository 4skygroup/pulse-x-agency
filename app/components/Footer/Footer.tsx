import type { FooterProp } from "@/types/FooterProp";
import { entityList } from "@/utils/constants/entity";
import { mediaList } from "@/utils/constants/media";
import Logo from "../Logo/Logo";
import IconsList from "./IconsList";
import ItemsList from "./ItemsList";
import Image from "next/image";

export default function Footer({
  policy,
  services,
  entities = entityList,
  media = mediaList,
  color = "bg-linear-to-b from-pulse-footer to-pulse-burgundy",
}: FooterProp) {
  return (
    <footer className={`w-full text-white pt-16 pb-8 px-6 ${color}`}>
      <div className="max-w-6xl mx-auto flex flex-col items-center">

        {/* LOGO (Centré en haut) */}
        <div className="mb-12">
          <Logo />
        </div>

        {/* GRILLE RESPONSIVE : 1 col (Mobile) -> 2 cols (Tablette) -> 4 cols (Desktop) */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12">

          <div className="flex flex-col gap-6 items-center sm:items-start">
            <h2 className="text-t3 font-bold uppercase tracking-wider">Politics</h2>
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
            <h2 className="text-t3 font-bold uppercase tracking-wider">Our Entities</h2>
            <ul className="flex flex-col gap-4 items-center sm:items-start text-white/80 font-light">
              <ItemsList items={entities} />
            </ul>
          </div>

          <div className="flex flex-col gap-6 items-center sm:items-start">
            <h2 className="text-t3 font-bold uppercase tracking-wider text-center sm:text-left">
              Our Socials
            </h2>
            <ul className="flex gap-6">
              <IconsList icons={media} />
            </ul>
          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="flex flex-wrap justify-center items-center gap-3 text-t3 font-light text-white/60 mt-8 tracking-widest">
          <span>created by</span>
          <Image src="/visuance.png" alt="Visuance" width={100} height={24} className="h-5 w-auto object-contain" />
          <span>&</span>
          <Image src="/play-to-sky.png" alt="Play to Sky" width={100} height={24} className="h-5 w-auto object-contain" />
        </div>
      </div>
    </footer>
  );
}