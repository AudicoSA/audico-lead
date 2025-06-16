
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { 
  Award, 
  Users, 
  Calendar, 
  MapPin, 
  Star,
  CheckCircle,
  Trophy,
  Target,
  Heart,
  Zap
} from 'lucide-react'

const achievements = [
  {
    icon: Award,
    title: "Control4 Certified",
    description: "Official Control4 dealer and certified installation partner",
    color: "emerald"
  },
  {
    icon: Trophy,
    title: "#1 KZN Dealer",
    description: "Leading smart home automation dealer in KwaZulu-Natal",
    color: "blue"
  },
  {
    icon: Users,
    title: "200+ Happy Clients",
    description: "Successfully automated over 200 homes across the region",
    color: "purple"
  },
  {
    icon: Calendar,
    title: "22 Years Experience",
    description: "Over two decades of expertise in home automation",
    color: "orange"
  }
]

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every installation is executed with meticulous attention to detail"
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We're passionate about transforming homes and enhancing lifestyles"
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Always at the forefront of smart home technology and trends"
  },
  {
    icon: CheckCircle,
    title: "Reliability",
    description: "Dependable service and support you can count on for years to come"
  }
]

const teamHighlights = [
  {
    image: "/WhatsApp Image 2025-01-29 at 18.14.10_44e1adc1.jpg",
    title: "Expert Installation",
    description: "Our certified technicians ensure flawless installations"
  },
  {
    image: "/WhatsApp Image 2025-01-29 at 18.14.11_8ca30547.jpg",
    title: "Quality Control",
    description: "Rigorous testing and quality assurance on every project"
  },
  {
    image: "/WhatsApp Image 2025-02-20 at 18.19.39_3b1478c6.jpg",
    title: "Ongoing Support",
    description: "Comprehensive training and continued technical support"
  }
]

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light mb-6 text-gray-900">
            About
            <span className="block text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text font-normal">
              Audico
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            For over two decades, we've been KwaZulu-Natal's premier smart home automation specialists, transforming houses into intelligent, connected sanctuaries.
          </p>
        </motion.div>

        {/* Main Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h3 className="text-3xl md:text-4xl font-light mb-6 text-gray-900">
              22 Years of
              <span className="block text-emerald-600 font-normal">Smart Home Excellence</span>
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Since our founding, Audico has been at the forefront of home automation technology in KwaZulu-Natal. We've witnessed the evolution from basic remote controls to today's sophisticated AI-powered smart home ecosystems.
              </p>
              <p>
                Our journey began with a simple vision: to make technology work seamlessly for homeowners, enhancing their daily lives while adding significant value to their properties. Today, we're proud to be the region's leading Control4 dealer and certified installation partner.
              </p>
              <p>
                Every project we undertake reflects our commitment to excellence, innovation, and customer satisfaction. From luxury coastal estates to modern family homes, we've automated over 200 properties across KZN, each one a testament to our expertise and dedication.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-light text-emerald-600 mb-2">200+</div>
                <div className="text-sm text-gray-500">Homes Automated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-light text-emerald-600 mb-2">100%</div>
                <div className="text-sm text-gray-500">Client Satisfaction</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/tinderwood-house_30.jpg"
                alt="Audico Smart Home Installation"
                width={600}
                height={400}
                className="object-cover w-full h-96"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h4 className="text-xl font-semibold mb-2">Premium Installation</h4>
                <p className="text-emerald-200">Tinderwood Estate, Hillcrest</p>
              </div>
            </motion.div>
            
            {/* Floating Achievement Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -top-6 -right-6 bg-emerald-600 text-white p-4 rounded-2xl shadow-xl"
            >
              <Award className="w-8 h-8 mb-2" />
              <div className="text-sm font-semibold">Control4</div>
              <div className="text-xs">Certified</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
            >
              <div className={`bg-gradient-to-br from-${achievement.color}-100 to-${achievement.color}-200 p-4 rounded-2xl w-fit mx-auto mb-4 group-hover:from-${achievement.color}-200 group-hover:to-${achievement.color}-300 transition-all duration-300`}>
                <achievement.icon className={`w-8 h-8 text-${achievement.color}-600`} />
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gray-900">{achievement.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-light mb-4 text-gray-900">
              Our <span className="text-emerald-600 font-normal">Values</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do, from initial consultation to ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-emerald-100 p-6 rounded-2xl w-fit mx-auto mb-4 group-hover:bg-emerald-200 transition-all duration-300 shadow-lg">
                  <value.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-gray-900">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-light mb-4 text-gray-900">
              Our <span className="text-emerald-600 font-normal">Expertise</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Behind every successful installation is our team of certified professionals dedicated to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-64 rounded-2xl overflow-hidden">
                  <Image
                    src={highlight.image}
                    alt={highlight.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold mb-1">{highlight.title}</h4>
                    <p className="text-sm text-gray-200">{highlight.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Service Areas */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-light mb-6">
              Serving KwaZulu-Natal
            </h3>
            <p className="text-emerald-100 mb-8 text-lg max-w-3xl mx-auto">
              From Durban to Pietermaritzburg, Ballito to Hillcrest, we bring smart home technology to communities across KZN.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
              {['Durban', 'Ballito', 'Umhlanga', 'Hillcrest', 'Pietermaritzburg', 'Zimbali'].map((area, index) => (
                <motion.div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-3 text-center hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <MapPin className="w-5 h-5 mx-auto mb-1 text-emerald-200" />
                  <span className="text-sm font-medium">{area}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
