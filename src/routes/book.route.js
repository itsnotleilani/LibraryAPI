import { Router } from "express";
import { createBook, deleteBook, getBooks, updateBook } from "../controllers/book.controller.js";

const router = Router();

router.route('/create').post(createBook);
router.route('/getBooks').get(getBooks);
router.route('/update/:id').patch(updateBook);
router.route('/delete/:id').delete(deleteBook);

export default router;