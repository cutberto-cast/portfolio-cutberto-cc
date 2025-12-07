'use client';

import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { Card } from '../ui/Card';
import TechStackVertical from '../ui/TechStack';

export const Experience = () => {
    const experiences = [
        { position: 'Desarrollador Frontend / Fullstack', company: 'Sorum Asesores', period: 'Ene 2025 - Actualidad' },
        { position: 'Analista de Datos', company: 'Bioretail', period: '2024' },
        { position: 'Desarrollador Frontend', company: 'Macand', period: '2023 - 2025' }
    ];

    const highlights = [
        'Desarrollo de aplicaciones web y móviles con React, Angular y Remix.',
        'Análisis geoespacial con Python y Google Cloud.',
        'Integración de APIs REST, GraphQL y autenticación JWT.',
        'Diseño de dashboards interactivos.',
        'Traducción de requerimientos técnicos en soluciones prácticas.'
    ];

    return (
        <section id="experience" className="min-h-[80vh] px-4 md:px-8 flex items-center justify-center overflow-hidden">
            <div className="max-w-7xl w-full mx-auto">
                <Card
                    className="p-0 overflow-hidden border-white/5"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-0">

                        <div className="p-6 md:p-8 lg:pr-12">
                            <div className="flex items-center gap-6 mb-2">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 rounded-xl bg-red-600/20 backdrop-blur-xl flex items-center justify-center border border-red-500/20 shadow-[0_0_15px_rgba(220,38,38,0.2)]">
                                        <Briefcase size={32} className="text-red-400" />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                                        Experiencia
                                    </h3>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-red-400 mb-4 uppercase tracking-wider">
                                    Trayectoria
                                </h4>
                                <div className="space-y-4">
                                    {experiences.map((exp, idx) => (
                                        <div key={idx} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-2 rounded-lg bg-slate-800/30 backdrop-blur-sm border border-white/5 hover:border-red-500/20 hover:bg-slate-800/50 transition-all duration-300 group">
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-start gap-3">
                                                    <div className="flex-shrink-0 mt-1">
                                                        <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(220,38,38,0.6)]"></div>
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h5 className="text-base sm:text-lg font-semibold text-white group-hover:text-red-100 transition-colors">
                                                            {exp.position}
                                                        </h5>
                                                        <div className="flex flex-wrap items-center gap-2 ">
                                                            <p className="text-sm text-red-400 font-medium">{exp.company}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    ))}
                                </div>
                                <h4 className="text-sm font-semibold text-red-400 mb-4 uppercase tracking-wider pt-5">
                                    Logros Destacados
                                </h4>
                                <ul className="space-y-3">
                                    {highlights.map((highlight, idx) => (
                                        <li key={idx} className="flex gap-3 text-gray-300 text-sm leading-relaxed">
                                            <span className="text-red-500 mt-1.5 flex-shrink-0 text-xs">●</span>
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="relative border-t lg:border-t-0 lg:border-l border-white/5 flex items-center justify-center overflow-hidden bg-[#020202] py-10 lg:py-0">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] pointer-events-none" />

                            <div className="scale-[0.65] sm:scale-75 md:scale-90 lg:scale-100 origin-center z-10">
                                <TechStackVertical />
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
};