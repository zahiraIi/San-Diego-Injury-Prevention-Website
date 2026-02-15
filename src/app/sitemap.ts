import type { MetadataRoute } from "next";

const BASE_URL = "https://sdipp.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/events",
    "/gallery",
    "/apply",
    "/contact",
    "/committees",
    "/staff",
    "/members",
    "/recognitions",
    "/more",
  ];

  return routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/events" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
