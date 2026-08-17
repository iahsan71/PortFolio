"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { Mail, Send, User, MessageSquare, MapPin, Phone, Github, Linkedin, Calendar } from "lucide-react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        
        try {
            const response = await fetch("https://formspree.io/f/xzzbojvp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            
            if (response.ok) {
                setSubmitStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setSubmitStatus("error");
            }
        } catch (error) {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <section id="contact" className="contact" style={{ position: "relative" }}>
            <div className="container-custom">
                <SectionHeader 
                    title="Get In" 
                    highlight="Touch" 
                    subtitle="Have an opportunity, a project in mind, or just want to connect?" 
                />

                <div className="row gy-5">
                    {/* Left Column: Contact details */}
                    <div className="col-lg-5">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="d-flex flex-column gap-4"
                        >
                            <motion.div variants={itemVariants}>
                                <h3 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text-primary)" }}>Contact Info</h3>
                                <p style={{ color: "var(--text-secondary)", fontSize: "1rem", lineHeight: 1.6 }}>
                                    Feel free to reach out via the form, directly by email/phone, or find me on professional networks.
                                </p>
                            </motion.div>

                            {/* Status Card */}
                            <motion.div 
                                variants={itemVariants}
                                className="p-4 rounded-4"
                                style={{
                                    background: "var(--glass-bg)",
                                    border: "1px solid var(--border-color)",
                                    backdropFilter: "blur(10px)",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "1rem"
                                }}
                            >
                                <div className="d-flex align-items-center justify-content-center p-2 rounded-3 bg-success bg-opacity-10 text-success">
                                    <Calendar size={20} />
                                </div>
                                <div>
                                    <h4 style={{ fontSize: "0.95rem", fontWeight: 700, margin: 0, color: "var(--text-primary)" }}>Availability Status</h4>
                                    <span style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>Open for Full-time Roles & Contracts</span>
                                </div>
                            </motion.div>

                            {/* Contact Details List */}
                            <motion.div variants={itemVariants} className="d-flex flex-column gap-3">
                                <a 
                                    href="mailto:imahsan000@gmail.com" 
                                    className="d-flex align-items-center gap-3 p-3 rounded-3"
                                    style={{
                                        background: "var(--card-bg)",
                                        border: "1px solid var(--border-color)",
                                        color: "inherit",
                                        textDecoration: "none",
                                        transition: "var(--transition-smooth)"
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--accent-primary)"}
                                    onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--border-color)"}
                                >
                                    <Mail size={18} style={{ color: "var(--accent-primary)" }} />
                                    <div>
                                        <span className="d-block" style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase" }}>Email</span>
                                        <span style={{ fontSize: "0.95rem", color: "var(--text-secondary)", fontWeight: 500 }}>imahsan000@gmail.com</span>
                                    </div>
                                </a>

                                <a 
                                    href="tel:+923493082202" 
                                    className="d-flex align-items-center gap-3 p-3 rounded-3"
                                    style={{
                                        background: "var(--card-bg)",
                                        border: "1px solid var(--border-color)",
                                        color: "inherit",
                                        textDecoration: "none",
                                        transition: "var(--transition-smooth)"
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.borderColor = "var(--accent-primary)"}
                                    onMouseLeave={(e) => e.currentTarget.style.borderColor = "var(--border-color)"}
                                >
                                    <Phone size={18} style={{ color: "var(--accent-primary)" }} />
                                    <div>
                                        <span className="d-block" style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase" }}>Phone</span>
                                        <span style={{ fontSize: "0.95rem", color: "var(--text-secondary)", fontWeight: 500 }}>+92 349 3082202</span>
                                    </div>
                                </a>

                                <div 
                                    className="d-flex align-items-center gap-3 p-3 rounded-3"
                                    style={{
                                        background: "var(--card-bg)",
                                        border: "1px solid var(--border-color)",
                                        color: "inherit"
                                    }}
                                >
                                    <MapPin size={18} style={{ color: "var(--accent-primary)" }} />
                                    <div>
                                        <span className="d-block" style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontWeight: 600, textTransform: "uppercase" }}>Location</span>
                                        <span style={{ fontSize: "0.95rem", color: "var(--text-secondary)", fontWeight: 500 }}>Pakistan</span>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Column: Contact form */}
                    <div className="col-lg-7">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="p-4 p-md-5 rounded-4"
                            style={{
                                background: "var(--card-bg)",
                                border: "1px solid var(--border-color)",
                                backdropFilter: "blur(10px)",
                                boxShadow: "var(--shadow-primary)"
                            }}
                        >
                            <form onSubmit={handleSubmit} className="d-flex flex-column gap-4">
                                <div className="position-relative">
                                    <User size={18} style={{ position: "absolute", left: "15px", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }} />
                                    <input 
                                        type="text" 
                                        name="name"
                                        placeholder="Your Name" 
                                        required 
                                        value={formData.name}
                                        onChange={handleChange}
                                        style={{
                                            width: "100%",
                                            padding: "12px 16px 12px 45px",
                                            background: "var(--glass-bg)",
                                            border: "1px solid var(--border-color)",
                                            borderRadius: "8px",
                                            color: "var(--text-primary)",
                                            outline: "none",
                                            transition: "var(--transition-smooth)"
                                        }}
                                        onFocus={(e) => e.currentTarget.style.borderColor = "var(--accent-primary)"}
                                        onBlur={(e) => e.currentTarget.style.borderColor = "var(--border-color)"}
                                    />
                                </div>

                                <div className="position-relative">
                                    <Mail size={18} style={{ position: "absolute", left: "15px", top: "50%", transform: "translateY(-50%)", color: "var(--text-muted)" }} />
                                    <input 
                                        type="email" 
                                        name="email"
                                        placeholder="Your Email" 
                                        required 
                                        value={formData.email}
                                        onChange={handleChange}
                                        style={{
                                            width: "100%",
                                            padding: "12px 16px 12px 45px",
                                            background: "var(--glass-bg)",
                                            border: "1px solid var(--border-color)",
                                            borderRadius: "8px",
                                            color: "var(--text-primary)",
                                            outline: "none",
                                            transition: "var(--transition-smooth)"
                                        }}
                                        onFocus={(e) => e.currentTarget.style.borderColor = "var(--accent-primary)"}
                                        onBlur={(e) => e.currentTarget.style.borderColor = "var(--border-color)"}
                                    />
                                </div>

                                <div className="position-relative">
                                    <MessageSquare size={18} style={{ position: "absolute", left: "15px", top: "20px", color: "var(--text-muted)" }} />
                                    <textarea 
                                        name="message"
                                        placeholder="Your Message" 
                                        required 
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        style={{
                                            width: "100%",
                                            padding: "15px 16px 15px 45px",
                                            background: "var(--glass-bg)",
                                            border: "1px solid var(--border-color)",
                                            borderRadius: "8px",
                                            color: "var(--text-primary)",
                                            outline: "none",
                                            resize: "none",
                                            transition: "var(--transition-smooth)"
                                        }}
                                        onFocus={(e) => e.currentTarget.style.borderColor = "var(--accent-primary)"}
                                        onBlur={(e) => e.currentTarget.style.borderColor = "var(--border-color)"}
                                    />
                                </div>

                                <button 
                                    type="submit" 
                                    disabled={isSubmitting}
                                    className="btn-primary w-100 d-flex align-items-center justify-content-center gap-2"
                                    style={{ padding: "12px" }}
                                >
                                    {isSubmitting ? (
                                        <span>Sending...</span>
                                    ) : (
                                        <>
                                            <span>Send Message</span>
                                            <Send size={16} />
                                        </>
                                    )}
                                </button>

                                {submitStatus === "success" && (
                                    <div className="p-3 rounded-3 text-success bg-success bg-opacity-10 text-center" style={{ fontSize: "0.9rem", fontWeight: 600 }}>
                                        Message sent successfully! I'll get back to you soon.
                                    </div>
                                )}
                                {submitStatus === "error" && (
                                    <div className="p-3 rounded-3 text-danger bg-danger bg-opacity-10 text-center" style={{ fontSize: "0.9rem", fontWeight: 600 }}>
                                        Failed to send message. Please try again or email directly.
                                    </div>
                                )}
                            </form>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;