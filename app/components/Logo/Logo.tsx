export default function Logo({
  src = "/Logo-Pulse-X-agency-removebg.png",
  alt = "Snackly logo",
  format = "small",
}: {
  src?: string;
  alt?: string;
  format?: "small" | "wide";
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={`object-center object-cover ${format === "small" ? "w-52.5 h-18.75" : ""}`}
    />
  );
}
