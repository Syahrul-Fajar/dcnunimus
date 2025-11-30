"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronRight, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Announcement", href: "#announcement" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Benefits", href: "#benefits" },
  { name: "Game", href: "#game" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Deteksi scroll untuk mengubah style navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b",
        isScrolled
          ? "bg-[#0a0a0f]/80 backdrop-blur-xl border-white/10 py-3"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity rounded-full" />
              <Image
                src="/logo.jpg"
                alt="Logo DCN UNIMUS"
                width={42}
                height={42}
                className="rounded-full relative z-10 border border-white/10"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-white leading-none tracking-tight group-hover:text-blue-200 transition-colors">
                DCN UNIMUS
              </span>
              <span className="text-[10px] text-gray-400 font-medium tracking-widest uppercase">
                Developer Community Network
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <div className="flex items-center bg-white/5 rounded-full px-2 py-1 border border-white/5 mr-6 backdrop-blur-sm">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf2KD_n_ciOSw_d2cBTWWj0dVWjY8_8ZtKe8wp-pdAem1-Gzg/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center justify-center gap-2 px-6 py-2.5 font-semibold text-white transition-all duration-300 bg-blue-600 rounded-full hover:bg-blue-500 hover:scale-105 hover:shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#0a0a0f]"
            >
              <span>Daftar Sekarang</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              
              {/* Shine Effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:animate-shine" />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out",
            isOpen ? "max-h-[400px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
          )}
        >
          <div className="bg-[#12121a] border border-white/10 rounded-2xl p-4 shadow-2xl">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                  <ChevronRight size={14} className="text-gray-600" />
                </Link>
              ))}
              
              <div className="h-px bg-white/10 my-2" />
              
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf2KD_n_ciOSw_d2cBTWWj0dVWjY8_8ZtKe8wp-pdAem1-Gzg/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
              >
                <Sparkles size={16} />
                Daftar Sekarang
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}