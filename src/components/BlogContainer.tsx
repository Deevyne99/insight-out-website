// import React from 'react'

import { blogs } from "../data/data"
import BlogCard from "./BlogCard"

const BlogContainer = () => {
  return (
    <div className="flex flex-col container mt-20">
        <div className="grid grid-cols-4 gap-4 gap-x-4 items-center justify-items-center ">
            {blogs.map((blog, index) => {
                return(
                    <BlogCard image={blog.image} name={blog.image} key={blog.id} description={blog.description}/>
                )
            })}
        </div>
    </div>
  )
}

export default BlogContainer