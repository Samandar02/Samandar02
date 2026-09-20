'use client'

import { motion } from 'framer-motion'
import { ArrowDownRight, Terminal, Send, Server, Zap, Database, CheckCircle2, Shield } from 'lucide-react'

interface HeroProps {
  onNavigate: (sectionId: string) => void
}

export default function Hero({ onNavigate }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[90vh] pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      {/* Subtle Ambient Glow */}
      <div className="subtle-ambient-glow" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Clean Status Pill Bar */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-white/[0.08]"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-gray-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-gray-300 font-medium">Tashkent, Uzbekistan</span>
            <span className="text-gray-600">•</span>
            <span className="text-gray-400">Middle Backend Engineer @ UNICON-SOFT</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
              Open for Senior / Middle Backend Roles
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Copy (Left 7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.1] text-xs font-mono text-gray-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E03153]" />
              <span>DISTRIBUTED ARCHITECTURE &amp; HIGH-LOAD SYSTEMS</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-heading text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-white leading-[1.1]"
            >
              Building resilient <span className="text-gradient-primary">backend architecture</span> for critical digital infrastructure<span className="text-[#E03153]">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-lg text-gray-300 max-w-2xl leading-relaxed"
            >
              I am <strong className="text-white font-semibold">Samandar Uchqunov</strong>, a Middle Backend Engineer with 4 years of hands-on experience designing high-concurrency microservices, government integrations (20+ MIP services), OLTP fintech payment rails, and telemetry pipelines using <strong className="text-white font-medium">NestJS, PostgreSQL, Kafka, Redis, .NET</strong>, and <strong className="text-white font-medium">Kubernetes</strong>.
            </motion.p>

            {/* Metrics Ribbon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-3 pt-2 max-w-lg"
            >
              <div className="p-4 rounded-xl bg-[#0F111A] border border-white/[0.08]">
                <div className="font-heading font-bold text-2xl sm:text-3xl text-white">4+ Yrs</div>
                <div className="text-xs font-mono text-gray-400 mt-1">Backend Experience</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0F111A] border border-white/[0.08]">
                <div className="font-heading font-bold text-2xl sm:text-3xl text-[#E03153]">20+</div>
                <div className="text-xs font-mono text-gray-400 mt-1">MIP Gov Services</div>
              </div>
              <div className="p-4 rounded-xl bg-[#0F111A] border border-white/[0.08]">
                <div className="font-heading font-bold text-2xl sm:text-3xl text-[#38BDF8]">99.9%</div>
                <div className="text-xs font-mono text-gray-400 mt-1">Target Uptime</div>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-3 pt-3"
            >
              <button
                onClick={() => onNavigate('projects')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#E03153] hover:bg-[#F43F5E] text-white text-xs font-semibold tracking-wide transition-all shadow-md hover:shadow-lg"
              >
                <span>Explore Projects</span>
                <ArrowDownRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('sandbox')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#141622] hover:bg-[#1A1E2E] border border-white/[0.12] hover:border-white/[0.2] text-xs font-medium text-gray-200 hover:text-white transition-all"
              >
                <Terminal className="w-4 h-4 text-[#38BDF8]" />
                <span>Interactive Terminal</span>
              </button>

              <a
                href="https://t.me/UchqunovSamandar"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-xs font-medium text-gray-400 hover:text-white transition-colors"
              >
                <Send className="w-3.5 h-3.5 text-[#E03153]" />
                <span>Let&apos;s Connect ↗</span>
              </a>
            </motion.div>
          </div>

          {/* Telemetry Architecture Widget (Right 5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="rounded-2xl bg-[#0C0E16] border border-white/[0.1] p-5 sm:p-6 shadow-xl space-y-4">
              {/* Header Telemetry */}
              <div className="flex items-center justify-between pb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="font-mono text-xs font-semibold text-white tracking-wide">SYSTEM TELEMETRY</span>
                </div>
                <span className="font-mono text-[11px] text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                  CLUSTER HEALTHY
                </span>
              </div>

              {/* Node status indicators */}
              <div className="space-y-2.5 font-mono text-xs">
                {/* Node 1: Unicon-Soft Elektron Hokimiyat */}
                <div className="p-3 rounded-xl bg-[#121420] border border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#E03153]/15 text-[#E03153]">
                      <Server className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-xs">Elektron Hokimiyat</div>
                      <div className="text-[11px] text-gray-400 font-sans">UNICON-SOFT // NestJS + Kafka</div>
                    </div>
                  </div>
                  <span className="text-[11px] text-[#38BDF8] font-bold">20+ MIP APIs</span>
                </div>

                {/* Node 2: MUNIS Payment Rail */}
                <div className="p-3 rounded-xl bg-[#121420] border border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#A855F7]/15 text-[#A855F7]">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-xs">MUNIS Payment Rail</div>
                      <div className="text-[11px] text-gray-400 font-sans">INNASOFT // SOAP + OLTP</div>
                    </div>
                  </div>
                  <span className="text-[11px] text-emerald-400 font-bold">&lt; 25ms p99</span>
                </div>

                {/* Node 3: Database & Brokers */}
                <div className="p-3 rounded-xl bg-[#121420] border border-white/[0.08] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#38BDF8]/15 text-[#38BDF8]">
                      <Database className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-semibold text-white text-xs">Databases &amp; Queues</div>
                      <div className="text-[11px] text-gray-400 font-sans">PostgreSQL PL/pgSQL + BullMQ</div>
                    </div>
                  </div>
                  <span className="text-[11px] text-amber-400 font-bold">Optimized</span>
                </div>

                {/* Live stream logs preview */}
                <div className="p-3 rounded-xl bg-[#080910] border border-white/[0.06] font-mono text-[11px] text-gray-400 space-y-1">
                  <div className="text-gray-500">// Real-time Event Stream</div>
                  <div className="text-emerald-400">✓ Kafka consumer ready (group: &apos;gov.mip.sync&apos;)</div>
                  <div className="text-sky-300">✓ Redis session cache synced: 1,420 keys</div>
                  <div className="text-rose-400">✓ Kubernetes ingress routed through Nginx proxy</div>
                </div>
              </div>

              {/* Footer coordinates */}
              <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-gray-500">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-emerald-500" />
                  <span>OWASP Compliant</span>
                </span>
                <span>Microservices Architecture</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
