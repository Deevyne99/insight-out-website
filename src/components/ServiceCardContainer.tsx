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
    <article className='my-12 py-6  bg-[#f5f3ff]  w-full flex flex-col justify-center items-center'>
      <div className='mt-8'>
        <h2 className='flex flex-col text-4xl font-bold capitalize text-center '>
          {heading}
        </h2>
      </div>
      <div className='my-8  md:mx-0 mx-4 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 justify-center items-center '>
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
