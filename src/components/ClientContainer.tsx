import { useRef } from 'react'
import ClientsCard from './ClientsCard'
import { entities } from '../data/data'

const ClientContainer = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const scrollAmount = 390 // Adjust this value to match your item width

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
    <div className='flex flex-col my-12'>
      <div className='flex mx-4 py-4 md:mx-12 items-center justify-between'>
        <h3 className='text-xl font-bold'>Categories</h3>
        <div className='flex gap-2'>
          <button
            onClick={handlePrev}
            className='px-3 py-1 bg-gray-200 rounded hover:bg-gray-300'
          >
            Prev
          </button>
          <button
            onClick={handleNext}
            className='px-3 py-1 bg-gray-200 rounded hover:bg-gray-300'
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
          <div className='flex gap-4 py-12'>
            {entities.map((blog) => (
              <ClientsCard key={blog.sector} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default ClientContainer
