"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, LayoutGrid } from "lucide-react";
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
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? "100%" : "-100%",
            opacity: 0,
        }),
    };

    return (
        <main className="relative min-h-screen w-full overflow-x-hidden bg-white text-slate-900 flex flex-col font-sans">
            {/* Background decoration */}
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-100/40 blur-[60px] md:blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-50/50 blur-[60px] md:blur-[150px] rounded-full" />
            </div>

            {/* Tap-to-Navigate Regions (Mobile Only) */}
            <div className="fixed inset-y-0 left-0 w-[15%] z-40 md:hidden" onClick={prevSlide} />
            <div className="fixed inset-y-0 right-0 w-[15%] z-40 md:hidden" onClick={nextSlide} />

            {/* Progress bar */}
            <div className="fixed top-0 left-0 w-full h-1.5 bg-slate-100 z-50">
                <motion.div
                    className="h-full bg-primary-500 shadow-[0_0_8px_rgba(14,165,233,0.3)]"
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                />
            </div>

            {/* Content Area */}
            <div className="flex-grow relative flex items-center justify-center min-h-screen p-4 sm:p-6 md:p-12 z-10 w-full pb-32 md:pb-12">
                <AnimatePresence initial={false} custom={direction} mode="wait">
                    <motion.div
                        key={currentSlide}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: { type: "spring", stiffness: 300, damping: 35 },
                            opacity: { duration: 0.3 },
                        }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        dragElastic={0.1}
                        onDragEnd={handleDragEnd}
                        className="w-full h-full flex items-center justify-center cursor-grab active:cursor-grabbing will-change-transform"
                    >
                        <div className="w-full max-w-6xl">
                            {slides[currentSlide].content}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="fixed bottom-8 left-0 w-full flex justify-between items-center px-6 md:px-10 z-50 opacity-100 md:opacity-40 md:hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <button
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                    disabled={currentSlide === 0}
                    className="p-4 md:p-3 rounded-full glass bg-white/90 shadow-lg hover:bg-white transition-all disabled:opacity-20 disabled:cursor-not-allowed text-slate-700 pointer-events-auto active:scale-95"
                    aria-label="Previous Slide"
                >
                    <ChevronLeft className="w-6 h-6 md:w-6 md:h-6" />
                </button>

                <div className="flex items-center gap-4 bg-white/90 backdrop-blur-md px-6 py-2.5 rounded-full border border-slate-200/60 shadow-lg text-sm font-bold text-slate-700 pointer-events-auto">
                    <span className="text-primary-600">{currentSlide + 1}</span>
                    <span className="text-slate-300">/</span>
                    <span>{slides.length}</span>
                </div>

                <button
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                    disabled={currentSlide === slides.length - 1}
                    className="p-4 md:p-3 rounded-full glass bg-white/90 shadow-lg hover:bg-white transition-all disabled:opacity-20 disabled:cursor-not-allowed text-slate-700 pointer-events-auto active:scale-95"
                    aria-label="Next Slide"
                >
                    <ChevronRight className="w-6 h-6 md:w-6 md:h-6" />
                </button>
            </div>
        </main>
    );
}
