const express = require("express");
const router = express.Router();

const booksController = require("../../controller/v1/booksController");

router.route("/books/create").post(booksController.createBook);
router.route("/books/all").get(booksController.getAllBooks);
router.route("/books/:booksid/detail").get(booksController.getSingleBook);
router.route("/books/:booksid/update").patch(booksController.updateBook);
router.route("/books/:booksid/delete").delete(booksController.deleteBook);

module.exports = router;
