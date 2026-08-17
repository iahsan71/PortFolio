export default function sitemap() {
    return [
        {
            url: "https://ahsan-afzal.web.app",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        {
            url: "https://ahsan-afzal.web.app/auth",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
    ];
}
