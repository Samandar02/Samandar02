'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ChevronDown, CheckCircle2, Layers } from 'lucide-react'

interface ExperienceItem {
  id: string
  company: string
  role: string
  period: string
  duration: string
  location: string
  type: string
  isCurrent?: boolean
  summary: string
  highlights: string[]
  stack: string[]
  achievementsCount: string
}

const experiences: ExperienceItem[] = [
  {
    id: 'unicon',
    company: 'UNICON-SOFT',
    role: 'Middle Backend NodeJs Developer',
    period: 'March 2026 — Present',
    duration: 'Current Role',
    location: 'Tashkent, Uzbekistan',
    type: 'Research & Civic Tech',
    isCurrent: true,
    summary:
      'Architecting core backend services for national civic infrastructure, leading the "Elektron Hokimiyat" startup platform and integrating mission-critical government services.',
    highlights: [
      'Developed and maintained the core "Elektron Hokimiyat" startup platform connecting public administration systems.',
      'Delivered seamless backend integrations for 20+ MIP (Interdepartmental Integration Platform) government services.',
      'Participated in software architecture design, implemented scalable microservice features, and resolved software & security vulnerabilities.',
      'Extensive database engineering with PostgreSQL, query optimization, and schema design.',
      'Hands-on DevOps implementation with CI/CD pipelines, automated deployments, and Kubernetes cluster orchestration.',
      'Developed a high-volume Telegram bot named "Yoshlar Bilan Muloqot" and integrated it seamlessly with the "Elektron Hokimiyat" platform.',
    ],
    stack: ['NestJS', 'Redis', 'Kafka', 'BullMQ', 'PostgreSQL', 'Knex.js', 'Kubernetes', 'CI/CD', 'Docker'],
    achievementsCount: '20+ MIP Services',
  },
  {
    id: 'innasoft',
    company: 'Innasoft Digital Service LLC',
    role: 'Mid. Backend Developer',
    period: 'Feb 2024 — Feb 2026',
    duration: '2 Years',
    location: 'Tashkent, Uzbekistan',
    type: 'Fintech, Banking & IoT',
    isCurrent: false,
    summary:
      'Engineered enterprise transaction pipelines, banking middleware, high-volume IoT billing systems, and government service integrations with strict SLA requirements.',
    highlights: [
      'Implemented middleware service integrating company loan application systems with TrustBank, Davrbank, and FMO (SOLIQ API) for automated QR receipt generation.',
      'Redeveloped the OLTP system to receive consumer payments over the SOAP protocol from the MUNIS national payment system.',
      'Developed and optimized company PostgreSQL PL/pgSQL functions to enhance high-throughput transactional processing and business operations.',
      'Integrated internal systems with key government APIs including Cadastre, MVD, MIP, Government, and MyGov Notification services.',
      'Implemented the backend architecture for a Service Desk platform to process citizen claims received from MyGov.',
      'Connected LoraWAN telemetry sensors and 1C with a Web Billing system for high-volume data collection and automatic accrual generation.',
      'Built and deployed high-performance Telegram bots for operations and customer workflows.',
      'Authored automated data migration, parsing, and maintenance scripts using Python and Golang.',
    ],
    stack: [
      'NestJS',
      'Node.js',
      '.NET Core Web API',
      'PostgreSQL',
      'PL/pgSQL',
      'Redis',
      'BullMQ',
      'TypeORM',
      'Dapper',
      'SOAP',
      'WCF Core',
      'Golang',
      'Python',
    ],
    achievementsCount: '10K+ Telemetry RPS',
  },
  {
    id: 'innovation-mall',
    company: 'INNOVATION MALL',
    role: 'Jr. Backend Developer',
    period: 'Sep 2022 — Jan 2024',
    duration: '1 Year 4 Months',
    location: 'Tashkent, Uzbekistan',
    type: 'E-Commerce & Retail',
    isCurrent: false,
    summary:
      'Designed REST APIs, merchant scoring systems, reporting analytics bots, and automated scraping workflows for fintech and retail operations.',
    highlights: [
      'Designed REST API microservices based on business requirements with comprehensive Swagger OpenAPI documentation.',
      'Implemented Telegram bot for sales rate reporting with analytical forms and multi-format Excel data exporting.',
      'Implemented Telegram Contest bot for the Merchant Bonus incentive program.',
      'Built and deployed internal utility bot automating tasks for company call-center operators.',
      'Provided active support and troubleshooting for loan application merchants.',
      'Implemented automated Web Scraping service for EBP Service during internship period.',
    ],
    stack: ['Express.js', 'TypeScript', 'PostgreSQL', 'Telegram Bot API', 'Swagger', 'Angular', 'ExcelJS'],
    achievementsCount: '4 Core Bots Built',
  },
  {
    id: 'buka-school',
    company: 'Buka District Vocational School No 2',
    role: 'System Administrator',
    period: 'Sep 2021 — May 2022',
    duration: '9 Months',
    location: 'Tashkent Region, Uzbekistan',
    type: 'Infrastructure & Admin',
    isCurrent: false,
    summary:
      'Managed school local network topology, workstation reliability, hardware maintenance, and systems documentation.',
    highlights: [
      'Assisted in planning, deploying, and maintaining the school-wide network infrastructure.',
      'Reinstalled, repaired, and serviced 40+ workstation PCs to ensure continuous educational uptime.',
      'Prepared documentation, data entry, and analytical reporting using Linux and Office utilities.',
    ],
    stack: ['Network Setup', 'Linux', 'Windows Server', 'Hardware Diagnostics', 'PC Repair'],
    achievementsCount: '40+ Systems Managed',
  },
]

export default function ExperienceSection() {
  const [expandedId, setExpandedId] = useState<string>('unicon')

  return (
    <section id="experience" className="relative py-24 border-t border-white/[0.08]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-white/[0.08]">
          <div>
            <div className="section-badge mb-2">
              <span>01. CAREER TIMELINE</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Work Experience &amp; <span className="text-gradient-primary">Track Record</span>
            </h2>
          </div>
          <p className="text-sm text-gray-400 max-w-md">
            4 years of production engineering across civic infrastructure, OLTP payment rails, and distributed backend services.
          </p>
        </div>

        {/* Timeline List */}
        <div className="mt-8 space-y-4">
          {experiences.map((exp, index) => {
            const isExpanded = expandedId === exp.id
            return (
              <motion.article
                key={exp.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'bg-[#0F111A] border-white/[0.14] shadow-md'
                    : 'bg-[#0B0C14] border-white/[0.06] hover:border-white/[0.12] hover:bg-[#0E101A]'
                }`}
              >
                {/* Card Header (Clickable Accordion) */}
                <div
                  onClick={() => setExpandedId(isExpanded ? '' : exp.id)}
                  className="p-6 sm:p-7 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl border flex items-center justify-center shrink-0 mt-0.5 ${
                        exp.isCurrent
                          ? 'bg-[#E03153]/10 border-[#E03153]/30 text-[#E03153]'
                          : 'bg-white/[0.04] border-white/[0.08] text-gray-400'
                      }`}
                    >
                      <Briefcase className="w-5 h-5" />
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="font-mono text-xs font-semibold text-[#38BDF8] tracking-wider uppercase">
                          {exp.company}
                        </span>
                        {exp.isCurrent && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Current Role
                          </span>
                        )}
                        <span className="text-xs text-gray-400 px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">
                          {exp.type}
                        </span>
                      </div>

                      <h3 className="font-heading text-xl font-bold text-white">{exp.role}</h3>

                      <p className="text-sm text-gray-300 max-w-3xl leading-relaxed">{exp.summary}</p>
                    </div>
                  </div>

                  {/* Metadata & Toggle */}
                  <div className="flex items-center justify-between md:justify-end gap-5 pt-3 md:pt-0 border-t md:border-t-0 border-white/[0.06]">
                    <div className="text-left md:text-right font-mono">
                      <div className="text-xs text-gray-200 font-medium flex items-center gap-1.5 md:justify-end">
                        <Calendar className="w-3.5 h-3.5 text-gray-400" />
                        {exp.period}
                      </div>
                      <div className="text-xs text-gray-400 mt-0.5 flex items-center gap-1 md:justify-end font-sans">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </div>
                    </div>

                    <div
                      className={`w-8 h-8 rounded-lg border flex items-center justify-center transition-all shrink-0 ${
                        isExpanded
                          ? 'bg-[#E03153] border-[#E03153] text-white rotate-180'
                          : 'bg-white/[0.04] border-white/[0.08] text-gray-400'
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Expanded Detailed Highlights */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="px-6 sm:px-7 pb-7 pt-2 border-t border-white/[0.08]"
                    >
                      <div className="space-y-5">
                        <div>
                          <h4 className="text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider mb-3">
                            Key Deliverables &amp; Technical Impact:
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                            {exp.highlights.map((highlight, hIdx) => (
                              <div
                                key={hIdx}
                                className="p-3 rounded-xl bg-[#121420] border border-white/[0.06] flex items-start gap-2.5"
                              >
                                <CheckCircle2 className="w-4 h-4 text-[#38BDF8] shrink-0 mt-0.5" />
                                <span className="text-xs sm:text-sm text-gray-200 leading-relaxed">{highlight}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Stack Pills */}
                        <div>
                          <h4 className="text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider mb-2">
                            Technologies Used:
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {exp.stack.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 rounded-md bg-white/[0.05] border border-white/[0.08] text-xs font-mono text-gray-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
