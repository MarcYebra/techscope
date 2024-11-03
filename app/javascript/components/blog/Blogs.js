import React, {useState, useEffect} from 'react';
import BlogTile from './BlogTile';
import Home from '../Home';


const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await fetch('/api/v1/blogs')
      if (!response.ok) {
        const errorMessage = `${response.status} (${response.statusText})`
        const error = new Error(errorMessage)
        throw error
      }
      const responseBody = await response.json()
      setBlogs(responseBody) 
      } catch (err) {
        console.error(`Error in fetch: ${err.message}`)
      }
    }
  
  useEffect(() => {
    fetchBlogs()
   }, [] )

   const blogTiles = blogs.map(blog => {
    return (
      <BlogTile
        key={blog.id}
        id={blog.id}
        title={blog.title}
        subhead={blog.subhead}
        body={blog.body}
        author={blog.author}
      />
    )
   })





  return (
    <div>
      <Home blogs={blogs} />
      {blogTiles}
    </div>
  )
};

export default Blogs;