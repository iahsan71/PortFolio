import type { Metadata } from "next";
import React from "react";
import { Poppins, Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/scss/style.scss";
import "../assets/scss/editorial-reference.scss";
import ClientShell from "../components/ClientShell";
import { personalInfo } from "../data/portfolioData";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-poppins",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-inter",
    display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-jetbrains",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://ahsan-afzal.web.app"),
    title: {
        default: "Ahsan Afzal | Full Stack AI Developer",
        template: "%s | Ahsan Afzal"
    },
    description: "Full Stack AI Developer based in Pakistan with 3+ years of production experience architecting high-performance web platforms with React, Next.js, Node.js, Express, and MongoDB.",
    keywords: [
        "Ahsan Afzal",
        "Full Stack AI Developer",
        "AI Developer",
        "AI Chatbot Developer",
        "WhatsApp Integration",
        "MCP Server",
        "MERN Stack Developer",
        "Full Stack Developer in Pakistan",
        "Senior React Developer",
        "Next.js Developer",
        "Node.js Backend Engineer",
        "TypeScript Engineer",
        "MongoDB Aggregation Pipelines",
        "REST API Architect",
        "NextPak Agile Solutions"
    ],
    authors: [{ name: "Ahsan Afzal", url: "https://ahsan-afzal.web.app" }],
    creator: "Ahsan Afzal",
    alternates: {
        canonical: "https://ahsan-afzal.web.app/"
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1
        }
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://ahsan-afzal.web.app/",
        siteName: "Ahsan Afzal Portfolio",
        title: "Ahsan Afzal | Full Stack AI Developer",
        description: "Full Stack AI Developer crafting resilient, high-performance web platforms with Next.js, Node.js, and MongoDB.",
        images: [
            {
                url: "/logo512.png",
                width: 512,
                height: 512,
                alt: "Ahsan Afzal — Full Stack AI Developer"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Ahsan Afzal | Full Stack AI Developer",
        description: "Full Stack AI Developer crafting resilient, high-performance web platforms with Next.js, Node.js, and MongoDB.",
        images: ["/logo512.png"]
    }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Person",
            "@id": "https://ahsan-afzal.web.app/#person",
            "name": personalInfo.name,
            "jobTitle": personalInfo.title,
            "worksFor": {
                "@type": "Organization",
                "name": personalInfo.company,
                "url": personalInfo.companyUrl
            },
            "url": "https://ahsan-afzal.web.app",
            "image": "https://ahsan-afzal.web.app/logo512.png",
            "email": personalInfo.email,
            "telephone": personalInfo.phone,
            "address": {
                "@type": "PostalAddress",
                "addressCountry": personalInfo.location
            },
            "description": personalInfo.longBio,
            "sameAs": [
                personalInfo.github,
                personalInfo.linkedin
            ],
            "knowsAbout": [
                "Full-Stack AI Development",
                "AI Chatbot Development",
                "WhatsApp Integrations & Automations",
                "Model Context Protocol (MCP) Servers",
                "Full-Stack Web Development",
                "MERN Stack (MongoDB, Express, React, Node.js)",
                "Next.js 14 App Router",
                "TypeScript",
                "RESTful API Architecture",
                "Real-time WebSockets (Socket.io)",
                "MongoDB Aggregation Pipelines & Compound Indexing",
                "Web Performance Optimization & Technical SEO"
            ]
        },
        {
            "@type": "WebSite",
            "@id": "https://ahsan-afzal.web.app/#website",
            "url": "https://ahsan-afzal.web.app",
            "name": "Ahsan Afzal Portfolio",
            "publisher": {
                "@id": "https://ahsan-afzal.web.app/#person"
            }
        }
    ]
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const gaId = process.env.NEXT_PUBLIC_GA_ID;

    return (
        <html lang="en" className={`${poppins.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
            <head>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body>
                {gaId && (
                    <>
                        <Script
                            src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
                            strategy="afterInteractive"
                        />
                        <Script id="google-analytics" strategy="afterInteractive">
                            {`
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${gaId}');
                            `}
                        </Script>
                    </>
                )}
                <ClientShell>
                    {children}
                </ClientShell>
            </body>
        </html>
    );
}

