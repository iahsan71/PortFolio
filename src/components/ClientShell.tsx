"use client";

import React from "react";
import BgParticles from "./BgParticles";
import CustomCursor from "./CustomCursor";
import CommandPalette from "./CommandPalette";

interface ClientShellProps {
    children: React.ReactNode;
}

export default function ClientShell({ children }: ClientShellProps) {
    return (
        <>
            <CustomCursor />
            <BgParticles />
            <CommandPalette />
            {children}
        </>
    );
}

