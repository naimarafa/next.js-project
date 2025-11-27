"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa"; 
import { MdArrowForward } from "react-icons/md";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  
  if (!blogs) return <p>Loading...</p>;
 

// delete blog 

const deleteBlog = async (id) => {


  await fetch(`http://localhost:5000/blogs/${id}`, {
    method: "DELETE",
  });

setBlogs(prev => prev.filter(b => b.id !== id));

};


  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">All Blogs</h2>

      <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
            
            {/* Image */}
            <figure>
              <img src={blog.image} alt={blog.title} className="h-104 w-full object-cover" />
            </figure>

            {/* Card Body */}
            <div className="card-body">

              {/* Title + Category */}
              <h2 className="card-title text-lg font-semibold">
                {blog.title}
                <div className="badge badge-primary text-white font-medium">
                  {blog.category}
                </div>
              </h2>

              {/* Artist */}
        <img
  src={blog.artist?.photo || "/default.jpg"}
  alt={blog.artist?.name || "Unknown Artist"}
  className="w-10 h-10 rounded-full object-cover border"
/>

<p className="ml-3 font-medium">
  {blog.artist?.name || blog.artist_name || "Unknown Artist"}
</p>


              {/* Likes + Button */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <FaHeart className="text-red-500" />
                  <span>{blog.likes}</span>
                </div>
                <div className="flex gap-2">
                     <Link
                  href={`/blogs/${blog.id}`}
                  className="btn btn-sm btn-primary text-white flex items-center gap-1"
                >
                  View Details <MdArrowForward size={18}/>
                </Link>
            <button onClick={() => deleteBlog(blog.id)} className="btn btn-outline">
  Delete
</button>
                </div>

               
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
