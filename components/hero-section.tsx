
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Home, Shield, Lightbulb, Music, Smartphone, Award, Play, ArrowRight } from 'lucide-react'

export default function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Hero Background */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative w-full h-full"
        >
          <Image
            src="/tinderwood-house_44.jpg"
            alt="Luxury Smart Home Installation - Tinderwood House"
            fill
            className="object-cover"
            style={{ 
              backgroundAttachment: 'fixed',
              filter: 'brightness(0.7) contrast(1.1)'
            }}
            priority
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-32 h-32 bg-emerald-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, 30, 0],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-40 left-20 w-48 h-48 bg-blue-500/10 rounded-full blur-xl"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="relative">
            <Image
              src="/Audico New Logo 2.png"
              alt="Audico Logo"
              width={250}
              height={100}
              className="mx-auto mb-8 drop-shadow-2xl"
              priority
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-8 h-8 border-2 border-emerald-400 rounded-full opacity-60"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-light mb-6 leading-tight text-white"
        >
          Transform Your Home Into a
          <motion.span 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="block text-emerald-400 mt-2 font-normal bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent"
          >
            Smart Sanctuary
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed font-light"
        >
          <span className="text-emerald-400 font-semibold">22 years</span> of smart home expertise in KwaZulu-Natal. 
          <br className="hidden md:block" />
          Over <span className="text-emerald-400 font-semibold">200 homes</span> automated with cutting-edge Control4 technology.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 text-lg font-medium rounded-xl shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 group"
          >
            Get Your Free Quotation
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white/30 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm px-8 py-4 text-lg font-medium rounded-xl transition-all duration-300 group"
            onClick={() => {
              const servicesSection = document.getElementById('services')
              servicesSection?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            Explore Our Services
          </Button>
        </motion.div>

        {/* Enhanced Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto"
        >
          {[
            { icon: Home, text: "Smart Homes", color: "emerald" },
            { icon: Shield, text: "Security", color: "blue" },
            { icon: Lightbulb, text: "Lighting", color: "yellow" },
            { icon: Music, text: "Audio/Video", color: "purple" },
            { icon: Smartphone, text: "Control4", color: "indigo" },
            { icon: Award, text: "22 Years", color: "orange" }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center text-center group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className={`bg-white/10 backdrop-blur-sm p-4 rounded-2xl mb-3 group-hover:bg-white/20 transition-all duration-300 shadow-lg border border-white/20`}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <item.icon className="w-8 h-8 text-white" />
              </motion.div>
              <span className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors duration-300">
                {item.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 text-white/80"
        >
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium">Control4 Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <span className="text-sm font-medium">KZN's #1 Dealer</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            <span className="text-sm font-medium">200+ Happy Clients</span>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div 
          className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center cursor-pointer hover:border-emerald-400 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          onClick={() => {
            const servicesSection = document.getElementById('services')
            servicesSection?.scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <motion.div 
            className="w-1 h-3 bg-emerald-400 rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
