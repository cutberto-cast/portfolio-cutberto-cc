'use client';

import React from 'react';
import { SKILLS_DATA } from '@/app/lib/constants';
import { Reveal, StaggerGroup, StaggerItem } from '../ui/Reveal';

// Only icons that actually exist under /public/icons — avoids broken images on missing assets.
const techIcons: Record<string, string> = {
    'JavaScript': '/icons/javascript.svg',
    'TypeScript': '/icons/typescript.svg',
    'Python': '/icons/python-logo.svg',
    'HTML/CSS': '/icons/css.svg',
    'SQL': '/icons/sql.svg',
    'React': '/icons/react-logo.svg',
    'Angular': '/icons/angular_gradient.png',
    'Next.js': '/icons/nextjs.svg',
    'Remix': '/icons/remix.svg',
    'Tailwind CSS': '/icons/tailwind.png',
    'Node.js': '/icons/nodejs.svg',
    'Java': '/icons/java.png',
    'GraphQL': '/icons/graphql.png',
    'JWT': '/icons/jwt.svg',
    'PostgreSQL': '/icons/postgresql.png',
    'Google Cloud': '/icons/google-cloud.png',
    'Git': '/icons/git.svg',
    'Docker': '/icons/docker.svg',
    'VS Code': '/icons/vscode.png',
    'Figma': '/icons/figma-logo.png',
};

// A flat list of every tool that has a real icon, for the marquee — order curated so
// the core stack (React, Angular, Next.js, Java, Git) reads early in both rows.
const MARQUEE_ITEMS = [
    'React', 'Angular', 'Next.js', 'Java', 'Git', 'TypeScript',
    'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Docker', 'JavaScript',
    'GraphQL', 'Figma', 'VS Code', 'Python', 'Google Cloud', 'Remix', 'SQL',
]
    .filter((name) => techIcons[name])
    .map((name) => ({ name, icon: techIcons[name] }));

const ROW_1 = MARQUEE_ITEMS.filter((_, idx) => idx % 2 === 0);
const ROW_2 = MARQUEE_ITEMS.filter((_, idx) => idx % 2 === 1);

const MarqueeRow = ({ items, reverse }: { items: { name: string; icon: string }[]; reverse?: boolean }) => (
    <div className="skills-marquee">
        <div className={`skills-marquee-track ${reverse ? 'skills-marquee-track--reverse' : ''}`}>
            {[...items, ...items].map((item, idx) => (
                <div key={`${item.name}-${idx}`} className="skills-marquee-chip">
                    <span className="skills-marquee-icon">
                        <img src={item.icon} alt="" loading="lazy" />
                    </span>
                    <span className="text-sm text-gray-300">{item.name}</span>
                </div>
            ))}
        </div>
    </div>
);

export const Skills = () => {
    return (
        <section
            id="skills"
            className="min-h-screen flex items-center px-4 md:px-8 py-20"
        >
            <div className="max-w-7xl w-full mx-auto">
                <Reveal className="text-center md:text-left mb-10">
                    <h2 className="font-outfit text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Habilidades Técnicas
                    </h2>
                    <p className="text-gray-400 mt-3 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                        Las herramientas que uso para construir interfaces y llevarlas a producción.
                    </p>
                </Reveal>

                <Reveal delay={0.1} className="-mx-4 md:-mx-8 space-y-3">
                    <MarqueeRow items={ROW_1} />
                    <MarqueeRow items={ROW_2} reverse />
                </Reveal>

                <StaggerGroup
                    className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 pt-10 border-t border-white/5"
                    staggerDelay={0.08}
                >
                    {SKILLS_DATA.map((skillCategory) => (
                        <StaggerItem key={skillCategory.category}>
                            <h3 className="text-white font-semibold mb-1.5">
                                {skillCategory.category}
                            </h3>
                            <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                                {skillCategory.caption}
                            </p>

                            <div className="flex flex-wrap gap-2">
                                {skillCategory.items.map((item) => {
                                    const icon = techIcons[item];
                                    return (
                                        <div
                                            key={item}
                                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/[0.08] text-xs text-gray-400 transition-all duration-200 ease-out hover:border-red-500/30 hover:text-gray-200 hover:-translate-y-0.5"
                                        >
                                            {icon && (
                                                <img
                                                    src={icon}
                                                    alt=""
                                                    className="w-3.5 h-3.5 object-contain opacity-75"
                                                    loading="lazy"
                                                />
                                            )}
                                            <span>{item}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </StaggerItem>
                    ))}
                </StaggerGroup>
            </div>
        </section>
    );
};
