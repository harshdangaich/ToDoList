# TODO Application

## Overview
A web-based TODO application that helps users efficiently manage their tasks. Users can create, update, delete, and track their TODOs with various statuses and deadlines. The application also includes authentication features to ensure secure access.

## Features & Functionality

### 1. User Authentication
- User registration & login via username/password.
- Secure password hashing.
- Password reset functionality.
- Logout feature for session management.





### 2. Task Management
- Create, modify, and delete TODOs.
- Each TODO contains:
  - Title
  - Description
  - Status (ACTIVE, IN_PROGRESS, COMPLETE, EXPIRED)
  - Deadline

  

  ![Screenshot 2025-02-19 131540](https://github.com/user-attachments/assets/d13f36ea-fb2d-4e81-bbc7-6a5269d62820)



### 3. Task Status & Expiry
- Tasks remain **ACTIVE** unless updated.
- Users can update a TODO's status to **IN_PROGRESS**, **COMPLETE**, etc.
- If a task is not completed by its deadline, it is automatically marked as **EXPIRED**.

**Screenshot:**
![Task Status](./screenshots/task_status.png)

### 4. Viewing & Searching
- List all TODOs with filtering options.
- Search TODOs by **title** or **description**.
- Sort tasks by:
  - **Deadline** (urgent tasks first)
  - **Status** (e.g., show only non-complete or in-progress tasks)

**Screenshot:**
![Search & Filter](./screenshots/search_filter.png)

## Installation & Setup

### Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (if using a database)

### Steps to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/todo-app.git
   cd todo-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory and add:
   ```plaintext
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   ```

4. **Run the application**
   ```bash
   npm start
   ```
   The app will be available at `http://localhost:3000/`

## API Endpoints

| Method | Endpoint       | Description                     |
|--------|--------------|---------------------------------|
| POST   | `/api/auth/register` | Register a new user         |
| POST   | `/api/auth/login` | Login user                   |
| POST   | `/api/auth/reset-password` | Reset password     |
| GET    | `/api/todos` | Get all TODOs                   |
| POST   | `/api/todos` | Create a new TODO               |
| PUT    | `/api/todos/:id` | Update a TODO                |
| DELETE | `/api/todos/:id` | Delete a TODO                |

## Technologies Used
- **Frontend:** React, Tailwind CSS (if applicable)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token)

## Contributing
Feel free to submit issues or pull requests. To contribute:
1. Fork the repository.
2. Create a new branch (`feature-branch-name`).
3. Commit changes and push.
4. Submit a Pull Request.

## License
This project is licensed under the MIT License.

## Contact
For questions or suggestions, contact:
- GitHub: [yourusername](https://github.com/yourusername)
- Email: your-email@example.com

