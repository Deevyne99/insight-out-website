import image from '../assets/event-1.jpg'

const ClientsCard = () => {
  return (
    <div className='flex flex-col  h-[400px]  bg-[#f7fee7]'>
      <div className='flex flex-col md:flex-row w-full h-full items-center justify-center gap-6 '>
        <article className='w-full md:w-1/2  h-full p-4'>
          <h4>Government</h4>
          <p className='w-full mt-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
            libero exercitationem dolorem amet magnam alias. Vero ipsam harum
            corrupti deserunt eius animi quod repellendus. Quibusdam reiciendis
            libero itaque corrupti vitae.
          </p>
        </article>
        <div className='w-full md:w-1/2 h-full flex'>
          <div className='w-[500px] '>
            <img src={image} alt='' className='w-full h-full object-cover' />
          </div>
        </div>
      </div>
    </div>
  )
}
export default ClientsCard
