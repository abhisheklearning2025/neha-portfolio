import React from 'react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className, 
  hover = false,
  onClick 
}) => {
  const Component = hover ? motion.div : 'div'
  
  const baseStyles = 'bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transition-all duration-300'
  const hoverStyles = hover ? 'cursor-pointer hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1' : ''
  
  const props = hover ? {
    whileHover: { y: -4 },
    transition: { type: "spring", stiffness: 300 }
  } : {}
  
  return (
    <Component
      className={cn(baseStyles, hoverStyles, className)}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  )
}

export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className 
}) => (
  <div className={cn('mb-4', className)}>
    {children}
  </div>
)

export const CardTitle: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className 
}) => (
  <h3 className={cn('text-xl font-semibold text-gray-900 dark:text-white', className)}>
    {children}
  </h3>
)

export const CardDescription: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className 
}) => (
  <p className={cn('text-gray-600 dark:text-gray-400 mt-2', className)}>
    {children}
  </p>
)

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className 
}) => (
  <div className={cn('', className)}>
    {children}
  </div>
)

export const CardFooter: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className 
}) => (
  <div className={cn('mt-4 pt-4 border-t border-gray-200 dark:border-gray-700', className)}>
    {children}
  </div>
)

export default Card