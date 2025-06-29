
import ClientsCard from './ClientsCard'
import { entities } from '../data/data'

const ClientContainer = () => {
  
  
  return (
    <div className='flex flex-col my-12 container'>
      
      <h2 className='text-2xl font-bold mb-4'>Who We Serve</h2>
      <div className='flex mt-4'>
        <div className='flex gap-4  overflow-x-auto flex-nowrap w-full scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100'>
          {entities.map((blog) => (
            <ClientsCard key={blog.sector} description={blog.description} sector={blog.sector} bg={`url('${blog.image}')`}/>
          ))}
        </div>
      </div>
      
    </div>
  )
}
export default ClientContainer
