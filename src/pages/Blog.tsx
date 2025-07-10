// import React from 'react'
import image from '../assets/event-1.jpg'
const Blog = () => {
  return (
 <div className="mt-20 flex flex-col container  ">
    <button className='flex items-center justify-center w-32 h-10 bg-blue-500 text-white rounded-md mb-8 mr-auto hover:bg-blue-600 transition-colors duration-300' onClick={() => window.history.back()}>
        back
    </button>

<div className='flex flex-col  items-center w-lg justify-center   mx-auto'>
<img src={image} alt="" className='flex flex-col w-full object-center h-auto'/>
</div>
<div className='flex flex-col items-center justify-center w-lg mt-8 mx-auto'>
<h2>Agriculture is here for good</h2>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid minus debitis, velit mollitia, culpa praesentium perferendis a doloribus nihil ex autem necessitatibus, ea odio quaerat dolorem blanditiis? Cupiditate harum dignissimos temporibus esse, placeat cumque voluptatem, iure, quia reprehenderit deserunt necessitatibus.</p>
<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure at libero quia. Quaerat ab tempora numquam dicta inventore dolorum, obcaecati id asperiores iusto quia vero reiciendis tempore blanditiis excepturi qui sunt est minima totam quidem. Nemo impedit ratione laborum laudantium magnam ullam reprehenderit illum ab! Assumenda debitis ab blanditiis sequi.</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quaerat possimus consequatur ea inventore. Dolore molestias unde eaque quam, asperiores ullam voluptatum velit. Corporis iure at alias eius ipsum nesciunt, nulla quam, facere fugiat natus soluta molestias aliquid hic, consectetur explicabo consequatur ducimus iste laudantium. Similique impedit ullam cum voluptatum.</p>
</div>

 </div>
  )
}

export default Blog