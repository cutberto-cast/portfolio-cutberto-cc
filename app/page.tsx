'use client';

import React from 'react';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Experience } from './components/sections/Experience';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';


export default function HomePage() {
    return (
        <div className="w-full flex flex-col gap-0">
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
}