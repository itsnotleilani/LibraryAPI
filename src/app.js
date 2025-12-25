import express from "express";

const app = express(); // create express app

app.use(express.json());

// routes import
import userRouter from './routes/user.route.js';
// import bookRouter from './routes/book.route.js';

// routes declaration
app.use("/api/v1/users", userRouter);
// app.use("/api/v1/books", bookRouter);

// example route: http://localhost:3000/api/v1/users/register

export default app;