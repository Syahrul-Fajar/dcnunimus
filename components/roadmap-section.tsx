"use client";

import React from "react";
import { Code2, Zap, Database, Globe, CheckCircle2, ArrowRight } from "lucide-react";

// Data Roadmap dengan detail kurikulum yang lebih "daging"
const roadmapSteps = [
  {
    phase: "01",
    title: "Dart Foundation",
    subtitle: "Language Basics",
    description: "Fondasi pemrograman Dart modern. Memahami konsep OOP dan safety type system sebelum masuk ke framework.",
    icon: Code2,
    color: "blue",
    skills: ["Null Safety", "Async/Await", "OOP Concepts", "Data Types"],
  },
  {
    phase: "02",
    title: "Flutter UI Crafting",
    subtitle: "Interface Design",
    description: "Membangun antarmuka yang pixel-perfect. Memahami Widget tree, layout system, dan responsive design.",
    icon: Zap,
    color: "cyan",
    skills: ["Widget Lifecycle", "Flex Layouts", "Theming", "Navigation 2.0"],
  },
  {
    phase: "03",
    title: "Architecture & State",
    subtitle: "Logic & Data",
    description: "Mengelola data kompleks dan logika bisnis. Memisahkan UI code dengan Logic code menggunakan pattern standar industri.",
    icon: Database,
    color: "indigo",
    skills: ["BLoC / Cubit", "Provider", "Clean Architecture", "REST API Integration"],
  },
  {
    phase: "04",
    title: "Production Ready",
    subtitle: "Deployment",
    description: "Optimasi performa, testing, dan perilisan aplikasi ke berbagai platform store (Play Store & App Store).",
    icon: Globe,
    color: "emerald",
    skills: ["Unit Testing", "CI/CD Pipeline", "App Signing", "Store Guidelines"],
  },
];

export function RoadmapSection() {
  return (
    <section id="roadmap" className="py-24 relative overflow-hidden bg-[#0B1120]">
      {/* Background Texture - Grid Halus */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20 pointer-events-none" />
      
      {/* Glow Effect Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Roadmap Menuju <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400">
              Professional Developer
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Kurikulum terstruktur yang dirancang berdasarkan standar industri. 
            Dari baris kode pertama hingga aplikasi siap rilis.
          </p>
        </div>

        {/* Roadmap Grid */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-blue-500/0 -z-10" />

          {roadmapSteps.map((step, index) => (
            <div 
              key={index}
              className="group relative flex flex-col h-full"
            >
              {/* Connector Dot (Desktop) */}
              <div className="hidden lg:flex absolute -top-[1.6rem] left-8 items-center justify-center w-4 h-4 rounded-full bg-[#0B1120] border-2 border-slate-700 group-hover:border-blue-500 group-hover:scale-125 transition-all duration-300 z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-500 group-hover:bg-blue-400 transition-colors" />
              </div>

              {/* Card Container */}
              <div className="flex-1 bg-slate-900/50 backdrop-blur-sm border border-white/5 rounded-2xl p-6 hover:bg-slate-800/50 hover:border-blue-500/30 transition-all duration-300 group-hover:-translate-y-2">
                
                {/* Step Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-3 rounded-xl bg-${step.color}-500/10 border border-${step.color}-500/20 group-hover:bg-${step.color}-500/20 transition-colors`}>
                    <step.icon className={`w-6 h-6 text-${step.color}-400`} />
                  </div>
                  <span className="text-4xl font-black text-slate-800 group-hover:text-slate-700 transition-colors select-none">
                    {step.phase}
                  </span>
                </div>

                {/* Content */}
                <div className="mb-6">
                  <h4 className={`text-xs font-bold uppercase tracking-wider text-${step.color}-400 mb-1`}>
                    {step.subtitle}
                  </h4>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="mt-auto">
                  <div className="w-full h-px bg-white/5 mb-4" />
                  <div className="flex flex-wrap gap-2">
                    {step.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="inline-flex items-center text-[10px] font-medium px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
              
              {/* Arrow Connector for Mobile (Optional visual cue) */}
              {index < roadmapSteps.length - 1 && (
                <div className="lg:hidden flex justify-center py-4">
                  <ArrowRight className="w-5 h-5 text-slate-700 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}