## Library API
A backend REST API for managing an inventory of books in a digital library.
Supports user registration and authentication along with CRUD operations for books.

## Features
- User registration & login
- Secure password handling
- Authenticated access to protected routes
- Create and delete book records
- RESTful API design
- Persistent data storage

## Technologies
- Node.js – runtime environment
- Express.js – REST API framework
- MongoDB – NoSQL database
- Mongoose – ODM for schema modeling & validation
- JWT – authentication & authorization
- bcrypt – password hashing
- dotenv – environment variable management

## Usage Locally

### Clone and install

```bash
git clone https://github.com/your-username/LibraryAPI.git
cd LibraryAPI
npm install
npm run dev
```

### Environment variables
Create a .env file in the root directory:
```bash
MONGO_URI=your_mongodb_uri
JWT_KEY=your_jwt_secret
PORT=3000
```

### Register & Login
- Register a user via POST /api/auth/register
- Login via POST /api/auth/login
- Login returns a JWT token

  
### Access protected routes
Include the token in request headers:
```bash
Authorization: Bearer <token>
```
Authenticated users can create and delete books.
