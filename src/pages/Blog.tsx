// import React from 'react'
import image from '../assets/event-1.jpg'
// import { MdOutlineArrowBack } from "react-icons/md";
import { GoArrowLeft } from "react-icons/go";
const Blog = () => {
  return (
 <div className="mt-28 flex flex-col container  ">
    <button className='flex items-center my-2      transition-colors duration-300  rounded-full w-10 h-10 bg-[var(--primary-blue)] text-white justify-center' onClick={() => window.history.back()}>
        <GoArrowLeft className=' text-2xl text-white' />
    </button>

<div className='flex flex-col w-full items-center md:w-xl justify-center  mt-6 mx-auto my-2'>
<img src={image} alt="" className='flex flex-col w-full object-center h-auto'/>
</div>
<div className='flex flex-col items-center justify-center w-full md:w-xl mt-8 mx-auto'>
<h4>Agriculture is here for good</h4>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid minus debitis, velit mollitia, culpa praesentium perferendis a doloribus nihil ex autem necessitatibus, ea odio quaerat dolorem blanditiis? Cupiditate harum dignissimos temporibus esse, placeat cumque voluptatem, iure, quia reprehenderit deserunt necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt perspiciatis nemo optio quidem minima illum ipsum at veniam ratione, nostrum deserunt sapiente incidunt quia cumque quam ducimus! Iusto totam aspernatur quasi omnis commodi sapiente dolorem iure deleniti accusantium nobis labore similique voluptas ullam perspiciatis, dolor cumque laborum quae veritatis eaque laudantium. Perferendis ipsa, soluta illo exercitationem eos in aliquam inventore officia illum nostrum ullam, sit molestiae quia veritatis iusto laudantium cumque doloremque repudiandae tempore optio repellendus, praesentium fugit nesciunt explicabo? Enim quo assumenda quos culpa alias, deserunt natus sint explicabo vel quidem perferendis suscipit pariatur adipisci harum rem dicta magnam velit repellat saepe unde accusantium magni aspernatur. Aperiam culpa ab, earum tempora magni reprehenderit rem nesciunt ducimus dolorem deserunt placeat delectus similique, sapiente, enim iusto porro? Incidunt animi nesciunt, rerum ad repellat eos voluptatibus distinctio dignissimos consectetur, accusantium doloribus. Velit corporis pariatur nihil reprehenderit quis modi, quibusdam ad labore quos?</p>

</div>

 </div>
  )
}

export default Blog