# 🎬 Movie Management System (M-SHOW)

A full-stack Movie Management System built with MERN Stack (MongoDB, Express, React, Node.js) that allows users to add, view, update, and delete movies along with poster uploads. This project demonstrates CRUD operations, file handling, and modern UI integration.

# 🚀 Features

➕ Add Movies with title, description, genre, release year & poster

🖼️ Upload Movie Posters using Multer

📄 View All Movies in a responsive grid layout

✏️ Edit Movie Details including poster replacement

🗑️ Delete Movies with automatic poster file removal

🌐 RESTful API built with Express & MongoDB

⚡ Fast & Interactive UI using React and Axios

# 🛠️ Tech Stack

# 🔧 Backend

🟢 Node.js

🚂 Express.js

🍃 MongoDB & Mongoose

📁 Multer (File Uploads)

🌍 CORS

# 🎨 Frontend

⚛️ React.js

🔀 React Router

📡 Axios

🎨 Custom CSS

# 📂 Project Structure
backend/
 ├── config/db.js
 ├── models/movie.js
 ├── controllers/moviecontrollers.js
 ├── routes/routes.js
 ├── uploads/
 └── server.js

frontend/
 ├── components/Hero.jsx
 ├── pages/Home.jsx
 ├── styles/
 └── App.jsx

# 🔗 API Endpoints
Method	Endpoint	Description
POST	/movie	➕ Add a new movie
GET	/movie	📄 Get all movies
PUT	/movie/:id	✏️ Update a movie
DELETE	/movie/:id	🗑️ Delete a movie
🖼️ Image Handling

Movie posters are stored in the uploads folder 📁

Old posters are automatically deleted on update/delete ♻️

Images are served statically via Express

# ▶️ How to Run the Project
Backend
npm install
npm start

Frontend
npm install
npm run dev



https://github.com/user-attachments/assets/ab0c8a31-14cf-4797-bd16-7472df55ecfc




