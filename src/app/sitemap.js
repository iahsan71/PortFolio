export default function sitemap() {
    return [
        {
            url: "https://portfolio-aahsan.web.app",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: "https://portfolio-aahsan.web.app/auth",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
    ];
}
