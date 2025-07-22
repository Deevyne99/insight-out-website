import { Link } from "react-router-dom"
import BlogContainer from "../components/BlogContainer"

const Blogs = () => {
  return <div className="flex flex-col container mt-24 my-12">
<Link to={"/create-insight"} className=" text-center bg-[var(--primary-blue)] text-white p-2 text-sm rounded-md transition-all duration-300 ease-in-out  ml-auto flex items-center ">
Create Insight
</Link>
    <div className=" flex flex-col mt-8">

    <BlogContainer variant='container' />
    </div>


  </div>
}
export default Blogs
