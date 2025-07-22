// import React from 'react'
import image from '../assets/vision.jpg'
const AboutCard = () => {
  return (
    <div className='flex flex-col md:h-[500px]  container '>
        <h2 className='text-2xl font-bold text-center capitalize'>who we are</h2>
        <div className='flex-col md:flex-row flex justify-between gap-8 mt-8'>
            <div className='flex w-full md:w-1/2 h-full'>
                <img src={image} alt="" />
            </div>
            <article className='flex gap-y-12 flex-col w-full md:w-1/2  h-full  justify-center pr-8'>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aperiam odio iste quo. Mollitia, adipisci asperiores. Officiis tempora consequatur eveniet eos eius quos sed aliquid quisquam quaerat sequi autem quas soluta, obcaecati impedit aspernatur quam similique? Ad ea quia aperiam deleniti. Itaque aperiam ratione aliquid nemo cupiditate sit saepe dicta suscipit quia ea laboriosam, corporis ipsum, eos deleniti molestias omnis praesentium modi ab corrupti. Porro magni fugiat impedit possimus rem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae veniam sapiente id et, doloremque odit saepe molestiae veritatis aperiam, molestias fugiat corporis cum quam culpa nobis quia quasi voluptatum. Inventore architecto, facilis aliquid saepe quos velit amet rerum voluptatum ad suscipit libero cum nulla a laborum, ut totam animi eius explicabo adipisci voluptas. </p>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum at ut dolorum quis et possimus esse placeat ex nulla perferendis, quisquam maxime fuga ipsa nam rerum dolorem temporibus iste minima nemo dolor minus eos error tempore omnis? Reprehenderit, accusamus enim. Ad neque magni quos eligendi aliquam quasi! Suscipit debitis ducimus, nostrum ut id non quia eligendi esse delectus beatae molestias exercitationem eius laborum reiciendis earum consequuntur. Repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat nemo rerum eum harum adipisci explicabo nihil reprehenderit cum id eius, quidem, doloribus magni officia aut rem mollitia, aspernatur dicta! Neque.</p>
            </article>
        </div>
    </div>
  )
}

export default AboutCard