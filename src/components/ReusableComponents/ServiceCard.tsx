import type { IconType } from 'react-icons'

const ServiceCard = ({
  service,
  description,
  icon: Icon,
  color,
}: {
  service: string
  description: string
  icon: IconType
  color?: string
}) => {
  {
    console.log(color)
  }
  return (
    <div className='flex bg-[#fff] shadow-xl hover:shadow-2xl flex-col p-4  w-full  md:w-[270px] h-[280px] hover:scale-105 transition-all duration-300 ease-in-out rounded-lg'>
      <div className='flex flex-col'>
        <div className='flex flex-col text-[] rounded-full  mx-auto items-center h-16 w-16 justify-center'>
          <Icon
            className={`text-4xl text-[${color}]`}
            style={{ color: color }}
          />
        </div>
        <h4 className='text-center  mt-4 font-bold text-[#4b5563]'>
          {service}
        </h4>
        <p className=' mt-0 tracking-wide text-center text-sm text-[#6b7280]'>
          {description}
        </p>
      </div>
    </div>
  )
}
export default ServiceCard
