'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react'
import { personalInfo } from '@/lib/data'
import { scrollToSection } from '@/lib/utils'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4 gradient-text">
              {personalInfo.name}
            </h3>
            <p className="text-gray-400 mb-4">
              {personalInfo.title}
            </p>
            <p className="text-sm text-gray-500">
              Building exceptional digital products that scale and delight users worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {['About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block text-gray-400 hover:text-primary-400 transition-colors"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="space-y-3">
              <motion.a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors"
                whileHover={{ x: 4 }}
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">{personalInfo.email}</span>
              </motion.a>
              
              <motion.a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors"
                whileHover={{ x: 4 }}
              >
                <Phone className="w-4 h-4" />
                <span className="text-sm">{personalInfo.phone}</span>
              </motion.a>

              <motion.a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-400 hover:text-primary-400 transition-colors"
                whileHover={{ x: 4 }}
              >
                <Linkedin className="w-4 h-4" />
                <span className="text-sm">LinkedIn Profile</span>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} {personalInfo.name}. All rights reserved.
            </p>
            
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500 animate-pulse" /> using Next.js & Tailwind CSS
            </p>
          </div>
        </div>

        {/* Back to Top Button */}
        <motion.button
          onClick={() => scrollToSection('hero')}
          className="absolute bottom-8 right-8 p-3 bg-primary-600 hover:bg-primary-700 rounded-full shadow-lg transition-colors"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      </div>
    </footer>
  )
}

export default Footer