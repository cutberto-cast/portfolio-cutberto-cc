'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';

const EASE_OUT = [0.23, 1, 0.32, 1] as const;

const PROFILE = {
    name: 'Cutberto Colohua',
    role: 'Desarrollador Frontend',
    bio: 'React y Angular en el día a día, Next.js en proyectos recientes, y bases sólidas en Java para moverme con comodidad en todo el stack.',
    experience: '3+ años',
    location: 'México',
};

// "framed" wants a square photo (inset with margin); "bleed" wants a tall
// rectangular photo (fills the card edge-to-edge).
const SLIDES: { photo: string; style: 'framed' | 'bleed' }[] = [
    { photo: '/foto_cuadrada.jpeg', style: 'framed' },
    { photo: '/foto_rectuangular.jpeg', style: 'bleed' },
];

function ProfileInfo() {
    return (
        <div>
            <h3 className="text-white text-2xl font-semibold">{PROFILE.name}</h3>
            <p className="text-red-400 font-medium text-sm mt-0.5">{PROFILE.role}</p>
            <p className="text-slate-300 text-sm mt-3 leading-relaxed">{PROFILE.bio}</p>

            <div className="flex items-center justify-between mt-5 pt-4 border-t border-white/10">
                <div className="flex items-center gap-4 text-slate-400 text-xs">
                    <span className="flex items-center gap-1.5">
                        <Briefcase size={14} /> {PROFILE.experience}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <MapPin size={14} /> {PROFILE.location}
                    </span>
                </div>
                <a
                    href="#contact"
                    className="press-feedback px-4 py-2 rounded-full bg-white text-black text-xs font-semibold transition-colors duration-200 hover:bg-slate-200"
                >
                    Contactar
                </a>
            </div>
        </div>
    );
}

/** Style 1 — square photo framed/inset at the top, glass panel below. */
function FramedSlide({ photo }: { photo: string }) {
    return (
        <div className="flex flex-col h-full bg-white/[0.06] backdrop-blur-xl">
            <div className="p-3">
                <div className="aspect-square w-full rounded-2xl overflow-hidden bg-white/5">
                    <img src={photo} alt="" className="w-full h-full object-cover" />
                </div>
            </div>
            <div className="flex-1 px-6 pb-6 flex flex-col justify-end">
                <ProfileInfo />
            </div>
        </div>
    );
}

/** Style 2 — photo bleeds edge-to-edge, info overlaid on a gradient. */
function BleedSlide({ photo }: { photo: string }) {
    return (
        <div className="relative h-full bg-white/[0.06] backdrop-blur-xl">
            <img src={photo} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full p-6">
                <ProfileInfo />
            </div>
        </div>
    );
}

export default function ProfileCard() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (SLIDES.length < 2) return;
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % SLIDES.length);
        }, 7000);
        return () => clearInterval(interval);
    }, []);

    const slide = SLIDES[index];

    return (
        <div className="relative w-full max-w-[320px] mx-auto lg:mx-0 flex-shrink-0 aspect-[7/12] rounded-[28px] overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: EASE_OUT }}
                >
                    {slide.style === 'framed' ? (
                        <FramedSlide photo={slide.photo} />
                    ) : (
                        <BleedSlide photo={slide.photo} />
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
