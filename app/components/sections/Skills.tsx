'use client';

import React from 'react';
import { Code, Database, Cloud, Wrench, Palette, Brain, Layers } from 'lucide-react';
import { Card } from '../ui/Card';
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
    //'REST APIs': '/icons/rest.svg',
    'GraphQL': '/icons/graphql.png',
    'JWT': '/icons/jwt.svg',
    'Prisma': '/icons/prisma.svg',
    'Git': '/icons/git.svg',
    'Docker': '/icons/docker.svg',
    'VS Code': '/icons/vscode.png',
    //'Postman': '/icons/postman.svg',
    //'Swagger': '/icons/swagger.svg',
    'Figma': '/icons/figma.svg',
};

export const Skills = () => {
    const categoryIcons: Record<string, React.ReactNode> = {
        'Lenguajes de Programación': <Code size={24} className="text-red-400" />,
        'Frameworks Frontend': <Layers size={24} className="text-red-400" />,
        'Backend & APIs': <Database size={24} className="text-red-400" />,
        'Bases de Datos & Cloud': <Cloud size={24} className="text-red-400" />,
        'Herramientas de Desarrollo': <Wrench size={24} className="text-red-400" />,
        'Análisis de Datos': <Brain size={24} className="text-red-400" />,
        'Metodologías & Soft Skills': <Palette size={24} className="text-red-400" />,
    };

    return (
        <section
            id="skills"
            className="min-h-screen flex items-center px-4 md:px-8 py-20 overflow-hidden relative"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-950/5 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl w-full mx-auto relative z-10">
                <h2 className="text-4xl font-bold text-white mb-12 text-center md:text-left">
                    Habilidades Técnicas
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {SKILLS_DATA.map((skillCategory) => {
                        const carouselItems = [
                            ...skillCategory.items,
                            ...skillCategory.items,
                            ...skillCategory.items,
                            ...skillCategory.items,
                            ...skillCategory.items,
                            ...skillCategory.items,
                            ...skillCategory.items,
                            ...skillCategory.items,
                        ];

                        return (
                            <Card
                                key={skillCategory.category}
                                glass="medium"
                                hover
                                className="
                                    p-0 overflow-hidden
                                    group
                                    shadow-[0_8px_32px_rgba(0,0,0,0.3)]
                                    hover:shadow-[0_8px_32px_rgba(220,38,38,0.3)]
                                    border border-white/10
                                    hover:border-red-500/30
                                    transition-all duration-500 ">
                                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent"></div>

                                <div className="p-6 bg-gradient-to-br from-red-950/20 to-transparent border-b border-white/5">
                                    <div className="flex items-center gap-4">
                                        <div className=" relative w-14 h-14  rounded-xl  bg-gradient-to-br from-red-600/20 via-red-700/10 to-transparent backdrop-blur-xl  flex items-center justify-center 
                                            border border-red-500/20
                                            shadow-[0_0_20px_rgba(220,38,38,0.15)]
                                            group-hover:shadow-[0_0_30px_rgba(220,38,38,0.3)]
                                            group-hover:border-red-500/40
                                            transition-all duration-500">
                                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/10 to-transparent opacity-50"></div>
                                            <div className="relative z-10">
                                                {categoryIcons[skillCategory.category] || <Code size={24} className="text-red-400" />}
                                            </div>
                                        </div>

                                        <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-red-100 transition-colors leading-tight">
                                            {skillCategory.category}
                                        </h3>
                                    </div>
                                </div>

                                <div className="relative py-8 px-4 bg-black/10">
                                    <div className="
                                        overflow-hidden
                                        [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ">
                                        <div className="
                                            flex gap-3
                                            animate-infinite-scroll-skills ">
                                            {carouselItems.map((item, idx) => {
                                                const icon = techIcons[item];

                                                return (
                                                    <div key={`${skillCategory.category}-${item}-${idx}`} className=" flex-shrink-0 group/item">
                                                        <div className=" relative flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-br from-slate-800/60 via-slate-800/40 to-slate-900/60 backdrop-blur-xl
                                                            border border-white/10
                                                            shadow-[0_4px_16px_rgba(0,0,0,0.25)]
                                                            hover:border-red-500/40
                                                            hover:shadow-[0_4px_20px_rgba(220,38,38,0.2)]
                                                            hover:scale-105
                                                            transition-all duration-300
                                                            cursor-default
                                                            min-w-fit ">
                                                            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity"></div>
                                                            {icon ? (
                                                                <div className="relative w-5 h-5 flex-shrink-0">
                                                                    <img src={icon} alt={item} className="
                                                                            w-full h-full 
                                                                            object-contain
                                                                            drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]
                                                                            opacity-80
                                                                            group-hover/item:opacity-100
                                                                            transition-opacity "/>
                                                                </div>
                                                            ) : (
                                                                <div className="w-5 h-5 rounded bg-red-500/20 flex items-center justify-center flex-shrink-0">
                                                                    <Code size={12} className="text-red-400" />
                                                                </div>
                                                            )}

                                                            <span className=" text-sm font-medium text-gray-300 group-hover/item:text-white transition-colors whitespace-nowrap ">
                                                                {item}
                                                            </span>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent"></div>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};