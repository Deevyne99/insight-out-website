// import { services } from '../data/data'
import ServiceCard from './ReusableComponents/ServiceCard'
import type { IconType } from 'react-icons'
interface DataProps {
  id?: number | string
  service?: string
  description: string
  icon: IconType
  color?: string
  title?: string
  name?: string
  background?: string
}

const ServiceCardContainner = ({
  heading,
  data,
}: {
  heading: string
  data: DataProps[]
}) => {
  return (
    <article className=' py-16 gap-4  bg-[#f5f3ff]  w-full flex flex-col justify-center items-center'>
      <div className=' flex flex-col '>
        <h2 className='flex flex-col  font-bold capitalize text-center poppins-extrabold '>
          {heading}
        </h2>
      </div>
      <div className=' md:mx-0 mx-4 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 justify-center items-center '>
        {data.map((service) => {
          return (
            <ServiceCard
              key={service.id}
              service={service.service || service.title || service.name || ''}
              description={service.description}
              icon={service.icon}
              color={service.color}
              background={service.background}
            />
          )
        })}
      </div>
    </article>
  )
}
export default ServiceCardContainner
