# 📚 Bookstore REST API

A simple CRUD REST API for managing books using Node.js, Express, and MongoDB (Mongoose).
This API allows you to add, view, update, and delete books from a MongoDB database.

# 🚀 Features

✅ Connects to MongoDB using Mongoose

✅ Create a new book

✅ Read all books

✅ Update a book by ID

✅ Delete a book by ID

✅ Uses Express Router & MVC structure

✅ JSON-based API

# 🛠️ Tech Stack

Node.js

Express.js

MongoDB

Mongoose

JavaScript (ES Modules)

# 📁 Project Structure
project-root/
│
├── config/
│   └── db.js                # MongoDB connection
│
├── controllers/
│   └── book_controllers.js  # Business logic (CRUD)
│
├── models/
│   └── book.js              # Book schema & model
│
├── routes/
│   └── routes.js            # API routes
│
├── server.js                # App entry point
│
└── package.json

# 🔌 Database Connection

MongoDB runs locally on:

mongodb://127.0.0.1:27017/bookstore


Make sure MongoDB is running before starting the server.

📘 Book Schema
{
  title: String,
  author: String,
  publishyear: Number,
  category: String
}

# 📡 API Endpoints

Base URL:

http://localhost:4785/api

# ➕ Add Book

POST /

{
  "title": "Clean Code",
  "author": "Robert C. Martin",
  "publishyear": 2008,
  "category": "Programming"
}

# 📚 Get All Books

GET /

Response:

[
  {
    "_id": "65a12bc45d89e12a34567890",
    "title": "Clean Code",
    "author": "Robert C. Martin",
    "publishyear": 2008,
    "category": "Programming",
    "createdAt": "2025-01-10T08:30:00.000Z",
    "updatedAt": "2025-01-10T08:30:00.000Z"
  }
]

# ✏️ Update Book

PUT /:id

{
  "category": "Software Engineering"
}

🗑️ Delete Book

DELETE /:id

# ▶️ How to Run the Project

Clone the repository

Install dependencies:

npm install


Start MongoDB

Run the server:

npm start


Server will run on:

http://localhost:4785

# 🧪 Testing

Use Postman, Thunder Client, or any REST client to test the API.

# 📌 Notes

Uses ES module syntax (import/export)

MongoDB must be running locally

Error handling is basic and can be extended


https://github.com/user-attachments/assets/1aedcc3b-ae26-4693-abba-afe43f5d9ed7


