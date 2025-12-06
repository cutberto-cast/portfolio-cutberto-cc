'use client';

import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, Layers, Code, Mail } from 'lucide-react';
import { cn } from '@/app/lib/utils/cn';

const navigation = [
    { name: 'Inicio', href: '#home', icon: Home },
    { name: 'Sobre Mí', href: '#about', icon: User },
    { name: 'Experiencia', href: '#experience', icon: Briefcase },
    { name: 'Habilidades', href: '#skills', icon: Layers },
    { name: 'Proyectos', href: '#projects', icon: Code },
    { name: 'Contacto', href: '#contact', icon: Mail },
];

export default function Sidebar() {
    const [activeSection, setActiveSection] = useState('home');

    const liquidGlassStyle = "bg-black/40 backdrop-blur-xl border border-white/10 shadow-[inset_0_0_15px_rgba(255,255,255,0.05)]";

    const scrollToSection = (href: string) => {
        const container = document.getElementById('main-scroll-container');
        const element = document.querySelector(href) as HTMLElement;

        if (container && element) {
            const topPos = element.offsetTop - container.offsetTop;

            container.scrollTo({
                top: topPos - 40,
                behavior: 'smooth'
            });
            setActiveSection(href.substring(1));
        }
    };

    useEffect(() => {
        const container = document.getElementById('main-scroll-container');
        if (!container) return;

        const handleScroll = () => {
            const scrollPosition = container.scrollTop + (container.clientHeight / 3);

            for (const item of navigation) {
                const element = document.querySelector(item.href) as HTMLElement;
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;

                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(item.href.substring(1));
                        break;
                    }
                }
            }
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-6">
                <div className={cn("flex flex-col gap-3 p-3 rounded-full transition-all duration-300", liquidGlassStyle)}>
                    {navigation.map((item) => {
                        const Icon = item.icon;
                        const isActive = activeSection === item.href.substring(1);
                        return (
                            <div key={item.name} className="relative group">
                                <button
                                    onClick={() => scrollToSection(item.href)}
                                    className={cn(
                                        "w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 relative z-10",
                                        isActive ? "bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.6)] scale-110" : "text-slate-400 hover:text-white hover:bg-white/10"
                                    )}
                                >
                                    <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
                                </button>
                            </div>
                        )
                    })}
                </div>
            </nav>

            <nav className="lg:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md">
                <div className={cn("flex items-center justify-between px-6 py-4 rounded-2xl", liquidGlassStyle)}>
                    {navigation.map((item) => (
                        <button key={item.name} onClick={() => scrollToSection(item.href)} className="relative flex flex-col items-center">
                            <item.icon size={24} className={activeSection === item.href.substring(1) ? "text-red-500" : "text-slate-400"} />
                        </button>
                    ))}
                </div>
            </nav>
        </>
    );
}