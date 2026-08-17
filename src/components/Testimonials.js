import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const Testimonials = () => {
    const review = {
        text: "Ahsan brought the LordsHub Gaming Platform to life. His expertise in Firebase and React created a gaming portal that is loved by our players. Fast, modern, and highly interactive!",
        name: "Shahbaz",
        role: "Founder, LordsHub Gaming",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    };

    return (
        <section id="testimonials" className="testimonials" style={{ position: "relative" }}>
            <div className="container-custom">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">
                        Client <span className="gradient-text">Testimonials</span>
                    </h2>
                    <p className="section-subtitle">
                        Here is what partners and clients say about working together
                    </p>
                </motion.div>

                <div className="d-flex justify-content-center mt-5">
                    <motion.div 
                        className="testimonial-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        style={{ maxWidth: "650px", width: "100%" }}
                    >
                        <Quote className="quote-icon" />
                        <p style={{ fontSize: "1.15rem", lineHeight: 1.7 }}>"{review.text}"</p>
                        <div className="client-info">
                            <div>
                                <h4>{review.name}</h4>
                                <span>{review.role}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
