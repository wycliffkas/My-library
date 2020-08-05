const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const bookController = require("../controllers/book");
const authorController = require("../controllers/author");

router.post(
  "/book",
  [
    body("name").trim().isLength({ min: 3 }),
    body("author.firstName").trim().isLength({ min: 3 }),
    body("author.lastName").trim().isLength({ min: 3 }),
  ],
  bookController.createBook
);

router.get("/books", bookController.getBooks);

router.get("/book/:bookId", bookController.getBook);

router.post(
  "/author",
  [
    body("firstName").trim().isLength({ min: 3 }),
    body("lastName").trim().isLength({ min: 3 }),
  ],
  authorController.createAuthor
);

router.get("/authors", authorController.getAuthors);

router.get("/author/:authorId", authorController.getAuthor);

module.exports = router;
