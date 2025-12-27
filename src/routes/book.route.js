import { Router } from "express";
import { createBook, deleteBook, getBooks, updateBook } from "../controllers/book.controller.js";
import { checkAuth } from "../middleware/check-auth.js";

const router = Router();

router.route('/create').post(checkAuth, createBook);
router.route('/getBooks').get(getBooks);
router.route('/update/:id').patch(checkAuth, updateBook);
router.route('/delete/:id').delete(checkAuth, deleteBook);

export default router;