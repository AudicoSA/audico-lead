
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import HeroSection from '../components/hero-section'
import ServicesSection from '../components/services-section'
import PortfolioSection from '../components/portfolio-section'
import AboutSection from '../components/about-section'
import ContactSection from '../components/contact-section'
import Footer from '../components/footer'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 overflow-x-hidden">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
