"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import { ContactFormData } from "../types/portfolio";
import SectionHeader from "./SectionHeader";
import {
    Mail,
    Phone,
    MapPin,
    Send,
    CheckCircle2,
    AlertCircle,
    ArrowUpRight
} from "lucide-react";

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [loading, setLoading] = useState<boolean>(false);
    const [status, setStatus] = useState<"success" | "error" | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            const res = await fetch(personalInfo.formspreeEndpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" style={{ padding: "6rem 1.25rem 5rem", position: "relative" }}>
            <div className="editorial-container">
                <SectionHeader
                    number="08"
                    tag="CONTACT"
                    title="Contact"
                    subtitle="Have a project in mind, an engineering role, or a technical inquiry? Send a direct note below."
                />

                <div className="row g-5">
                    {/* Left Column: Contact Channels */}
                    <div className="col-lg-5">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
                        >
                            {/* Availability card */}
                            <div className="m-card" style={{ padding: "1.25rem" }}>
                                <div className="d-flex align-items-center gap-2 mb-2">
                                    <span style={{ position: "relative", display: "inline-flex", width: "8px", height: "8px" }}>
                                        <span
                                            style={{
                                                position: "absolute",
                                                inset: 0,
                                                borderRadius: "50%",
                                                background: "var(--m-accent)",
                                                opacity: 0.75,
                                                animation: "m-ping-slow 2s infinite"
                                            }}
                                        />
                                        <span
                                            style={{
                                                position: "relative",
                                                display: "inline-flex",
                                                width: "8px",
                                                height: "8px",
                                                borderRadius: "50%",
                                                background: "var(--m-accent)"
                                            }}
                                        />
                                    </span>
                                    <span className="font-mono-m" style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.18em", color: "var(--m-accent)" }}>
                                        CURRENT STATUS
                                    </span>
                                </div>
                                <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--m-text)", margin: "0 0 0.25rem" }}>
                                    Open for Opportunities
                                </h3>
                                <p style={{ fontSize: "0.85rem", color: "var(--m-muted)", margin: 0 }}>
                                    Available for full-time senior MERN/full-stack engineering roles and select contract architectures.
                                </p>
                            </div>

                            {/* Direct Communication Items */}
                            <div className="d-flex flex-column gap-2">
                                <a
                                    href={`mailto:${personalInfo.email}`}
                                    className="m-card d-flex align-items-center gap-3"
                                    style={{ padding: "1rem 1.25rem", textDecoration: "none" }}
                                >
                                    <div
                                        style={{
                                            width: "36px",
                                            height: "36px",
                                            borderRadius: "8px",
                                            background: "rgba(59, 130, 246, 0.1)",
                                            color: "var(--m-accent)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}
                                    >
                                        <Mail size={16} />
                                    </div>
                                    <div style={{ flexGrow: 1 }}>
                                        <span className="font-mono-m d-block" style={{ fontSize: "0.7rem", color: "var(--m-dim)", textTransform: "uppercase" }}>
                                            EMAIL
                                        </span>
                                        <span style={{ fontSize: "0.95rem", color: "var(--m-text)", fontWeight: 500 }}>
                                            {personalInfo.email}
                                        </span>
                                    </div>
                                    <ArrowUpRight size={16} style={{ color: "var(--m-dim)" }} />
                                </a>

                                <a
                                    href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`}
                                    className="m-card d-flex align-items-center gap-3"
                                    style={{ padding: "1rem 1.25rem", textDecoration: "none" }}
                                >
                                    <div
                                        style={{
                                            width: "36px",
                                            height: "36px",
                                            borderRadius: "8px",
                                            background: "rgba(59, 130, 246, 0.1)",
                                            color: "var(--m-accent)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}
                                    >
                                        <Phone size={16} />
                                    </div>
                                    <div style={{ flexGrow: 1 }}>
                                        <span className="font-mono-m d-block" style={{ fontSize: "0.7rem", color: "var(--m-dim)", textTransform: "uppercase" }}>
                                            PHONE / WHATSAPP
                                        </span>
                                        <span style={{ fontSize: "0.95rem", color: "var(--m-text)", fontWeight: 500 }}>
                                            {personalInfo.phone}
                                        </span>
                                    </div>
                                    <ArrowUpRight size={16} style={{ color: "var(--m-dim)" }} />
                                </a>

                                <div className="m-card d-flex align-items-center gap-3" style={{ padding: "1rem 1.25rem" }}>
                                    <div
                                        style={{
                                            width: "36px",
                                            height: "36px",
                                            borderRadius: "8px",
                                            background: "rgba(59, 130, 246, 0.1)",
                                            color: "var(--m-accent)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center"
                                        }}
                                    >
                                        <MapPin size={16} />
                                    </div>
                                    <div>
                                        <span className="font-mono-m d-block" style={{ fontSize: "0.7rem", color: "var(--m-dim)", textTransform: "uppercase" }}>
                                            LOCATION
                                        </span>
                                        <span style={{ fontSize: "0.95rem", color: "var(--m-text)", fontWeight: 500 }}>
                                            {personalInfo.location} · UTC+5
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Working Contact Form */}
                    <div className="col-lg-7">
                        <motion.div
                            className="m-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <form onSubmit={handleSubmit}>
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <div className="m-input-group">
                                            <label htmlFor="name">Your Name</label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                required
                                                autoComplete="name"
                                                placeholder="Alex Smith"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="m-input-group">
                                            <label htmlFor="email">Your Email</label>
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                required
                                                autoComplete="email"
                                                placeholder="alex@company.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="m-input-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        placeholder="Full-Stack Project / Engineering Role"
                                        value={formData.subject}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className="m-input-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        placeholder="Tell me about your project, timeline, or requirements..."
                                        value={formData.message}
                                        onChange={handleChange}
                                    />
                                </div>

                                {status === "success" && (
                                    <div
                                        className="d-flex align-items-center gap-2 p-3 mb-3 rounded-3"
                                        style={{ background: "rgba(16, 185, 129, 0.1)", border: "1px solid rgba(16, 185, 129, 0.3)", color: "#10b981", fontSize: "0.875rem" }}
                                    >
                                        <CheckCircle2 size={16} />
                                        <span>Thank you! Your message has been sent successfully. I will get back to you shortly.</span>
                                    </div>
                                )}

                                {status === "error" && (
                                    <div
                                        className="d-flex align-items-center gap-2 p-3 mb-3 rounded-3"
                                        style={{ background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgba(239, 68, 68, 0.3)", color: "#ef4444", fontSize: "0.875rem" }}
                                    >
                                        <AlertCircle size={16} />
                                        <span>Failed to send message. Please email directly at imahsan000@gmail.com.</span>
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="m-btn-primary w-100"
                                    style={{ opacity: loading ? 0.7 : 1 }}
                                >
                                    {loading ? (
                                        <span>Sending note...</span>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <Send size={15} />
                                        </>
                                    )}
                                </button>
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

