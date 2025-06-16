
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <footer ref={ref} className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
        >
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Image
              src="/audico-logo.png"
              alt="Audico Logo"
              width={150}
              height={60}
              className="mb-6 filter brightness-0 invert"
            />
            <p className="text-gray-300 mb-6 leading-relaxed font-light">
              KwaZulu-Natal's premier smart home automation specialists. 22 years of experience 
              transforming homes with cutting-edge Control4 technology and premium audio-visual solutions.
            </p>
            <div className="flex space-x-4">
              <div className="bg-emerald-600 p-2 rounded-full hover:bg-emerald-700 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="bg-emerald-600 p-2 rounded-full hover:bg-emerald-700 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="bg-emerald-600 p-2 rounded-full hover:bg-emerald-700 transition-colors cursor-pointer">
                <Linkedin className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-medium mb-6 text-emerald-400">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors">Smart Home Automation</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors">Security Systems</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors">Audio/Video</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors">Home Theatre</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-emerald-400 transition-colors">Lighting Control</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-medium mb-6 text-emerald-400">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-emerald-500 mr-3" />
                <span className="text-gray-300">+27 10 020 2882</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-emerald-500 mr-3" />
                <span className="text-gray-300">info@audico.co.za</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-emerald-500 mr-3 mt-1" />
                <span className="text-gray-300">Serving all KZN areas</span>
              </div>
              <div className="flex items-start">
                <Clock className="w-5 h-5 text-emerald-500 mr-3 mt-1" />
                <div className="text-gray-300">
                  <div>Mon-Fri: 8AM-5PM</div>
                  <div>Sat: 9AM-2PM</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-gray-700 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Audico. All rights reserved. | 22 Years of Smart Home Excellence in KZN
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#contact" className="text-gray-400 hover:text-emerald-400 transition-colors">Contact Us</a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
