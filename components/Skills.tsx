'use client'

import React, { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Card from './ui/Card'
import { skills } from '@/lib/data'
import { Code, Users, TrendingUp, Wrench } from 'lucide-react'

const skillCategories = [
  { key: 'leadership', title: 'Leadership & Management', icon: Users },
  { key: 'technical', title: 'Technical & Product', icon: Code },
  { key: 'business', title: 'Business & Strategy', icon: TrendingUp }
]

const SkillBar: React.FC<{ skill: { name: string; level: number } }> = ({ skill }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (isInView) {
      setTimeout(() => setWidth(skill.level), 100)
    }
  }, [isInView, skill.level])

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          {skill.name}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-500 to-primary-400 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-primary-500 mx-auto mb-12"></div>

          {/* Skill Categories */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {skillCategories.map((category, index) => {
              const categorySkills = skills[category.key as keyof typeof skills] as { name: string; level: number }[]
              const Icon = category.icon

              return (
                <motion.div
                  key={category.key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <Icon className="w-8 h-8 text-primary-500" />
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {category.title}
                      </h3>
                    </div>
                    <div className="space-y-4">
                      {categorySkills.map((skill, i) => (
                        <SkillBar key={i} skill={skill} />
                      ))}
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          {/* Tools & Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Wrench className="w-8 h-8 text-primary-500" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Tools & Technologies
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((tool, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.1, rotate: [-1, 1, -1, 0] }}
                    className="px-4 py-2 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 text-primary-700 dark:text-primary-300 rounded-lg font-medium shadow-sm hover:shadow-md transition-all cursor-default"
                  >
                    {tool}
                  </motion.span>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Skill Summary */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center max-w-3xl mx-auto"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Combining <span className="text-primary-600 dark:text-primary-400 font-semibold">strategic leadership</span> with{' '}
              <span className="text-primary-600 dark:text-primary-400 font-semibold">technical expertise</span> to deliver{' '}
              <span className="text-primary-600 dark:text-primary-400 font-semibold">exceptional digital products</span> that scale.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills