'use client';

import { cn } from '@/app/lib/utils/cn';
import React from 'react';

interface Monitor3DProps {
    className?: string;
}

export const Monitor3D: React.FC<Monitor3DProps> = ({ className }) => {
    return (
        <div className={cn("relative h-[400px] lg:h-[500px] flex items-center justify-center w-full", className)}>
            <div className="relative w-full h-full">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-72 h-56 md:w-80 md:h-64 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl border-4 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] transform rotate-3 hover:rotate-0 transition-transform duration-500 group">
                        <div className="absolute inset-4 bg-gradient-to-br from-slate-950 to-black rounded-lg overflow-hidden border border-white/5">
                            <div className="p-4 space-y-3 opacity-80">
                                <div className="h-2 bg-red-500/60 rounded w-3/4 animate-pulse"></div>
                                <div className="h-2 bg-blue-500/60 rounded w-1/2 animate-pulse delay-100"></div>
                                <div className="h-2 bg-green-500/60 rounded w-2/3 animate-pulse delay-200"></div>
                                <div className="h-2 bg-yellow-500/60 rounded w-1/3 animate-pulse delay-300"></div>
                                <div className="h-2 bg-purple-500/60 rounded w-5/6 animate-pulse delay-500"></div>
                            </div>
                        </div>

                        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent rounded-xl pointer-events-none"></div>
                    </div>

                    <div className="absolute top-10 left-4 md:left-10 w-14 h-14 md:w-16 md:h-16 bg-black/40 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg animate-float flex items-center justify-center">
                        <span className="text-red-500 text-xl font-bold">{'</>'}</span>
                    </div>

                    <div className="absolute bottom-20 right-4 md:right-10 w-16 h-16 md:w-20 md:h-20 bg-black/40 backdrop-blur-md border border-white/10 rounded-full shadow-lg animate-float flex items-center justify-center" style={{ animationDelay: '1s' }}>
                        <span className="text-3xl">⚡</span>
                    </div>

                    <div className="absolute top-16 right-16 w-12 h-12 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl shadow-lg animate-float flex items-center justify-center" style={{ animationDelay: '2s' }}>
                        <span className="text-xl">🚀</span>
                    </div>
                </div>
            </div>
        </div>
    );
};