import { useState, useEffect } from 'react'
import { approach } from '../data/data'

const ApproachContainer = () => {
  const [productIndex, setProductIndex] = useState(0)


  const handleSLider = (index: number) => {
    setProductIndex(index)
  }

  useEffect(() => {
    const lastIndex = approach.length - 1
    const slider = setInterval(() => {
      setProductIndex((prev) => (prev === lastIndex ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(slider)
  }, [])

  return (
    <div className='h-[550px] flex flex-col px-12 w-full oveflow-hidden my-20  '>
        <h2 className='flex  justify-center items-center text-3xl font-bold'>Our Unique Approach</h2>
      <div className='flex justify-center   gap-6 w-full h-full mt-8'>
        <div className=' flex flex-col bg-gray-100 justify-between'>
          {approach
            .map((item, index) => {
              return (
                <div
                  onClick={() => handleSLider(index)}
                  key={item.name}
                  className={`${
                    productIndex === index ? 'bg-(--primary-blue)' : ''
                  }  md:w-[5px] md:h-[100px] w-[40px] h-[5px] md:mt-0 mt-4 cursor-pointer`}
                ></div>
              )
            })
            .slice(0, 5)}
        </div>
        <div className='flex flex-col justify-center  gap-6 items-center'>
          {approach
            .map((item,index) => {
              const { name, description } = item

              return (
                <div
                  className={` w-full  flex  items-center pr-8 md:pr-24 justify-center md:justify-between md:gap-12 gap-4 transition-transform duration-300 mx-auto `}
                  key={name}
                >
                  <div className='flex   w-full'>
                    <article
                      className={`flex w-lg flex-col transition-transform duration-400 ${productIndex === index? 'bg-[var(--background-light)]' :''} cursor-pointer  p-2`}
                     onClick={() => handleSLider(index)}>
                      <div>
                        <h2 className='text-md md:text-left text-center text-[#94a3b8] max-w-[550px] font-bold'>
                          {name}
                        </h2>
                        <p className='text-[#94a3b8] w-full  p-2 text-center md:text-left text-sm'>
                          {description  }
                        </p>
                      </div>
                    </article>
                  </div>
                </div>
              )
            })
            .slice(0, 4)}
        </div>
        <div className='w-full h-full  md:flex-row flex-col flex md:gap-4 gap-0 justify-center items-center'>
          <div 
            className={`justify-center items-center h-full flex transition-transform duration-400 w-full order-1 md:order-2`}
          >
            <img
              src={approach[productIndex].image}
              alt=''
              className='w-full  object-cover h-full rounded-lg shadow-lg'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ApproachContainer
