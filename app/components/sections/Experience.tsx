'use client';

import React from 'react';
import { Briefcase } from 'lucide-react';
import { Card } from '../ui/Card';

export const Experience = () => {
    const experiences = [
        { position: 'Desarrollador Full Stack', company: 'AXCAP', period: '2025 – Presente' },
        { position: 'Desarrollador Frontend / Fullstack', company: 'Sorum Asesores', period: 'Ene 2025 – Actualidad' },
        { position: 'Desarrollador Frontend', company: 'Macand', period: '2023 – 2025' },
        { position: 'Analista de Datos', company: 'Bioretail', period: '2024' },
    ];

    const highlights = [
        '6+ productos SaaS diseñados y entregados bajo AXCAP en menos de 18 meses.',
        'Desarrollo de aplicaciones web y móviles con Next.js, React y Remix.',
        'Arquitectura multi-tenant y Row-Level Security con Supabase + Prisma.',
        'Integraciones de pago con Stripe y MercadoPago.',
        'Análisis geoespacial con Python y Google Cloud.',
        'APIs REST, GraphQL, autenticación JWT y dashboards interactivos.'
    ];

    return (
        <section id="experience" className="min-h-[80vh] px-4 md:px-8 flex items-center justify-center">
            <div className="max-w-7xl w-full mx-auto">
                <Card className="p-0 overflow-hidden border-white/5">
                    <div className="p-6 md:p-10">

                        <div className="flex items-center gap-5 mb-8">
                            <div className="w-14 h-14 rounded-xl bg-red-600/20 flex items-center justify-center border border-red-500/20 flex-shrink-0">
                                <Briefcase size={28} className="text-red-400" />
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white">Experiencia</h3>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            <div>
                                <h4 className="text-xs font-semibold text-red-400 mb-4 uppercase tracking-wider">
                                    Trayectoria
                                </h4>
                                <div className="space-y-3">
                                    {experiences.map((exp, idx) => (
                                        <div
                                            key={idx}
                                            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 p-3 rounded-lg bg-slate-800/30 border border-white/5 cursor-default"
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 flex-shrink-0" />
                                                <div>
                                                    <h5 className="text-base font-semibold text-white">{exp.position}</h5>
                                                    <div className="flex flex-wrap items-center gap-2">
                                                        <p className="text-sm text-red-400 font-medium">{exp.company}</p>
                                                        <span className="hidden sm:inline text-slate-600">•</span>
                                                        <p className="text-sm text-slate-500">{exp.period}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h4 className="text-xs font-semibold text-red-400 mb-4 uppercase tracking-wider">
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

                    </div>
                </Card>
            </div>
        </section>
    );
};
