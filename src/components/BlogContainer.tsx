import { useRef } from 'react'
import BlogCard from './BlogCard'
import { blogs } from '../data/data'

export const BlogContainer = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const scrollAmount = 300 // Adjust this value to match your item width

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <div className='flex flex-col py-16'>
      <div className='flex mx-4 md:mx-12 items-center justify-between'>
        <h2 className='text-2xl font-bold capitalize'>Explore our latest insight</h2>
        <div className='flex gap-2'>
          <button
            onClick={handlePrev}
            className='px-3 py-1 bg-[var(--primary-blue)] text-[#fff] rounded hover:bg-gray-300'
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className='px-3 py-1 bg-[var(--primary-blue)] text-[#fff] rounded hover:bg-gray-300'
          >
            Next
          </button>
        </div>
      </div>
      <div className='flex mt-4'>
        <div
          ref={scrollRef}
          className='overflow-x-auto overflow-y-hidden no-scrollbar'
        >
          <div className='flex gap-4 py-6'>
            {blogs.map((blog, index) => (
              <BlogCard
                key={index}
                image={blog.image}
                description={blog.description}
                name={blog.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
