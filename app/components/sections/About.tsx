'use client';
import { useEffect, useRef, useState } from 'react';
import { Card } from '../ui/Card';
import { Code, Cpu, Globe } from 'lucide-react';

function useCountUp(target: number, duration = 1500, start = false) {
    const [count, setCount] = useState(0);
    useEffect(() => {
        if (!start) return;
        let startTime: number | null = null;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }, [target, duration, start]);
    return count;
}

export const About = () => {
    const [metricsVisible, setMetricsVisible] = useState(false);
    const metricsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setMetricsVisible(true); },
            { threshold: 0.5 }
        );
        if (metricsRef.current) observer.observe(metricsRef.current);
        return () => observer.disconnect();
    }, []);

    const saasCount = useCountUp(6, 1200, metricsVisible);
    const yearsCount = useCountUp(3, 1000, metricsVisible);
    const clientsCount = useCountUp(10, 1400, metricsVisible);

    const metrics = [
        { value: saasCount, suffix: '+', label: 'Productos SaaS' },
        { value: yearsCount, suffix: '+', label: 'Años de Experiencia' },
        { value: clientsCount, suffix: '+', label: 'Clientes' },
    ];

    return (
        <section id="about" className="min-h-[90vh] flex items-center justify-center px-4 relative">
            <div className="max-w-7xl w-full mx-auto">
                <Card glass="pure" className="min-h-[auto] lg:h-[550px] p-0 border border-white/10 overflow-hidden">
                    <div className="flex flex-col lg:flex-row w-full h-full">

                        <div className="w-full lg:w-auto h-72 lg:h-full relative flex-shrink-0 overflow-hidden flex items-center justify-center bg-slate-900/20">
                            <div className="absolute inset-0 bg-slate-900/10 z-10" />
                            <img
                                src="/yo1.jpeg"
                                alt="Cutberto Colohua"
                                className="w-full h-full object-cover object-center lg:w-auto lg:object-contain"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                        </div>

                        <div className="w-full lg:flex-1 p-6 lg:p-10 flex flex-col justify-center relative bg-slate-900/10 lg:bg-transparent">

                            <div className="mb-6 border-b border-white/10 pb-4">
                                <h2 className="font-outfit text-3xl lg:text-4xl font-bold text-white mb-1">
                                    Sobre Mí
                                </h2>
                                <h3 className="font-outfit text-xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-300 font-medium">
                                    Cutberto Colohua
                                </h3>
                            </div>

                            <div className="space-y-4 font-inter text-slate-300 text-sm lg:text-base leading-relaxed">
                                <p>
                                    Soy <strong className="text-white">Ingeniero en Informática</strong> especializado en desarrollo Full Stack, con experiencia construyendo productos SaaS en producción para sectores como gastronomía, belleza, salud y distribución.
                                </p>
                                <p>
                                    Mi stack principal es <strong className="text-white">Next.js + Supabase + Prisma</strong>. Me enfoco en <strong className="text-red-400">entender el problema real</strong> antes de escribir código — traduciendo requerimientos de negocio en sistemas eficientes, escalables y fáciles de mantener.
                                </p>
                            </div>

                            <div
                                ref={metricsRef}
                                className="mt-6 pt-5 border-t border-white/5 grid grid-cols-3 gap-4"
                            >
                                {metrics.map((m, i) => (
                                    <div key={i} className="text-center">
                                        <p className="text-2xl lg:text-3xl font-bold text-white">
                                            {m.value}<span className="text-red-400">{m.suffix}</span>
                                        </p>
                                        <p className="text-xs text-slate-400 mt-1 leading-tight">{m.label}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 pt-4 border-t border-white/5 flex gap-4 lg:gap-8">
                                {[
                                    { Icon: Code, text: "SaaS Dev" },
                                    { Icon: Cpu, text: "Arquitectura" },
                                    { Icon: Globe, text: "Productos" }
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2 text-slate-400 cursor-default"
                                    >
                                        <item.Icon size={18} className="text-red-500" />
                                        <span className="text-xs font-medium uppercase tracking-wider whitespace-nowrap">
                                            {item.text}
                                        </span>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </Card>
            </div>
        </section>
    );
};
