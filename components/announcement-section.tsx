"use client"

import { Calendar, ArrowRight, Tag, ChevronLeft, ChevronRight, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

// --- DATA ---
const announcements = [
  {
    image: "/pijak.png",
    date: "29 November 2025",
    title: "PIJAK 2026",
    subtitle: "In Collaboration with IBM SkillsBuild",
    description: "Program komprehensif untuk membekali individu dengan keterampilan teknis esensial di pasar kerja modern guna menghasilkan Multi-Platform App Developer andal.",
    tag: "Beasiswa",
    deadline: new Date("2025-12-31T23:59:59"),
    detailsLink: "https://www.dicoding.com/pijak",
    registerLink: "https://www.dicoding.com/pijak/registration?ref=4086292",
  },
  {
    image: "/microsoft.png",
    date: "29 November 2025",
    title: "Microsoft Elevate (METC)",
    subtitle: "Diselenggarakan Microsoft",
    description: "Program pelatihan eksklusif untuk profesional, akademisi, dan pemimpin IT yang ingin menguasai pengembangan aplikasi tingkat lanjut.",
    tag: "Pelatihan Coding",
    deadline: new Date("2026-06-15T23:59:59"),
    detailsLink: "https://www.dicoding.com/elevate",
    registerLink: "https://www.dicoding.com/elevate/registration?referrer_id=4086292",
  },
  {
    image: "/idcamp.png",
    date: "29 November 2025",
    title: "IDCamp 2025",
    subtitle: "Indosat Ooredoo Hutchison",
    description: "Program beasiswa CSR Indosat Ooredoo Hutchison untuk mencetak talenta digital Indonesia siap kerja.",
    tag: "Beasiswa",
    deadline: new Date("2025-12-27T23:59:59"),
    detailsLink: "https://idcamp.ioh.co.id/faq",
    registerLink: "https://idcamp.ioh.co.id/login?referrer_id=4086292",
  },
  {
    image: "/codingcamp.png",
    date: "29 November 2025",
    title: "Coding Camp 2026",
    subtitle: "Powered by DBS Foundation",
    description: "Pelatihan teknologi informasi berstandar tinggi untuk mempersiapkan lulusan dengan keterampilan siap terap.",
    tag: "Event",
    deadline: new Date("2026-01-01T23:59:59"),
    detailsLink: "https://www.dbs.com/spark/index/id_id/site/codingcamp/index.html",
    registerLink: "https://www.dicoding.com/codingcamp/registration",
  },
]

// --- COMPONENTS ---
function CountdownTimer({ deadline }: { deadline: Date }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  // Prevent Hydration Error
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = deadline.getTime() - new Date().getTime()
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [deadline])

  if (!mounted) return null

  return (
    <div className="bg-zinc-950/50 rounded-lg p-3 border border-zinc-800 flex items-center justify-between gap-2 mt-auto">
      <div className="flex items-center gap-2 text-xs text-zinc-400">
        <Clock className="w-3.5 h-3.5" />
        <span>Sisa Waktu:</span>
      </div>
      <div className="flex gap-2 font-mono text-xs font-bold text-cyan-400">
        <span>{timeLeft.days}d</span>
        <span>:</span>
        <span>{timeLeft.hours}h</span>
        <span>:</span>
        <span>{timeLeft.minutes}m</span>
      </div>
    </div>
  )
}

function getTagStyle(tag: string) {
  switch (tag) {
    case "Beasiswa": return "bg-amber-500/10 text-amber-500 border-amber-500/20"
    case "Pelatihan Coding": return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
    case "Event": return "bg-purple-500/10 text-purple-500 border-purple-500/20"
    default: return "bg-cyan-500/10 text-cyan-500 border-cyan-500/20"
  }
}

export function AnnouncementSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    checkScrollButtons()
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", checkScrollButtons)
      return () => container.removeEventListener("scroll", checkScrollButtons)
    }
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const cardWidth = 400
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <section id="announcement" className="py-24 relative bg-[#09090b] border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Kesempatan <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Terbaru</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              Jangan lewatkan beasiswa, pelatihan, dan event teknologi terbaru.
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={cn(
                "p-3 rounded-full border border-zinc-800 transition-all duration-300",
                canScrollLeft ? "bg-zinc-900 text-white hover:bg-zinc-800" : "bg-zinc-950 text-zinc-700 cursor-not-allowed"
              )}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={cn(
                "p-3 rounded-full border border-zinc-800 transition-all duration-300",
                canScrollRight ? "bg-zinc-900 text-white hover:bg-zinc-800" : "bg-zinc-950 text-zinc-700 cursor-not-allowed"
              )}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-8 -mx-4 px-4 md:mx-0 md:px-0"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {announcements.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-all duration-300 flex-shrink-0 w-[320px] md:w-[380px] overflow-hidden"
            >
              {/* Image Area */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className={cn("text-[10px] font-bold px-3 py-1 rounded-full border flex items-center gap-1.5 uppercase tracking-wide bg-zinc-950/80 backdrop-blur-md", getTagStyle(item.tag))}>
                    <Tag className="w-3 h-3" />
                    {item.tag}
                  </span>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-zinc-500 text-xs font-medium mb-3 uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5" />
                  {item.date}
                </div>

                <h3 className="text-white font-bold text-xl mb-1 line-clamp-1">{item.title}</h3>
                <p className="text-cyan-400 text-xs font-medium mb-4">{item.subtitle}</p>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6 line-clamp-3">{item.description}</p>

                <CountdownTimer deadline={item.deadline} />

                <div className="mt-4 pt-4 border-t border-zinc-800 grid grid-cols-2 gap-3">
                  {/* Link Detail (New Tab) */}
                  <Link
                    href={item.detailsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-center text-xs font-semibold text-zinc-400 hover:text-white py-3 transition-colors flex items-center justify-center"
                  >
                    Details
                  </Link>

                  {/* Link Daftar (New Tab) */}
                  <Button asChild size="sm" className="bg-white text-zinc-950 hover:bg-zinc-200 font-bold w-full">
                    <Link
                      href={item.registerLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Daftar <ArrowRight className="ml-1.5 w-3.5 h-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}