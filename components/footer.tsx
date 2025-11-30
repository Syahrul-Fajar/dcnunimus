import { Instagram, Mail, MapPin } from "lucide-react"
import React from 'react';

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-[#0B1120] overflow-hidden">
        {/* Decorational Background Glows - Memberikan kedalaman visual */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/5 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-12">
          
          {/* Brand Column (Lebih lebar: span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-white/10 shadow-lg shadow-blue-900/20">
                 <img 
                    src="/logo.jpg"
                    alt="Logo DCN UNIMUS"
                    className="w-full h-full object-cover"
                 />
              </div>
              <div>
                <h3 className="font-bold text-xl text-white tracking-tight">DCN UNIMUS</h3>
                <p className="text-xs text-blue-400 font-medium tracking-wide uppercase">Developer Community Network</p>
              </div>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Komunitas resmi mahasiswa Universitas Muhammadiyah Semarang yang berfokus pada akselerasi skill pengembangan aplikasi multi-platform.
            </p>

            <div className="pt-2">
               <a
                href="https://www.instagram.com/dcn.unimus/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-pink-500/30 transition-all duration-300"
              >
                <div className="p-1.5 bg-pink-500/10 rounded-full group-hover:bg-pink-500/20 transition-colors">
                    <Instagram className="w-4 h-4 text-pink-400" />
                </div>
                <span className="text-sm text-slate-300 group-hover:text-white font-medium pr-2">
                    Follow @dcn.unimus
                </span>
              </a>
            </div>
          </div>

          {/* Quick Links (Span 3) */}
          <div className="lg:col-span-3 lg:pl-8">
            <h4 className="font-bold text-white mb-6">Navigasi</h4>
            <ul className="space-y-4">
              {["Home", "Roadmap", "Benefits", "Announcement", "Game"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="group flex items-center gap-2 text-slate-400 hover:text-blue-400 text-sm transition-colors w-fit"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-400 transition-colors" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info (Span 4) */}
          <div className="lg:col-span-4">
             <h4 className="font-bold text-white mb-6">Hubungi Kami</h4>
             <ul className="space-y-5">
                <li className="flex items-start gap-4 text-sm text-slate-400 group">
                    <div className="mt-1 p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-blue-500/30 transition-colors shrink-0">
                        <Mail className="w-4 h-4 text-slate-300" />
                    </div>
                    <div>
                        <span className="block text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">Email Inquiries</span>
                        <a href="mailto:dcn.unimus@gmail.com" className="text-slate-300 hover:text-white transition-colors block font-medium">
                            dcn.unimus@gmail.com
                        </a>
                    </div>
                </li>
                
                <li className="flex items-start gap-4 text-sm text-slate-400 group">
                    <div className="mt-1 p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-blue-500/30 transition-colors shrink-0">
                        <MapPin className="w-4 h-4 text-slate-300" />
                    </div>
                    <div>
                        <span className="block text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">Basecamp</span>
                        <span className="text-slate-300 leading-relaxed block">
                             Universitas Muhammadiyah Semarang<br/>
                             Jl. Kedungmundu Raya No.18
                        </span>
                    </div>
                </li>
             </ul>
          </div>

        </div>

        {/* Footer Bottom / Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center md:text-left">
            © {new Date().getFullYear()} DCN UNIMUS. All rights reserved.
          </p>
          
          <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full border border-white/5">
             <span className="text-slate-500 text-xs uppercase tracking-wider font-bold">Supported by</span>
             <span className="w-px h-3 bg-white/20"></span>
             <a
                href="https://www.dicoding.com/"
                target="_blank"
                rel="noopener noreferrer"
             >
             <span className="text-slate-300 text-sm font-semibold tracking-tight">Dicoding Indonesia</span>
             </a>
          </div>
        </div>
      </div>
    </footer>
  )
}