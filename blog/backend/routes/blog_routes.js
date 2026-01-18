import express from "express";
import { authMiddleware } from "../middleware/auth_middleware.js";
import {
  createBlog,
  getBlogs,
  updateBlog,
  deleteBlog,
} from "../controller/blog_controller.js";
import multer from "multer";

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({ storage });

// Routes
router.get("/", getBlogs);
router.post("/", authMiddleware, upload.single("image"), createBlog);
router.patch("/:id", authMiddleware, upload.single("image"), updateBlog);
router.delete("/:id", authMiddleware, deleteBlog);

export default router;
