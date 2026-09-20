'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Terminal, Play, RefreshCw, Zap, Shield, Copy, Check } from 'lucide-react'

interface SimulationAction {
  id: string
  name: string
  method: 'POST' | 'KAFKA' | 'LORAWAN' | 'SQL' | 'BOT'
  endpoint: string
  description: string
  latencyMs: number
  response: Record<string, unknown>
}

const actions: SimulationAction[] = [
  {
    id: 'gov-mip',
    name: 'MIP Gov Service Gateway',
    method: 'KAFKA',
    endpoint: 'gov.mip.citizen_sync',
    description: 'Dispatches high-priority interdepartmental citizen record synchronization across 20+ MIP public registries.',
    latencyMs: 16.4,
    response: {
      event: 'gov.mip.citizen_sync',
      status: 'EMITTED_TO_KAFKA_BROKER',
      partition: 3,
      offset: 198420,
      agenciesNotified: ['MVD', 'Cadastre', 'Tax_SOLIQ', 'MyGov_Notifications'],
      cacheStatus: 'REDIS_HIT',
      latency: '16.4ms',
      clusterNode: 'k8s-worker-unicon-02',
    },
  },
  {
    id: 'munis-soap',
    name: 'MUNIS Payment OLTP Settlement',
    method: 'POST',
    endpoint: '/api/v1/munis/soap-settlement',
    description: 'Executes ACID transaction commit over SOAP transport with Dapper and PL/pgSQL validation.',
    latencyMs: 22.1,
    response: {
      transactionId: 'TX_MUNIS_998102',
      accountNumber: '20208000900182390001',
      amountUzs: 850000.0,
      status: 'COMMITTED_ACID',
      rollbackPrepared: true,
      protocol: 'SOAP_1.2_OVER_HTTPS',
      sqlExecutionTimeMs: 4.8,
    },
  },
  {
    id: 'lorawan-telemetry',
    name: 'LoraWAN 10k Ingestion Batch',
    method: 'LORAWAN',
    endpoint: 'iot.readings.batch_ingest',
    description: 'Ingests 10,000 real-time utility meter readings into Redis Streams and generates 1C billing accruals.',
    latencyMs: 38.5,
    response: {
      batchId: 'lora_stream_40912',
      sensorsProcessed: 10000,
      corruptedPackets: 0,
      accrualQueuedTo1C: true,
      redisStreamKey: 'stream:meters:tashkent_buka',
      throughputRps: 14200,
    },
  },
  {
    id: 'bot-muloqot',
    name: 'Yoshlar Muloqot Bot Webhook',
    method: 'BOT',
    endpoint: 'telegram.webhook.yoshlar',
    description: 'Handles high-volume interactive citizen petition via BullMQ queue worker and NestJS state machine.',
    latencyMs: 12.8,
    response: {
      telegramUpdateId: 8847192,
      botName: 'Yoshlar Bilan Muloqot',
      integratedWith: 'Elektron Hokimiyat Platform',
      queueWorker: 'BullMQ_Job_#7741',
      dispatchTimeMs: 12.8,
      status: 'RESOLVED_AND_ACKNOWLEDGED',
    },
  },
  {
    id: 'sql-optimize',
    name: 'PL/pgSQL Transaction Optimizer',
    method: 'SQL',
    endpoint: 'SELECT * FROM fn_optimize_claims()',
    description: 'Executes indexed PostgreSQL stored procedure with zero table scans for instant claim retrieval.',
    latencyMs: 8.2,
    response: {
      queryPlan: 'Index Scan using idx_claims_citizen_pinfl on claims',
      rowsAffected: 1420,
      heapFetches: 0,
      executionTimeMs: 8.2,
      bufferHits: '100% (Cache Memory)',
      status: 'QUERY_OPTIMAL',
    },
  },
]

export default function BackendSandbox() {
  const [selectedAction, setSelectedAction] = useState<SimulationAction>(actions[0])
  const [isRunning, setIsRunning] = useState(false)
  const [output, setOutput] = useState<Record<string, unknown>>(actions[0].response)
  const [copied, setCopied] = useState(false)
  const [requestCount, setRequestCount] = useState(148)

  const handleRunSimulation = (action: SimulationAction) => {
    setSelectedAction(action)
    setIsRunning(true)
    setTimeout(() => {
      setOutput(action.response)
      setIsRunning(false)
      setRequestCount((prev) => prev + 1)
    }, 350)
  }

  const handleCopyJson = () => {
    navigator.clipboard?.writeText(JSON.stringify(output, null, 2))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="sandbox" className="relative py-24 border-t border-white/[0.08]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-white/[0.08]">
          <div>
            <div className="section-badge mb-2">
              <span>03. LIVE LAB</span>
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Interactive <span className="text-gradient-primary">Backend Sandbox</span>
            </h2>
          </div>
          <p className="text-sm text-gray-400 max-w-md">
            Execute simulated production triggers to inspect microservice telemetry, Kafka event brokers, and PL/pgSQL responses in real time.
          </p>
        </div>

        {/* Sandbox Console Grid */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Action Triggers Palette (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="flex items-center justify-between font-mono text-xs text-gray-400 px-1 pb-1">
              <span>SELECT SERVICE TRIGGER</span>
              <span className="text-[#38BDF8]">EXECUTIONS: {requestCount}</span>
            </div>

            {actions.map((act) => {
              const isSelected = selectedAction.id === act.id
              return (
                <div
                  key={act.id}
                  onClick={() => handleRunSimulation(act)}
                  className={`group p-4 rounded-xl border cursor-pointer transition-all duration-150 ${
                    isSelected
                      ? 'bg-[#121422] border-[#E03153]/50 shadow-sm'
                      : 'bg-[#0F111A] border-white/[0.06] hover:border-white/[0.14] hover:bg-[#121420]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                          act.method === 'KAFKA'
                            ? 'bg-purple-500/15 text-purple-300 border border-purple-500/20'
                            : act.method === 'POST'
                            ? 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/20'
                            : act.method === 'LORAWAN'
                            ? 'bg-sky-500/15 text-sky-300 border border-sky-500/20'
                            : act.method === 'BOT'
                            ? 'bg-pink-500/15 text-pink-300 border border-pink-500/20'
                            : 'bg-amber-500/15 text-amber-300 border border-amber-500/20'
                        }`}
                      >
                        {act.method}
                      </span>
                      <span className="font-semibold text-xs text-white group-hover:text-[#E03153] transition-colors">
                        {act.name}
                      </span>
                    </div>

                    <button
                      className={`p-1.5 rounded-lg border transition-all ${
                        isSelected
                          ? 'bg-[#E03153] border-[#E03153] text-white'
                          : 'bg-white/[0.04] border-white/[0.08] text-gray-400 group-hover:text-white'
                      }`}
                      aria-label={`Dispatch ${act.name}`}
                    >
                      <Play className="w-3 h-3 fill-current" />
                    </button>
                  </div>

                  <div className="font-mono text-[11px] text-[#38BDF8] truncate">{act.endpoint}</div>
                  <p className="text-xs text-gray-400 mt-1.5 line-clamp-2 leading-relaxed font-sans">{act.description}</p>
                </div>
              )
            })}
          </div>

          {/* Terminal Display (Right 7 Cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#080910] border border-white/[0.1] p-5 sm:p-6 shadow-xl space-y-4">
            {/* Terminal Top Bar */}
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] font-mono text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                <span className="text-gray-400 ml-1.5 text-xs">samandar@unicon-gateway:~</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopyJson}
                  className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
                  title="Copy JSON response"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>

                <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>200 OK</span>
                </div>
              </div>
            </div>

            {/* Live Metrics Row */}
            <div className="grid grid-cols-3 gap-2 pb-3 border-b border-white/[0.08]">
              <div className="p-2.5 rounded-lg bg-[#10121D] border border-white/[0.04]">
                <div className="text-[10px] text-gray-400 font-mono uppercase">LATENCY</div>
                <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1 mt-0.5 font-mono">
                  <Zap className="w-3 h-3 text-amber-400" />
                  <span>{selectedAction.latencyMs} ms</span>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-[#10121D] border border-white/[0.04]">
                <div className="text-[10px] text-gray-400 font-mono uppercase">RUNTIME</div>
                <div className="text-xs sm:text-sm font-bold text-[#38BDF8] truncate mt-0.5 font-mono">NestJS / K8s</div>
              </div>

              <div className="p-2.5 rounded-lg bg-[#10121D] border border-white/[0.04]">
                <div className="text-[10px] text-gray-400 font-mono uppercase">INTEGRITY</div>
                <div className="text-xs sm:text-sm font-bold text-emerald-400 mt-0.5 font-mono">100% ACID</div>
              </div>
            </div>

            {/* Simulated Command Execution Line */}
            <div className="font-mono text-xs text-gray-400 flex items-center gap-2">
              <span className="text-[#E03153] font-bold">❯</span>
              <span className="text-gray-200">
                DISPATCH {selectedAction.method} &quot;{selectedAction.endpoint}&quot;
              </span>
              {isRunning && <RefreshCw className="w-3 h-3 text-[#38BDF8] animate-spin ml-auto" />}
            </div>

            {/* JSON Output Container */}
            <div className="relative rounded-xl bg-black/50 p-4 border border-white/[0.04] max-h-[340px] overflow-y-auto">
              <pre className="text-xs text-gray-200 leading-relaxed font-mono">
                <code>{JSON.stringify(output, null, 2)}</code>
              </pre>
            </div>

            {/* Terminal Footer */}
            <div className="pt-2 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-gray-500">
              <div className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-emerald-500" />
                <span>Zero Vulnerabilities Detected</span>
              </div>
              <span>Cluster: prod-uz-central1</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
