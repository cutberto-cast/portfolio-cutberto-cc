"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import { cn } from "@/app/lib/utils/cn";
import { iconColumns, TechIcon } from "./Icon";

interface IconCardProps {
    icon: TechIcon;
    style?: React.CSSProperties;
}

const IconCard = React.forwardRef<HTMLDivElement, IconCardProps>(
    ({ icon, style }, ref) => {
        return (
            <div
                ref={ref}
                style={style}
                className={cn(
                    "relative flex h-16 w-16 items-center justify-center rounded-xl p-3 transition-colors duration-0 ease-linear",
                    "border border-white/5 bg-transparent",
                    "will-change-transform will-change-opacity"
                )}
            >
                <div className="h-full w-full pointer-events-none">
                    <img
                        src={`/icons/${icon.path}`}
                        alt={icon.name}
                        className="h-full w-full object-contain drop-shadow-md"
                        loading="lazy"
                    />
                </div>
            </div>
        );
    }
);
IconCard.displayName = "IconCard";


const TechStackVertical: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const itemsRef = useRef<(HTMLDivElement | null)[]>([]);


    const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
    const [isHovering, setIsHovering] = useState(false);

    const RADIUS = 200;

    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePos({ x, y });
    }, []);

    const getIconStyle = (index: number) => {
        const item = itemsRef.current[index];
        if (!item || !isHovering) {
            return {
                opacity: 0.2,
                filter: "grayscale(100%)",
                transform: "scale(1)",
                borderColor: "rgba(255, 255, 255, 0.05)",
                backgroundColor: "transparent",
                boxShadow: "none"
            };
        }

        const rect = item.getBoundingClientRect();
        const containerRect = containerRef.current?.getBoundingClientRect() || { left: 0, top: 0 };

        const itemCenterX = (rect.left - containerRect.left) + (rect.width / 2);
        const itemCenterY = (rect.top - containerRect.top) + (rect.height / 2);

        const distance = Math.sqrt(
            Math.pow(mousePos.x - itemCenterX, 2) +
            Math.pow(mousePos.y - itemCenterY, 2)
        );

        let intensity = 1 - Math.min(distance, RADIUS) / RADIUS;

        const opacity = 0.2 + (intensity * 0.8);
        const grayscale = 1 - intensity;
        const scale = 1 + (intensity * 0.2);

        const borderAlpha = 0.05 + (intensity * 0.5);
        const redGlow = intensity * 0.5;

        return {
            opacity: opacity,
            filter: `grayscale(${grayscale * 100}%)`,
            transform: `scale(${scale})`,
            borderColor: intensity > 0.1 ? `rgba(239, 68, 68, ${borderAlpha})` : `rgba(255, 255, 255, 0.05)`,
            backgroundColor: `rgba(239, 68, 68, ${redGlow * 0.2})`,
            boxShadow: intensity > 0.5 ? `0 0 ${intensity * 30}px rgba(220, 38, 38, ${intensity * 1.8})` : 'none',
            zIndex: intensity > 0.5 ? 10 : 1,
        };
    };

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="relative flex items-center justify-center gap-4 overflow-visible rounded-3xl bg-black py-12 px-14 select-none">
            <div className="pointer-events-none absolute -inset-px z-0 rounded-3xl transition-opacity duration-300"
                style={{
                    opacity: isHovering ? 1 : 0,
                    background: `radial-gradient(${RADIUS}px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.06), transparent 100%)`,
                }}
            />

            {iconColumns.map((col, colIndex) => (
                <div
                    key={`col-${colIndex}`}
                    className={cn(
                        "flex flex-col gap-4 relative z-10",
                        colIndex === 1 && "-mt-10"
                    )}
                >
                    {col.map((icon, iconIndex) => {
                        const globalIndex = (colIndex * 7) + iconIndex;

                        return (
                            <IconCard
                                key={icon.id}
                                icon={icon}
                                ref={(el) => { itemsRef.current[globalIndex] = el; }}
                                style={getIconStyle(globalIndex)}
                            />
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default TechStackVertical;