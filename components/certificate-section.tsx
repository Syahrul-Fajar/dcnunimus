"use client";

import { Check, Award, Sparkles, ShieldCheck } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function CertificateSection() {
  const benefits = [
    {
      title: "Sertifikat Industri Resmi",
      desc: "Validasi kompetensi global dari Dicoding."
    },
    {
      title: "Token Kelas Academy Premium",
      desc: "Akses gratis ke materi berbayar senilai jutaan rupiah."
    },
    {
      title: "Digital Credential",
      desc: "Badge terverifikasi yang bisa dipasang langsung di LinkedIn."
    }
  ]

  return (
    <section className="py-24 px-4 relative bg-[#09090b] overflow-hidden">
      
      {/* --- BACKGROUND AMBIENCE --- */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial Gradient untuk focus */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px]" />
        {/* Grid Pattern halus */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              Career Milestone
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
              Bukti Keahlian. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Diakui Industri.
              </span>
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed max-w-xl border-l-2 border-zinc-800 pl-6">
              Jangan hanya belajar, buktikan. Dapatkan sertifikat kelulusan yang memiliki nilai tawar tinggi di mata rekruter perusahaan teknologi ternama.
            </p>

            <div className="space-y-6 pt-4">
              {benefits.map((item, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:border-blue-500/50 group-hover:bg-blue-500/10 transition-colors duration-300">
                    <Check className="w-5 h-5 text-zinc-500 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-lg">{item.title}</h4>
                    <p className="text-zinc-500 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT CONTENT - THE COMPOSITION */}
          <div className="relative flex justify-center lg:justify-end">
            {/* 1. Main Certificate Image with Tilt & Depth */}
            <div className="relative w-full max-w-md aspect-[4/3] group perspective-1000">
              
              {/* Back Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-cyan-500/20 rounded-[30px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative h-full w-full bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] group-hover:-rotate-1">
                <Image
                  src="/images/image.png"
                  alt="Sertifikat Dicoding"
                  fill
                  className="object-cover"
                />
                {/* Overlay Gradient agar teks di gambar (jika ada) menyatu */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
              </div>

              {/* 3. Floating Verified Badge */}
              <div className="absolute -top-4 -right-4 bg-zinc-950 border border-zinc-800 p-2 rounded-full shadow-xl flex items-center gap-2 pr-4 animate-in zoom-in duration-500 delay-500">
                <div className="bg-green-500/20 p-1.5 rounded-full">
                  <ShieldCheck className="w-4 h-4 text-green-500" />
                </div>
                <span className="text-xs font-bold text-zinc-300">Verified Partner</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}