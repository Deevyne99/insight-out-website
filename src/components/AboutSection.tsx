import { Link } from 'react-router-dom'
import image from '../../src/assets/event-1.jpg'
const AboutSection = () => {
  return (
    <div className='flex flex-col py-20 px-4 md:container w-full'>
      <div className='flex flex-col md:flex-row justify-center items-center mb-4'>
        <h1 className=''>About us</h1>
      </div>
      <div className='flex flex-col md:flex-row justify-between items-center  gap-8'>
        <div className='flex w-full md:w-1/2'>
          <img src={image} alt='' />
        </div>
        <article className='flex w-full md:w-1/2 '>
          <div className='flex flex-col md:gap-8 gap-4'>
            <p className='text-sm text-gray-600'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              assumenda quo deserunt, accusantium modi aspernatur fugit nulla
              blanditiis nam numquam vel magnam rem asperiores excepturi saepe
              debitis iure reprehenderit earum! Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Ut amet autem odit molestiae nihil
              eius unde quia et doloribus voluptates. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Corrupti officiis expedita illum aut
              quisquam est dolorem id veniam enim mollitia.
            </p>
            <p className='text-sm text-gray-600'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              nisi cum, repudiandae laborum quibusdam, enim perferendis animi
              fugiat corporis, modi labore. Fugit similique optio culpa
              reiciendis, repellendus libero quaerat minima corrupti labore eius
              magnam atque, pariatur neque numquam a quae. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Soluta vel molestiae ipsa nihil
              tempora nam iste minima, nisi ab est. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur cum reprehenderit ea hic earum in voluptatem aspernatur rem natus cupiditate!
            </p>
          <Link className='w-[100px] bg-[var(--primary-blue)] rounded-md text-white p-2 text-center' to={'/about'}>Read more</Link>
          </div>
        </article>
      </div>
    </div>
  )
}
export default AboutSection
