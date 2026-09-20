'use client'

import { motion } from 'framer-motion'
import { GraduationCap, Globe, CheckCircle2, Award } from 'lucide-react'

export default function AboutEducation() {
  return (
    <section id="about" className="relative py-24 border-t border-white/[0.08]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-white/[0.08]">
          <div>
            <div className="section-badge mb-2">
              <span>05. PROFILE &amp; ACADEMICS</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Engineering Background &amp; <span className="text-gradient-primary">Education</span>
            </h2>
          </div>
          <p className="text-sm text-gray-400 max-w-md">
            Strong foundations in Applied Mathematics, computer networks, distributed event streaming, and ACID transactional guarantees.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left 7 Cols: Philosophy & Education */}
          <div className="lg:col-span-7 space-y-5">
            {/* Bio Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0F111A] border border-white/[0.08] space-y-4">
              <h3 className="font-heading text-xl sm:text-2xl font-bold text-white">
                Designing Backend Systems that Stay Resilient Under Load
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Over the past 4 years, I have navigated complex enterprise workflows — from integrating 20+ government services at <strong className="text-white font-medium">UNICON-SOFT</strong> to high-load payment gateways, banking middleware, and IoT telemetry pipelines at <strong className="text-white font-medium">Innasoft Digital Service</strong>.
              </p>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                I prioritize clean architecture, strict ACID guarantees in PostgreSQL, idempotent Kafka event streaming, and reliable Kubernetes container orchestration.
              </p>

              {/* Core Principles */}
              <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-2.5 font-mono text-xs">
                <div className="p-3 rounded-xl bg-[#121420] border border-white/[0.06] text-center">
                  <div className="text-[#E03153] font-bold">SOLID</div>
                  <div className="text-[10px] text-gray-400 mt-0.5 font-sans">Clean Design</div>
                </div>
                <div className="p-3 rounded-xl bg-[#121420] border border-white/[0.06] text-center">
                  <div className="text-[#38BDF8] font-bold">DRY &amp; KISS</div>
                  <div className="text-[10px] text-gray-400 mt-0.5 font-sans">Maintainability</div>
                </div>
                <div className="p-3 rounded-xl bg-[#121420] border border-white/[0.06] text-center">
                  <div className="text-[#A855F7] font-bold">OLTP / ACID</div>
                  <div className="text-[10px] text-gray-400 mt-0.5 font-sans">Data Integrity</div>
                </div>
                <div className="p-3 rounded-xl bg-[#121420] border border-white/[0.06] text-center">
                  <div className="text-emerald-400 font-bold">ZERO-TRUST</div>
                  <div className="text-[10px] text-gray-400 mt-0.5 font-sans">Security First</div>
                </div>
              </div>
            </div>

            {/* University Degree Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0F111A] border border-white/[0.08] space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider">
                    BACHELOR’S DEGREE (2020 — 2024)
                  </div>
                  <h4 className="font-heading text-lg sm:text-xl font-bold text-white">National University of Uzbekistan</h4>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#121420] border border-white/[0.06]">
                <div className="text-sm font-semibold text-white">
                  Information Systems and Technologies (Applied Mathematics &amp; IT)
                </div>
                <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                  <strong>Specialized Coursework:</strong> .NET Technologies, Data Structures &amp; Algorithms, Database Management Systems, Computer Networks, Information Security, Probability &amp; Statistics, Machine Learning, and Software Engineering.
                </p>
              </div>
            </div>
          </div>

          {/* Right 5 Cols: Languages & Numbers */}
          <div className="lg:col-span-5 space-y-5">
            {/* Languages Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0F111A] border border-white/[0.08] space-y-4">
              <div className="flex items-center gap-2.5 pb-3 border-b border-white/[0.06]">
                <div className="p-2 rounded-lg bg-[#E03153]/10 text-[#E03153]">
                  <Globe className="w-4 h-4" />
                </div>
                <h4 className="font-heading text-base font-bold text-white">Language Proficiencies</h4>
              </div>

              <div className="space-y-2 font-mono">
                <div className="p-3 rounded-xl bg-[#121420] border border-white/[0.04] flex items-center justify-between">
                  <span className="text-xs text-white font-semibold">Uzbek</span>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/20">
                    Native
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-[#121420] border border-white/[0.04] flex items-center justify-between">
                  <span className="text-xs text-white font-semibold">English</span>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-sky-500/15 text-sky-300 border border-sky-500/20">
                    B1 — Intermediate
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-[#121420] border border-white/[0.04] flex items-center justify-between">
                  <span className="text-xs text-white font-semibold">Russian</span>
                  <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/20">
                    A2 — Elementary
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Metrics Snapshot */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#0F111A] border border-white/[0.08] space-y-4">
              <div className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                ENGINEERING METRICS SNAPSHOT
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-xl bg-[#121420] border border-white/[0.04]">
                  <div className="font-heading text-2xl font-bold text-white">4 Yrs</div>
                  <div className="text-xs font-mono text-gray-400 mt-0.5">Production Experience</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#121420] border border-white/[0.04]">
                  <div className="font-heading text-2xl font-bold text-[#E03153]">20+</div>
                  <div className="text-xs font-mono text-gray-400 mt-0.5">Gov API Integrations</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#121420] border border-white/[0.04]">
                  <div className="font-heading text-2xl font-bold text-[#38BDF8]">100%</div>
                  <div className="text-xs font-mono text-gray-400 mt-0.5">Postgres ACID Fidelity</div>
                </div>
                <div className="p-3.5 rounded-xl bg-[#121420] border border-white/[0.04]">
                  <div className="font-heading text-2xl font-bold text-emerald-400">23</div>
                  <div className="text-xs font-mono text-gray-400 mt-0.5">Years Old (2002)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
