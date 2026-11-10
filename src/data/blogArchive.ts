import { Article } from "../types/portfolio";

/**
 * Archived technical articles and field guides.
 * Preserved for future blog re-introduction without rewriting data models.
 */
export const blogArchiveData: Article[] = [
    {
        slug: "mastering-mongodb-aggregation-pipelines",
        title: "Mastering MongoDB Aggregation Pipelines in Production MERN Apps",
        category: "Backend & Database",
        date: "February 2026",
        readTime: "7 min read",
        summary: "A practical guide to structuring $lookup, $facet, and $unwind stages for maximum performance without choking your Node.js event loop.",
        coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
        tags: ["MongoDB", "Node.js", "Performance", "Databases"],
        content: `
## Why standard Mongoose queries fall short

When building enterprise applications like NextAssist AI, simple find() queries and in-memory JavaScript mapping quickly collapse under thousands of concurrent records. 

Moving computational load into MongoDB's native aggregation pipeline allows the database engine to utilize indexes, parallelize filtering, and return lean, optimized projections straight to your Express controllers.

### 1. Optimize stage ordering

Always filter as early as possible. Placing $match and $project at the very start of your pipeline ensures subsequent stages operate on the smallest possible dataset.
        `
    },
    {
        slug: "architecting-realtime-apps-nextjs-socketio",
        title: "Architecting Real-Time Web Apps with Next.js and Socket.io",
        category: "Full-Stack Architecture",
        date: "January 2026",
        readTime: "6 min read",
        summary: "How we decoupled WebSocket connections, handled sticky sessions, and ensured instant message delivery across Next.js and Node.js microservices.",
        coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
        tags: ["Next.js", "Socket.io", "WebSockets", "Real-Time"],
        content: `
## The Challenge: Next.js Serverless vs Persistent WebSockets

Next.js App Router API routes are built on ephemeral, serverless principles. WebSockets, by nature, demand long-lived, persistent TCP connections.
        `
    },
    {
        slug: "supercharging-developer-velocity-with-ai-agents",
        title: "Supercharging Full-Stack Velocity with Cursor, Claude & AI Pair Programmers",
        category: "Developer Productivity",
        date: "December 2025",
        readTime: "5 min read",
        summary: "Lessons from shipping products 3x faster by pairing structured prompt design, cursor rules, and automated testing with AI coding agents.",
        coverImage: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
        tags: ["Cursor AI", "Claude Code", "Productivity", "AI Tools"],
        content: `
## AI is not replacing engineers; it is empowering them

In modern software development, writing boilerplate code is obsolete. What separates high-impact developers today is architectural clarity, prompt precision, and rigorous automated verification.
        `
    }
];

