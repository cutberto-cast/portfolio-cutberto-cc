'use client';
import React from 'react';
import { Download, Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export const Hero = () => {

    type ContactItem = {
        icon: React.ElementType;
        text: string;
        href?: string;
        type: 'link' | 'info';
    };

    const contactLinks: ContactItem[] = [
        { icon: Github, text: "GitHub", href: "https://github.com/cutberto-cast", type: "link" },
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
        <section id="home" className="min-h-[95vh] flex items-center justify-center px-4 md:px-8 py-16 md:py-20 overflow-hidden relative" >
            <div className="max-w-7xl w-full mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    <div className="order-2 lg:order-1 w-full lg:w-1/2 space-y-8 animate-slideUp">
                        <div>
                            <h1 className="font-outfit text-5xl md:text-7xl font-bold text-white mb-4 leading-[0.9] tracking-tight">
                                Cutberto <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">
                                    Colohua
                                </span>
                            </h1>

                            <h2 className="font-outfit text-2xl md:text-3xl text-gray-400 font-light mb-6 flex items-center gap-3 flex-wrap">
                                Desarrollador
                                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-lg md:text-xl font-medium">
                                    Full Stack
                                </span>
                            </h2>

                            <p className="font-inter text-lg text-gray-300 mb-8 max-w-xl leading-relaxed">
                                Especializado en desarrollo web
                                y soluciones tecnológicas innovadoras. +3 años de experiencia creando aplicaciones modernas.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {contactLinks.map((item, idx) => {
                                const Icon = item.icon;
                                const commonClasses = `group flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900/40 backdrop-blur-md border border-white/5 transition-all duration-300
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
                                className="group flex items-center gap-3 px-4 py-2.5 rounded-xl bg-gradient-to-r from-red-600/30 to-red-700/30 backdrop-blur-md border border-red-500/30 hover:bg-gradient-to-r hover:from-red-600/40 hover:to-red-700/40 hover:border-red-400/50 hover:scale-105 transition-all duration-300 cursor-pointer shadow-[0_0_15px_rgba(220,38,38,0.3)]" >
                                <div className="flex items-center justify-center text-white group-hover:text-red-100 transition-colors">
                                    <Download size={18} />
                                </div>
                                <span className="text-sm font-medium text-white group-hover:text-red-100 transition-colors">
                                    Descargar CV
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className='contenedorModelo order-1 lg:order-2'>
                        <Spline scene="https://prod.spline.design/Mjfx4QQSyt2ytWX8/scene.splinecode" className="modelo"/>
                    </div>
                </div>
            </div>
        </section>
    );
};