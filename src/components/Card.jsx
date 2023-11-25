import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ blog }) {
  console.log(blog);
  return (
    <div className="bg-gray-800 rounded-md p-5 my-5" key={blog.id}>  
      <Link to={blog.id.toString()} className="text-white text-xl hover:text-red-500">
        <strong>{blog.title.toUpperCase()}</strong>
        <p className='text-gray-300 text-[0.9rem] font-medium truncate'>{ blog.subTitle }</p>
      </Link>
    </div>
  )
}
