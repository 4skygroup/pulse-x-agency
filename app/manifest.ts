import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "PulseX Management",
    short_name: "PulseX",
    description:
      "PulseX Management is the talent and creator representation division of Play To Sky.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#e75480",
    icons: [
      {
        src: "/logo-pulse-x-management.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
