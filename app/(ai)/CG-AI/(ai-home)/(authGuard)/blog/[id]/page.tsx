import Blog from '@/components/AiDashboard/Blog/Blog'
import BlogDetails from '@/components/AiDashboard/BlogDetails/BlogDetails'
import { getBlogById } from '@/services/blog'
import { useParams } from 'next/navigation'

const BlogDetailPage = ({params}:{params:{_id:string}}) => {
  return (
    <BlogDetails />
  )
}

export default BlogDetailPage