"use client";

import { ArrowRight, Code2, Sparkles, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from 'react';
import Image from "next/image"; // Menggunakan Image Next.js untuk performa lebih baik

// --- TYPES ---
interface Badge {
  id: number;
  name: string;
  src: string;
  position: string;
  delay: string;
  animationClass: string; // Updated to match tailwind config
}

// --- DATA ---
const floatingBadges: Badge[] = [
  // Top High Priority
  { id: 7, name: 'Dicoding', src: '/dicoding.jpeg', position: '-top-8 -left-4', delay: '0s', animationClass: 'animate-float-slow' },
  { id: 8, name: 'DCN', src: '/dcn.png', position: '-top-10 -right-4', delay: '0.5s', animationClass: 'animate-float-slow' },

  // Tech Stack (Left)
  { id: 1, name: 'Flutter', src: '/flutter.png', position: 'top-[25%] -left-14', delay: '1s', animationClass: 'animate-float-medium' },
  { id: 2, name: 'Dart', src: '/dart.png', position: 'top-[55%] -left-10', delay: '2.5s', animationClass: 'animate-float-slow' },
  { id: 3, name: 'Android', src: '/android.png', position: 'bottom-8 -left-8', delay: '1.5s', animationClass: 'animate-float-medium' },
  
  // Tech Stack (Right)
  { id: 4, name: 'iOS', src: '/ios.png', position: 'top-[30%] -right-14', delay: '1.2s', animationClass: 'animate-float-medium' },
  { id: 5, name: 'VS Code', src: '/vscode.png', position: 'bottom-[25%] -right-10', delay: '2s', animationClass: 'animate-float-slow' },
];

// --- HELPER COMPONENT (Safe Image) ---
const SimpleImage = ({ src, alt, width, height, className }: { src: string, alt: string, width: number, height: number, className?: string }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img 
    src={src} 
    alt={alt} 
    width={width} 
    height={height} 
    className={`object-contain ${className || ''}`} 
    onError={(e) => {
      const target = e.currentTarget;
      target.onerror = null; 
      target.style.display = 'none'; // Hide if broken
    }}
  />
);

// --- MAIN COMPONENT ---
export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] pt-32 pb-20">
      
      {/* 1. TECHNICAL BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid Pattern - Safe Syntax */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        {/* Spotlight Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-500/10 rounded-[100%] blur-[100px]" />
      </div>

      <div className="container relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* --- LEFT CONTENT (Text) --- */}
          <div className="lg:col-span-7 text-center lg:text-left">
            
            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-white tracking-tight mb-6 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-100">
              Akselerasi Karier <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
                Multi-Platform Dev
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-slate-400 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
              Bergabunglah dengan ekosistem <span className="text-slate-200 font-medium">Developer Community Network UNIMUS</span>. 
              Kurikulum standar industri yang didukung resmi oleh <span className="text-slate-200 font-medium">Dicoding Indonesia</span>.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-300">
              <Button
                size="lg"
                className="h-14 px-8 bg-white text-black hover:bg-slate-200 font-bold rounded-full transition-transform hover:scale-105 active:scale-95"
                asChild
              >
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSf2KD_n_ciOSw_d2cBTWWj0dVWjY8_8ZtKe8wp-pdAem1-Gzg/viewform?usp=header
                  target="blank"
              ">
                  Gabung Sekarang
                  <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-14 px-8 border-slate-700 bg-transparent text-white hover:bg-slate-800 rounded-full transition-all"
                asChild
              >
                <a href="#game" className="group">
                  <Terminal className="mr-2 w-4 h-4 text-slate-400 group-hover:text-white transition-colors" />
                  Mini Game
                </a>
              </Button>
            </div>

            {/* Trust Indicator */}
            <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center gap-4 text-sm text-slate-500 justify-center lg:justify-start">
              <span>Didukung oleh:</span>
              <div className="flex gap-4 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                <a href="https://www.dicoding.com/" target="_blank" rel="noopener noreferrer">
                  <span className="font-bold text-slate-300">Dicoding</span>
                </a>
              </div>
            </div>
          </div>

          {/* --- RIGHT CONTENT (Visuals) --- */}
          <div className="lg:col-span-5 relative mt-10 lg:mt-0 flex justify-center">
            
            {/* The "Orbit" Container */}
            <div className="relative w-[300px] sm:w-[360px] lg:w-[400px] aspect-[4/5] animate-in fade-in zoom-in duration-1000 delay-300">
              
              {/* Back Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-cyan-400/30 rounded-[30px] blur-3xl transform rotate-6 scale-95" />
              
              {/* Main Card */}
              <div className="relative h-full w-full bg-[#12121a] border border-white/10 rounded-[30px] overflow-hidden shadow-2xl z-10 group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050505]/90 z-20" />
                
                {/* Fallback to simple img tag for safety */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/logo.jpg"
                  alt="DCN UNIMUS Profile"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Card Overlay Text */}
                <div className="absolute bottom-6 left-6 z-30">
                  <div className="text-white font-bold text-xl">DCN Squad</div>
                  <div className="text-blue-400 text-sm font-medium">Batch 2025</div>
                </div>
              </div>

              {/* Floating Badges */}
              {floatingBadges.map((badge) => (
                <div
                  key={badge.id}
                  className={`absolute z-40 ${badge.position} ${badge.animationClass}`}
                  style={{ animationDelay: badge.delay }}
                >
                  <div className="
                    flex items-center gap-3 p-3 rounded-2xl
                    bg-slate-900/60 backdrop-blur-xl
                    border border-white/10
                    shadow-[0_8px_16px_-4px_rgba(0,0,0,0.5)]
                    transition-all duration-300
                    hover:scale-110 hover:bg-slate-800/80 hover:border-blue-500/50 hover:shadow-blue-500/20
                    cursor-default
                  ">
                    <div className="bg-white p-1.5 rounded-xl shadow-sm">
                      <SimpleImage
                        src={badge.src}
                        alt={badge.name}
                        width={24}
                        height={24}
                        className="w-5 h-5 object-contain"
                      />
                    </div>
                    <span className="text-slate-100 text-xs font-bold tracking-wide pr-1">
                      {badge.name}
                    </span>
                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
