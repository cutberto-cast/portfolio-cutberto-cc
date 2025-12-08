'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Github, Lock, ExternalLink, Shield } from 'lucide-react';
import { GradientText } from '../ui/GradientTexts';

type ProjectType = 'open' | 'nda' | 'private';

interface Project {
    id: number;
    title: string;
    description: string;
    role: string;
    technologies: string[];
    images: string[];
    type: ProjectType;
    github?: string;
    demo?: string;
    company?: string;
}

type BadgeConfig = {
    icon: React.ReactNode;
    text?: string;
    color: string;
};

type BadgeConfigMap = Record<ProjectType, BadgeConfig>;

const ProjectTypeBadge = ({ type }: { type: ProjectType }) => {
    const config: BadgeConfigMap = {
        open: {
            icon: <Github size={14} />,
            color: 'bg-green-500/10 border-green-500/30 text-green-400'
        },
        nda: {
            icon: <Shield size={14} />,
            text: 'Bajo NDA',
            color: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400'
        },
        private: {
            icon: <Lock size={14} />,
            text: 'Confidencial',
            color: 'bg-red-500/10 border-red-500/30 text-red-400'
        }
    };

    const { icon, text, color } = config[type];

    return (
        <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium border ${color}`}>
            {icon}
            {text && <span>{text}</span>}
        </div>
    );
};

const ImageGallery = ({ images, title }: { images: string[], title: string }) => {
    const [current, setCurrent] = useState(0);

    const next = () => setCurrent((prev) => (prev + 1) % images.length);
    const prev = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div className="relative w-full aspect-video bg-slate-900/50 rounded-lg overflow-hidden isolate">
            {images.length > 0 ? (
                <>
                    <img
                        src={images[current]}
                        alt={`${title} - Captura ${current + 1}`}
                        className="w-full h-full object-cover"
                    />

                    {images.length > 1 && (
                        <>
                            <button
                                onClick={prev}
                                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-colors z-10"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={next}
                                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-colors z-10"
                            >
                                <ChevronRight size={20} />
                            </button>

                            <div className="absolute bottom-2 right-2 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-sm text-xs text-white z-10">
                                {current + 1} / {images.length}
                            </div>
                        </>
                    )}
                </>
            ) : (
                <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                        <Shield size={48} className="mx-auto mb-2 text-gray-600" />
                        <p className="text-gray-500 text-sm">Contenido protegido por NDA</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export const Projects: React.FC = () => {
    const projects: Project[] = [
        {
            id: 1,
            title: 'Sistema de Gestión de Proyectos Inmobiliarios',
            description: 'Plataforma completa para gestión de proyectos inmobiliarios. Incluye administración de finanzas (ingresos/gastos), repositorio de documentación, y cronograma tipo Gantt para seguimiento de etapas y hitos del proyecto.',
            role: 'Desarrollador Full Stack',
            technologies: ['Angular', 'TypeScript', 'RxJS', 'Angular Material ', 'Spring Boot', 'JWT', 'REST AP', 'Postman'],
            images: [
                '/projects/project-manager-1.png',
                '/projects/project-manager-2.png',
                '/projects/project-manager-3.png',
            ],
            type: 'open',
            github: 'https://github.com/tu-usuario/project-manager',
        },
        {
            id: 2,
            title: 'Sistema de Recompensas Inter-empresarial',
            description: 'Sistema de intercambio de recompensas entre grupo de empresas asociadas. Los usuarios acumulan puntos consumiendo en una empresa miembro y pueden canjearlos en otras empresas del grupo.',
            role: 'Desarrollador Frontend (Colaboración)',
            technologies: ['Angular', 'TypeScript', 'RxJS', 'Angular Material ', 'Spring Boot', 'JWT', 'REST AP', 'Postman'],
            images: [
                '/projects/rewards-login.png',
                '/projects/rewards-signup.png',
            ],
            type: 'nda',
            company: 'Cliente empresarial',
        },
        {
            id: 3,
            title: 'App Móvil de Gestión de Repartidores',
            description: 'Aplicación móvil (React Native) y panel web de administración para gestión completa de repartidores. La app móvil maneja tareas diarias: rutas, entregas, cobranza. El panel web permite asignar tareas, gestionar permisos y monitorear operaciones en tiempo real.',
            role: 'Desarrollador Full Stack (Mobile + Web)',
            technologies: ['React Native', 'React', 'Expo', 'Node.js', 'Fetch API', 'Axios ', 'TypeScript'],
            images: [],
            type: 'private',
            company: 'Empresa de logística',
        },
    ];

    return (
        <section id="projects" className="min-h-screen flex items-center section-padding">
            <div className="max-w-7xl w-full mx-auto">
                <div className="text-center mb-12 scroll-animate">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        <GradientText>Proyectos</GradientText> Destacados
                    </h2>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        Selección de proyectos donde he aplicado mis habilidades en desarrollo full-stack.
                        Algunos proyectos están protegidos por acuerdos de confidencialidad (NDA).
                    </p>
                </div>

                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="glass-card rounded-2xl overflow-hidden scroll-animate"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 p-6">
                                <div>
                                    <ImageGallery images={project.images} title={project.title} />

                                    {project.images.length > 1 && (
                                        <div className="flex justify-center gap-1 mt-3">
                                            {project.images.map((_, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`w-2 h-2 rounded-full transition-all ${idx === 0
                                                        ? 'bg-lava-bright w-6'
                                                        : 'bg-gray-600'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-col">
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold text-white ">
                                                {project.title}
                                            </h3>
                                        </div>
                                        <ProjectTypeBadge type={project.type} />
                                    </div>

                                    <p className="text-gray-300 text-sm leading-relaxed  ">
                                        {project.role}
                                    </p>
                                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                        {project.description}
                                    </p>

                                    {(project.type === 'nda' || project.type === 'private') && (
                                        <div className="mb-4 p-3 rounded-lg bg-yellow-500/5 border border-yellow-500/20">
                                            <div className="flex items-start gap-2">
                                                <Shield size={16} className="text-yellow-500 mt-0.5 flex-shrink-0" />
                                                <p className="text-xs text-gray-400">
                                                    {project.type === 'nda'
                                                        ? 'Este proyecto está protegido por acuerdo de confidencialidad (NDA). Solo se muestran capturas de áreas públicas.'
                                                        : 'Proyecto desarrollado bajo contrato de confidencialidad. No es posible mostrar capturas o código fuente.'
                                                    }
                                                    {project.company && ` Desarrollado para: ${project.company}`}
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    <div className="mb-4">
                                        <h4 className="text-sm font-semibold text-gray-400 mb-2">Tecnologías:</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.technologies.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="px-3 py-1 rounded-lg glass-premium text-xs text-gray-300 hover:scale-105 transition-transform"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {(project.github || project.demo) && (
                                        <div className="flex gap-3 mt-auto border-t border-white/10">
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-4 py-2 rounded-lg glass-premium hover:bg-white/10 transition-colors text-sm text-gray-300 hover:text-white"
                                                >
                                                    <Github size={16} />
                                                    <span>Github</span>
                                                </a>
                                            )}
                                            {project.demo && (
                                                <a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-lava-core/20 border border-lava-core/30 hover:bg-lava-core/30 transition-colors text-sm text-lava-bright"
                                                >
                                                    <ExternalLink size={16} />
                                                    <span>Ver Demo</span>
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};