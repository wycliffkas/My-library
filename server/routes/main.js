const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const bookController = require("../controllers/book");

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

module.exports = router;
