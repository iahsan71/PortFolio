import React from "react";

export interface SectionHeaderProps {
    number?: string;
    tag?: string;
    title: string;
    subtitle?: string;
    align?: "left" | "center" | "right";
    rightAction?: React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
    number = "01",
    tag = "ABOUT",
    title = "About",
    subtitle = "",
    align = "left",
    rightAction = null
}) => {
    return (
        <div
            className={`m-section-header-wrap ${
                rightAction ? "d-flex flex-wrap justify-content-between align-items-end gap-3" : ""
            }`}
            style={{ textAlign: align, marginBottom: "clamp(2.5rem, 6vw, 4.25rem)" }}
        >
            <div>
                {/* 01 —— ABOUT tag matching reference */}
                <div
                    className="font-mono-m mb-2 d-flex align-items-center gap-3"
                    style={{
                        fontSize: "clamp(0.68rem, 1.8vw, 0.75rem)",
                        textTransform: "uppercase",
                        letterSpacing: "0.22em",
                        color: "var(--m-muted)",
                        justifyContent: align === "center" ? "center" : "flex-start"
                    }}
                >
                    <span style={{ color: "var(--m-accent)", fontWeight: 700 }}>{number}</span>
                    <span
                        style={{
                            height: "1px",
                            width: "28px",
                            background: "var(--m-border-strong)",
                            display: "inline-block"
                        }}
                    />
                    <span>{tag}</span>
                </div>

                {/* Section Title */}
                <h2
                    className="font-display"
                    style={{
                        fontSize: "clamp(1.75rem, 4.5vw, 3.25rem)",
                        fontWeight: 800,
                        letterSpacing: "-0.03em",
                        color: "var(--m-text)",
                        lineHeight: 1.1,
                        margin: 0
                    }}
                >
                    {title}
                </h2>

                {/* Accent Underline Bar */}
                <span
                    className="m-draw-x"
                    style={{
                        display: "block",
                        height: "4px",
                        width: "clamp(40px, 8vw, 60px)",
                        borderRadius: "9999px",
                        background: "var(--m-accent)",
                        marginTop: "0.75rem",
                        marginLeft: align === "center" ? "auto" : 0,
                        marginRight: align === "center" ? "auto" : 0
                    }}
                />

                {/* Optional Subtitle with generous spacing */}
                {subtitle && (
                    <p
                        style={{
                            fontSize: "clamp(0.925rem, 2vw, 1.05rem)",
                            color: "var(--m-muted)",
                            marginTop: "0.85rem",
                            maxWidth: "42rem",
                            lineHeight: 1.6,
                            marginLeft: align === "center" ? "auto" : 0,
                            marginRight: align === "center" ? "auto" : 0,
                            marginBottom: 0
                        }}
                    >
                        {subtitle}
                    </p>
                )}
            </div>

            {rightAction && <div className="mt-2 mt-sm-0">{rightAction}</div>}
        </div>
    );
};

export default SectionHeader;

