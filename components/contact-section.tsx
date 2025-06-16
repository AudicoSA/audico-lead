
'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Send,
  CheckCircle,
  Star,
  Calendar,
  MessageSquare,
  ArrowRight
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    details: ["+27 10 020 2882"],
    color: "emerald"
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["info@audico.co.za"],
    color: "blue"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["Ballito, KwaZulu-Natal", "South Africa"],
    color: "purple"
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 8:30 - 16:30", "Sat: appointment"],
    color: "orange"
  }
]

const services = [
  "Complete Home Automation",
  "Security Systems",
  "Audio/Video Installation",
  "Smart Lighting",
  "Climate Control",
  "Network Setup",
  "Consultation Only",
  "Other"
]

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    budget: '',
    timeline: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" ref={ref} className="py-20 bg-gradient-to-br from-gray-50 via-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-light mb-6 text-gray-900">
            Get Your Free
            <span className="block text-transparent bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text font-normal">
              Consultation
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Ready to transform your home? Contact us today for a personalized consultation and discover how smart home technology can enhance your lifestyle.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-emerald-100 p-3 rounded-xl">
                  <MessageSquare className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Send us a message</h3>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="bg-emerald-100 p-4 rounded-full w-fit mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Thank you!</h4>
                  <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                        placeholder="+27 XX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service Interest
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 p-3"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 p-3"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-50k">Under R50,000</option>
                        <option value="50k-100k">R50,000 - R100,000</option>
                        <option value="100k-200k">R100,000 - R200,000</option>
                        <option value="200k-500k">R200,000 - R500,000</option>
                        <option value="over-500k">Over R500,000</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500 p-3"
                      >
                        <option value="">Select timeline</option>
                        <option value="asap">ASAP</option>
                        <option value="1-3-months">1-3 months</option>
                        <option value="3-6-months">3-6 months</option>
                        <option value="6-12-months">6-12 months</option>
                        <option value="planning">Just planning</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Project Details
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full rounded-xl border-gray-200 focus:border-emerald-500 focus:ring-emerald-500"
                      placeholder="Tell us about your project, home size, specific requirements, or any questions you have..."
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-4 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`bg-gradient-to-br from-${info.color}-100 to-${info.color}-200 p-4 rounded-xl w-fit mb-4 group-hover:from-${info.color}-200 group-hover:to-${info.color}-300 transition-all duration-300`}>
                    <info.icon className={`w-6 h-6 text-${info.color}-600`} />
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-900">{info.title}</h4>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl p-8 text-white shadow-2xl">
              <h3 className="text-2xl font-semibold mb-4">Need immediate assistance?</h3>
              <p className="text-emerald-100 mb-6">
                Our team is ready to help you with any questions about smart home automation.
              </p>
              
              <div className="space-y-3">
                <button className="w-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-4 rounded-xl transition-all duration-300 flex items-center gap-3 group">
                  <Phone className="w-5 h-5" />
                  <span className="flex-1 text-left">Call us now: +27 63 144 3274</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
                
                <button className="w-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-4 rounded-xl transition-all duration-300 flex items-center gap-3 group">
                  <Calendar className="w-5 h-5" />
                  <span className="flex-1 text-left">Schedule a consultation</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </div>

            {/* Testimonial */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-4 italic">
                "Exceptional service from consultation to completion. The team was professional, knowledgeable, and delivered exactly what they promised."
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <span className="text-emerald-600 font-semibold text-sm">JD</span>
                </div>
                <div>
                  <div className="font-medium text-gray-900">John & Sarah Davis</div>
                  <div className="text-sm text-gray-500">Umhlanga Homeowners</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              Why Choose Audico?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-light text-emerald-600 mb-2">22</div>
                <div className="text-sm text-gray-600">Years of Experience</div>
              </div>
              <div>
                <div className="text-3xl font-light text-emerald-600 mb-2">200+</div>
                <div className="text-sm text-gray-600">Satisfied Clients</div>
              </div>
              <div>
                <div className="text-3xl font-light text-emerald-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Support Available</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
