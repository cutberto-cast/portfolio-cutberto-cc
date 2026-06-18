'use client';

import React from 'react';
import { motion, type Variants, type Transition } from 'framer-motion';

const EASE_OUT: Transition['ease'] = [0.23, 1, 0.32, 1];

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    y?: number;
    once?: boolean;
}

/** Fades + slides a block into view the first time it crosses the viewport. */
export const Reveal: React.FC<RevealProps> = ({ children, className, delay = 0, y = 20, once = true }) => (
    <motion.div
        className={className}
        initial={{ opacity: 0, y }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once, margin: '-80px' }}
        transition={{ duration: 0.6, ease: EASE_OUT, delay }}
    >
        {children}
    </motion.div>
);

interface StaggerGroupProps {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
    once?: boolean;
}

const containerVariants = (staggerDelay: number): Variants => ({
    hidden: {},
    visible: { transition: { staggerChildren: staggerDelay } },
});

/** Wrap a list of StaggerItem siblings to cascade their entrance instead of firing all at once. */
export const StaggerGroup: React.FC<StaggerGroupProps> = ({ children, className, staggerDelay = 0.07, once = true }) => (
    <motion.div
        className={className}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: '-80px' }}
        variants={containerVariants(staggerDelay)}
    >
        {children}
    </motion.div>
);

interface StaggerItemProps {
    children: React.ReactNode;
    className?: string;
    y?: number;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({ children, className, y = 16 }) => (
    <motion.div
        className={className}
        variants={{
            hidden: { opacity: 0, y },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
        }}
    >
        {children}
    </motion.div>
);
