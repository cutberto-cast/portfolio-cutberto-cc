'use client';
import { Card } from '../ui/Card';
import { Code, Cpu, Globe } from 'lucide-react';

export const About = () => {
    return (
        <section id="about" className="min-h-[90vh] flex items-center justify-center px-4 relative">
            
            <div className="max-w-7xl w-full mx-auto animate-slideUp">
                <Card glass="pure" className="min-h-[auto] md:h-[550px] p-0 border border-white/10">
                    
                    <div className="flex flex-col md:flex-row w-full h-full">
                        <div className="w-full md:w-2/5 h-72 md:h-full relative flex-shrink-0 group overflow-hidden">
                            <div className="absolute inset-0 bg-slate-900/10 z-10" />
                            <img
                                src="/profileccc.jpeg"
                                alt="Cutberto Colohua"
                                className="w-full h-full object-cover object-center "
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                        </div>
                        <div className="w-full md:w-3/5 p-6 md:p-10 flex flex-col justify-center relative bg-slate-900/10 md:bg-transparent">
                            
                            <div className="mb-6 border-b border-white/10 pb-4">
                                <h2 className="font-outfit text-3xl md:text-4xl font-bold text-white mb-1">
                                    Sobre Mí
                                </h2>
                                <h3 className="font-outfit text-xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-300 font-medium">
                                    Cutberto Colohua
                                </h3>
                            </div>

                            <div className="space-y-4 font-inter text-slate-300 text-sm md:text-base leading-relaxed">
                                <p>
                                    Soy un <strong className="text-white">Ingeniero en Informática</strong> enfocado en construir herramientas digitales que marquen la diferencia. Mi especialidad es el desarrollo Full Stack, donde fusiono la lógica del backend con interfaces fluidas.
                                </p>
                                <p>
                                    Más allá del código, me motiva la resolución creativa de problemas. No se trata solo de programar, sino de <strong className="text-red-400">entender las necesidades</strong> reales y traducirlas en software eficiente y escalable.
                                </p>
                                <p className="hidden md:block">
                                    Siempre estoy explorando nuevas tecnologías para mantener mis habilidades afiladas y entregar resultados modernos y de alta calidad.
                                </p>
                            </div>

                            <div className="mt-8 pt-6 border-t border-white/5 flex gap-4 md:gap-8 overflow-x-auto">
                                <div className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-default">
                                    <Code size={18} className="text-red-500"/>
                                    <span className="text-xs font-medium uppercase tracking-wider whitespace-nowrap">Web Dev</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-default">
                                    <Cpu size={18} className="text-red-500"/>
                                    <span className="text-xs font-medium uppercase tracking-wider whitespace-nowrap">Lógica</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-default">
                                    <Globe size={18} className="text-red-500"/>
                                    <span className="text-xs font-medium uppercase tracking-wider whitespace-nowrap">Soluciones</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
};