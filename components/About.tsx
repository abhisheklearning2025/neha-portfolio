'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Award, Users, Briefcase, Target } from 'lucide-react'
import Card from './ui/Card'
import { personalInfo } from '@/lib/data'

const About: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  const stats = [
    { icon: Award, label: '19+ Years', sublabel: 'of Experience' },
    { icon: Users, label: '600M+', sublabel: 'Users Served' },
    { icon: Briefcase, label: '700+', sublabel: 'Features Delivered' },
    { icon: Target, label: '4.5+', sublabel: 'App Ratings' }
  ]

  const fullAbout = `With over 19 years of experience in digital product leadership, I have successfully led the vision, strategy, and execution of consumer-facing digital products that have touched the lives of over 600 million users globally.

My journey spans across telecom, banking, and technology sectors, where I've consistently delivered high-impact digital solutions. From launching India's largest telco digital ecosystem at Reliance Jio to pioneering AI-powered innovations and leading digital transformation at major banks, I've always focused on creating products that solve real-world problems.

I specialize in building and scaling digital platforms, leading cross-functional teams, and implementing cutting-edge technologies. My approach combines strategic thinking with hands-on execution, always keeping the customer at the center of every decision.

Currently, as Vice President - Digital Platform Lead at Vodafone Idea, I'm driving the digital transformation agenda, leading a team of 70+ professionals, and shaping the future of digital experiences for millions of users.`

  const shortAbout = personalInfo.summary

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-12"></div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <stat.icon className="w-10 h-10 text-primary-500 mx-auto mb-3" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.label}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.sublabel}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* About Text */}
          <Card className="max-w-4xl mx-auto">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <AnimatePresence mode="wait">
                <motion.div
                  key={isExpanded ? 'expanded' : 'collapsed'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                    {isExpanded ? fullAbout : shortAbout}
                  </p>
                </motion.div>
              </AnimatePresence>

              <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                className="mt-6 flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.95 }}
              >
                {isExpanded ? 'Read Less' : 'Read More'}
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </div>
          </Card>

          {/* Key Strengths */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12"
          >
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-900 dark:text-white">
              Key Strengths
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: 'Strategic Leadership',
                  description: 'Leading large-scale digital transformations with a focus on business impact and customer value'
                },
                {
                  title: 'Technical Excellence',
                  description: 'Deep understanding of modern technologies, from AI/ML to cloud architectures and mobile platforms'
                },
                {
                  title: 'Customer-Centric',
                  description: 'Obsessed with creating intuitive, engaging experiences that users love and can\'t live without'
                }
              ].map((strength, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card hover>
                    <h4 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                      {strength.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {strength.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About