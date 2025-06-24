// import Image from 'next/image'
// import user from '../../public/assets/image-1.jpg'
const BlogCard = ({
  image,
  description,
  name,
}: {
  image: string
  description: string
  name: string
}) => {
  return (
    <div className='flex w-[300px] flex-col p-4 hover:scale-102  cursor-pointer shadow-lg hover:shadow-3xl rounded-md transform transition-all duration-300 ease-in-out'>
      <div className='w-[250px] flex flex-col'>
        <img src={image} alt='blog image' className='rounded-md mb-4 w-full ' />
      </div>
      <article className='flex w-full flex-col gap-2'>
        <h4 className='capitalize font-bold text-[#4b5563]'>{name}</h4>
        <p className='text-sm text-[#6b7280] tracking-wide'>{description}</p>
      </article>
    </div>
  )
}
export default BlogCard
