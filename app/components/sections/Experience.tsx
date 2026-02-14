'use client';

import React from 'react';
import { Briefcase } from 'lucide-react';
import { Card } from '../ui/Card';
import TechStackVertical from '../ui/TechStack';
import { motion, Variants } from 'framer-motion';

export const Experience = () => {
    const experiences = [
        { position: 'Desarrollador Frontend / Fullstack', company: 'Sorum Asesores', period: 'Ene 2025 - Actualidad' },
        { position: 'Desarrollador Frontend', company: 'Macand', period: '2023 - 2025' },
        { position: 'Analista de Datos', company: 'Bioretail', period: '2024' },
    ];

    const highlights = [
        'Desarrollo de aplicaciones web y móviles con React, Angular y Remix.',
        'Análisis geoespacial con Python y Google Cloud.',
        'Integración de APIs REST, GraphQL y autenticación JWT.',
        'Diseño de dashboards interactivos.',
        'Traducción de requerimientos técnicos en soluciones prácticas.'
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -30 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const listVariants: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.4 }
        }
    };

    return (
        <section id="experience" className="min-h-[80vh] px-4 md:px-8 flex items-center justify-center overflow-hidden">
            <div className="max-w-7xl w-full mx-auto">
                <Card className="p-0 overflow-hidden border-white/5">
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-0">

                        <motion.div 
                            className="p-6 md:p-8 lg:pr-12"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            <motion.div className="flex items-center gap-6 mb-2" variants={itemVariants}>
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
                            </motion.div>

                            <div className="mt-6">
                                <motion.h4 
                                    variants={itemVariants}
                                    className="text-sm font-semibold text-red-400 mb-4 uppercase tracking-wider"
                                >
                                    Trayectoria
                                </motion.h4>
                                
                                <div className="space-y-4">
                                    {experiences.map((exp, idx) => (
                                        <motion.div 
                                            key={idx} 
                                            variants={itemVariants}
                                            whileHover={{ 
                                                scale: 1.02, 
                                                backgroundColor: "rgba(30, 41, 59, 0.4)",
                                                borderColor: "rgba(220, 38, 38, 0.3)" 
                                            }}
                                            className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-3 rounded-lg bg-slate-800/30 backdrop-blur-sm border border-white/5 transition-all duration-300 group cursor-default"
                                        >
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-start gap-3">
                                                    <div className="flex-shrink-0 mt-1">
                                                        <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(220,38,38,0.6)] group-hover:bg-red-400 transition-colors"></div>
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <h5 className="text-base sm:text-lg font-semibold text-white group-hover:text-red-100 transition-colors">
                                                            {exp.position}
                                                        </h5>
                                                        <div className="flex flex-wrap items-center gap-2 ">
                                                            <p className="text-sm text-red-400 font-medium">{exp.company}</p>
                                                            <span className="hidden sm:inline text-slate-600">•</span>
                                                            <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">{exp.period}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.h4 
                                    variants={itemVariants}
                                    className="text-sm font-semibold text-red-400 mb-4 uppercase tracking-wider pt-8"
                                >
                                    Logros Destacados
                                </motion.h4>
                                <ul className="space-y-3">
                                    {highlights.map((highlight, idx) => (
                                        <motion.li 
                                            key={idx} 
                                            variants={listVariants}
                                            className="flex gap-3 text-gray-300 text-sm leading-relaxed"
                                        >
                                            <span className="text-red-500 mt-1.5 flex-shrink-0 text-xs">●</span>
                                            <span>{highlight}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        <motion.div 
                            className="relative border-t lg:border-t-0 lg:border-l border-white/5 flex items-center justify-center overflow-hidden bg-[#020202] py-10 lg:py-0"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#000_100%)] pointer-events-none" />

                            <div className="scale-[0.65] sm:scale-75 md:scale-90 lg:scale-100 origin-center z-10">
                                <TechStackVertical />
                            </div>
                        </motion.div>
                    </div>
                </Card>
            </div>
        </section>
    );
};