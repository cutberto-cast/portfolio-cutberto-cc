'use client';
import { Reveal, StaggerGroup, StaggerItem } from '../ui/Reveal';
import ProfileCard from '../ui/ProfileCard';

const CORE_STACK = ['React', 'Angular', 'Next.js', 'Java', 'Git'];

export const About = () => {
    return (
        <section
            id="about"
            className="min-h-[90vh] flex items-center justify-center relative py-20 lg:py-24 -mx-4 md:-mx-10 lg:-ml-28 lg:-mr-10 px-4 md:px-10 lg:pl-28 bg-[#1c1c1e]"
        >
            <div className="max-w-7xl w-full mx-auto">
                <Reveal>
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:items-start">
                        <ProfileCard />

                        <div className="w-full lg:flex-1">
                            <div className="mb-6 border-b border-white/10 pb-4">
                                <h2 className="font-outfit text-3xl lg:text-4xl font-bold text-white tracking-tight">
                                    Sobre Mí
                                </h2>
                            </div>

                            <div className="space-y-4 font-inter text-slate-300 text-sm lg:text-base leading-relaxed">
                                <p>
                                    Soy <strong className="text-white">desarrollador Frontend</strong>, especializado en <strong className="text-white">React y Angular</strong>, con experiencia reciente construyendo interfaces en <strong className="text-white">Next.js</strong>. Me gusta llevar una idea desde el diseño hasta una interfaz funcional, cuidando el detalle y la experiencia de uso.
                                </p>
                                <p>
                                    También tengo bases sólidas en <strong className="text-white">Java</strong> del lado del backend, lo que me permite entender el stack completo y comunicarme con claridad con el equipo de servidor. He trabajado en proyectos reales en producción, traduciendo requerimientos de negocio en código mantenible dentro de un equipo.
                                </p>
                            </div>

                            <StaggerGroup
                                className="mt-6 pt-5 border-t border-white/5 flex flex-wrap gap-2"
                                staggerDelay={0.05}
                            >
                                {CORE_STACK.map((tech) => (
                                    <StaggerItem
                                        key={tech}
                                        className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300"
                                    >
                                        {tech}
                                    </StaggerItem>
                                ))}
                            </StaggerGroup>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
};
