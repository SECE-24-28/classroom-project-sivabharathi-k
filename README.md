# Student Management System - MERN Stack

A complete CRUD application for managing student records built with MongoDB, Express.js, React.js, and Node.js.

## Features

- ✅ Add new students
- ✅ View all students
- ✅ Edit student information
- ✅ Delete students
- ✅ Auto-generated roll numbers
- ✅ Form validation
- ✅ Responsive design

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (running on localhost:27017)
- npm or yarn

## Installation & Setup

1. **Clone/Navigate to the project directory**
   ```bash
   cd "MERN 24-28"
   ```

2. **Install root dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd BACKEND
   npm install
   cd ..
   ```

4. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   cd ..
   ```

5. **Make sure MongoDB is running**
   - Start MongoDB service on your system
   - Default connection: `mongodb://127.0.0.1:27017/studentdb`

## Running the Application

### Option 1: Run both servers together (Recommended)
```bash
npm run dev
```

### Option 2: Run servers separately

**Terminal 1 - Backend:**
```bash
cd BACKEND
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
```

## Access the Application

- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000
- **API Endpoints:**
  - GET `/api/student` - Get all students
  - POST `/api/student` - Create new student
  - GET `/api/student/:id` - Get student by ID
  - PUT `/api/student/:id` - Update student
  - DELETE `/api/student/:id` - Delete student

## Project Structure

```
MERN 24-28/
├── BACKEND/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── studentController.js
│   ├── models/
│   │   ├── Student.js
│   │   └── counter.js
│   ├── routes/
│   │   └── studentRoutes.js
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── public/
│   └── package.json
├── package.json
└── README.md
```

## API Testing

You can test the API using tools like Postman or curl:

**Create Student:**
```bash
curl -X POST http://localhost:5000/api/student \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","age":20,"email":"john@example.com"}'
```

**Get All Students:**
```bash
curl http://localhost:5000/api/student
```

## Environment Variables

Backend `.env` file:
```
MONGO_URL=mongodb://127.0.0.1:27017/studentdb
PORT=5000
```

## Troubleshooting

1. **MongoDB Connection Error:**
   - Ensure MongoDB is running
   - Check connection string in `.env`

2. **CORS Error:**
   - Backend includes CORS middleware
   - Frontend runs on port 3000, backend on 5000

3. **Port Already in Use:**
   - Change PORT in backend `.env`
   - Frontend will auto-assign available port

## Technologies Used

- **Frontend:** React.js, Axios, CSS3
- **Backend:** Node.js, Express.js, MongoDB, Mongoose
- **Tools:** Concurrently, Nodemon, CORS