import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/", // Bloque l'indexation de tes potentielles routes d'API
    },
    sitemap: "https://pulse-x-agency.vercel.app/sitemap.xml",
  };
}
