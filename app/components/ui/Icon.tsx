import React from "react";

export interface TechIcon {
    id: string;
    name: string;
    path: string;
}

export const iconColumns: TechIcon[][] = [
    [
        { id: 'c1-1', path: 'google-cloud.png', name: "Google Cloud" },
        { id: 'c1-2', path: 'css.svg', name: "CSS3" },
        { id: 'c1-3', path: 'javascript.svg', name: "JavaScript" },
        { id: 'c1-4', path: 'typescript.svg', name: "TypeScript" }, 
        { id: 'c1-5', path: 'github.png', name: "GitHub" },
        { id: 'c1-6', path: 'git.svg', name: "Git" },
        { id: 'c1-7', path: 'graphql.png', name: "GraphQL" },
    ],

    [
        { id: 'c2-1', path: 'android.png', name: "Next.js" },
        { id: 'c2-2', path: 'tailwind.png', name: "Tailwind" },
        { id: 'c2-3', path: 'docker.svg', name: 'Docker' },
        { id: 'c2-4', path: 'angular_gradient.png', name: "Angular" },
        { id: 'c2-5', path: 'react-logo.svg', name: "React" },
        { id: 'c2-6', path: 'jwt.svg', name: "JWT" },
        { id: 'c2-7', path: 'nodejs.svg', name: "Node.js" },
    ],

    [
        { id: 'c3-1', path: 'postgresql.png', name: "Prisma" },
        { id: 'c3-2', path: 'sql.svg', name: "PostgreSQL" },
        { id: 'c3-3', path: 'python-logo.svg', name: "Python" },
        { id: 'c3-4', path: 'java.png', name: "java" },
        { id: 'c3-5', path: 'figma-logo.png', name: "Figma" },
        { id: 'c3-6', path: 'sass.png', name: "Sass" },
        { id: 'c3-7', path: 'vscode.png', name: "VS Code" },
    ],
];