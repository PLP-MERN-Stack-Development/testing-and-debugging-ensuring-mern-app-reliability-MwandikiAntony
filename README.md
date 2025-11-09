# 🐞 MERN Bug Tracker

### Week 6: Testing and Debugging in MERN Applications

## 📘 Objective

The goal of this project is to develop a **systematic approach to testing and debugging** MERN (MongoDB, Express, React, Node.js) applications.  
You’ll build a **Bug Tracker** app that allows users to report, view, update, and manage bugs — while implementing best practices for testing and debugging to ensure reliability and maintainability.

---

## 🚀 Features

- 🐛 Report new bugs via a user-friendly form  
- 📋 View all reported bugs with details (status, description, reporter, etc.)  
- 🔄 Update bug status (e.g., *Open*, *In Progress*, *Resolved*)  
- ❌ Delete resolved or invalid bugs  
- ⚠️ Error handling for both backend and frontend  
- 🧪 Comprehensive testing coverage using Jest, Supertest, and React Testing Library  

---

## 🏗️ Project Setup

### 1. Clone the repository

```bash
git clone https://github.com/MwandikiAntony/Bug-Tracker.git
cd Bug-Tracker
2. Install dependencies
Backend
bash
Copy code
cd backend
npm install
Frontend
bash
Copy code
cd ../frontend
npm install
▶️ Running the Application
1. Start the Backend Server
bash
Copy code
cd backend
npm start
2. Start the Frontend
bash
Copy code
cd ../frontend
npm start
3. Access the App
Open your browser and go to:
👉 http://localhost:3000

🧪 Testing
Backend Tests
Run unit and integration tests using Jest and Supertest.

bash
Copy code
cd backend
npm test
Includes:

Unit tests for helper functions (e.g., validation logic)

Integration tests for API routes (POST /bugs, PUT /bugs/:id, DELETE /bugs/:id)

Mocked database calls using jest-mock

Frontend Tests
Run component and integration tests using React Testing Library.

bash
Copy code
cd frontend
npm test
Includes:

Unit tests for components (form validation, buttons, etc.)

Integration tests verifying API calls and UI updates

Snapshot tests for consistent UI rendering under different states

🪲 Debugging Techniques
This project encourages intentional debugging practice using:

🧭 Tools & Techniques
Console Logs — Track variable values and API responses

Chrome DevTools — Inspect React components and network requests

Node.js Inspector — Debug backend logic step-by-step

Error Boundaries — Handle frontend crashes gracefully

🛠️ Example Debugging Tasks
Introduce small intentional errors (e.g., wrong API endpoint)

Use breakpoints and DevTools to identify root causes

Apply fixes and confirm behavior through testing

⚙️ Error Handling
Backend
Centralized error-handling middleware in Express

Proper HTTP response codes for validation and database errors

Frontend
React Error Boundaries for catching rendering errors

Friendly user messages for failed API calls

📄 Project Structure
css
Copy code
mern-bug-tracker/
├── backend/
│   ├── src/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── tests/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── tests/
│   └── App.js
│
└── README.md
🧭 Testing & Debugging Strategy Summary
Layer	Tool/Library	Focus
Backend	Jest + Supertest	Route testing, API integration
Frontend	React Testing Library	UI behavior and component testing
Debugging	DevTools, Node Inspector	Identify and fix runtime issues
Error Handling	Express Middleware, React Boundaries	Robust error management

🧑‍💻 Author
Antony Mwandiki
MERN Stack Developer | PLP Week 6 Project
🔗 GitHub: @MwandikiAntony

