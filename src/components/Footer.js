import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  MessageCircle,
  Heart,
  ArrowUp,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

/* ------------------ DATA ------------------ */
const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: <Github size={20} />,
    url: "https://github.com/iahsan71",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin size={20} />,
    url: "https://www.linkedin.com/in/ahsan71",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp size={20} />,
    url: "https://wa.me/qr/BYNKODHGVN32M1",
  },
];

const QUICK_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

/* ------------------ COMPONENT ------------------ */
const Footer = () => {
  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer style={styles.footer}>
      <div style={styles.gradientLine} />

      <div style={styles.container}>
        {/* -------- MAIN GRID -------- */}
        <div style={styles.grid}>
          {/* Brand */}
          <FooterBrand />

          {/* Quick Links */}
          <FooterLinks />

          {/* Contact */}
          <FooterContact />
        </div>

        {/* -------- BOTTOM BAR -------- */}
        <FooterBottom onScrollTop={scrollToTop} />
      </div>
    </footer>
  );
};

/* ------------------ SECTIONS ------------------ */

const FooterBrand = () => (
  <motion.div {...fadeUp} style={{ maxWidth: 400 }}>
    <h3 style={styles.brandTitle}>
      Ahsan <span className="gradient-text">Afzal</span>
    </h3>

    <p style={styles.brandText}>
      Crafting exceptional digital experiences with modern web technologies.
    </p>

    <div style={styles.socialRow}>
      {SOCIAL_LINKS.map((item) => (
        <motion.a
          key={item.name}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          title={item.name}
          style={styles.socialIcon}
          whileHover={hoverIcon}
          whileTap={{ scale: 0.95 }}
        >
          {item.icon}
        </motion.a>
      ))}
    </div>
  </motion.div>
);

const FooterLinks = () => (
  <motion.div {...fadeUpDelay(0.1)}>
    <h4 style={styles.sectionTitle}>Quick Links</h4>

    <ul style={styles.list}>
      {QUICK_LINKS.map((link) => (
        <li key={link.name}>
          <motion.a
            href={link.href}
            style={styles.link}
            whileHover={{ x: 6, color: "var(--accent-primary)" }}
          >
            {link.name}
          </motion.a>
        </li>
      ))}
    </ul>
  </motion.div>
);

const FooterContact = () => (
  <motion.div {...fadeUpDelay(0.2)}>
    <h4 style={styles.sectionTitle}>Get In Touch</h4>

    <div style={styles.contactCol}>
      <motion.a
        href="mailto:ahsanafzal129@gmail.com"
        style={styles.contactItem}
        whileHover={{ x: 6, color: "var(--accent-primary)" }}
      >
        <Mail size={18} />
        <span>ahsanafzal129@gmail.com</span>
      </motion.a>

      <div style={styles.contactItem}>
        <MapPin size={18} />
        <span>Pakistan</span>
      </div>
    </div>
  </motion.div>
);

const FooterBottom = ({ onScrollTop }) => (
  <motion.div {...fadeInDelay(0.3)} style={styles.bottomBar}>
    <p style={styles.copyright}>
      © {new Date().getFullYear()} Ahsan Afzal. Made with
      <motion.span
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1 }}
        style={{ margin: "0 6px" }}
      >
        <Heart
          size={16}
          fill="var(--accent-primary)"
          color="var(--accent-primary)"
        />
      </motion.span>
      and React.js
    </p>

    <motion.button
      onClick={onScrollTop}
      style={styles.topButton}
      whileHover={hoverIcon}
      whileTap={{ scale: 0.95 }}
      title="Back to top"
    >
      <ArrowUp size={20} />
    </motion.button>
  </motion.div>
);

/* ------------------ ANIMATIONS ------------------ */
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true },
};

const fadeUpDelay = (delay) => ({
  ...fadeUp,
  transition: { duration: 0.6, delay },
});

const fadeInDelay = (delay) => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { duration: 0.6, delay },
  viewport: { once: true },
});

const hoverIcon = {
  y: -3,
  scale: 1.1,
  backgroundColor: "var(--accent-primary)",
  color: "#fff",
  borderColor: "var(--accent-primary)",
};

/* ------------------ STYLES ------------------ */
const styles = {
  footer: {
    background: "var(--secondary-bg)",
    borderTop: "1px solid var(--border-color)",
    position: "relative",
    width: "100%",
    display: "block",
    textAlign: "left",
  },
  gradientLine: {
    height: 2,
    background: "var(--gradient-primary)",
    opacity: 0.6,
  },
  container: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "4rem 2rem 2rem",
    width: "100%",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "2fr 1fr 1fr",
    gap: "3rem",
    borderBottom: "1px solid var(--border-color)",
    paddingBottom: "3rem",
    marginBottom: "2rem",
    alignItems: "flex-start",
    textAlign: "left",
  },
  brandTitle: {
    fontSize: "1.75rem",
    fontWeight: 800,
    marginBottom: "1rem",
  },
  brandText: {
    color: "var(--text-secondary)",
    lineHeight: 1.7,
  },
  socialRow: {
    display: "flex",
    gap: "0.75rem",
    marginTop: "1.5rem",
  },
  socialIcon: {
    width: 45,
    height: 45,
    borderRadius: 12,
    border: "1px solid var(--border-color)",
    background: "var(--glass-bg)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--text-secondary)",
    textDecoration: "none",
  },
  sectionTitle: {
    fontSize: "0.9rem",
    fontWeight: 700,
    textTransform: "uppercase",
    marginBottom: "1.5rem",
  },
  list: {
    listStyle: "none",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
  },
  link: {
    color: "var(--text-secondary)",
    textDecoration: "none",
    fontSize: "0.95rem",
  },
  contactCol: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  contactItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    color: "var(--text-secondary)",
    textDecoration: "none",
  },
  bottomBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "1.5rem",
  },
  copyright: {
    fontSize: "0.9rem",
    color: "var(--text-muted)",
    display: "flex",
    alignItems: "center",
  },
  topButton: {
    width: 45,
    height: 45,
    borderRadius: 12,
    border: "1px solid var(--border-color)",
    background: "var(--glass-bg)",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--text-secondary)",
  },
};

export default Footer;
