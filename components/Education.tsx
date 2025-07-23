'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, Award, Calendar, MapPin, ChevronDown, Globe } from 'lucide-react'
import Card from './ui/Card'
import { education, certifications, languages } from '@/lib/data'

const Education: React.FC = () => {
  const [expandedEducation, setExpandedEducation] = useState<number | null>(0)
  const [showCertifications, setShowCertifications] = useState(true)

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-12"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Education Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-8 h-8 text-primary-500" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Education
                </h3>
              </div>

              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card
                      hover
                      onClick={() => setExpandedEducation(expandedEducation === index ? null : index)}
                      className="cursor-pointer"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                            {edu.degree}
                          </h4>
                          {edu.specialization && (
                            <p className="text-sm text-primary-600 dark:text-primary-400 mb-2">
                              {edu.specialization}
                            </p>
                          )}
                          <p className="text-gray-700 dark:text-gray-300 font-medium">
                            {edu.institution}
                          </p>
                        </div>
                        <motion.div
                          animate={{ rotate: expandedEducation === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        </motion.div>
                      </div>

                      <AnimatePresence>
                        {expandedEducation === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
                          >
                            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {edu.location}
                              </div>
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                Graduated {edu.year}
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Certifications & Languages */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-primary-500" />
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Certifications
                </h3>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card>
                  <button
                    onClick={() => setShowCertifications(!showCertifications)}
                    className="w-full flex items-center justify-between text-left"
                  >
                    <span className="font-medium text-gray-900 dark:text-white">
                      Professional Certifications ({certifications.length})
                    </span>
                    <motion.div
                      animate={{ rotate: showCertifications ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {showCertifications && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 space-y-3"
                      >
                        {certifications.map((cert, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-3 bg-gray-50 dark:bg-gray-800/50 rounded-lg"
                          >
                            <h5 className="font-medium text-gray-900 dark:text-white">
                              {cert.name}
                            </h5>
                            <div className="flex items-center gap-2 mt-1 text-sm text-gray-600 dark:text-gray-400">
                              <span>{cert.provider}</span>
                              <span>•</span>
                              <span>{cert.year}</span>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>

                {/* Languages */}
                <Card className="mt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Globe className="w-6 h-6 text-primary-500" />
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Languages
                    </h4>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {languages.map((lang, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="text-center p-3 bg-primary-50 dark:bg-primary-900/20 rounded-lg"
                      >
                        <p className="font-medium text-gray-900 dark:text-white">
                          {lang.name}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {lang.proficiency}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education