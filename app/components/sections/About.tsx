'use client';
import { Card } from '../ui/Card';
import { Code, Cpu, Globe } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

export const About = () => {

    const cardVariants: Variants = {
        hidden: { 
            opacity: 0, 
            y: 50 
        },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                duration: 0.6,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.2
            }
        }
    };

    const textVariants: Variants = {
        hidden: { opacity: 0, x: 20 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { duration: 0.5 }
        }
    };

    const imageVariants: Variants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { 
            opacity: 1, 
            scale: 1,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <section id="about" className="min-h-[90vh] flex items-center justify-center px-4 relative">
            
            <motion.div 
                className="max-w-7xl w-full mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={cardVariants}
            >
                <Card glass="pure" className="min-h-[auto] lg:h-[550px] p-0 border border-white/10 overflow-hidden">
                    
                    <div className="flex flex-col lg:flex-row w-full h-full">
                        
                        <motion.div 
                            variants={imageVariants}
                            className="w-full lg:w-auto h-72 lg:h-full relative flex-shrink-0 group overflow-hidden flex items-center justify-center bg-slate-900/20"
                        >
                            <div className="absolute inset-0 bg-slate-900/10 z-10" />
                            
                            <motion.img
                                src="/yo1.jpeg"
                                alt="Cutberto Colohua"
                                className="w-full h-full object-cover object-center lg:w-auto lg:object-contain"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.4 }}
                            />
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
                        </motion.div>

                        <div className="w-full lg:flex-1 p-6 lg:p-10 flex flex-col justify-center relative bg-slate-900/10 lg:bg-transparent">
                            
                            <motion.div className="mb-6 border-b border-white/10 pb-4" variants={textVariants}>
                                <h2 className="font-outfit text-3xl lg:text-4xl font-bold text-white mb-1">
                                    Sobre Mí
                                </h2>
                                <h3 className="font-outfit text-xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-300 font-medium">
                                    Cutberto Colohua
                                </h3>
                            </motion.div>

                            <motion.div className="space-y-4 font-inter text-slate-300 text-sm lg:text-base leading-relaxed" variants={textVariants}>
                                <p>
                                    Soy un <strong className="text-white">Ingeniero en Informática</strong> enfocado en construir herramientas digitales que marquen la diferencia. Mi especialidad es el desarrollo Full Stack, donde fusiono la lógica del backend con interfaces fluidas.
                                </p>
                                <p>
                                    Más allá del código, me motiva la resolución creativa de problemas. No se trata solo de programar, sino de <strong className="text-red-400">entender las necesidades</strong> reales y traducirlas en software eficiente y escalable.
                                </p>
                                <p className="hidden lg:block">
                                    Siempre estoy explorando nuevas tecnologías para mantener mis habilidades afiladas y entregar resultados modernos y de alta calidad.
                                </p>
                            </motion.div>

                            <motion.div 
                                className="mt-8 pt-6 border-t border-white/5 flex gap-4 lg:gap-8 overflow-x-auto"
                                variants={textVariants}
                            >
                                {[
                                    { Icon: Code, text: "Web Dev" },
                                    { Icon: Cpu, text: "Lógica" },
                                    { Icon: Globe, text: "Soluciones" }
                                ].map((item, index) => (
                                    <motion.div 
                                        key={index}
                                        className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-default"
                                        whileHover={{ y: -2, color: "#fff" }}
                                    >
                                        <item.Icon size={18} className="text-red-500"/>
                                        <span className="text-xs font-medium uppercase tracking-wider whitespace-nowrap">
                                            {item.text}
                                        </span>
                                    </motion.div>
                                ))}
                            </motion.div>

                        </div>
                    </div>
                </Card>
            </motion.div>
        </section>
    );
};