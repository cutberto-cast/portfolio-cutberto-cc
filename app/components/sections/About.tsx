'use client';

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import { Card } from '../ui/Card';

export const About = () => {
    return (
        <section id="about" className="min-h-screen flex items-center px-4 md:px-8  overflow-hidden">
            <div className="max-w-7xl w-full mx-auto">
                <h2 className="text-4xl font-bold text-white mb-12">
                    Sobre Mí
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <Card glass="medium" className="lg:col-span-2 p-8 group">
                        <div className="flex flex-col md:flex-row gap-8  items-center justify-center">

                            <div className="flex-shrink-0 mx-auto md:mx-0">
                                <div className="relative w-48 sm:w-56 aspect-[828/992] rounded-2xl overflow-hidden border border-white/10 shadow-2xl group-hover:shadow-[0_0_30px_rgba(220,38,38,0.3)] transition-all duration-500">
                                    <img
                                        src="/profileccc.jpeg"
                                        alt="Cutberto Colohua"
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 opacity-60"></div>
                                </div>
                            </div>

                            <div className="flex-1 text-center md:text-left">
                                <h3 className="text-3xl font-bold text-white mb-2">
                                    Cutberto Colohua Castillo
                                </h3>
                                <div className="inline-block px-3 py-1 rounded-full bg-red-900/20 border border-red-500/20 mb-6">
                                    <p className="text-lg text-red-400 font-medium">
                                        Ingeniero en Informática
                                    </p>
                                </div>

                                <p className="text-gray-300 leading-relaxed text-base md:text-lg">
                                    Desarrollador Fullstack con experiencia en la creación de aplicaciones web y móviles, utilizando principalmente <span className="text-white font-medium">React</span>,
                                    <span className="text-white font-medium"> React Native</span> y <span className="text-white font-medium">TypeScript</span>.
                                    Experto en entornos backend con Node.js y Prisma.
                                </p>
                                <p className="text-gray-300 leading-relaxed mt-4 text-base md:text-lg">
                                    Me enfoco en soluciones escalables, optimización de procesos y colaboración efectiva con equipos multidisciplinarios.
                                </p>
                            </div>
                        </div>
                    </Card>

                    <Card glass="medium" className="p-8 flex flex-col h-full">
                        <h4 className="text-xl font-semibold text-white mb-6 border-b border-white/10 pb-2">
                            Contacto
                        </h4>

                        <div className="flex flex-col md:flex-row flex-1 min-h-[150px]">
                            <div className="flex-1 space-y-4">
                                <a href="mailto:cutbertocolohua@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all border border-transparent hover:border-white/5 group">
                                    <div className="p-2 bg-red-600/10 rounded-lg group-hover:bg-red-600/20 transition-colors">
                                        <Mail size={20} className="text-red-400" />
                                    </div>
                                    <span className="text-sm truncate font-medium">cutbertocolohua@gmail.com</span>
                                </a>

                                <a href="tel:2722815138" className="flex items-center gap-4 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all border border-transparent hover:border-white/5 group">
                                    <div className="p-2 bg-red-600/10 rounded-lg group-hover:bg-red-600/20 transition-colors">
                                        <Phone size={20} className="text-red-400" />
                                    </div>
                                    <span className="text-sm font-medium">272 2815138</span>
                                </a>

                                <div className="flex items-center gap-4 text-gray-300  rounded-xl border border-transparent group">
                                    <div className="p-2 bg-red-600/10 rounded-lg">
                                        <MapPin size={20} className="text-red-400" />
                                    </div>
                                    <span className="text-sm font-medium">Veracruz, México</span>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
};