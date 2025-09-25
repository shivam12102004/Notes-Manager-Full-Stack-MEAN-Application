# MEAN Stack Notes Manager

A full-stack Notes Manager application built with the MEAN stack (MongoDB, Express.js, Angular, Node.js).

## Features

- ✅ Create, read, update, and delete notes
- ✅ Responsive design
- ✅ Real-time validation
- ✅ Error handling
- ✅ RESTful API
- ✅ MongoDB integration

## Tech Stack

### Backend
- Node.js - Runtime environment
- Express.js - Web framework
- MongoDB - Database
- Mongoose - ODM for MongoDB
- CORS - Cross-origin resource sharing
- dotenv - Environment variables

### Frontend
- Angular 16 - Frontend framework
- TypeScript - Programming language
- RxJS - Reactive programming
- Reactive Forms - Form handling

## Project Structure
notes-manager/
├── backend/ # Node.js/Express API
├── frontend/ # Angular application
└── README.md

text

## Quick Start

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- Angular CLI (npm install -g @angular/cli)

### Installation

1. Clone and setup backend:
bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB connection string
Setup frontend:

bash
cd frontend
npm install
Database Setup
Option 1: Local MongoDB

bash
# Install MongoDB locally or use Docker
mongod --dbpath /path/to/your/db
Option 2: MongoDB Atlas (Cloud)

Create account at https://www.mongodb.com/cloud/atlas

Create a cluster and database

Get connection string and update .env

Running the Application
Start MongoDB (if using local instance)

Start Backend:

bash
cd backend
npm run dev  # Development mode with nodemon

# or
npm start    # Production mode
Start Frontend (in new terminal):

bash
cd frontend
ng serve
Open browser: http://localhost:4200

API Endpoints
Method	Endpoint	Description
POST	/api/notes	Create new note
GET	/api/notes	Get all notes
GET	/api/notes/:id	Get single note
PUT	/api/notes/:id	Update note
DELETE	/api/notes/:id	Delete note
Sample API Usage
Create Note
bash
curl -X POST http://localhost:3000/api/notes \
  -H "Content-Type: application/json" \
  -d '{"title":"My Note","content":"This is my first note"}'
  
Get All Notes
bash
curl http://localhost:3000/api/notes
Environment Variables
Create .env file in backend directory:

env
PORT=3000
MONGO_URI=mongodb://localhost:27017/notesdb
# For MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/notesdb
Development
Backend Scripts
npm start - Start server

npm run dev - Start with nodemon (auto-restart)

Frontend Scripts
ng serve - Start development server

ng build - Build for production

ng test - Run tests

Deployment Notes
Set NODE_ENV=production for backend

Build Angular app with ng build --prod

Use process managers like PM2 for Node.js

Configure MongoDB Atlas for production

Common Issues
CORS Errors: Ensure backend CORS is configured for frontend URL

MongoDB Connection: Verify connection string in .env

Port Conflicts: Change ports in environment files if needed

text

## Sample cURL Commands

bash
# Create a note
curl -X POST http://localhost:3000/api/notes \
  -H "Content-Type: application/json" \
  -d '{"title":"Meeting Notes","content":"Discuss project requirements"}'

# Response: {"success":true,"data":{"_id":"...","title":"Meeting Notes","content":"Discuss project requirements","createdAt":"
