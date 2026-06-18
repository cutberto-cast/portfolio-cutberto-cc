'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Github, Lock, ExternalLink, Shield, CheckCircle2, Clock, ChevronDown, ChevronUp, Store, LayoutDashboard } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS_DATA, type ProjectData, type ProjectType, type ProjectStatus } from '@/app/lib/constants';
import { Reveal, StaggerGroup, StaggerItem } from '../ui/Reveal';

const StatusBadge = ({ status }: { status?: ProjectStatus }) => {
    if (!status) return null;
    const isComplete = status === 'completado';
    return (
        <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium border ${
            isComplete
                ? 'bg-green-500/10 border-green-500/30 text-green-400'
                : 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400'
        }`}>
            {isComplete ? <CheckCircle2 size={12} /> : <Clock size={12} />}
            <span>{isComplete ? 'Completado' : 'En desarrollo'}</span>
        </div>
    );
};

const ProjectTypeBadge = ({ type }: { type: ProjectType }) => {
    const config = {
        open: { icon: <Github size={14} />, text: 'Open', color: 'bg-green-500/10 border-green-500/30 text-green-400' },
        nda: { icon: <Shield size={14} />, text: 'Bajo NDA', color: 'bg-yellow-500/10 border-yellow-500/30 text-yellow-400' },
        private: { icon: <Lock size={14} />, text: 'Confidencial', color: 'bg-red-500/10 border-red-500/30 text-red-400' },
    };
    const { icon, text, color } = config[type];
    return (
        <div className={`inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium border ${color}`}>
            {icon}
            <span>{text}</span>
        </div>
    );
};

interface ImageGalleryProps {
    images: string[];
    title: string;
    /** ms between automatic slides. */
    autoPlayInterval?: number;
    /** Pause the automatic advance while the pointer hovers the gallery. */
    pauseOnHover?: boolean;
}

const ImageGallery = ({ images, title, autoPlayInterval = 2800, pauseOnHover = true }: ImageGalleryProps) => {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isHovering, setIsHovering] = useState(false);

    const slideVariants = {
        enter: (dir: number) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
        center: { zIndex: 1, x: 0, opacity: 1 },
        exit: (dir: number) => ({ zIndex: 0, x: dir < 0 ? 300 : -300, opacity: 0 }),
    };

    const paginate = useCallback((newDir: number) => {
        setDirection(newDir);
        setCurrent((prev) =>
            newDir === 1 ? (prev + 1) % images.length : (prev - 1 + images.length) % images.length
        );
    }, [images.length]);

    // Automatic, continuous advance — smooth crossfade/slide handled by AnimatePresence below.
    useEffect(() => {
        if (images.length < 2) return;
        if (pauseOnHover && isHovering) return;

        const id = setInterval(() => paginate(1), autoPlayInterval);
        return () => clearInterval(id);
    }, [images.length, pauseOnHover, isHovering, autoPlayInterval, paginate]);

    return (
        <div
            className="relative w-full aspect-video bg-slate-900/50 rounded-lg overflow-hidden isolate group"
            onMouseEnter={() => pauseOnHover && setIsHovering(true)}
            onMouseLeave={() => pauseOnHover && setIsHovering(false)}
        >
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
                            transition={{ x: { type: 'spring', stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                            className="absolute w-full h-full object-cover"
                        />
                    </AnimatePresence>
                    {images.length > 1 && (
                        <>
                            <button onClick={() => paginate(-1)}
                                className="press-feedback absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <ChevronLeft size={20} />
                            </button>
                            <button onClick={() => paginate(1)}
                                className="press-feedback absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 flex items-center justify-center text-white z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                <ChevronRight size={20} />
                            </button>
                            <div className="absolute bottom-2 right-2 px-3 py-1 rounded-lg bg-black/60 text-xs text-white z-10">
                                {current + 1} / {images.length}
                            </div>
                            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                {images.map((_, idx) => (
                                    <div
                                        key={idx}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${
                                            idx === current ? 'bg-red-500 w-6' : 'bg-white/40 w-1.5'
                                        }`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </>
            ) : (
                <div className="w-full h-full flex items-center justify-center bg-slate-900/50">
                    <div className="text-center">
                        <Shield size={48} className="mx-auto mb-2 text-gray-600 opacity-50" />
                        <p className="text-gray-500 text-sm">Capturas próximamente</p>
                    </div>
                </div>
            )}
        </div>
    );
};

const ProjectCard = ({ project }: { project: ProjectData }) => {
    const [showFeatures, setShowFeatures] = useState(false);

    return (
        <div className="rounded-2xl overflow-hidden border border-white/5 bg-slate-900/30 transition-colors duration-300 hover:border-white/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6 md:p-8">
                <div>
                    <ImageGallery images={project.images} title={project.title} />
                </div>

                <div className="flex flex-col h-full">
                    <div className="flex items-start justify-between mb-3 gap-4">
                        <div className="flex-1 min-w-0">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-1 leading-tight">{project.title}</h3>
                            <p className="text-red-400 font-medium text-sm">{project.role}</p>
                        </div>
                        <div className="flex flex-col gap-1.5 items-end flex-shrink-0">
                            <ProjectTypeBadge type={project.type} />
                            <StatusBadge status={project.status} />
                        </div>
                    </div>

                    <div className="flex-grow">
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-5">{project.description}</p>

                        {(project.type === 'nda' || project.type === 'private') && (
                            <div className="mb-5 p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/10 flex gap-3">
                                <Shield size={20} className="text-yellow-500 flex-shrink-0 mt-0.5" />
                                <div className="text-xs md:text-sm text-gray-400">
                                    <p className="text-yellow-500/90 font-medium mb-1">
                                        {project.type === 'nda' ? 'Acceso Restringido' : 'Proyecto Confidencial'}
                                    </p>
                                    {project.type === 'nda'
                                        ? 'Este proyecto está protegido por NDA. Las capturas mostradas pertenecen a módulos públicos o autorizados.'
                                        : 'Desarrollado bajo estricto contrato de confidencialidad.'}
                                    {project.company && <span className="block mt-1 opacity-70">Para: {project.company}</span>}
                                </div>
                            </div>
                        )}

                        {project.features && project.features.length > 0 && (
                            <div className="mb-5">
                                <button
                                    onClick={() => setShowFeatures(!showFeatures)}
                                    className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider mb-3"
                                >
                                    Funcionalidades clave
                                    {showFeatures ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                                </button>
                                <AnimatePresence>
                                    {showFeatures && (
                                        <motion.ul
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="space-y-1.5 overflow-hidden"
                                        >
                                            {project.features.map((feat, i) => (
                                                <li key={i} className="flex gap-2 text-xs text-gray-400 leading-relaxed">
                                                    <span className="text-red-500 mt-1 flex-shrink-0">●</span>
                                                    <span>{feat}</span>
                                                </li>
                                            ))}
                                        </motion.ul>
                                    )}
                                </AnimatePresence>
                            </div>
                        )}

                        <div className="mb-6">
                            <h4 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Tecnologías</h4>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1.5 rounded-lg bg-slate-800/50 border border-white/5 text-xs text-gray-300 cursor-default"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {(project.github || project.demo || project.demoStore || project.demoAdmin) && (
                        <div className="flex flex-wrap gap-4 mt-auto pt-6 border-t border-white/5">
                            {project.github && (
                                <a href={project.github} target="_blank" rel="noopener noreferrer"
                                    className="press-feedback flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 text-white text-sm font-medium transition-colors duration-200 hover:bg-slate-700">
                                    <Github size={18} />
                                    <span>Código Fuente</span>
                                </a>
                            )}
                            {project.demoStore && (
                                <a href={project.demoStore} target="_blank" rel="noopener noreferrer"
                                    className="press-feedback flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 text-white text-sm font-medium transition-opacity duration-200 hover:opacity-90">
                                    <Store size={18} />
                                    <span>Ver Tienda</span>
                                </a>
                            )}
                            {project.demoAdmin && (
                                <a href={project.demoAdmin} target="_blank" rel="noopener noreferrer"
                                    className="press-feedback flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 border border-white/10 text-white text-sm font-medium transition-colors duration-200 hover:bg-slate-700">
                                    <LayoutDashboard size={18} />
                                    <span>Ver Admin</span>
                                </a>
                            )}
                            {project.demo && !project.demoStore && !project.demoAdmin && (
                                <a href={project.demo} target="_blank" rel="noopener noreferrer"
                                    className="press-feedback flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 text-white text-sm font-medium transition-opacity duration-200 hover:opacity-90">
                                    <ExternalLink size={18} />
                                    <span>Ver Demo</span>
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

/**
 * 3D coverflow — the active screenshot sits centered and frontal, the rest recede in
 * depth to either side (smaller, dimmer, tilted away). Same "depth" language as the
 * Skills marquee's premium feel, but a linear coverflow instead of a flat scroll.
 * Always advances, never pauses on hover (per design — this is a passive showcase).
 */
const LandingCoverflow = ({ images, title }: { images: string[]; title: string }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (images.length < 2) return;
        const id = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3200);
        return () => clearInterval(id);
    }, [images.length]);

    const shortestOffset = (idx: number) => {
        const len = images.length;
        let diff = idx - current;
        if (diff > len / 2) diff -= len;
        if (diff < -len / 2) diff += len;
        return diff;
    };

    return (
        <div className="relative">
            <div
                className="relative h-[200px] sm:h-[280px] md:h-[360px] overflow-hidden [perspective:1400px]"
                style={{
                    maskImage: 'linear-gradient(90deg, transparent, black 16%, black 84%, transparent)',
                    WebkitMaskImage: 'linear-gradient(90deg, transparent, black 16%, black 84%, transparent)',
                }}
            >
                {images.map((img, idx) => {
                    const offset = shortestOffset(idx);
                    if (Math.abs(offset) > 2) return null;

                    const isActive = offset === 0;
                    const scale = isActive ? 1 : Math.abs(offset) === 1 ? 0.78 : 0.6;
                    const opacity = isActive ? 1 : Math.abs(offset) === 1 ? 0.55 : 0.25;

                    return (
                        <button
                            key={img}
                            onClick={() => setCurrent(idx)}
                            aria-label={`Ver captura ${idx + 1} de ${title}`}
                            tabIndex={isActive ? -1 : 0}
                            className="absolute left-1/2 top-1/2 w-[68%] sm:w-[52%] md:w-[42%] aspect-video rounded-xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 transition-[transform,opacity] duration-700 ease-[var(--ease-out-premium)]"
                            style={{
                                transform: `translate(-50%, -50%) translateX(${offset * 62}%) rotateY(${offset * -28}deg) scale(${scale})`,
                                opacity,
                                zIndex: 10 - Math.abs(offset),
                                pointerEvents: isActive ? 'none' : 'auto',
                            }}
                        >
                            <img
                                src={img}
                                alt={`${title} - captura ${idx + 1}`}
                                className="w-full h-full object-cover"
                            />
                            {!isActive && <div className="absolute inset-0 bg-black/35" />}
                        </button>
                    );
                })}
            </div>

            <div className="flex justify-center gap-2 mt-6">
                {images.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        aria-label={`Ir a captura ${idx + 1}`}
                        className={`press-feedback h-1.5 rounded-full transition-all duration-300 ${
                            idx === current ? 'bg-red-500 w-6' : 'bg-white/20 w-1.5 hover:bg-white/40'
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

/** Landing pages don't carry much technical detail individually — show them as one
 * big, always-moving showcase at the end of the section instead of a regular card. */
const LandingShowcase = ({ project }: { project: ProjectData }) => (
    <Reveal>
        <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="font-outfit text-2xl md:text-3xl font-bold text-white tracking-tight mb-3">
                {project.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">{project.description}</p>
            {project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 justify-center mt-4">
                    {project.technologies.map((tech, idx) => (
                        <span
                            key={idx}
                            className="px-3 py-1.5 rounded-lg bg-slate-800/50 border border-white/5 text-xs text-gray-300 cursor-default"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            )}
        </div>

        <LandingCoverflow images={project.images} title={project.title} />
    </Reveal>
);

const VISIBLE_PROJECTS = PROJECTS_DATA.filter((p) => !p.hidden);
const LANDING_PROJECT = VISIBLE_PROJECTS.find((p) => p.title === 'Landing Pages — AXCAP');
const GRID_PROJECTS = VISIBLE_PROJECTS.filter((p) => p !== LANDING_PROJECT);

export const Projects: React.FC = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center py-20">
            <div className="max-w-7xl w-full mx-auto px-4 md:px-8">

                <Reveal className="text-center mb-10">
                    <h2 className="font-outfit text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                        Proyectos Destacados
                    </h2>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                        Productos SaaS y aplicaciones desarrolladas como fundador de AXCAP y en colaboraciones profesionales.
                    </p>
                </Reveal>

                {GRID_PROJECTS.length > 0 && (
                    <StaggerGroup className="space-y-12" staggerDelay={0.1}>
                        {GRID_PROJECTS.map((project) => (
                            <StaggerItem key={project.id} y={24}>
                                <ProjectCard project={project} />
                            </StaggerItem>
                        ))}
                    </StaggerGroup>
                )}

                {LANDING_PROJECT && (
                    <div className={GRID_PROJECTS.length > 0 ? 'mt-16' : ''}>
                        <LandingShowcase project={LANDING_PROJECT} />
                    </div>
                )}
            </div>
        </section>
    );
};
