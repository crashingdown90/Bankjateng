"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, LayoutGrid } from "lucide-react";
import Image from "next/image";
import { slides } from "./slides";

export default function SlideManager() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextSlide = () => {
        if (currentSlide < slides.length - 1) {
            setDirection(1);
            setCurrentSlide(currentSlide + 1);
        }
    };

    const prevSlide = () => {
        if (currentSlide > 0) {
            setDirection(-1);
            setCurrentSlide(currentSlide - 1);
        }
    };

    const handleDragEnd = (e: any, { offset }: any) => {
        const threshold = 50; 
        if (offset.x < -threshold) {
            nextSlide();
        } else if (offset.x > threshold) {
            prevSlide();
        }
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentSlide]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight" || e.key === "Space") nextSlide();
            if (e.key === "ArrowLeft") prevSlide();
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentSlide]);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? "50%" : "-50%",
            rotateY: direction > 0 ? 45 : -45,
            opacity: 0,
            scale: 0.8,
            filter: "blur(10px)",
        }),
        center: {
            zIndex: 1,
            x: 0,
            rotateY: 0,
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? "50%" : "-50%",
            rotateY: direction < 0 ? 45 : -45,
            opacity: 0,
            scale: 0.8,
            filter: "blur(10px)",
        }),
    };

    return (
        <main className="relative min-h-screen w-full overflow-hidden bg-slate-50 text-slate-900 flex flex-col font-sans perspective-1000">
            {/* Cinematic Background Mesh */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-primary-100/30 blur-[120px] rounded-full animate-mesh" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-secondary-100/20 blur-[150px] rounded-full animate-mesh [animation-delay:2s]" />
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-blue-100/30 blur-[100px] rounded-full animate-mesh [animation-delay:4s]" />
                
                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                     style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>

            {/* Tactical HUD Frame Overlay */}
            <div className="fixed inset-0 z-[100] pointer-events-none border-[20px] border-transparent">
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-primary-500/30" />
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-primary-500/30" />
                <div className="absolute bottom-0 left-0 w-12 h-12 border-b-2 border-l-2 border-primary-500/30" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-primary-500/30" />
                
                {/* Scanning Line */}
                <div className="absolute inset-x-0 h-[1px] bg-primary-500/10 animate-scan top-0" />
            </div>

            {/* Tap-to-Navigate Regions (Mobile Only) */}
            <div className="fixed inset-y-0 left-0 w-[15%] z-40 md:hidden pointer-events-auto" onClick={prevSlide} />
            <div className="fixed inset-y-0 right-0 w-[15%] z-40 md:hidden pointer-events-auto" onClick={nextSlide} />

            {/* Progress bar */}
            <div className="fixed top-0 left-0 w-full h-1 bg-slate-200/50 z-[110]">
                <motion.div
                    className="h-full bg-primary-500 shadow-[0_0_15px_rgba(237,27,36,0.5)]"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                    transition={{ duration: 0.5, ease: "circOut" }}
                />
            </div>

            {/* Persistent Branded Header */}
            <div className="fixed top-8 left-8 md:top-12 md:left-12 z-[110] flex items-center gap-4 pointer-events-none">
                <AnimatePresence mode="wait">
                    {currentSlide > 0 && (
                        <motion.div
                            initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
                            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, x: -30, filter: "blur(10px)" }}
                            transition={{ type: "spring", stiffness: 100 }}
                            className="flex items-center gap-4"
                        >
                            <div className="p-3 bg-white/40 backdrop-blur-xl rounded-2xl border border-white/40 shadow-2xl">
                                <Image 
                                    src="/Bank_Jateng_logo.png" 
                                    alt="Bank Jateng" 
                                    width={120} 
                                    height={40} 
                                    className="h-6 md:h-9 w-auto object-contain"
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Content Area */}
            <div className="flex-grow relative flex items-center justify-center min-h-screen p-6 md:p-12 z-10 w-full pb-32 md:pb-12">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentSlide}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 200, damping: 30 },
                            rotateY: { duration: 0.5 },
                            opacity: { duration: 0.4 },
                            scale: { duration: 0.5 }
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.1}
                        onDragEnd={handleDragEnd}
                        className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing will-change-transform"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <div className="w-full max-w-7xl">
                            {slides[currentSlide].content}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="fixed bottom-10 left-0 w-full flex justify-between items-center px-10 z-[110] opacity-100 md:opacity-20 md:hover:opacity-100 transition-all duration-500 pointer-events-none">
                <button
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                    disabled={currentSlide === 0}
                    className="p-5 rounded-full glass-premium shadow-2xl hover:scale-110 active:scale-95 transition-all disabled:opacity-10 text-slate-800 pointer-events-auto"
                    aria-label="Previous Slide"
                >
                    <ChevronLeft className="w-6 h-6" />
                </button>

                <div className="flex flex-col items-center gap-1 group pointer-events-auto cursor-default">
                    <div className="bg-white/40 backdrop-blur-xl px-8 py-3 rounded-2xl border border-white/40 shadow-2xl flex items-center gap-4 text-sm font-black text-slate-800">
                        <span className="text-primary-600 animate-pulse">{String(currentSlide + 1).padStart(2, '0')}</span>
                        <span className="text-slate-400 font-light text-xs">GOVERNANCE MODULE</span>
                        <span className="text-slate-800 opacity-50">{String(slides.length).padStart(2, '0')}</span>
                    </div>
                </div>

                <button
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                    disabled={currentSlide === slides.length - 1}
                    className="p-5 rounded-full glass-premium shadow-2xl hover:scale-110 active:scale-95 transition-all disabled:opacity-10 text-slate-800 pointer-events-auto"
                    aria-label="Next Slide"
                >
                    <ChevronRight className="w-6 h-6" />
                </button>
            </div>
        </main>
    );
}

