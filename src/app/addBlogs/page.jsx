"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const AddBlog = () => {
  const [blogs, setBlogs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

   const formData = {
  image: e.target.image.value,
  title: e.target.title.value,
  category: e.target.category.value,
  medium: e.target.medium.value,
  description: e.target.description.value,

  likes: 0,
  artist: {
    name: e.target.name.value,
    email: e.target.email.value,
    photo: "https://i.ibb.co.com/placeholder.jpg" // or add input
  }
};


    try {
      const res = await fetch("http://localhost:5000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      toast.success("Artwork added!");

      setBlogs((prev) => [...prev, data]);
    } catch (err) {
      console.error(err);
      toast.error("Failed to add artwork");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-base-100 p-6">
      <ToastContainer position="top-center" autoClose={2000} hideProgressBar />

      <div className="card w-full max-w-2xl shadow-lg bg-base-100">
        <div className="card-body">
          <h2 className="card-title mx-auto text-2xl font-bold mb-4">
            Add New Artwork
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="label">User Name</label>
                <input
                  type="text"
                  name="name"
                  readOnly
                  className="input input-bordered w-full bg-base-200"
                />
              </div>
              <div>
                <label className="label">User Email</label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full bg-base-200"
                />
              </div>
            </div>

            <div>
              <label className="label">Image URL</label>
              <input
                type="url"
                name="image"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">Title</label>
              <input
                type="text"
                name="title"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">Category</label>
              <select name="category" className="select select-bordered w-full">
                <option>Landscape</option>
                <option>Urban</option>
                <option>Nature</option>
                <option>Digital Art</option>
                <option>Sculpture</option>
                <option>Abstract</option>
                <option>Realism</option>
                <option>Architecture</option>
                <option>Seascape</option>
                <option>Spiritual</option>
              </select>
            </div>

            <div>
              <label className="label">Medium / Tools</label>
              <input
                type="text"
                name="medium"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">Description</label>
              <textarea
                name="description"
                className="textarea textarea-bordered w-full"
                required
              />
            </div>


            <div>
              <label className="label">Visibility</label>
              <select name="visibility" className="select select-bordered w-full">
                <option>Public</option>
                <option>Private</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary w-full mt-4">
              Add BLOG
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
