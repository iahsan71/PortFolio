"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
    Globe, 
    LayoutDashboard, 
    Cpu, 
    Lock, 
    Briefcase, 
    Layers, 
    Smartphone, 
    Zap, 
    Search 
} from "lucide-react";

const Services = () => {
    const servicesList = [
        {
            icon: <Globe size={24} />,
            title: "Full Stack Web Apps",
            description: "End-to-end web applications constructed with robust MERN structures, fully reactive and scalable."
        },
        {
            icon: <LayoutDashboard size={24} />,
            title: "Admin Dashboards",
            description: "Powerful telemetry panels, analytics systems, and database management portals with visual reports."
        },
        {
            icon: <Cpu size={24} />,
            title: "REST APIs Development",
            description: "Developing structured, documented, and secure API routers using Node, Express, and postman testing."
        },
        {
            icon: <Lock size={24} />,
            title: "Authentication Systems",
            description: "Integrating secure user logins using encrypted cookies, sessions, JWT tokens, and OAuth protocols."
        },
        {
            icon: <Briefcase size={24} />,
            title: "CRM / ERMs Solutions",
            description: "Internal business systems, client trackers, sales logs, and team pipeline synchronization portals."
        },
        {
            icon: <Layers size={24} />,
            title: "SaaS Platforms",
            description: "Subscription-ready software architectures with robust user management and service layers."
        },
        {
            icon: <Zap size={24} />,
            title: "Performance Optimizations",
            description: "Improving page load times, DB querying indices, caching mechanisms, and bundle split parameters."
        },
        {
            icon: <Smartphone size={24} />,
            title: "Responsive Landing Pages",
            description: "Pixel-perfect, lightweight, and engaging promotion portals optimized for all screen dimensions."
        },
        {
            icon: <Search size={24} />,
            title: "SEO & Accessibility",
            description: "Optimizing code to rank higher on search engines and comply with WCAG web accessibility standards."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section id="services" className="services" style={{ position: "relative" }}>
            <div className="container-custom">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">
                        What I <span className="gradient-text">Can Build</span>
                    </h2>
                    <p className="section-subtitle">
                        Custom digital solutions tailored to specific business requirements
                    </p>
                </motion.div>

                <motion.div 
                    className="services-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {servicesList.map((service, idx) => (
                        <motion.div 
                            key={idx} 
                            className="service-card"
                            variants={cardVariants}
                        >
                            <div className="service-icon">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
