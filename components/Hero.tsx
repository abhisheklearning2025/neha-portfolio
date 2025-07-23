'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Download, Mail, Linkedin, ChevronDown } from 'lucide-react'
import Button from './ui/Button'
import { personalInfo } from '@/lib/data'
import { scrollToSection } from '@/lib/utils'
import Image from 'next/image';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-200"></div>
        <div className="absolute -bottom-20 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-400"></div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Profile Image */}
        <motion.div
          variants={itemVariants}
          className="mb-8"
        >
          <motion.div
            className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-primary-500 shadow-xl"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
                      {/* Try to load the image, fallback to initials if not found */}
            <Image
              src="/images/profile.jpg"
              alt={personalInfo.name}
              width={160}
              height={160}
              className="object-cover"
              onError={(e) => {
                // Hide image and show fallback
                e.currentTarget.style.display = 'none';
                const fallback = e.currentTarget.nextElementSibling;
                if (fallback) fallback.classList.remove('hidden');
              }}
            />
            {/* Fallback to initials */}
            <div className="hidden w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-4xl font-bold absolute inset-0">
              {personalInfo.name.split(' ').map(n => n[0]).join('')}
            </div>
          </motion.div>
        </motion.div>

        {/* Name and Title */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.h2
          variants={itemVariants}
          className="text-2xl md:text-3xl text-primary-600 dark:text-primary-400 mb-6"
        >
          {personalInfo.title}
        </motion.h2>

        {/* Summary */}
        <motion.p
          variants={itemVariants}
          className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          {personalInfo.summary}
        </motion.p>

        {/* Highlights */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10"
        >
          {personalInfo.highlights.slice(0, 3).map((highlight, index) => (
            <motion.div
              key={index}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-4 shadow-lg"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {highlight}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() => scrollToSection('contact')}
          >
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>
          
          <Button
            variant="secondary"
            size="lg"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            <Download className="w-5 h-5 mr-2" />
            Download Resume
          </Button>

          <motion.a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Linkedin className="w-6 h-6" />
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <button
            onClick={() => scrollToSection('about')}
            className="text-gray-400 hover:text-primary-600 transition-colors"
            aria-label="Scroll to about section"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
      `}</style>
    </section>
  )
}

export default Hero