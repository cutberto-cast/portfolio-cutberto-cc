'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Reveal, StaggerGroup, StaggerItem } from '../ui/Reveal';
import { BlobBackground } from '../ui/BlobButton';

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

export const Hero = () => {
    const contactLinks = [
        { icon: Github, href: "https://github.com/cutberto-cast" },
        { icon: Linkedin, href: "https://linkedin.com/in/cutberto-colohua-390b03321" },
        { icon: Mail, href: "mailto:cutbertocolohua@gmail.com" },
        { icon: Phone, href: "tel:2722815138" },
    ];

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/cv/Cutberto_Colohua_CV.pdf';
        link.download = 'Cutberto_Colohua_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section
            id="home"
            className="min-h-[96vh] flex items-center justify-center bg-black relative -mx-4 md:-mx-10 lg:-ml-28 lg:-mr-10 px-4 md:px-10 lg:pl-28"
        >
            <div className="w-full max-w-5xl mx-auto flex flex-col items-center relative">
                <h1 className="sr-only">Cutberto Colohua — Desarrollador Full Stack</h1>

                <motion.div
                    className="w-full flex justify-center bg-black overflow-hidden"
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, ease: EASE_OUT }}
                >
                    <Image
                        src="/herotres.png"
                        alt="Cutberto Colohua"
                        width={1200}
                        height={800}
                        priority
                        className="w-full h-auto object-contain opacity-90"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </motion.div>

                <div className="relative -mt-16 md:-mt-24 lg:-mt-32 z-20 flex flex-col items-center text-center px-6 w-full">
                    <Reveal delay={0.15}>
                        <h2 className="font-outfit text-xl md:text-3xl text-white/95 font-light tracking-[0.2em] uppercase mb-2">
                            Desarrollador Full Stack
                        </h2>

                        <p className="font-inter text-gray-300 text-sm md:text-base max-w-lg mb-8 leading-relaxed">
                            Diseño y desarrollo productos digitales que resuelven problemas reales <br className="hidden md:block" />
                            para negocios reales.
                        </p>
                    </Reveal>

                    <StaggerGroup className="flex flex-col md:flex-row items-center gap-4 mb-6" staggerDelay={0.08}>
                        <StaggerItem>
                            <a
                                href="#projects"
                                className="press-feedback group inline-flex items-center gap-2 px-8 py-3 rounded-full text-black font-bold bg-[rgba(255,255,255,0.54)] transition-[background-color,transform,box-shadow] duration-300 ease-[var(--ease-out-premium)] hover:bg-white [@media(hover:hover)_and_(pointer:fine)]:hover:-translate-y-0.5 [@media(hover:hover)_and_(pointer:fine)]:hover:shadow-[0_12px_28px_-12px_rgba(255,255,255,0.35)]"
                            >
                                <span>Ver mis proyectos</span>
                                <span className="transition-transform duration-300 ease-[var(--ease-out-premium)] [@media(hover:hover)_and_(pointer:fine)]:group-hover:translate-x-1">
                                    →
                                </span>
                            </a>
                        </StaggerItem>
                        <StaggerItem>
                            <button onClick={handleDownloadCV} className="blob-btn">
                                <Download size={16} />
                                Descargar CV
                                <BlobBackground />
                            </button>
                        </StaggerItem>
                    </StaggerGroup>

                    <StaggerGroup className="flex gap-4 mt-4" staggerDelay={0.06}>
                        {contactLinks.map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <StaggerItem key={idx}>
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="blob-btn blob-btn--circle"
                                    >
                                        <Icon size={18} />
                                        <BlobBackground />
                                    </a>
                                </StaggerItem>
                            );
                        })}
                    </StaggerGroup>
                </div>
            </div>
        </section>
    );
};
