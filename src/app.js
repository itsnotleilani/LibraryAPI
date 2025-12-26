import express from "express";

const app = express(); // create express app

app.use(express.json());

app.use(express.static("public"));

app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
		return res.status(200).json({});
	};
	next();
});

// routes import
import userRouter from './routes/user.route.js';
import bookRouter from './routes/book.route.js';

// routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/books", bookRouter);

// example route: http://localhost:3000/api/v1/users/register

export default app;