// import React from 'react'

import { blogs } from "../data/data"
import BlogCard from "./BlogCard"

const BlogContainer = () => {
  return (
    <div className="flex flex-col container mt-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-x-4  items-center justify-items-center ">
            {blogs.map((blog, index) => {
                return(
                    <BlogCard id={blog.id} image={blog.image} name={blog.name} key={blog.id} description={blog.description} variant="container"/>
                )
            })}
        </div>
    </div>
  )
}

export default BlogContainer