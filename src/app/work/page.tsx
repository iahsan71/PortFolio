import type { Metadata } from "next";
import React from "react";
import WorkView from "../../components/WorkView";
import { personalInfo } from "../../data/portfolioData";

export const metadata: Metadata = {
    title: "All Work & Projects",
    description: "Explore the complete portfolio of full-stack web applications, AI platforms, and real-time architectures engineered by Ahsan Afzal.",
    alternates: {
        canonical: "https://www.ahsanafzal.com/work/"
    },
    openGraph: {
        title: `All Work & Projects | ${personalInfo.name}`,
        description: "Explore the complete portfolio of full-stack web applications, AI platforms, and real-time architectures engineered by Ahsan Afzal.",
        url: "https://www.ahsanafzal.com/work/",
        type: "website",
        images: [
            {
                url: "https://www.ahsanafzal.com/og-image.png",
                width: 1200,
                height: 630,
                alt: "Ahsan Afzal — Portfolio Projects"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: `All Work & Projects | ${personalInfo.name}`,
        description: "Explore the complete portfolio of full-stack web applications, AI platforms, and real-time architectures engineered by Ahsan Afzal.",
        images: ["https://www.ahsanafzal.com/og-image.png"]
    }
};

export default function WorkPage() {
    return <WorkView />;
}
