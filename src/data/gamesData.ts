export interface GameMeta {
    id: string;
    slug: string;
    title: string;
    tagline: string;
    category: string;
    difficulty: "EASY" | "MEDIUM" | "HARD";
    estimatedTime: string;
    description: string;
    rules: string[];
    accentColor: string;
}

export const GAMES_DATA: GameMeta[] = [
    {
        id: "zip",
        slug: "zip",
        title: "Zip Puzzle",
        tagline: "Connect numbered waypoints in one continuous non-intersecting path.",
        category: "LOGIC & PATHFINDING",
        difficulty: "MEDIUM",
        estimatedTime: "3 — 5 min",
        description: "A spatial reasoning challenge. Navigate the grid starting from 1, hitting all numbered checkpoints in ascending order, and filling every single cell on the board without self-crossing.",
        rules: [
            "Start your path at cell #1 and end at the highest number.",
            "You must visit intermediate numbers in exact numerical sequence.",
            "Every empty cell on the grid must be filled exactly once.",
            "Paths move orthogonally (up, down, left, right) and cannot cross."
        ],
        accentColor: "#3b82f6"
    },
    {
        id: "signal",
        slug: "signal",
        title: "Signal — Lights Out",
        tagline: "Invert intersecting node networks to deactivate all active signals.",
        category: "BINARY MATRIX",
        difficulty: "MEDIUM",
        estimatedTime: "2 — 4 min",
        description: "An electronic logic puzzle based on modulo-2 arithmetic. Clicking any node flips its state and the states of its four immediate neighbors. Clear the board to silence the signal.",
        rules: [
            "Clicking any node toggles its on/off state.",
            "The orthogonal neighbors (up, down, left, right) also toggle simultaneously.",
            "The objective is to extinguish every glowing light on the grid.",
            "Puzzles are generated backwards from a solved state, guaranteeing a solution."
        ],
        accentColor: "#10b981"
    },
    {
        id: "flood",
        slug: "flood",
        title: "Flood Fill",
        tagline: "Expand your color territory across the board in 25 moves or less.",
        category: "GRAPH TRAVERSAL",
        difficulty: "EASY",
        estimatedTime: "2 — 3 min",
        description: "A cellular automaton puzzle. Beginning at the top-left origin, choose color frequencies to absorb neighboring identical cells until the entire board is conquered.",
        rules: [
            "Start from the top-left tile.",
            "Choose one of six colors to flood your connected territory.",
            "Adjacent tiles sharing the chosen color merge into your territory.",
            "Unify the entire board within the allotted move budget."
        ],
        accentColor: "#ec4899"
    },
    {
        id: "merge",
        slug: "merge",
        title: "Merge — 2048",
        tagline: "Slide and combine matching tiles to engineer the 2048 block.",
        category: "COMBINATORIAL",
        difficulty: "HARD",
        estimatedTime: "5 — 10 min",
        description: "The classic algorithmic sliding puzzle. Use keyboard arrow keys or touch swipes to slide all tiles in unison. When two matching values collide, they merge into their sum.",
        rules: [
            "Use Arrow keys, WASD, or swipe gestures to slide tiles.",
            "Matching numbers merge into double their value (2 + 2 = 4, 4 + 4 = 8).",
            "A new tile (2 or 4) spawns in a random open slot after every move.",
            "Synthesize the 2048 tile to win, or push further for the ultimate high score."
        ],
        accentColor: "#f59e0b"
    },
    {
        id: "mines",
        slug: "mines",
        title: "Minesweeper",
        tagline: "Deduce concealed mines through numeric proximity analysis.",
        category: "PROBABILISTIC DEDUCTION",
        difficulty: "MEDIUM",
        estimatedTime: "3 — 6 min",
        description: "The timeless analytical deduction game. Uncover tiles, read numeric proximity hints, flag concealed hazards, and clear all safe territory without detonating a single mine.",
        rules: [
            "Left-click (or tap) to uncover a concealed tile.",
            "Numbers reveal exactly how many mines touch that cell (including diagonals).",
            "Right-click (or toggle Flag Mode) to mark suspected mines.",
            "Your first uncovered tile is guaranteed to be safe."
        ],
        accentColor: "#ef4444"
    }
];

export interface ArcadeFAQItem {
    question: string;
    answer: string;
}

export const ARCADE_FAQ: ArcadeFAQItem[] = [
    {
        question: "Why does a senior full-stack developer portfolio include interactive games?",
        answer: "Games provide an undeniable demonstration of real-time client-side performance, intricate algorithm design (pathfinding, flood-fill recursion, BFS, matrix state flips), touch-gesture engineering, and responsive 60fps UI architecture. They prove that complex state transitions can be handled with zero frame drops."
    },
    {
        question: "DOM vs Canvas: What drove the rendering architectural choice?",
        answer: "For discrete puzzle grids (like 5x5 or 12x12 matrices), semantic DOM rendering with CSS hardware acceleration (`transform: translate3d`, `will-change`, CSS variables) provides superior accessibility, crisp vector scaling on Retina screens, and zero canvas raster blur, while keeping JavaScript bundle sizes lightweight."
    },
    {
        question: "How is game state and progress persisted?",
        answer: "All progress, high scores, best completion times, and daily challenge streaks are persisted in the browser's `localStorage` using structured JSON schemas. State mutations utilize immutable updates to prevent accidental UI side-effects."
    },
    {
        question: "How are touch controls and mobile accessibility handled?",
        answer: "Each game incorporates custom touch handling—such as TouchEvent coordinate tracking for 2048 swipes, dual-mode (Reveal vs Flag) action toggles for mobile Minesweeper, and minimum 44px tap targets adhering strictly to WCAG mobile accessibility guidelines."
    },
    {
        question: "How is the Daily Challenge seed generated?",
        answer: "Daily challenges utilize a deterministic pseudo-random seed computed from the current date string (`YYYY-MM-DD`). This ensures that every visitor across the globe receives the exact same puzzle board on any given day, enabling fair comparisons."
    }
];

/**
 * Simple Linear Congruential Generator for deterministic daily seeds
 */
export function getDailySeed(dateStr?: string): number {
    const key = dateStr || new Date().toISOString().slice(0, 10);
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
        hash = (hash << 5) - hash + key.charCodeAt(i);
        hash |= 0;
    }
    return Math.abs(hash);
}

