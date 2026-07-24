import { useMemo } from "react";

// Signature element: a quiet "skill graph" — nodes are the skills that
// actually connect Sidharth's projects (ML, React, Firebase, DSA...),
// echoing the matching logic behind Skill Swap itself.
const NODES = [
  { id: "py", label: "Python", x: 12, y: 22 },
  { id: "ml", label: "ML", x: 30, y: 8 },
  { id: "react", label: "React", x: 55, y: 12 },
  { id: "fb", label: "Firebase", x: 78, y: 24 },
  { id: "dsa", label: "DSA", x: 88, y: 55 },
  { id: "llm", label: "LLM APIs", x: 68, y: 78 },
  { id: "js", label: "JS", x: 38, y: 82 },
  { id: "git", label: "Git", x: 14, y: 62 },
  { id: "core", label: "", x: 50, y: 45 },
];

const EDGES = [
  ["py", "core"], ["ml", "core"], ["react", "core"], ["fb", "core"],
  ["dsa", "core"], ["llm", "core"], ["js", "core"], ["git", "core"],
  ["py", "ml"], ["react", "fb"], ["dsa", "fb"], ["llm", "js"],
];

export default function NodeNetwork({ className = "" }) {
  const nodeMap = useMemo(() => Object.fromEntries(NODES.map(n => [n.id, n])), []);

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#B24BF3" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#B24BF3" stopOpacity="0" />
        </radialGradient>
      </defs>

      {EDGES.map(([a, b], i) => {
        const na = nodeMap[a];
        const nb = nodeMap[b];
        return (
          <line
            key={i}
            x1={na.x}
            y1={na.y}
            x2={nb.x}
            y2={nb.y}
            stroke="#6C4CF3"
            strokeWidth="0.15"
            className="animate-pulseLine"
            style={{ animationDelay: `${i * 0.35}s` }}
          />
        );
      })}

      {NODES.map((n, i) => (
        <g key={n.id} className="animate-drift" style={{ animationDelay: `${i * 0.6}s`, transformOrigin: `${n.x}px ${n.y}px` }}>
          {n.id === "core" ? (
            <circle cx={n.x} cy={n.y} r="6" fill="url(#nodeGlow)" />
          ) : null}
          <circle
            cx={n.x}
            cy={n.y}
            r={n.id === "core" ? 1.6 : 1}
            fill={n.id === "core" ? "#B24BF3" : "#9B92B4"}
          />
          {n.label && (
            <text
              x={n.x}
              y={n.y - 2.5}
              textAnchor="middle"
              fontSize="2.6"
              fill="#9B92B4"
              fontFamily="'JetBrains Mono', monospace"
            >
              {n.label}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}
