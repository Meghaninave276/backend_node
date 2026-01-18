import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Blogpage.css"

const API_URL = "http://localhost:7415/api/blogs";

export default function Blogpage() {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [editingId, setEditingId] = useState(null);

  const token = localStorage.getItem("token");

  /* FETCH BLOGS */
  const fetchBlogs = async () => {
    try {
      const res = await axios.get(API_URL);
      setBlogs(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  /* CREATE / UPDATE BLOG */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!token) {
      return alert("Please login first");
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) formData.append("image", image);

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data"
        }
      };

      if (editingId) {
        await axios.put(`${API_URL}/${editingId}`, formData, config);
      } else {
        await axios.post(API_URL, formData, config);
      }

      resetForm();
      fetchBlogs();
    } catch (err) {
      alert(err.response?.data?.message || "Action failed");
    }
  };

  /* DELETE BLOG */
  const handleDelete = async (id) => {
    if (!token) return alert("Please login first");

    try {
      await axios.delete(`${API_URL}/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchBlogs();
    } catch (err) {
      alert(err.response?.data?.message || "Delete failed");
    }
  };

  /* EDIT BLOG */
  const handleEdit = (blog) => {
    if (!token) return alert("Please login first");

    setTitle(blog.title);
    setContent(blog.content);
    setEditingId(blog._id);
    setImage(null);
  };

  /* RESET */
  const resetForm = () => {
    setTitle("");
    setContent("");
    setImage(null);
    setEditingId(null);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className=" font-bold mb-4 text-center">Blog Page</h1>

      {/* BLOG FORM */}
      <form onSubmit={handleSubmit} className="border p-4 rounded mb-6">
        <input
          type="text"
          placeholder="Title"
          className="border p-2 w-full mb-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Content"
          className="border p-2 w-full mb-2"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <input
          type="file"
          accept="image/*"
          className="border p-2 w-full mb-2"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <div className="flex gap-2">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            {editingId ? "Update Blog" : "Create Blog"}
          </button>

          {editingId && (
            <button
              type="button"
              onClick={resetForm}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      {/* BLOG LIST */}
      {blogs.map((blog) => (
        <div key={blog._id} className="border p-4 rounded mb-4">
          <h2 className="text-xl font-bold">{blog.title}</h2>
          <p className="mb-2">{blog.content}</p>

          {blog.image && (
            <img
              src={`http://localhost:7415${blog.image}`}
              alt="blog"
              className="images"
            />
          )}

          <p className="text-sm text-gray-500">
            Author: {blog.author?.name || "Unknown"}
          </p>

          <div className="mt-2 flex gap-2">
            <button
              onClick={() => handleEdit(blog)}
              className="bg-yellow-400 text-white px-3 py-1 rounded"
            >
              Edit
            </button>

            <button
              onClick={() => handleDelete(blog._id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
