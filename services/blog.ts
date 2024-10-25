import axios from 'axios'

export interface Section {
    _id: string
    title: string
    content: string
    active: boolean
    caption?: string
    type: string
    image?: string
    graph?:string
  }
  
export interface Blog {
    _id: string
    title: string
    description: string
    sections: Section[]
    author: string
    thumbnail: string
    active: boolean
    createdAt:string
    tags:string[]
  }
export const getAllBlogs = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/blog/all-blogs`
    )
    return res.data
  } catch (err) {
    console.log(err)
    return []
  }
}

export const getBlogById = async(id:string)=>{
    try {
        console.log(id)
        const res = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/blog/blog-details/${id}`
        )
        console.log(res.data)
        return res.data
    } catch (err) {
        console.log(err)
        return []
    }
}
