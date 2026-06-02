import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
    ],
    sitemap: [
      "https://pulsexmanagement.com/sitemap.xml",
      "https://pulsexmanagement.com/sitemap-images.xml",
    ],
    host: "https://pulsexmanagement.com",
  };
}
