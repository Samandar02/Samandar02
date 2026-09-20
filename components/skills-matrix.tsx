'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Server,
  Database,
  Layers,
  Cloud,
  Code2,
  Award,
  CheckCircle2,
  Zap,
  Search,
} from 'lucide-react'

interface SkillCategory {
  id: string
  title: string
  icon: typeof Server
  color: string
  skills: { name: string; level: 'Mastery' | 'Advanced' | 'Proficient'; highlight?: boolean }[]
}

const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Backend & Distributed Runtimes',
    icon: Server,
    color: '#E03153',
    skills: [
      { name: 'NestJS', level: 'Mastery', highlight: true },
      { name: 'Node.js', level: 'Mastery', highlight: true },
      { name: '.NET Core Web API', level: 'Advanced' },
      { name: 'Express.js', level: 'Mastery' },
      { name: 'WCF Core & SOAP', level: 'Advanced' },
      { name: 'Knex.js', level: 'Mastery', highlight: true },
      { name: 'TypeORM', level: 'Advanced' },
      { name: 'Dapper', level: 'Advanced' },
      { name: 'EF Core', level: 'Proficient' },
      { name: 'Golang', level: 'Proficient' },
      { name: 'Python', level: 'Proficient' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases & Storage Engines',
    icon: Database,
    color: '#38BDF8',
    skills: [
      { name: 'PostgreSQL', level: 'Mastery', highlight: true },
      { name: 'PL/pgSQL Functions', level: 'Mastery', highlight: true },
      { name: 'Redis / Redis Streams', level: 'Mastery', highlight: true },
      { name: 'ClickHouse', level: 'Advanced' },
      { name: 'MS SQL Server', level: 'Advanced' },
      { name: 'MongoDB', level: 'Advanced' },
      { name: 'AWS S3 / MinIO', level: 'Advanced' },
    ],
  },
  {
    id: 'queues',
    title: 'Event Streaming & Message Queues',
    icon: Zap,
    color: '#C026D3',
    skills: [
      { name: 'Apache Kafka', level: 'Advanced', highlight: true },
      { name: 'BullMQ', level: 'Mastery', highlight: true },
      { name: 'RabbitMQ', level: 'Advanced' },
      { name: 'Event-Driven Architecture', level: 'Mastery' },
    ],
  },
  {
    id: 'devops',
    title: 'Cloud, Containers & CI/CD',
    icon: Cloud,
    color: '#A855F7',
    skills: [
      { name: 'Kubernetes (K8s)', level: 'Advanced', highlight: true },
      { name: 'Docker & Docker Compose', level: 'Mastery' },
      { name: 'GitLab CI / GitHub Actions', level: 'Advanced', highlight: true },
      { name: 'Docker Swarm', level: 'Advanced' },
      { name: 'Nginx Reverse Proxy', level: 'Advanced' },
      { name: 'Linux Server Admin', level: 'Advanced' },
      { name: 'IIS', level: 'Proficient' },
    ],
  },
  {
    id: 'architecture',
    title: 'Protocols & Architecture Patterns',
    icon: Layers,
    color: '#F43F5E',
    skills: [
      { name: 'Microservices Architecture', level: 'Mastery', highlight: true },
      { name: 'OLTP & OLAP Systems', level: 'Mastery', highlight: true },
      { name: 'gRPC & Protocol Buffers', level: 'Advanced' },
      { name: 'WebSocket & Socket.IO', level: 'Advanced' },
      { name: 'GraphQL', level: 'Advanced' },
      { name: 'REST & OpenAPI / Swagger', level: 'Mastery' },
      { name: 'SOLID, DRY, KISS, YAGNI', level: 'Mastery' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend & Reactive UI',
    icon: Code2,
    color: '#38BDF8',
    skills: [
      { name: 'Angular v2+', level: 'Advanced', highlight: true },
      { name: 'RxJS Reactive Streams', level: 'Advanced' },
      { name: 'TypeScript & JavaScript', level: 'Mastery' },
      { name: 'TailwindCSS', level: 'Mastery' },
      { name: 'Angular Material', level: 'Proficient' },
      { name: 'SASS / CSS Modules', level: 'Advanced' },
    ],
  },
]

export default function SkillsMatrix() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState<string>('all')

  const filteredCategories = skillCategories.map((cat) => ({
    ...cat,
    skills: cat.skills.filter((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase())),
  }))

  const displayedCategories =
    activeTab === 'all' ? filteredCategories : filteredCategories.filter((c) => c.id === activeTab)

  return (
    <section id="skills" className="relative py-24 border-t border-white/[0.08]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-white/[0.08]">
          <div>
            <div className="section-badge mb-2">
              <span>04. TECHNICAL TOOLKIT</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Skills &amp; <span className="text-gradient-primary">Technology Matrix</span>
            </h2>
          </div>

          {/* Search input */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. Kafka, Postgres)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-lg bg-[#0F111A] border border-white/[0.08] text-xs font-mono text-white placeholder-gray-500 focus:outline-none focus:border-[#E03153]"
            />
          </div>
        </div>

        {/* HackerRank Angular Award Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 p-5 rounded-xl bg-[#0F111A] border border-white/[0.1] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3.5">
            <div className="p-2.5 rounded-lg bg-[#E03153]/10 text-[#E03153] border border-[#E03153]/20">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-[#38BDF8] font-semibold uppercase">
                  Industry Certification
                </span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-white/[0.06] text-gray-300">2022</span>
              </div>
              <h3 className="font-heading font-bold text-base text-white mt-0.5">
                Angular (Intermediate) Certificate — HackerRank
              </h3>
              <p className="text-xs text-gray-400 mt-0.5">
                Demonstrated core expertise in Component Architecture, Reactive Forms, RxJS Observables, Dependency Injection, and Routing.
              </p>
            </div>
          </div>

          <div className="shrink-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/20 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Verified
            </span>
          </div>
        </motion.div>

        {/* Category Filter Tabs */}
        <div className="mt-6 flex flex-wrap gap-1.5 pb-2">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === 'all'
                ? 'bg-white text-black font-semibold'
                : 'bg-[#121420] text-gray-400 hover:text-white border border-white/[0.08]'
            }`}
          >
            All Disciplines
          </button>
          {skillCategories.map((cat) => {
            const isActive = activeTab === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-white text-black font-semibold'
                    : 'bg-[#121420] text-gray-400 hover:text-white border border-white/[0.08]'
                }`}
              >
                {cat.title}
              </button>
            )
          })}
        </div>

        {/* Grid of Skill Categories */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {displayedCategories.map((category) => {
            if (category.skills.length === 0) return null
            const Icon = category.icon
            return (
              <div
                key={category.id}
                className="p-5 rounded-xl bg-[#0F111A] border border-white/[0.08] space-y-3.5"
              >
                {/* Category Title */}
                <div className="flex items-center gap-2.5 pb-2.5 border-b border-white/[0.06]">
                  <div
                    className="p-1.5 rounded-md bg-white/[0.04] border border-white/[0.06]"
                    style={{ color: category.color }}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-semibold text-sm text-white">{category.title}</h3>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors ${
                        skill.highlight
                          ? 'bg-[#161928] text-white border border-[#E03153]/40 font-medium'
                          : 'bg-[#121420] text-gray-300 border border-white/[0.06] hover:border-white/[0.15] hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        {skill.highlight && <span className="w-1 h-1 rounded-full bg-[#E03153]" />}
                        <span>{skill.name}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
