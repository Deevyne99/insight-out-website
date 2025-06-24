'use client'

import { useState, useEffect, useRef } from 'react'
import Hero from './Hero'
import { hero } from '../data/data'

const HeroContainer = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const slideCount = hero.length

  // Next slide handler
  const nextSlide = () => {
    if (currentSlide === slideCount - 1) {
      setIsTransitioning(false)
      setCurrentSlide(0)
      // Re-enable transition after jump
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => setIsTransitioning(true), 50)
    } else {
      setIsTransitioning(true)
      setCurrentSlide((prev) => prev + 1)
    }
  }

  // Previous slide handler
  const prevSlide = () => {
    if (currentSlide === 0) {
      setIsTransitioning(false)
      setCurrentSlide(slideCount - 1)
      // Re-enable transition after jump
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(() => setIsTransitioning(true), 50)
    } else {
      setIsTransitioning(true)
      setCurrentSlide((prev) => prev - 1)
    }
  }

  // Auto slide effect
  useEffect(() => {
    const slider = setInterval(() => {
      if (currentSlide === slideCount - 1) {
        setIsTransitioning(false)
        setCurrentSlide(0)
        if (timeoutRef.current) clearTimeout(timeoutRef.current)
        timeoutRef.current = setTimeout(() => setIsTransitioning(true), 50)
      } else {
        setIsTransitioning(true)
        setCurrentSlide((prev) => prev + 1)
      }
    }, 3000)
    return () => clearInterval(slider)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSlide, slideCount])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <div className='relative mt-20 w-full overflow-hidden'>
      <div
        className={`flex ${
          isTransitioning ? 'transition-transform duration-500' : ''
        }`}
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {hero.map((item) => (
          <div key={item.id} className='w-full flex-shrink-0'>
            <Hero title={item.title} color={item.color} image={item.img} />
          </div>
        ))}
      </div>
      <button
        className='absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded'
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className='absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white px-4 py-2 rounded'
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  )
}

export default HeroContainer
