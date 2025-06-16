
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { MapPin, Users, Calendar, Award, ExternalLink, Star, ArrowRight } from 'lucide-react'
import { useState } from 'react'

const portfolioItems = [
  {
    title: "Tinderwood Estate",
    location: "Zimbali",
    description: "Luxury smart home integration featuring Control4 automation, premium audio systems, and comprehensive security throughout this stunning modern estate.",
    image: "/tinderwood-house_17.jpg",
    features: ["Control4 Integration", "Premium Audio", "Smart Security", "Automated Lighting"],
    category: "Luxury Estate"
  },
  {
    title: "Desai Family Residence",
    location: "Durban North",
    description: "Complete home automation solution with climate control, entertainment systems, and integrated security for this contemporary family home.",
    image: "/desai-house-04.jpg",
    features: ["Climate Control", "Home Theatre", "Smart Lighting", "Voice Control"],
    category: "Family Home"
  },
  {
    title: "Feverberry Modern Home",
    location: "Ballito",
    description: "Cutting-edge smart home technology with distributed video, multi-room audio, and seamless Control4 integration throughout.",
    image: "/feverberry-21.jpg",
    features: ["8K Video Distribution", "Multi-Room Audio", "Smart Controls", "Energy Management"],
    category: "Modern Home"
  },
  {
    title: "Leadwood Zimbali Estate",
    location: "Zimbali",
    description: "Exclusive coastal estate featuring premium home automation, security systems, and entertainment solutions with ocean views.",
    image: "/leadwood-zimbali_08.jpg",
    features: ["Coastal Integration", "Premium Security", "Entertainment Hub", "Smart Climate"],
    category: "Coastal Estate"
  },
  {
    title: "Palm House Installation",
    location: "Umhlanga",
    description: "Sophisticated audio-visual installation with immersive surround sound, 4K systems, and integrated smart home controls.",
    image: "/palm-house-13.jpg",
    features: ["4K Systems", "Surround Sound", "Automated Controls", "Ambient Lighting"],
    category: "Audio Visual"
  },
  {
    title: "Executive Smart Home",
    location: "Pietermaritzburg",
    description: "Complete smart home transformation featuring advanced security, entertainment systems, and total home automation.",
    image: "/house_whittaker_17072012_18-Copy.jpg",
    features: ["Total Automation", "Advanced Security", "Entertainment Systems", "Remote Access"],
    category: "Executive Home"
  }
]

const stats = [
  { icon: Users, number: "200+", label: "Homes Automated", color: "emerald" },
  { icon: Calendar, number: "22", label: "Years Experience", color: "blue" },
  { icon: Award, number: "#1", label: "Control4 Dealer KZN", color: "purple" },
  { icon: MapPin, number: "6", label: "Service Areas", color: "orange" }
]

const featuredInstallations = [
  {
    image: "/475776553_9687117224645210_3290244131986881060_n.jpg",
    title: "Premium Audio Installation",
    description: "High-end audio system integration"
  },
  {
    image: "/475817236_9687117167978549_3153727977417133328_n.jpg",
    title: "Smart Control Panel",
    description: "Intuitive Control4 interface"
  },
  {
    image: "/475889483_9687117207978545_2039117280520841321_n.jpg",
    title: "Entertainment Center",
    description: "Complete AV solution"
  }
]

export default function PortfolioSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedCategory, setSelectedCategory] = useState('All')
  const categories = ['All', 'Luxury Estate', 'Family Home', 'Modern Home', 'Coastal Estate', 'Audio Visual', 'Executive Home']

  const filteredItems = selectedCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory)

  return (
    <section id="portfolio" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              className="text-center group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div 
                className={`bg-gradient-to-br from-${stat.color}-100 to-${stat.color}-200 p-6 rounded-2xl w-fit mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 border border-${stat.color}-200`}
                whileHover={{ y: -5 }}
              >
                <stat.icon className={`w-10 h-10 text-${stat.color}-600`} />
              </motion.div>
              <motion.div 
                className={`text-4xl md:text-5xl font-light text-${stat.color}-600 mb-2`}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Portfolio Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light mb-6 text-gray-900">
            Our KwaZulu-Natal
            <span className="block text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text font-normal">
              Success Stories
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Discover how we've transformed homes across KZN with cutting-edge smart home technology and premium audio-visual solutions.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                  : 'bg-white text-gray-600 hover:bg-emerald-50 hover:text-emerald-600 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl group transition-all duration-500 border border-gray-100"
              whileHover={{ y: -10 }}
            >
              <div className="relative h-64 bg-gray-100 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center shadow-lg">
                  <MapPin className="w-4 h-4 mr-1" />
                  {item.location}
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-emerald-600 px-3 py-1 rounded-full text-xs font-medium">
                  {item.category}
                </div>
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 backdrop-blur-sm p-2 rounded-full">
                    <ExternalLink className="w-5 h-5 text-emerald-600" />
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-emerald-600 transition-colors duration-300 text-gray-900">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.features.map((feature, featureIndex) => (
                    <span
                      key={featureIndex}
                      className="bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full text-xs font-medium border border-emerald-100 hover:bg-emerald-100 transition-colors duration-200"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <button className="text-emerald-600 hover:text-emerald-700 font-medium text-sm flex items-center gap-1 group/btn">
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Featured Installation Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-96 lg:h-auto">
                <Image
                  src="/tinderwood-house_53.jpg"
                  alt="Premium Smart Home Installation"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center text-white">
                <h3 className="text-3xl md:text-4xl font-light mb-6">
                  Premium Installations
                  <span className="block font-normal">Across KZN</span>
                </h3>
                <p className="text-emerald-100 mb-6 leading-relaxed">
                  From luxury coastal estates to modern family homes, our installations showcase the perfect blend of technology and design. Each project is tailored to enhance your lifestyle while maintaining the aesthetic beauty of your space.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-light text-white">200+</div>
                    <div className="text-sm text-emerald-200">Installations</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-light text-white">100%</div>
                    <div className="text-sm text-emerald-200">Satisfaction</div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    const contactSection = document.getElementById('contact')
                    contactSection?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="bg-white text-emerald-600 hover:bg-emerald-50 px-6 py-3 rounded-xl font-medium transition-all duration-300 w-fit shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Installation Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-light text-center mb-12 text-gray-900">
            Recent <span className="text-emerald-600 font-normal">Installations</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredInstallations.map((installation, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image
                    src={installation.image}
                    alt={installation.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold mb-1">{installation.title}</h4>
                    <p className="text-sm text-gray-200">{installation.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 max-w-4xl mx-auto border border-gray-100 shadow-xl">
            <div className="text-6xl text-emerald-600 mb-6">"</div>
            <blockquote className="text-2xl md:text-3xl font-light text-gray-700 mb-8 leading-relaxed">
              Audico transformed our home into a smart sanctuary. The Control4 system is incredibly intuitive, and their 22 years of experience really shows in the quality of installation and ongoing support.
            </blockquote>
            <div className="flex items-center justify-center">
              <div>
                <div className="font-medium text-lg text-gray-900">Sarah & Michael Thompson</div>
                <div className="text-emerald-600 font-medium">Ballito Homeowners</div>
                <div className="flex items-center justify-center gap-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
