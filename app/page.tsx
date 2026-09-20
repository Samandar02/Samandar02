'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/navigation'
import Hero from '@/components/hero'
import ExperienceSection from '@/components/experience-section'
import ProjectsSection from '@/components/projects-section'
import BackendSandbox from '@/components/backend-sandbox'
import SkillsMatrix from '@/components/skills-matrix'
import AboutEducation from '@/components/about-education'
import ContactFooter from '@/components/contact-footer'

const sectionIds = ['hero', 'experience', 'projects', 'sandbox', 'skills', 'about', 'contact']

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero')
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    // Scroll progress handler
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100
        setScrollProgress(progress)
      }
    }

    // Intersection observer for section tracking
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-30% 0px -40% 0px',
        threshold: 0.1,
      }
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleNavigate = (sectionId: string) => {
    const target = document.getElementById(sectionId)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="relative min-h-screen bg-[#090A0F] text-[#F8FAFC]">
      {/* Top Fixed Minimalist Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[2px] bg-gradient-to-r from-[#E03153] to-[#38BDF8] z-50 transition-all duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Floating Navigation Header */}
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      {/* Main Page Content Flow */}
      <main className="relative z-10">
        <Hero onNavigate={handleNavigate} />
        <ExperienceSection />
        <ProjectsSection />
        <BackendSandbox />
        <SkillsMatrix />
        <AboutEducation />
        <ContactFooter />
      </main>
    </div>
  )
}
