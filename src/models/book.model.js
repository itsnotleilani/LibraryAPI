import mongoose, { Schema } from "mongoose";

const bookSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true
		},
		description: {
			type: String,
			required: true,
			trim: true,
		},
		yearPublished: {
			type: Number,
			required: true,
			min: 1000,
			max: 3000
		}
	},

	{
		timestamps: true
	}
);

export const Book = mongoose.model('Book', bookSchema);