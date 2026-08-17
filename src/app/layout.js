import { Poppins } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/scss/style.scss";
import { Providers } from "./providers";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"],
    variable: "--font-poppins",
    display: "swap",
});

export const metadata = {
    metadataBase: new URL("https://ahsan-afzal.web.app"),
    title: "Ahsan Afzal | MERN Stack Developer & Full Stack Engineer",
    description: "Ahsan Afzal is a results-driven MERN Stack Developer specializing in building high-performance full-stack web applications with React, Next.js, Node.js, Express, and MongoDB. Explore projects, experience, and skills.",
    keywords: [
        "Ahsan Afzal",
        "MERN Stack Developer",
        "Full Stack Developer",
        "React Developer",
        "Next.js Specialist",
        "Node.js Engineer",
        "Express.js Developer",
        "NextPak Agile Solutions",
        "Web Developer Pakistan"
    ],
    authors: [{ name: "Ahsan Afzal" }],
    robots: {
        index: true,
        follow: true,
    },
    openGraph: {
        type: "website",
        url: "https://ahsan-afzal.web.app/",
        title: "Ahsan Afzal | MERN Stack Developer & Full Stack Engineer",
        description: "Ahsan Afzal is a results-driven MERN Stack Developer specializing in building high-performance full-stack web applications with React, Next.js, Node.js, Express, and MongoDB.",
        images: [
            {
                url: "/logo512.png",
                width: 512,
                height: 512,
                alt: "Ahsan Afzal Logo",
            }
        ]
    },
    twitter: {
        card: "summary_large_image",
        title: "Ahsan Afzal | MERN Stack Developer & Full Stack Engineer",
        description: "Ahsan Afzal is a results-driven MERN Stack Developer specializing in building high-performance full-stack web applications with React, Next.js, Node.js, Express, and MongoDB.",
        images: ["/logo512.png"],
    }
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ahsan Afzal",
    "jobTitle": "MERN Stack Developer & Full Stack Engineer",
    "url": "https://ahsan-afzal.web.app",
    "image": "https://ahsan-afzal.web.app/logo512.png",
    "description": "Ahsan Afzal is a results-driven MERN Stack Developer specializing in building high-performance full-stack web applications with React, Next.js, Node.js, Express, and MongoDB.",
    "sameAs": [
        "https://github.com/iahsan71"
    ]
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={poppins.variable}>
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            </head>
            <body>
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    );
}
