import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import { connectdb } from "./config/db.js";
import authRoutes from "./routes/auth_routes.js";
import blogRoutes from "./routes/blog_routes.js";

const app = express();

/* DB */
connectdb();

/* MIDDLEWARE */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }));

/* UPLOADS */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadPath = path.join(__dirname, "uploads");
app.locals.uploadPath = uploadPath;
app.use("/uploads", express.static(uploadPath));

/* ROUTES */
app.use("/api/auth", authRoutes);
app.use("/api/blogs", blogRoutes);

/* SERVER */
app.listen(7415, () => {
  console.log("Server running on port 7415");
  console.log("JWT_SECRET:", process.env.JWT_SECRET);
});
