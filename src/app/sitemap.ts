import { MetadataRoute } from "next";
import { projectsData } from "../data/portfolioData";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://ahsan-afzal.web.app";
    const now = new Date();

    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}/`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: `${baseUrl}/about/`,
            lastModified: now,
            changeFrequency: "monthly",
            priority: 0.85,
        },
        {
            url: `${baseUrl}/work/`,
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.9,
        },
    ];

    const projectRoutes: MetadataRoute.Sitemap = projectsData.map((project) => ({
        url: `${baseUrl}/work/${project.slug}/`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.8,
    }));

    return [...staticRoutes, ...projectRoutes];
}

