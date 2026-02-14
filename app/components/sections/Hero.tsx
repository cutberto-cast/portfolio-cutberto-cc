'use client';
import React from 'react';
import { Download, Github, Linkedin, Mail, Phone } from 'lucide-react';

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
            className="
                min-h-[96vh] flex items-center justify-center bg-black relative
                /* Anulamos los paddings del MainLayout */
                -mx-4 md:-mx-10 lg:-ml-28 lg:-mr-10 
                /* Aseguramos que el contenido no toque los bordes físicos de la pantalla */
                px-4 md:px-10 lg:pl-28 
            "
        >
            <div className="w-full max-w-5xl mx-auto flex flex-col items-center relative">
                <div className="w-full flex justify-center bg-black overflow-hidden">
                    <img
                        src="/herotres.png"
                        alt="Cutberto Colohua"
                        className="w-full h-auto object-contain opacity-90"
                    />
                </div>

                <div className="relative -mt-16 md:-mt-24 lg:-mt-32 z-20 flex flex-col items-center text-center px-6 w-full">
                    <h2 className="font-outfit text-xl md:text-3xl text-white/95 font-light tracking-[0.2em] uppercase mb-4">
                        Desarrollador Full Stack
                    </h2>

                    <p className="font-inter text-gray-300 text-sm md:text-base max-w-lg mb-8 leading-relaxed">
                        Especializado en crear soluciones tecnológicas modernas <br className="hidden md:block" />
                        con un enfoque en diseño y funcionalidad.
                    </p>

                    <div className="flex flex-col md:flex-row items-center gap-6">
                        <button
                            onClick={handleDownloadCV}
                            className="px-8 py-3 rounded-full text-black font-bold hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] active:scale-95"
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.54)',
                                transition: 'background-color 0.3s ease'
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(220, 38, 38, 0.54)'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.54)'}
                        >
                            Descargar CV
                        </button>

                        <div className="flex gap-4">
                            {contactLinks.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <a
                                        key={idx}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 rounded-full border border-white/10 text-gray-400 transition-all"
                                        style={{
                                            backgroundColor: 'transparent',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.backgroundColor = 'rgba(220, 38, 38, 0.54)';
                                            e.currentTarget.style.borderColor = 'rgb(114, 6, 6)';
                                            e.currentTarget.style.color = 'white';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.backgroundColor = 'transparent';
                                            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                            e.currentTarget.style.color = 'rgb(156, 163, 175)'; // text-gray-400
                                        }}
                                    >
                                        <Icon size={18} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};