'use client';

import React from 'react';

interface CodeIllustrationProps {
    className?: string;
}

export const CodeIllustration: React.FC<CodeIllustrationProps> = ({ className = '' }) => {
    return (
        <div className={`relative h-[400px] md:h-[500px] flex items-center justify-center ${className}`}>
            <div className="relative w-full h-full">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className=" relative  w-72 h-56 sm:w-80 sm:h-64  bg-gradient-to-br from-slate-800/80 to-slate-900/80  backdrop-blur-xl  rounded-2xl  border-4 border-white/10 
                        shadow-[0_8px_32px_rgba(220,38,38,0.25)] transform rotate-3  hover:rotate-0  transition-transform duration-500 group ">
                        <div className="absolute inset-4 bg-gradient-to-br from-slate-900 to-black rounded-lg overflow-hidden">
                            <div className="p-4 space-y-2">
                                <div className="h-2 bg-red-500/60 rounded w-3/4 animate-pulse"></div>
                                <div className="h-2 bg-blue-500/60 rounded w-1/2 animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                                <div className="h-2 bg-green-500/60 rounded w-2/3 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                <div className="h-2 bg-yellow-500/60 rounded w-1/3 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                                <div className="h-2 bg-purple-500/60 rounded w-5/6 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-transparent rounded-2xl group-hover:from-red-500/30 transition-colors"></div>
                    </div>

                    <div className="absolute top-6 sm:top-10 left-4 sm:left-10 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-xl 
                        shadow-[0_8px_32px_rgba(220,38,38,0.4)] animate-float-3d hover:scale-110 transition-transform cursor-pointer">
                        <div className="w-full h-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold">
                            {'</>'}
                        </div>
                    </div>

                    <div 
                        className=" absolute  bottom-16 sm:bottom-20  right-4 sm:right-10  w-16 h-16 sm:w-20 sm:h-20  bg-gradient-to-br from-blue-500 to-cyan-500  rounded-full 
                            shadow-[0_8px_32px_rgba(59,130,246,0.4)] animate-float-3d hover:scale-110 transition-transform cursor-pointer" 
                        style={{ animationDelay: '1s' }}>
                        <div className="w-full h-full flex items-center justify-center text-white text-2xl sm:text-3xl">
                            ⚡
                        </div>
                    </div>

                    <div 
                        className=" absolute  top-16 sm:top-20  right-12 sm:right-20  w-12 h-12 sm:w-14 sm:h-14  bg-gradient-to-br from-purple-500 to-pink-500  rounded-xl 
                            shadow-[0_8px_32px_rgba(168,85,247,0.4)] animate-float-3d hover:scale-110 transition-transform cursor-pointer" 
                        style={{ animationDelay: '2s' }}>
                        <div className="w-full h-full flex items-center justify-center text-white text-xl sm:text-2xl">
                            🚀
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};