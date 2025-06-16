
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { 
  Home, 
  Shield, 
  Lightbulb, 
  Music, 
  Smartphone, 
  Wifi,
  Camera,
  Thermometer,
  Speaker,
  Monitor,
  Lock,
  Zap,
  ArrowRight,
  CheckCircle
} from 'lucide-react'

const services = [
  {
    icon: Home,
    title: "Complete Home Automation",
    description: "Transform your entire home with integrated Control4 systems that manage lighting, climate, security, and entertainment from a single interface.",
    features: ["One-touch scenes", "Voice control", "Remote access", "Energy management"],
    image: "/83162426_3046190342071298_7712433264023044096_n.jpg",
    color: "emerald"
  },
  {
    icon: Shield,
    title: "Advanced Security Systems",
    description: "Comprehensive security solutions with IP cameras, smart locks, motion sensors, and 24/7 monitoring integrated with your smart home system.",
    features: ["IP camera systems", "Smart locks", "Motion detection", "Mobile alerts"],
    image: "/84665339_3077529678937364_775056067225714688_n.jpg",
    color: "blue"
  },
  {
    icon: Music,
    title: "Premium Audio & Video",
    description: "High-end audio-visual installations with multi-room music, home theaters, and distributed video systems for the ultimate entertainment experience.",
    features: ["Multi-room audio", "4K/8K video", "Home theaters", "Streaming integration"],
    image: "/85042608_3077529465604052_4016258776444174336_n.jpg",
    color: "purple"
  },
  {
    icon: Lightbulb,
    title: "Smart Lighting Control",
    description: "Intelligent lighting systems that adapt to your lifestyle with automated schedules, dimming, and color control throughout your home.",
    features: ["Automated schedules", "Dimming control", "Color changing", "Energy efficient"],
    image: "/88012129_3127366757286989_446388144485433344_n.jpg",
    color: "yellow"
  },
  {
    icon: Thermometer,
    title: "Climate Management",
    description: "Smart HVAC control with zone-based temperature management, energy optimization, and integration with your home automation system.",
    features: ["Zone control", "Energy optimization", "Remote monitoring", "Smart scheduling"],
    image: "/IMG-20250129-WA0014.jpg",
    color: "orange"
  },
  {
    icon: Wifi,
    title: "Network & Connectivity",
    description: "Robust networking solutions with enterprise-grade WiFi, structured cabling, and reliable connectivity for all your smart devices.",
    features: ["Enterprise WiFi", "Structured cabling", "Network security", "Device management"],
    image: "/IMG-20250129-WA0010.jpg",
    color: "indigo"
  }
]

const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description: "Free in-home consultation to understand your needs and assess your property",
    icon: Home
  },
  {
    step: "02",
    title: "Design",
    description: "Custom system design tailored to your lifestyle and budget requirements",
    icon: Monitor
  },
  {
    step: "03",
    title: "Installation",
    description: "Professional installation by certified technicians with minimal disruption",
    icon: Zap
  },
  {
    step: "04",
    title: "Training",
    description: "Comprehensive training and ongoing support to maximize your system's potential",
    icon: CheckCircle
  }
]

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="services" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light mb-6 text-gray-900">
            Smart Home
            <span className="block text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text font-normal">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            From complete home automation to specialized installations, we deliver cutting-edge solutions that enhance your lifestyle and add value to your property.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 h-full">
                {/* Service Image */}
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className={`absolute top-4 left-4 bg-${service.color}-600 p-3 rounded-xl shadow-lg`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <h3 className={`text-xl font-semibold mb-3 group-hover:text-${service.color}-600 transition-colors duration-300 text-gray-900`}>
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className={`w-4 h-4 text-${service.color}-600`} />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`text-${service.color}-600 hover:text-${service.color}-700 font-medium text-sm flex items-center gap-1 group/btn`}>
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-light mb-4 text-gray-900">
              Our <span className="text-emerald-600 font-normal">Process</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From initial consultation to ongoing support, we ensure a seamless experience every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 p-6 rounded-2xl w-fit mx-auto group-hover:from-emerald-200 group-hover:to-emerald-300 transition-all duration-300 shadow-lg">
                    <step.icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-emerald-600 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
                    {step.step}
                  </div>
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900">{step.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-light mb-4">
              Ready to Transform Your Home?
            </h3>
            <p className="text-emerald-100 mb-8 text-lg max-w-2xl mx-auto">
              Get a free consultation and discover how smart home technology can enhance your lifestyle and add value to your property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact')
                  contactSection?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => {
                  const portfolioSection = document.getElementById('portfolio')
                  portfolioSection?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 rounded-xl font-medium transition-all duration-300"
              >
                View Our Work
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
