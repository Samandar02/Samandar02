'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowUpRight,
  ShieldAlert,
  CheckCircle2,
  Code2,
  GitBranch,
  X,
} from 'lucide-react'

interface Project {
  id: string
  number: string
  title: string
  subtitle: string
  category: 'Government & Civic' | 'Fintech & Banking' | 'IoT & Telemetry' | 'SaaS & Booking'
  company: string
  role: string
  badge: string
  description: string
  challenge: string
  solution: string
  architectureFlow: string[]
  metrics: { label: string; value: string }[]
  stack: string[]
  apiPreview: string
}

const projects: Project[] = [
  {
    id: 'elektron-hokimiyat',
    number: '01',
    title: 'Elektron Hokimiyat Platform',
    subtitle: 'Unified Public Administration & 20+ MIP Gateway',
    category: 'Government & Civic',
    company: 'UNICON-SOFT',
    role: 'Middle Backend NodeJs Developer',
    badge: 'Flagship Civic Platform',
    description:
      'A resilient startup platform designed to unify public administration operations and connect 20+ government ministries via the Interdepartmental Integration Platform (MIP).',
    challenge:
      'Fragmented public administration systems required a unified, high-availability integration gateway capable of processing diverse government payloads securely without data loss.',
    solution:
      'Engineered an event-driven NestJS microservices architecture backed by Apache Kafka and BullMQ queues, Kubernetes orchestration, and optimized PostgreSQL schema with Knex.js query building.',
    architectureFlow: [
      'Client / Telegram Bot Request',
      'Kubernetes Ingress & Auth Shield',
      'NestJS API Gateway',
      'Kafka Event Streaming & BullMQ Queues',
      'PostgreSQL DB Cluster + Redis Cache',
      '20+ External MIP Gov Services',
    ],
    metrics: [
      { label: 'Government APIs', value: '20+ MIP Services' },
      { label: 'Platform Uptime', value: '99.99%' },
      { label: 'Deployment', value: 'Kubernetes (K8s)' },
    ],
    stack: ['NestJS', 'Kafka', 'Redis', 'BullMQ', 'PostgreSQL', 'Knex.js', 'Kubernetes', 'Docker', 'Telegram API'],
    apiPreview: `POST /api/v1/gov/mip/service-sync
Headers: { "X-MIP-Token": "Bearer ***" }
Payload: {
  "citizenPinfl": "30212028470012",
  "requestedService": "cadastre.property_validation",
  "priority": "HIGH"
}
Response (200 OK): {
  "status": "PROCESSED",
  "syncId": "mip_98a72f01",
  "latencyMs": 18
}`,
  },
  {
    id: 'munis-payment-rail',
    number: '02',
    title: 'MUNIS Payment Rail & SOAP Engine',
    subtitle: 'National OLTP Settlement & Transaction Processing',
    category: 'Fintech & Banking',
    company: 'Innasoft Digital Service LLC',
    role: 'Mid. Backend Developer',
    badge: 'High-Volume Fintech',
    description:
      'Complete architectural redevelopment of the OLTP consumer payment system processing high-volume transactions with the national MUNIS payment system over SOAP.',
    challenge:
      'Legacy payment rails suffered from latency spikes, SOAP payload deserialization bottlenecks, and inconsistent transaction rollbacks under peak consumer billing cycles.',
    solution:
      'Redesigned the OLTP ingestion pipeline with .NET Core Web API / Node.js, Dapper micro-ORM, strict XML SOAP schema validation, and ACID transactional guarantees.',
    architectureFlow: [
      'Consumer Payment Origin (MUNIS Rail)',
      'WCF / SOAP Transport Security Layer',
      'Dapper & PL/pgSQL Atomic Transactions',
      'PostgreSQL Core Ledger',
      'Audit Ledger & Automated Settlement Dispatch',
    ],
    metrics: [
      { label: 'Transaction Latency', value: '< 25ms p99' },
      { label: 'Data Integrity', value: '100% ACID' },
      { label: 'Protocol', value: 'SOAP / WCF Core' },
    ],
    stack: ['.NET Core', 'WCF Core', 'SOAP', 'PostgreSQL', 'Dapper', 'FluentValidation', 'Node.js'],
    apiPreview: `<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/">
  <soapenv:Body>
    <ProcessMunisPayment>
      <TransactionId>TX_883921</TransactionId>
      <Amount>450000.00</Amount>
      <Currency>UZS</Currency>
      <Status>COMMITTED</Status>
    </ProcessMunisPayment>
  </soapenv:Body>
</soapenv:Envelope>`,
  },
  {
    id: 'payloo-qr',
    number: '03',
    title: 'Payloo QR Instant Scoring Module',
    subtitle: 'Full-Stack Rapid Onboarding & MyID Verification',
    category: 'Fintech & Banking',
    company: 'Innasoft Digital Service LLC',
    role: 'Full Stack Developer',
    badge: 'Micro-Loan Prototype',
    description:
      'Low-friction QR module enabling instant client onboarding, MyID identity verification, and real-time loan scoring rates without manual merchant burden.',
    challenge:
      'Traditional in-store loan applications took 15+ minutes with paper documentation, creating high drop-off rates for retail merchants.',
    solution:
      'Created an instant dynamic QR system where borrowers scan, verify identity via MyID biometrics, and receive real-time credit scoring rates in under 60 seconds.',
    architectureFlow: [
      'Merchant QR Scan',
      'MyID Biometric Auth Handshake',
      'NestJS Credit Scoring Engine',
      'Redis Session Cache',
      'Loan Approval Dispatch to Core Banking',
    ],
    metrics: [
      { label: 'Onboarding Speed', value: '< 60 Seconds' },
      { label: 'Drop-off Reduction', value: '-65%' },
      { label: 'Frontend & Backend', value: 'Angular + NestJS' },
    ],
    stack: ['NestJS', 'Angular', 'Redis', 'PostgreSQL', 'MyID Auth', 'TailwindCSS'],
    apiPreview: `POST /api/v1/payloo/qr-score
Payload: {
  "qrHash": "qr_90f23d11b",
  "myIdToken": "myid_auth_sec_884",
  "requestedLimit": 12000000
}
Response (200 OK): {
  "decision": "APPROVED",
  "scoringRate": "18.5%",
  "approvalToken": "loan_app_991823"
}`,
  },
  {
    id: 'btime-platform',
    number: '04',
    title: 'B’Time Salons & Specialists Platform',
    subtitle: 'Three-Tier Booking & CRM Ecosystem',
    category: 'SaaS & Booking',
    company: 'Innasoft Digital Service LLC',
    role: 'Backend Developer',
    badge: 'Multi-Tenant SaaS',
    description:
      'Scalable multi-tenant backend architecture managing three interconnected applications: Customer booking client, Partner Business CRM, and Platform Moderator portal.',
    challenge:
      'Handling concurrent appointment slot collisions across thousands of independent salon partners and independent specialists.',
    solution:
      'Implemented distributed Redis lock mechanisms and TypeORM transaction isolation levels to prevent overbooking and synchronize calendar real-time feeds.',
    architectureFlow: [
      'Customer Web & Mobile Client',
      'Partner CRM & Calendar Webhooks',
      'NestJS Core API + Redis Distributed Locks',
      'TypeORM & PostgreSQL Entity Relations',
      'Moderator Super-Admin Gateway',
    ],
    metrics: [
      { label: 'Sub-Platforms', value: '3 Portals' },
      { label: 'Collision Rate', value: '0% Double-Booking' },
      { label: 'Architecture', value: 'Domain Driven (DDD)' },
    ],
    stack: ['NestJS', 'TypeORM', 'Redis', 'PostgreSQL', 'Socket.IO', 'Docker Swarm'],
    apiPreview: `POST /api/v1/btime/booking/reserve-slot
Payload: {
  "specialistId": "spec_3012",
  "serviceId": "srv_haircut_pro",
  "slotStart": "2026-09-01T14:00:00Z"
}
Response (201 Created): {
  "reservationId": "res_88310",
  "lockAcquired": true,
  "expiresInSeconds": 300
}`,
  },
  {
    id: 'service-desk-gov',
    number: '05',
    title: 'Citizen Service Desk & Gov Sync',
    subtitle: 'Cadastre, MVD, MIP & SOLIQ API Middleware',
    category: 'Government & Civic',
    company: 'Innasoft Digital Service LLC',
    role: 'Backend Developer',
    badge: 'Gov Middleware',
    description:
      'Enterprise claim management system routing citizen submissions from MyGov and synchronizing transactional records with Cadastre, MVD, and SOLIQ (FMO QR).',
    challenge:
      'Unifying heterogeneous government APIs with diverse authentication standards, SOAP/REST protocols, and rate-limiting thresholds.',
    solution:
      'Constructed a resilient middleware gateway with circuit breaker patterns, automated retries, and high-performance PL/pgSQL stored procedures for audit reconciliation.',
    architectureFlow: [
      'Citizen Claim (MyGov Platform)',
      'Service Desk Ingestion Router',
      'SOLIQ FMO Receipt QR Generator',
      'Cadastre & MVD Background Sync',
      'PostgreSQL PL/pgSQL Transaction Audit',
    ],
    metrics: [
      { label: 'Integrated Agencies', value: 'Cadastre, MVD, SOLIQ, MyGov' },
      { label: 'Batch Processing', value: 'PL/pgSQL Functions' },
      { label: 'Automation', value: 'Python & Go Daemons' },
    ],
    stack: ['NestJS', 'PostgreSQL', 'PL/pgSQL', 'SOLIQ API', 'Python', 'Golang', 'Redis'],
    apiPreview: `POST /api/v1/gov/soliq/generate-qr
Payload: {
  "claimId": "claim_77210",
  "fiscalSign": "fmo_991823901",
  "taxAmount": 15000
}
Response (200 OK): {
  "qrReceiptUrl": "https://soliq.uz/qr/991823901",
  "status": "REGISTERED_WITH_STATE_TAX"
}`,
  },
  {
    id: 'lorawan-billing',
    number: '06',
    title: 'LoraWAN & 1C Telemetry Billing Engine',
    subtitle: 'Massive Sensor Ingestion & Automated Accruals',
    category: 'IoT & Telemetry',
    company: 'Innasoft Digital Service LLC',
    role: 'Backend Developer',
    badge: 'IoT Billing Engine',
    description:
      'High-throughput ingestion pipeline collecting massive real-time online meter readings from LoraWAN sensors and calculating automated accruals via 1C integration.',
    challenge:
      'Ingesting millions of telemetry datapoints from utility sensors simultaneously without overloading the accounting ledger.',
    solution:
      'Engineered an asynchronous pipeline using Redis Streams, batch queue workers, and custom 1C Enterprise API bridges for zero-loss billing calculations.',
    architectureFlow: [
      'LoraWAN Gateway Sensor Broadcasts',
      'Node.js Telemetry Ingestion Gateway',
      'Redis Streams Buffer',
      'Batch Calculation Worker',
      '1C Enterprise Web Billing Accrual Sync',
    ],
    metrics: [
      { label: 'Data Ingestion', value: '10K+ Packets / Sec' },
      { label: 'Accrual Accuracy', value: '100% Zero-Loss' },
      { label: 'Hardware Bridge', value: 'LoraWAN + 1C' },
    ],
    stack: ['Node.js', 'LoraWAN', '1C Enterprise API', 'PostgreSQL', 'Redis Streams', 'BullMQ'],
    apiPreview: `POST /api/v1/telemetry/lorawan/batch
Payload: {
  "gatewayId": "lora_gw_tashkent_central",
  "readingsCount": 10000,
  "timestamp": 1787948200
}
Response (202 Accepted): {
  "batchId": "batch_9812739",
  "queuedFor1C": true,
  "processingMs": 42
}`,
  },
]

const categories = ['All', 'Government & Civic', 'Fintech & Banking', 'IoT & Telemetry', 'SaaS & Booking'] as const

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filteredProjects =
    selectedCategory === 'All' ? projects : projects.filter((p) => p.category === selectedCategory)

  return (
    <section id="projects" className="relative py-24 border-t border-white/[0.08]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-white/[0.08]">
          <div>
            <div className="section-badge mb-2">
              <span>02. SELECTED WORK</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Featured <span className="text-gradient-primary">Engineering Projects</span>
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5">
            {categories.map((category) => {
              const isActive = selectedCategory === category
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-white text-black font-semibold'
                      : 'bg-[#121420] text-gray-400 hover:text-white border border-white/[0.08] hover:border-white/[0.15]'
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setSelectedProject(project)}
              className="group rounded-2xl bg-[#0F111A] border border-white/[0.08] hover:border-white/[0.18] p-6 flex flex-col justify-between cursor-pointer transition-all duration-200 hover:bg-[#131624] hover:-translate-y-1 shadow-sm"
            >
              {/* Top Row Number & Badge */}
              <div>
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.06]">
                  <span className="font-mono text-sm font-bold text-[#E03153]">
                    {project.number}
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-gray-400 border border-white/[0.06]">
                    {project.badge}
                  </span>
                </div>

                <div className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider mb-1">
                  {project.company}
                </div>

                <h3 className="font-heading text-lg font-bold text-white group-hover:text-[#E03153] transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-gray-400 mt-1 font-sans">{project.subtitle}</p>

                <p className="text-sm text-gray-300 mt-3 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
              </div>

              {/* Bottom Metrics & Action */}
              <div className="mt-5 pt-4 border-t border-white/[0.06] space-y-3">
                {/* Highlights preview */}
                <div className="grid grid-cols-2 gap-2 text-left">
                  {project.metrics.slice(0, 2).map((metric, mIdx) => (
                    <div key={mIdx} className="p-2 rounded-lg bg-[#0A0C14] border border-white/[0.04]">
                      <div className="text-[10px] text-gray-400 font-sans">{metric.label}</div>
                      <div className="text-xs font-semibold text-white mt-0.5">{metric.value}</div>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-gray-400 border border-white/[0.04]"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-white/[0.04] text-gray-400">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs font-medium text-gray-400 group-hover:text-white transition-colors pt-1">
                  <span>View Project Details</span>
                  <ArrowUpRight className="w-4 h-4 text-[#38BDF8] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 15 }}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl bg-[#0C0E16] border border-white/[0.14] p-6 sm:p-8 shadow-2xl z-10 space-y-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-gray-400 hover:text-white transition-colors"
                aria-label="Close Modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Header */}
              <div className="space-y-1.5 pr-10">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-[#E03153]/15 text-[#E03153] text-xs font-mono font-semibold">
                    Project {selectedProject.number}
                  </span>
                  <span className="text-xs font-mono text-[#38BDF8]">{selectedProject.company}</span>
                </div>

                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-gray-400">{selectedProject.subtitle}</p>
              </div>

              {/* Metrics Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {selectedProject.metrics.map((metric, mIdx) => (
                  <div
                    key={mIdx}
                    className="p-3.5 rounded-xl bg-[#121420] border border-white/[0.06]"
                  >
                    <span className="text-xs text-gray-400 font-sans">
                      {metric.label}
                    </span>
                    <div className="font-heading font-bold text-base text-white mt-0.5">{metric.value}</div>
                  </div>
                ))}
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                <div className="p-4 rounded-xl bg-[#121420] border border-white/[0.06] space-y-2">
                  <h4 className="text-xs font-mono font-semibold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4" />
                    <span>The Challenge</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{selectedProject.challenge}</p>
                </div>

                <div className="p-4 rounded-xl bg-[#121420] border border-white/[0.06] space-y-2">
                  <h4 className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Architectural Solution</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{selectedProject.solution}</p>
                </div>
              </div>

              {/* Architecture Pipeline Flow */}
              <div className="p-4 rounded-xl bg-[#080910] border border-white/[0.06] space-y-3">
                <h4 className="text-xs font-mono font-semibold text-[#38BDF8] uppercase tracking-wider flex items-center gap-1.5">
                  <GitBranch className="w-4 h-4" />
                  <span>Data Flow &amp; Distributed Architecture</span>
                </h4>
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-gray-300">
                  {selectedProject.architectureFlow.map((step, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded bg-[#141624] border border-white/[0.08] text-white">
                        {step}
                      </span>
                      {sIdx < selectedProject.architectureFlow.length - 1 && (
                        <span className="text-[#E03153] font-bold">→</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* API / Protocol Contract Preview */}
              <div className="p-4 rounded-xl bg-[#080910] border border-white/[0.06] space-y-2">
                <h4 className="text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Code2 className="w-4 h-4 text-[#E03153]" />
                  <span>API Protocol &amp; Contract</span>
                </h4>
                <pre className="font-mono text-xs text-gray-300 bg-black/60 p-3.5 rounded-lg overflow-x-auto border border-white/[0.04] leading-relaxed">
                  <code>{selectedProject.apiPreview}</code>
                </pre>
              </div>

              {/* Full Tech Ecosystem */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-semibold text-gray-400 uppercase tracking-wider">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md bg-[#141624] border border-white/[0.08] text-xs font-mono text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
