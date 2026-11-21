import { MetadataRoute } from "next";
import { projectsData } from "../data/portfolioData";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://www.ahsanafzal.com";
    // Consistent date to ensure search engines recognize accurate change signals
    const siteLastModified = new Date("2026-11-10T00:00:00.000Z");

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/`,
            lastModified: siteLastModified,
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/about/`,
            lastModified: siteLastModified,
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: `${baseUrl}/work/`,
            lastModified: siteLastModified,
            changeFrequency: "weekly",
            priority: 0.9,
        },
        {
            url: `${baseUrl}/games/`,
            lastModified: siteLastModified,
            changeFrequency: "weekly",
            priority: 0.85,
        },
        {
            url: `${baseUrl}/games/zip/`,
            lastModified: siteLastModified,
            changeFrequency: "monthly",
            priority: 0.75,
        },
        {
            url: `${baseUrl}/games/signal/`,
            lastModified: siteLastModified,
            changeFrequency: "monthly",
            priority: 0.75,
        },
        {
            url: `${baseUrl}/games/flood/`,
            lastModified: siteLastModified,
            changeFrequency: "monthly",
            priority: 0.75,
        },
        {
            url: `${baseUrl}/games/merge/`,
            lastModified: siteLastModified,
            changeFrequency: "monthly",
            priority: 0.75,
        },
        {
            url: `${baseUrl}/games/mines/`,
            lastModified: siteLastModified,
            changeFrequency: "monthly",
            priority: 0.75,
        },
    ];

    const projectRoutes: MetadataRoute.Sitemap = projectsData.map((project) => ({
        url: `${baseUrl}/work/${project.slug}/`,
        lastModified: siteLastModified,
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    return [...staticRoutes, ...projectRoutes];
}

