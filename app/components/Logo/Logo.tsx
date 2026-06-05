import Image from "next/image";

export default function Logo({
  src = "/logo-pulse-x-management.png",
  alt = "Logo Pulse X Management",
  format = "small",
}: {
  src?: string;
  alt?: string;
  format?: "small" | "wide";
}) {
  return (
    <Image
      src={src}
      alt={alt}
      className={`object-center object-cover ${format === "small" ? "w-52.5 h-18.75" : ""}`}
    />
  );
}
