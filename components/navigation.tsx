'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Menu, X, ArrowUpRight } from 'lucide-react'

interface NavProps {
  activeSection: string
  onNavigate: (sectionId: string) => void
}

const navItems = [
  { id: 'hero', label: 'Overview' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'sandbox', label: 'Terminal' },
  { id: 'skills', label: 'Toolkit' },
  { id: 'about', label: 'Profile' },
  { id: 'contact', label: 'Contact' },
]

export default function Navigation({ activeSection, onNavigate }: NavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3 bg-[#090A0F]/90 backdrop-blur-md border-b border-white/[0.08]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => onNavigate('hero')}
            className="group flex items-center gap-3 text-left focus:outline-none"
            aria-label="Samandar Uchqunov Home"
          >
            <div className="w-9 h-9 rounded-lg bg-[#141622] border border-white/[0.12] flex items-center justify-center transition-all duration-200 group-hover:border-[#E03153]/50">
              <span className="font-heading font-black text-sm tracking-tight text-white group-hover:text-[#E03153] transition-colors">
                SU
              </span>
            </div>

            <div className="hidden sm:block">
              <div className="flex items-center gap-2">
                <span className="font-heading font-semibold text-sm tracking-tight text-white group-hover:text-[#E03153] transition-colors">
                  Samandar Uchqunov
                </span>
                <span className="text-[11px] font-mono px-1.5 py-0.2 rounded bg-white/[0.06] text-gray-400 border border-white/[0.08]">
                  Middle Backend
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-[#121420]/90 border border-white/[0.08] rounded-full p-1 shadow-sm backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors duration-200 ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-[#E03153]/20 border border-[#E03153]/40 rounded-full"
                      transition={{ type: 'spring', stiffness: 400, damping: 35 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              )
            })}
          </nav>

          {/* Right Status & Actions */}
          <div className="flex items-center gap-3">
            {/* Live Availability Badge */}
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121420] border border-emerald-500/20 text-xs font-mono text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-gray-300 font-sans text-xs">Available for Roles</span>
            </div>

            {/* Quick Contact Button */}
            <a
              href="https://t.me/UchqunovSamandar"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#141622] hover:bg-[#1A1D2D] border border-white/[0.12] hover:border-[#E03153]/40 text-xs font-medium text-white transition-all"
            >
              <Send className="w-3 h-3 text-[#E03153]" />
              <span>Telegram</span>
              <ArrowUpRight className="w-3 h-3 text-gray-500" />
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#141622] border border-white/[0.08] text-gray-300 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-[64px] z-40 lg:hidden bg-[#090A0F]/95 backdrop-blur-xl border-b border-white/[0.08] px-6 py-6 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id)
                    setMobileMenuOpen(false)
                  }}
                  className={`text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? 'bg-[#E03153]/15 text-[#E03153] font-semibold border border-[#E03153]/30'
                      : 'text-gray-400 hover:bg-white/[0.04] hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-4 border-t border-white/[0.08] flex flex-col gap-2">
                <a
                  href="mailto:uchqunovsamandar31@gmail.com"
                  className="w-full py-2.5 rounded-lg bg-[#E03153] text-center text-xs font-semibold text-white tracking-wide hover:bg-[#F43F5E] transition-colors"
                >
                  uchqunovsamandar31@gmail.com
                </a>
                <a
                  href="https://t.me/UchqunovSamandar"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 rounded-lg bg-[#141622] border border-white/[0.08] text-center text-xs text-gray-300 flex items-center justify-center gap-2 hover:text-white"
                >
                  <Send className="w-3.5 h-3.5 text-[#38BDF8]" />
                  <span>@UchqunovSamandar</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
