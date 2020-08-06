const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const bookController = require("../controllers/book");
const authorController = require("../controllers/author");

router.post(
  "/book",
  [
    body("name").trim().isLength({ min: 3 }),
    body("isbn").trim().isLength({ min: 3 }),
  ],
  bookController.createBook
);

router.get("/books", bookController.getBooks);

router.get("/book/:bookId", bookController.getBook);

router.post(
  "/author",
  [
    body("firstName").trim().isLength({ min: 5 }),
    body("lastName").trim().isLength({ min: 5 }),
  ],
  authorController.createAuthor
);

router.get("/authors", authorController.getAuthors);

router.get("/author/:authorId", authorController.getAuthor);

router.put(
  "/book/:bookId",
  [
    body("name").trim().isLength({ min: 3 }),
    body("isbn").trim().isLength({ min: 3 }),
  ],
  bookController.updateBook
);

router.put(
  "/author/:authorId",
  [
    body("firstName").trim().isLength({ min: 5 }),
    body("lastName").trim().isLength({ min: 5 }),
  ],
  authorController.updateAuthor
);

module.exports = router;
