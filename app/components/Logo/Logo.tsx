import Image from "next/image";

export default function Logo({
  src = "/logo-pulse-x-management.webp",
  alt = "Logo Pulse X Management",
  format = "small",
}: {
  src?: string;
  alt?: string;
  format?: "small" | "wide";
}) {
  // On définit les dimensions de base (Next.js s'en sert pour le ratio d'aspect)
  // Tu pourras ajuster les valeurs du format "wide" selon tes besoins
  const width = format === "small" ? 210 : 400;
  const height = format === "small" ? 75 : 142;

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`object-center object-cover ${format === "small" ? "w-52.5 h-18.75" : "w-auto h-auto"}`}
    />
  );
}