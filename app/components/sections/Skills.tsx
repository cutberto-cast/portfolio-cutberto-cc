'use client';

import React from 'react';
import { Code, Database, Cloud, Wrench, Palette, Brain, Layers } from 'lucide-react';
import { SKILLS_DATA } from '@/app/lib/constants';

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
    'Tailwind CSS': '/icons/tailwind.svg',
    'Node.js': '/icons/nodejs.svg',
    'GraphQL': '/icons/graphql.png',
    'JWT': '/icons/jwt.svg',
    'Prisma': '/icons/prisma.svg',
    'Supabase': '/icons/supabase.svg',
    'Vercel': '/icons/vercel.svg',
    'Stripe': '/icons/stripe.svg',
    'Git': '/icons/git.svg',
    'Docker': '/icons/docker.svg',
    'VS Code': '/icons/vscode.png',
    'Figma': '/icons/figma.svg',
};

const categoryIcons: Record<string, React.ReactNode> = {
    'Lenguajes de Programación': <Code size={18} className="text-red-400" />,
    'Frameworks Frontend': <Layers size={18} className="text-red-400" />,
    'Backend & APIs': <Database size={18} className="text-red-400" />,
    'Bases de Datos & Cloud': <Cloud size={18} className="text-red-400" />,
    'Herramientas de Desarrollo': <Wrench size={18} className="text-red-400" />,
    'Análisis de Datos': <Brain size={18} className="text-red-400" />,
    'Metodologías & Soft Skills': <Palette size={18} className="text-red-400" />,
};

export const Skills = () => {
    return (
        <section
            id="skills"
            className="min-h-screen flex items-center px-4 md:px-8 py-20"
        >
            <div className="max-w-7xl w-full mx-auto">
                <h2 className="text-4xl font-bold text-white mb-12 text-center md:text-left">
                    Habilidades Técnicas
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                    {SKILLS_DATA.map((skillCategory) => (
                        <div
                            key={skillCategory.category}
                            className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                                    {categoryIcons[skillCategory.category] || <Code size={18} className="text-red-400" />}
                                </div>
                                <h3 className="text-sm font-semibold text-white/90 leading-tight">
                                    {skillCategory.category}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {skillCategory.items.map((item) => {
                                    const icon = techIcons[item];
                                    return (
                                        <div
                                            key={item}
                                            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/[0.08] text-xs text-gray-400"
                                        >
                                            {icon && (
                                                <img
                                                    src={icon}
                                                    alt={item}
                                                    className="w-3.5 h-3.5 object-contain opacity-75"
                                                />
                                            )}
                                            <span>{item}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
