import mission from '../assets/event-1.jpg'
const MissionCard = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex justify-between gap-8'>
        <div className='w-full md:w-1/2'>
          <img src={mission} alt='mission' className='' />
        </div>
        <article className='w-full md:w-1/2 shadow-lg hover:shadow-2xl hover:scale-100 transition-transform duration-3000 ease-in-out rounded-md bg-white flex-col p-4 flex justify-center'>
          <div className='w-full '>
            <h2 className='capitalize font-bold text-2xl '>our mission</h2>
          </div>
          <div className='w-full flex  flex-col items-center justify-center '>
            <p className='mt-4'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A iusto
              unde commodi rerum, adipisci amet. Fugit autem, nulla nemo error
              soluta distinctio quidem hic totam perferendis commodi pariatur
              eaque, provident explicabo molestias adipisci repellat temporibus
              perspiciatis modi animi! Veniam, voluptatem.
            </p>
          </div>
        </article>
      </div>
    </div>
  )
}
export default MissionCard
