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
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

### Frontend
- **Angular 16** - Frontend framework
- **TypeScript** - Programming language
- **RxJS** - Reactive programming
- **Reactive Forms** - Form handling

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
- Angular CLI (`npm install -g @angular/cli`)

### Installation

1. **Clone and setup backend:**
```bash
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

## 2-Minute Interview Pitch

"This Notes Manager demonstrates my full-stack MEAN stack expertise. It's a production-ready CRUD application where I implemented a RESTful API with Express.js, MongoDB database with Mongoose ODM, and a responsive Angular frontend with TypeScript.

Key highlights include proper error handling, input validation, CORS configuration, and environment-based configuration. The architecture follows MVC pattern with clear separation of concerns. I used Reactive Forms in Angular for robust form handling and implemented a consistent JSON response format.

This project shows I can build complete applications from database design to UI implementation while following best practices for security, performance, and maintainability."

## Interview Q&A (8-10 Questions)

**1. Why did you choose the MEAN stack for this project?**
*The MEAN stack provides a full JavaScript solution with great ecosystem support. MongoDB's flexible schema works well for notes, Express offers minimal overhead, Angular provides structure for complex UIs, and Node.js enables high-performance I/O operations.*

**2. How do you handle data validation?**
*Backend uses Mongoose schema validation with custom error messages. Frontend uses Angular Reactive Forms with Validators. Both layers validate independently for security.*

**3. What's the purpose of CORS in this application?**
*CORS allows the Angular frontend (port 4200) to communicate with the Express backend (port 3000) by enabling cross-origin requests while maintaining security controls.*

**4. How does Mongoose help with MongoDB operations?**
*Mongoose provides schema validation, type casting, query building, and middleware hooks. It adds structure to MongoDB while maintaining flexibility through its ODM pattern.*

**5. What's the difference between Angular services and components?**
*Services handle business logic and data operations (HTTP calls), while components manage UI presentation and user interactions. This separation follows single responsibility principle.*

**6. How do you manage environment configurations?**
*Backend uses dotenv for environment variables. Frontend uses Angular environment files. This keeps secrets secure and allows different configurations for development/production.*

**7. What error handling strategies did you implement?**
*Global error middleware in Express, HTTP interceptors in Angular, try-catch blocks for async operations, and user-friendly error messages with consistent response formats.*

**8. How would you scale this application?**
*Implement caching with Redis, add pagination for large datasets, use MongoDB indexing, implement rate limiting, and consider microservices architecture for complex features.*

**9. What security measures did you implement?**
*Input validation/sanitization, CORS configuration, environment variable protection, MongoDB injection prevention through Mongoose, and proper error handling without exposing sensitive data.*

**10. How do Reactive Forms differ from Template-Driven Forms?**
*Reactive Forms are more explicit, testable, and scalable. They provide better control over validation logic and complex form scenarios compared to Template-Driven Forms.*

## Sample cURL Commands

```bash
# Create a note
curl -X POST http://localhost:3000/api/notes \
  -H "Content-Type: application/json" \
  -d '{"title":"Meeting Notes","content":"Discuss project requirements"}'

# Response: {"success":true,"data":{"_id":"...","title":"Meeting Notes","content":"Discuss project requirements","createdAt":"
