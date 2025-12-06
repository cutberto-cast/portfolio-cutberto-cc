'use client';
import React from 'react';
import { Download, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Monitor3D } from '../ui/Monitor3d';

export const Hero = () => {

    type ContactItem = {
        icon: React.ElementType;
        text: string;
        href?: string;
        type: 'link' | 'info';
    };

    const contactLinks: ContactItem[] = [
        { icon: Github, text: "GitHub", href: "https://github.com/tu-usuario", type: "link" },
        { icon: Linkedin, text: "LinkedIn", href: "https://linkedin.com/in/cutberto-colohua-390b03321", type: "link" },
        { icon: Mail, text: "cutbertocolohua@gmail.com", href: "mailto:cutbertocolohua@gmail.com", type: "link" },
        { icon: Phone, text: "272 2815138", href: "tel:2722815138", type: "link" },
        { icon: MapPin, text: "Veracruz, México", type: "info" },
    ];

    const handleDownloadCV = () => {
        const pdfUrl = '/cv/Cutberto_Colohua_CV.pdf';

        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Cutberto_Colohua_CV.pdf'
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        console.log('CV descargado');
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4 md:px-8 py-16 md:py-20 overflow-hidden relative">

            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[100px]"></div>
            </div>

            <div className="max-w-7xl w-full mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="space-y-8 animate-slideUp">
                        <div>
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 leading-tight tracking-tight">
                                Cutberto Colohua
                            </h1>
                            <h2 className="text-2xl md:text-3xl text-gray-400 font-light mb-6">
                                Desarrollador <span className="text-white font-semibold">Full Stack</span>
                            </h2>
                            <p className="text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
                                Ingeniero en Informática especializado en desarrollo web, análisis de datos
                                y soluciones tecnológicas innovadoras. +3 años de experiencia creando aplicaciones modernas.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {contactLinks.map((item, idx) => {
                                const Icon = item.icon;

                                const commonClasses = ` group flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900/40 backdrop-blur-md border border-white/5 transition-all duration-300
                                    ${item.type === 'link' ? 'hover:bg-red-950/30 hover:border-red-500/30 hover:scale-105 cursor-pointer' : 'cursor-default'}`;

                                const content = (
                                    <>
                                        <div className="flex items-center justify-center text-red-400 group-hover:text-red-300 transition-colors">
                                            <Icon size={18} />
                                        </div>
                                        <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">
                                            {item.text}
                                        </span>
                                    </>
                                );

                                if (item.type === 'link' && item.href) {
                                    return (
                                        <a key={idx} href={item.href} target={item.text === 'GitHub' || item.text === 'LinkedIn' ? '_blank' : undefined} rel="noopener noreferrer" className={commonClasses} >
                                            {content}
                                        </a>
                                    );
                                }

                                return (
                                    <div key={idx} className={commonClasses}>
                                        {content}
                                    </div>
                                );
                            })}

                            <button
                                onClick={handleDownloadCV}
                                className="group flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-600/30 to-red-700/30  backdrop-blur-md border border-red-500/30 hover:bg-gradient-to-r hover:from-red-600/40 hover:to-red-700/40 hover:border-red-400/50 hover:scale-105 transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)]" >
                                <div className="flex items-center justify-center text-white group-hover:text-red-100 transition-colors">
                                    <Download size={18} />
                                </div>
                                <span className="text-sm font-medium text-white group-hover:text-red-100 transition-colors">
                                    Descargar CV
                                </span>
                            </button>
                        </div>
                    </div>

                    <div className="hidden lg:block animate-fadeIn">
                        <Monitor3D />
                    </div>
                </div>
            </div>
        </section>
    );
};