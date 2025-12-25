import { Book } from "../models/book.model.js";

// Create a book
const createBook = async (req, res) => {
	try {
		const { name, description, yearPublished } = req.body;

		if(!name || !description || !yearPublished) {
			return res.status(400).json({
				message: "All fields are required"
			});
		}

		const book = await Book.create({ name, description, yearPublished });

		res.status(201).json({
			message: "Book created successfully", book
		})

	} catch (error) {
		res.status(500).json({
			message: "Internal Server Error"
		})
	}
};

// Read all books
const getBooks = async (req, res) => {
	try {
		const books = await Book.find();
		res.status(200).json(books);

	} catch (error) {
		res.status(500).json({
			message: "Internal Server Error"
		})
	}
};

const updateBook = async (req, res) => {
	try {
		// basic validation fto check if the body is empty

		// {name: x, description: y, age: z} -> [name, description, age]
		// {} = truthy
		if(Object.keys(req.body).length === 0) {
			return res.status(400).json({
				message: "No data provided for update"
			});
		}

		const book = await Book.findByIdAndUpdate(req.params.id, req.body,
			{new: true}
		);

		if(!book) return res.status(404).json({
			message: "Book not found"
		});

		res.status(200).json({
			message: "Book Updated Successfully", book
		})

	} catch (error) {
		res.status(500).json({
			message: "Internal Server Error"
		});
	}
};

const deleteBook = async (req, res) => {
	try {
		const deleted = await Book.findByIdAndDelete(req.params.id);
		if(!deleted) return res.status(404).json({
			message: "Book not found"
		});

		res.status(200).json({
			message: "Book successfully deleted"
		});

	} catch (error) {
		res.status(500).json({
			message: "Internal Server Error"
		});
	}
};

export {
	createBook,
	getBooks,
	updateBook,
	deleteBook
}