
// import { FaAngleLeft } from "react-icons/fa6";
import { useState, useEffect, useRef } from 'react'
import Hero from './Hero'
import { hero } from '../data/data'

const HeroContainer = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(true)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const slideCount = hero.length
  const handleChange =(index:number)=>setCurrentSlide(index)

  // Next slide handler
  // const nextSlide = () => {
  //   if (currentSlide === slideCount - 1) {
  //     setIsTransitioning(false)
  //     setCurrentSlide(0)
  //     // Re-enable transition after jump
  //     if (timeoutRef.current) clearTimeout(timeoutRef.current)
  //     timeoutRef.current = setTimeout(() => setIsTransitioning(true), 50)
  //   } else {
  //     setIsTransitioning(true)
  //     setCurrentSlide((prev) => prev + 1)
  //   }
  // }

  // // Previous slide handler
  // const prevSlide = () => {
  //   if (currentSlide === 0) {
  //     setIsTransitioning(false)
  //     setCurrentSlide(slideCount - 1)
  //     // Re-enable transition after jump
  //     if (timeoutRef.current) clearTimeout(timeoutRef.current)
  //     timeoutRef.current = setTimeout(() => setIsTransitioning(true), 50)
  //   } else {
  //     setIsTransitioning(true)
  //     setCurrentSlide((prev) => prev - 1)
  //   }
  // }

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
            <Hero  color={item.color} image={item.img} description={item.description} subtitle={item.subtitle}/>
          </div>
        ))}
      </div>
      {/* <button
        className='absolute top-1/2 left-4 transform -translate-y-1/2  text-white px-4 py-2 rounded'
        onClick={prevSlide}
      >
        {/* <FaAngleLeft className='text-[var(--primary-blue)] text-3xl' /> */}
      {/* </button>
      <button
        className='absolute top-1/2 right-4 transform -translate-y-1/2  text-white px-4 py-2 rounded'
        onClick={nextSlide}
      >
        
      </button> */} 
       <div className='flex gap-4 mt-4 justify-center '>
                  {hero.map((event,index)=>{
                    return <div key={event.id} className={`h-[20px] p-1 w-[20px]  flex justify-center items-center rounded-full ${currentSlide === index? 'bg-[var(--primary-blue)]':"bg-[var(--background-light)]"} cursor-pointer`} onClick={()=>handleChange(index)}></div>
                  })}
                </div>
    </div>
  )
}

export default HeroContainer
