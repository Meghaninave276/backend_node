# 📝 Blog Application (MERN Stack)

A full-stack blog application built using the MERN stack (MongoDB, Express, React, Node.js) that supports user authentication, CRUD operations, and image uploads. Users can sign up, log in, create blogs with images, edit their own posts, and delete them securely.

## 🚀 Features

## 🔐 User Authentication

Signup & Login using JWT

Password hashing with bcrypt

## 📝 Blog Management

Create, Read, Update, Delete blogs

Only the author can edit or delete their blog

## 🖼️ Image Upload

Upload blog images using Multer

Images served statically from backend

## 👤 Author Display

Blog posts show author name

## 🛡️ Protected Routes

JWT-based authorization middleware

## ⚡ Modern Frontend

React Hooks (useState, useEffect)

Axios for API communication

## 🛠️ Tech Stack
Frontend

React

Axios

React Router

CSS

Backend

Node.js

Express.js

MongoDB & Mongoose

JWT (Authentication)

Bcrypt (Password Hashing)

Multer (File Uploads)

## 📂 Project Structure
backend/
 ├── config/
 │   └── db.js
 ├── controller/
 │   ├── auth_controller.js
 │   └── blog_controller.js
 ├── middleware/
 │   └── auth.js
 ├── models/
 │   ├── auth_model.js
 │   └── blog_model.js
 ├── routes/
 │   ├── auth_routes.js
 │   └── blog_routes.js
 ├── uploads/
 ├── server.js

frontend/
 ├── src/
 │   ├── api/
 │   ├── pages/
 │   │   ├── Signup.jsx
 │   │   ├── Login.jsx
 │   │   └── Blogpage.jsx
 │   └── App.js

## ⚙️ Installation & Setup

## 1️⃣ Clone the repository
git clone https://github.com/yourusername/blog-app.git
cd blog-app

## 2️⃣ Backend Setup
cd backend
npm install


## Create a .env file:

JWT_SECRET=your_secret_key


Start backend server:

npm start


Server runs on:

http://localhost:7415

## 3️⃣ Frontend Setup
cd frontend
npm install
npm start


Frontend runs on:

http://localhost:3000

## 🔐 Authentication Flow

User signs up

User logs in → receives JWT token

Token stored in localStorage

Token sent in Authorization header

Backend verifies token using middleware

## 🧪 API Endpoints

## Auth Routes
POST /api/auth/signup
POST /api/auth/login
POST /api/auth/logout

## Blog Routes
GET    /api/blogs
POST   /api/blogs
PATCH  /api/blogs/:id
DELETE /api/blogs/:id

## 📸 Image Upload

Images stored in /uploads

Accessed via:

http://localhost:7415/uploads/filename

## 🧠 Security Notes

Passwords are hashed

JWT protected routes

Only blog owners can modify/delete posts



https://github.com/user-attachments/assets/fa89b71a-50c6-49f7-835e-826446452b4d


