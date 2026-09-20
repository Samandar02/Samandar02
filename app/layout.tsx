import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Outfit, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Samandar Uchqunov — Middle Backend Engineer (NestJS, Node.js, .NET)',
  description:
    'Portfolio of Samandar Uchqunov. Middle Backend Node.js Developer specializing in NestJS, PostgreSQL, Kafka, Kubernetes, and high-throughput government and fintech platforms.',
  keywords: [
    'Samandar Uchqunov',
    'Backend Developer',
    'Node.js Developer',
    'NestJS',
    'PostgreSQL',
    'Kafka',
    'Kubernetes',
    'Unicon-Soft',
    'Innasoft',
    'Tashkent',
    'Uzbekistan',
  ],
  authors: [{ name: 'Samandar Uchqunov', url: 'https://t.me/UchqunovSamandar' }],
  creator: 'Samandar Uchqunov',
  openGraph: {
    title: 'Samandar Uchqunov — Middle Backend Engineer',
    description:
      'Backend developer building high-concurrency microservices, government integrations (20+ MIP services), and fintech OLTP architectures.',
    url: 'https://samandar.dev',
    siteName: 'Samandar Uchqunov Portfolio',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samandar Uchqunov — Middle Backend Engineer',
    description: 'Specialized in NestJS, Node.js, .NET, Kafka, PostgreSQL & Distributed Systems.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#090A0F',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`}>
      <body className="bg-[#090A0F] text-[#F8FAFC] font-sans antialiased selection:bg-[#E03153]/30 selection:text-white overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
