'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import confetti from 'canvas-confetti'
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Copy,
  Check,
  ExternalLink,
  ArrowUp,
} from 'lucide-react'

const TELEGRAM_BOT_TOKEN =
  process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN || '8348496080:AAFfxViqooK4IrnNsG8CF8w35SgofGmOp2o'
const TELEGRAM_CHAT_ID =
  process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID || '-1001764271444'

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

export default function ContactFooter() {
  const [copied, setCopied] = useState(false)
  const [phoneCopied, setPhoneCopied] = useState(false)
  const [formSent, setFormSent] = useState(false)
  const [formLoading, setFormLoading] = useState(false)
  const [formError, setFormError] = useState('')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const copyEmail = async () => {
    await navigator.clipboard?.writeText('uchqunovsamandar31@gmail.com')
    setCopied(true)
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.85 },
      colors: ['#E03153', '#38BDF8', '#FFFFFF'],
    })
    setTimeout(() => setCopied(false), 2000)
  }

  const copyPhone = async () => {
    await navigator.clipboard?.writeText('+998974908957')
    setPhoneCopied(true)
    setTimeout(() => setPhoneCopied(false), 2000)
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError("Barcha maydonlar (ism, email, xabar) to'ldirilishi shart.")
      return
    }

    setFormLoading(true)
    setFormError('')

    try {
      const timestamp = new Date().toLocaleString('uz-UZ', {
        timeZone: 'Asia/Tashkent',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })

      const text =
        `<b>📬 Yangi xabar (Portfolio Saytidan)</b>\n\n` +
        `👤 <b>Ism / Kompaniya:</b> ${escapeHtml(formData.name.trim())}\n` +
        `📧 <b>Email:</b> ${escapeHtml(formData.email.trim())}\n\n` +
        `📝 <b>Xabar:</b>\n${escapeHtml(formData.message.trim())}\n\n` +
        `⏰ <b>Vaqt:</b> <code>${timestamp}</code>`

      const res = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text,
          parse_mode: 'HTML',
        }),
      })

      const data = await res.json()

      if (!res.ok || !data.ok) {
        throw new Error(data.description || 'Telegramga xabar yuborishda xatolik yuz berdi.')
      }

      setFormSent(true)
      confetti({
        particleCount: 80,
        spread: 80,
        origin: { y: 0.8 },
        colors: ['#E03153', '#38BDF8', '#FFFFFF'],
      })
    } catch (err: unknown) {
      console.error('Contact form submission error:', err)
      setFormError(
        err instanceof Error ? err.message : 'Xabar yuborishda xatolik yuz berdi. Iltimos qaytadan urinib ko‘ring.'
      )
    } finally {
      setFormLoading(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer id="contact" className="relative pt-24 pb-12 border-t border-white/[0.08] bg-[#090A0F]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="pb-8 border-b border-white/[0.08]">
          <div className="section-badge mb-2">
            <span>06. GET IN TOUCH</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold text-white tracking-tight">
            Let&apos;s Build <span className="text-gradient-primary">High-Load Systems</span>
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mt-2 leading-relaxed">
            Whether you are designing a high-concurrency microservice, scaling government APIs, or building transactional payment infrastructure, I am ready to engineer it.
          </p>
        </div>

        {/* Contact Grid: Direct Info (Left) + Interactive Inquire Form (Right) */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: Contact Methods */}
          <div className="lg:col-span-5 space-y-3.5">
            {/* Email Action Card */}
            <div className="p-5 rounded-xl bg-[#0F111A] border border-white/[0.08] space-y-2">
              <div className="text-xs font-mono text-[#38BDF8] uppercase tracking-wider">
                PRIMARY EMAIL
              </div>
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#E03153]/10 text-[#E03153]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-mono text-xs sm:text-sm font-semibold text-white truncate">
                      uchqunovsamandar31@gmail.com
                    </div>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className={`p-2 rounded-lg border font-mono text-xs transition-all ${
                    copied
                      ? 'bg-emerald-500 text-white border-emerald-500'
                      : 'bg-white/[0.04] border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/[0.08]'
                  }`}
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Telegram Card */}
            <a
              href="https://t.me/UchqunovSamandar"
              target="_blank"
              rel="noreferrer"
              className="group p-5 rounded-xl bg-[#0F111A] border border-white/[0.08] hover:border-white/[0.18] flex items-center justify-between transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#38BDF8]/10 text-[#38BDF8]">
                  <Send className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-gray-400">Instant Messaging</div>
                  <div className="font-mono text-sm font-semibold text-white group-hover:text-[#38BDF8] transition-colors">
                    @UchqunovSamandar
                  </div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
            </a>

            {/* Phone Card */}
            <div className="p-5 rounded-xl bg-[#0F111A] border border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-[#A855F7]/10 text-[#A855F7]">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-gray-400">Direct Phone</div>
                  <div className="font-mono text-sm font-semibold text-white">+998 (97) 490-89-57</div>
                </div>
              </div>

              <button
                onClick={copyPhone}
                className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.08] text-gray-400 hover:text-white"
                title="Copy phone"
              >
                {phoneCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Location Tag */}
            <div className="p-3.5 rounded-xl bg-[#0F111A] border border-white/[0.04] flex items-center gap-2.5 text-xs text-gray-400">
              <MapPin className="w-4 h-4 text-[#E03153]" />
              <span>Residing in Tashkent, Uzbekistan (Ready for business trips)</span>
            </div>
          </div>

          {/* Right: Instant Inquire Form */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0F111A] border border-white/[0.08] p-6 sm:p-7 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
              <span className="text-xs font-mono font-semibold text-white uppercase tracking-wider">
                Send Direct Message
              </span>
              <span className="text-xs text-gray-500 font-mono">24H RESPONSE TIME</span>
            </div>

            {formSent ? (
              <div className="p-8 rounded-xl bg-[#121420] border border-emerald-500/20 text-center space-y-2.5">
                <div className="w-10 h-10 rounded-full bg-emerald-500/15 text-emerald-400 mx-auto flex items-center justify-center">
                  <Check className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Xabar Muvaffaqiyatli Yuborildi!</h3>
                <p className="text-xs text-gray-400 max-w-sm mx-auto">
                  Bog‘langaningiz uchun tashakkur! Xabaringiz Telegram orqali qabul qilindi. Tez orada ko‘rib chiqib javob beraman.
                </p>
                <button
                  onClick={() => {
                    setFormSent(false)
                    setFormData({ name: '', email: '', message: '' })
                  }}
                  className="mt-3 px-3.5 py-1.5 rounded-lg bg-white/[0.06] text-xs text-gray-300 hover:text-white border border-white/[0.08]"
                >
                  Yana xabar yuborish
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-3.5 text-xs">
                {formError && (
                  <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-mono">
                    {formError}
                  </div>
                )}

                <div>
                  <label className="block text-gray-400 mb-1 font-mono uppercase text-[11px]">Ismingiz / Kompaniya</label>
                  <input
                    type="text"
                    required
                    placeholder="masalan, Jamshid (Texnik rahbar)"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#121420] border border-white/[0.08] text-white placeholder-gray-500 focus:outline-none focus:border-[#E03153]"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-1 font-mono uppercase text-[11px]">Email Manzilingiz</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#121420] border border-white/[0.08] text-white placeholder-gray-500 focus:outline-none focus:border-[#E03153]"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 mb-1 font-mono uppercase text-[11px]">Xabar Matni / Vazifa tavsifi</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Loyiha talablari, arxitektura yoki taklifingiz haqida yozing..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#121420] border border-white/[0.08] text-white placeholder-gray-500 focus:outline-none focus:border-[#E03153] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={formLoading}
                  className="w-full py-3 rounded-lg bg-[#E03153] hover:bg-[#F43F5E] text-white font-semibold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md disabled:opacity-50"
                >
                  {formLoading ? (
                    <span>Yuborilmoqda...</span>
                  ) : (
                    <>
                      <span>Xabarni Yuborish</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Sub-Bar with Coordinates & Scroll to Top */}
        <div className="mt-16 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E03153]" />
            <span>© 2026 SAMANDAR UCHQUNOV • TASHKENT</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://t.me/UchqunovSamandar"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#38BDF8] transition-colors"
            >
              TELEGRAM ↗
            </a>
            <a
              href="mailto:uchqunovsamandar31@gmail.com"
              className="hover:text-white transition-colors"
            >
              EMAIL ↗
            </a>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <span>TOP</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
