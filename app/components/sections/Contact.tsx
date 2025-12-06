'use client';

import React from 'react';

import { Send, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import { Card } from '../ui/Card';
import Input from '../ui/Input';
import { Button } from '../ui/Button';

export const Contact = () => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('¡Gracias por tu mensaje! Te contactaré pronto.');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="min-h-[70vh] flex items-center px-4 md:px-8 py-12 md:py-16 overflow-hidden relative">
            
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-64 h-64 bg-red-600/5 rounded-full blur-[80px]"></div>
                <div className="absolute bottom-1/4 -right-20 w-64 h-64 bg-blue-600/5 rounded-full blur-[80px]"></div>
            </div>

            <div className="max-w-6xl w-full mx-auto relative z-10">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 inline-block ">
                        Contacto
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
                    
                    <Card glass="medium" className="p-5 md:p-6 backdrop-blur-xl border-white/10">
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input label="Nombre" name="name" value={formData.name} onChange={handleChange} required />
                                <Input label="Email" type="email" name="email" value={formData.email} onChange={handleChange} required/>
                            </div>

                            <Input label="Asunto" name="subject" value={formData.subject} onChange={handleChange} required />

                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">Mensaje</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    placeholder="Escribe tu mensaje aquí..."
                                    className="w-full px-3 py-2.5 text-sm rounded-lg bg-black/20 backdrop-blur-md border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-transparent transition-all duration-300 resize-none"
                                />
                            </div>

                            <Button
                                type="submit"
                                variant="primary"
                                size="lg"
                                className="w-full flex items-center justify-center gap-2 py-2.5 text-sm
                                        backdrop-blur-md border border-red-500/30
                                        shadow-[0_0_10px_rgba(220,38,38,0.2)]
                                        hover:shadow-[0_0_20px_rgba(220,38,38,0.4)]
                                        bg-gradient-to-r from-red-600/30 to-red-700/30 
                                        hover:bg-gradient-to-r hover:from-red-600/40 hover:to-red-700/40
                                        transition-all duration-300
                                        hover:scale-[1.02]"
                            >
                                <Send size={18} />
                                Enviar Mensaje
                            </Button>
                        </form>

                        <div className="mt-6 pt-6 border-t border-white/10">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-2 text-xs text-gray-400">
                                    <Mail size={14} className="text-red-400" />
                                    <span>cutbertocolohua@gmail.com</span>
                                </div>
                                <div className="flex items-center gap-2 text-xs text-gray-400">
                                    <Phone size={14} className="text-red-400" />
                                    <span>272 2815138</span>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <div className="relative h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl overflow-hidden group">
                        
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/30 via-transparent to-slate-800/30"></div>
                        
                        <div className="relative w-full h-full flex items-center justify-center">
                            <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] group-hover:scale-105 transition-transform duration-700">
                                
                                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-64 h-12 bg-black/30 blur-2xl rounded-full animate-shadow-grow"></div>
                                
                                <div className="relative w-full h-full">
                                    <div className="absolute inset-0 wind-effect">
                                        <div className="relative w-full h-full animate-falling-float group-hover:animate-falling-active">
                                            <Image src="/avatar-contact.png" alt="Contacto - Persona cayendo" fill
                                                className="object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.6)] transition-all duration-500 group-hover:drop-shadow-[0_30px_60px_rgba(220,38,38,0.4)]"
                                                sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 450px"
                                                priority
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-xl"></div>
                                </div>
                                
                                <div className="absolute top-0 left-1/4 w-1 h-24 bg-gradient-to-b from-transparent via-white/40 to-transparent animate-speed-line-1"></div>
                                <div className="absolute top-12 right-1/3 w-1 h-20 bg-gradient-to-b from-transparent via-white/30 to-transparent animate-speed-line-2"></div>
                                <div className="absolute top-24 left-1/3 w-1 h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-speed-line-3"></div>
                            </div>
                        </div>
                        <div className="absolute bottom-6 left-0 right-0 text-center">
                            <p className="text-white/40 text-xs font-light tracking-widest">
                                READY FOR NEW CHALLENGES
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};