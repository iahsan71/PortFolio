import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { Mail, Send, User, MessageSquare, MapPin, Phone } from "lucide-react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            const response = await fetch("https://formspree.io/f/xzzbojvp", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            
            if (response.ok) {
                toast.success("Message sent successfully! I'll get back to you soon.");
                setFormData({ name: "", email: "", message: "" });
            } else {
                toast.error("Failed to send the message. Please try again.");
            }
        } catch (error) {
            toast.error("Network error. Please check your connection and try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const contactInfo = [
        {
            icon: <Mail size={24} />,
            title: "Email",
            value: "ahsanafzal129@gmail.com",
            link: "mailto:ahsanafzal129@gmail.com"
        },
        {
            icon: <MapPin size={24} />,
            title: "Location",
            value: "Pakistan",
            link: null
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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
                ease: [0.6, -0.05, 0.01, 0.99]
            }
        }
    };

    return (
        <section id="contact" className="contact">
            <div className="container-custom">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="section-subtitle">
                        Have a project in mind? Let's discuss how we can work together
                    </p>
                </motion.div>

                <motion.div
                    className="contact-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Contact Information */}
                    <motion.div className="contact-info" variants={itemVariants}>
                        <h3>Let's Connect</h3>
                        
                        <p>
                            I'm always interested in hearing about new projects and opportunities. 
                            Whether you're a company looking to hire, or you're someone who has a 
                            project in mind, I'd love to hear from you.
                        </p>

                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.5rem'
                        }}>
                            {contactInfo.map((info, index) => (
                                <motion.div
                                    key={index}
                                    className="contact-item"
                                    whileHover={{
                                        y: -3,
                                        boxShadow: 'var(--shadow-glow)',
                                        borderColor: 'var(--accent-primary)'
                                    }}
                                >
                                    <div className="contact-icon">
                                        {info.icon}
                                    </div>
                                    <div className="contact-details">
                                        <h4>{info.title}</h4>
                                        {info.link ? (
                                            <a href={info.link}>
                                                {info.value}
                                            </a>
                                        ) : (
                                            <span>{info.value}</span>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div variants={itemVariants}>
                        <form onSubmit={handleSubmit} className="contact-form">
                            <h3>Send a Message</h3>

                            <div className="form-group">
                                <User size={20} />
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Your Name"
                                    required
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group">
                                <Mail size={20} />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Your Email"
                                    required
                                    className="form-input"
                                />
                            </div>

                            <div className="form-group textarea">
                                <MessageSquare size={20} />
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Your Message"
                                    required
                                    rows={5}
                                    className="form-input form-textarea"
                                />
                            </div>

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className="submit-btn"
                                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                            >
                                {isSubmitting ? (
                                    <div className="loading-spinner" style={{
                                        width: '20px',
                                        height: '20px'
                                    }} />
                                ) : (
                                    <>
                                        <Send size={18} />
                                        Send Message
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </motion.div>
            </div>

            {/* Background Elements */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'radial-gradient(circle at 30% 80%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)',
                pointerEvents: 'none'
            }} />
        </section>
    );
};

export default Contact;