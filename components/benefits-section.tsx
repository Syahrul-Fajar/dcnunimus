"use client";

import { Users, BookOpen, Award, Briefcase, MessageSquare, Gift, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils";

const benefits = [
  {
    icon: BookOpen,
    title: "Kurikulum Terstruktur",
    description: "Materi pembelajaran yang disusun secara sistematis (Learning Path) dari fundamental hingga advanced deployment.",
  },
  {
    icon: Users,
    title: "Komunitas High-Quality",
    description: "Bergabung dengan ratusan developer yang fokus pada pertumbuhan skill, bukan sekadar grup chat biasa.",
  },
  {
    icon: MessageSquare,
    title: "Expert Mentoring",
    description: "Akses langsung ke sesi mentoring rutin bersama praktisi industri untuk validasi kode dan karir.",
  },
  {
    icon: Award,
    title: "Sertifikasi Dicoding",
    description: "Validasi skill Anda dengan sertifikasi industri resmi dari Dicoding yang diakui perusahaan teknologi.",
  },
  {
    icon: Briefcase,
    title: "Career Acceleration",
    description: "Ekosistem pendukung karir mulai dari bedah CV, portfolio review, hingga simulasi interview teknikal.",
  },
  {
    icon: Gift,
    title: "Lifetime Access",
    description: "Investasi sekali untuk akses materi, recording, dan resource code yang terus diperbarui selamanya.",
  },
]

export function BenefitsSection() {
  return (
    <section id="benefits" className="py-24 relative bg-[#09090b] text-zinc-100 overflow-hidden">
      
      {/* --- BACKGROUND PATTERN --- */}
      <div className="absolute inset-0 pointer-events-none">
         {/* Dot Pattern */}
         <div className="absolute h-full w-full bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 border-b border-zinc-800 pb-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
              Why Join <span className="text-blue-500">DCN UNIMUS</span>?
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Bukan sekadar kursus online. Kami membangun ekosistem komprehensif untuk mencetak talenta digital siap kerja.
            </p>
          </div>
        </div>

        {/* --- GRID CARDS --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative h-full bg-zinc-900/40 backdrop-blur-sm border border-white/5 rounded-2xl p-6 transition-all duration-300 hover:bg-zinc-900/60 hover:border-blue-500/30 overflow-hidden"
            >
              {/* Subtle Gradient Glow on Hover */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 group-hover:border-blue-500/50 group-hover:shadow-[0_0_20px_-5px_rgba(59,130,246,0.3)] transition-all duration-300">
                    <benefit.icon className="w-6 h-6 text-zinc-400 group-hover:text-blue-400 transition-colors" strokeWidth={1.5} />
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-zinc-700 group-hover:text-blue-500/50 transition-colors" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-zinc-100 mb-3 group-hover:text-blue-100 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-4 flex-grow">
                  {benefit.description}
                </p>

                {/* Decorative Line */}
                <div className="w-full h-[1px] bg-zinc-800 group-hover:bg-blue-500/20 transition-colors mt-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}