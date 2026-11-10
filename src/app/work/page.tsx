import type { Metadata } from "next";
import React from "react";
import WorkView from "../../components/WorkView";
import { personalInfo } from "../../data/portfolioData";

export const metadata: Metadata = {
    title: "All Work & Projects",
    description: "Explore the complete portfolio of full-stack web applications, AI platforms, and real-time architectures engineered by Ahsan Afzal.",
    alternates: {
        canonical: "https://ahsan-afzal.web.app/work/"
    },
    openGraph: {
        title: `All Work & Projects | ${personalInfo.name}`,
        description: "Explore the complete portfolio of full-stack web applications, AI platforms, and real-time architectures engineered by Ahsan Afzal.",
        url: "https://ahsan-afzal.web.app/work/",
        type: "website",
        images: [
            {
                url: "/logo512.png",
                width: 512,
                height: 512,
                alt: "Ahsan Afzal — Portfolio Projects"
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: `All Work & Projects | ${personalInfo.name}`,
        description: "Explore the complete portfolio of full-stack web applications, AI platforms, and real-time architectures engineered by Ahsan Afzal.",
        images: ["/logo512.png"]
    }
};

export default function WorkPage() {
    return <WorkView />;
}
