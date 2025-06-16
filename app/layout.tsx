
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Audico - Premium Smart Home Solutions | KZN\'s Leading Smart Home Specialists',
  description: 'Transform your home with Audico\'s premium smart home automation systems. 20+ years experience, 200+ installations in KZN. Smart lighting, security, home theatre & more.',
  keywords: 'smart home, home automation, KZN, Durban, Control4, smart lighting, home theatre, security systems, Audico',
  authors: [{ name: 'Audico' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Audico - Premium Smart Home Solutions',
    description: 'KZN\'s leading smart home specialists with 20+ years experience and 200+ successful installations.',
    type: 'website',
    locale: 'en_ZA',
  }
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
