'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Github, Lock, ExternalLink, Shield } from 'lucide-react';
import { GradientText } from '../ui/GradientTexts';
import { motion, AnimatePresence } from 'framer-motion';

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
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 300 : -300,
            opacity: 0
        })
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        if (newDirection === 1) {
            setCurrent((prev) => (prev + 1) % images.length);
        } else {
            setCurrent((prev) => (prev - 1 + images.length) % images.length);
        }
    };

    return (
        <div className="relative w-full aspect-video bg-slate-900/50 rounded-lg overflow-hidden isolate group">
            {images.length > 0 ? (
                <>
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.img
                            key={current}
                            src={images[current]}
                            alt={`${title} - Captura ${current + 1}`}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            className="absolute w-full h-full object-cover"
                        />
                    </AnimatePresence>

                    {images.length > 1 && (
                        <>
                            <motion.button
                                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.8)" }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => paginate(-1)}
                                className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            >
                                <ChevronLeft size={20} />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.8)" }}
                                whileTap={{ scale: 0.9 }}
                                onClick={() => paginate(1)}
                                className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            >
                                <ChevronRight size={20} />
                            </motion.button>

                            <div className="absolute bottom-2 right-2 px-3 py-1 rounded-lg bg-black/60 backdrop-blur-sm text-xs text-white z-10">
                                {current + 1} / {images.length}
                            </div>
                        </>
                    )}
                </>
            ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-900/50">
                    <div className="text-center">
                        <motion.div
                            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 3, repeat: Infinity }}
                        >
                            <Shield size={48} className="mx-auto mb-2 text-gray-600" />
                        </motion.div>
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
        <section id="projects" className="min-h-screen flex items-center section-padding py-20">
            <div className="max-w-7xl w-full mx-auto px-4 md:px-8">
                
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        <GradientText>Proyectos</GradientText> Destacados
                    </h2>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        Selección de proyectos donde he aplicado mis habilidades en desarrollo full-stack.
                        Algunos proyectos están protegidos por acuerdos de confidencialidad (NDA).
                    </p>
                </motion.div>

                <div className="space-y-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                            className="glass-card rounded-2xl overflow-hidden border border-white/5 bg-slate-900/30 hover:border-white/10 transition-colors"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8">
                                
                                <div>
                                    <ImageGallery images={project.images} title={project.title} />

                                    {project.images.length > 1 && (
                                        <div className="flex justify-center gap-2 mt-4">
                                            {project.images.map((_, idx) => (
                                                <div
                                                    key={idx}
                                                    className={`h-1.5 rounded-full transition-all duration-300 ${idx === 0
                                                        ? 'bg-lava-bright w-6 opacity-50'
                                                        : 'bg-gray-700 w-1.5'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-col h-full">
                                    <div className="flex items-start justify-between mb-4 gap-4">
                                        <div>
                                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-tight">
                                                {project.title}
                                            </h3>
                                            <p className="text-red-400 font-medium text-sm">
                                                {project.role}
                                            </p>
                                        </div>
                                        <ProjectTypeBadge type={project.type} />
                                    </div>

                                    <div className="flex-grow">
                                        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                                            {project.description}
                                        </p>

                                        {(project.type === 'nda' || project.type === 'private') && (
                                            <div className="mb-6 p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/10 flex gap-3">
                                                <Shield size={20} className="text-yellow-500 flex-shrink-0 mt-0.5" />
                                                <div className="text-xs md:text-sm text-gray-400">
                                                    <p className="text-yellow-500/90 font-medium mb-1">
                                                        {project.type === 'nda' ? 'Acceso Restringido' : 'Proyecto Confidencial'}
                                                    </p>
                                                    {project.type === 'nda'
                                                        ? 'Este proyecto está protegido por NDA. Las capturas mostradas pertenecen a módulos públicos o autorizados.'
                                                        : 'Desarrollado bajo estricto contrato de confidencialidad. No es posible mostrar código ni interfaces.'
                                                    }
                                                    {project.company && <span className="block mt-1 opacity-70">Para: {project.company}</span>}
                                                </div>
                                            </div>
                                        )}

                                        <div className="mb-8">
                                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Tecnologías</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech, idx) => (
                                                    <motion.span
                                                        key={idx}
                                                        whileHover={{ scale: 1.05, y: -2 }}
                                                        className="px-3 py-1.5 rounded-lg bg-slate-800/50 border border-white/5 text-xs text-gray-300 cursor-default hover:text-white hover:border-white/20 transition-colors"
                                                    >
                                                        {tech}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {(project.github || project.demo) && (
                                        <div className="flex flex-wrap gap-4 mt-auto pt-6 border-t border-white/5">
                                            {project.github && (
                                                <motion.a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-sm font-medium transition-colors"
                                                >
                                                    <Github size={18} />
                                                    <span>Código Fuente</span>
                                                </motion.a>
                                            )}
                                            {project.demo && (
                                                <motion.a
                                                    href={project.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-500 hover:to-orange-500 text-white text-sm font-medium shadow-lg shadow-red-900/20 transition-all"
                                                >
                                                    <ExternalLink size={18} />
                                                    <span>Ver Demo</span>
                                                </motion.a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};