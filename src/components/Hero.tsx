// import image from '../assets/image-1.jpg'

import ButtonComponent from "./ButtonComponent"

const Hero = ({
  title,
  image: img,
  color,
}: {
  title: string
  color?: string
  image: string
}) => {
  return (
    <div className='flex flex-col w-full justify-center items-center bg-[#fff] md:px-12 px-4'>
      <div
        className={`flex gap-4 mt-2 justify-between items-center w-full px-4 md:px-12  py-6 md:py-12 mx-4 md:mx-12 rounded-xl flex-col sm:flex-row `}
         style={{ backgroundColor: color }}
      >
        <article className='flex flex-col w-full md:w-1/2 md:order-1 order-2'>
          <div className='flex flex-col w-full items-center justify-center sm:items-start mt-4'>
            <h1 className='text-center sm:text-left text-4xl w-full md:w-[70%]'>
              {title}
            </h1>
            <h2 className='text-lg sm:text-left text-center mt-1'>
              The Next big thing{' '}
            </h2>
            <div>
              <p className='text-sm text-gray-600 max-w-[500px] w-full mt-4 text-left'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                nisi cum, repudiandae laborum quibusdam, enim perferendis animi
                fugiat corporis, modi labore. Fugit similique optio culpa
                reiciendis, repellendus libero quaerat minima corrupti labore
                eius magnam atque, pariatur neque numquam a quae.
              </p>
              <div className="w-[150px]">

              <ButtonComponent label="Get Started" className="mt-4"/>
              </div>
            </div>
          </div>
        </article>
        <div className='w-full flex md:w-1/2 sm:order-2 order-1 relative aspect-w-1 aspect-h-1'>
          <img
            src={img}
            width={500}
            height={500}
            alt='The image'
            className='object-cover rounded-md w-full'
          />
        </div>
      </div>
    </div>
  )
}

export default Hero
