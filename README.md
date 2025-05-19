# HealthTrack - Medical Record Management System

HealthTrack is a web application built using Node.js, Express, MongoDB, and JWT for securely managing and storing medical records. Users can register, log in, upload medical records, and retrieve them securely with authentication. The project also includes file uploads using Multer and stores records in a MongoDB database.

## Features

- **User Authentication**: Register and login users securely using JWT tokens.
- **File Uploads**: Users can upload medical records such as PDFs and images.
- **Record Management**: Users can view, search, and organize their medical records.
- **Security**: All sensitive routes are protected using JWT-based authentication and bcrypt for password hashing.
- **File Storage**: Uploaded files are stored on the server in the `uploads` directory.

## Technologies Used

- **Node.js**: JavaScript runtime for the backend.
- **Express**: Web framework for building the API.
- **MongoDB**: NoSQL database to store users and records.
- **Mongoose**: MongoDB object modeling tool for Node.js.
- **JWT**: JSON Web Tokens for secure authentication.
- **bcryptjs**: Password hashing and verification.
- **multer**: Middleware for handling file uploads.
- **CORS**: Cross-Origin Resource Sharing to enable cross-origin requests.

## Prerequisites

Before running the project, you need to have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community) (or use MongoDB Atlas for cloud hosting)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/InViSibleTorNadO/HealthPulse.git
   cd healthtrack
