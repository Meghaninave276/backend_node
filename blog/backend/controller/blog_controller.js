import Blog from "../models/blog_model.js";
import mongoose from "mongoose";

/* CREATE BLOG */
export const createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content)
      return res.status(400).json({ message: "Title and content are required" });

    const blog = await Blog.create({
      title,
      content,
      image: req.file ? `/uploads/${req.file.filename}` : null,
      author: req.userId,
    });

    res.status(201).json(blog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to create blog" });
  }
};

/* GET ALL BLOGS */
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find()
      .populate("author", "name")
      .sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to fetch blogs" });
  }
};

/* UPDATE BLOG */
export const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(400).json({ message: "Invalid blog ID" });

    const blog = await Blog.findById(id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    const authorId = blog.author._id
      ? blog.author._id.toString()
      : blog.author.toString();

    if (authorId !== req.userId)
      return res.status(403).json({ message: "Not authorized" });

    blog.title = req.body.title ?? blog.title;
    blog.content = req.body.content ?? blog.content;

    if (req.file) {
      blog.image = `/uploads/${req.file.filename}`;
    }

    await blog.save();
    res.json(blog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to update blog" });
  }
};


/* DELETE BLOG */
export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(400).json({ message: "Invalid blog ID" });

    const blog = await Blog.findById(id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });

    const authorId = blog.author._id
      ? blog.author._id.toString()
      : blog.author.toString();

    if (authorId !== req.userId)
      return res.status(403).json({ message: "Not authorized" });

    await blog.deleteOne();
    res.json({ message: "Blog deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to delete blog" });
  }
};

