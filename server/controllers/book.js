const { validationResult } = require("express-validator");
const Book = require("../models/book");

exports.createBook = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log("errors", errors);
    const error = new Error("Validation failed, entered data is incorrect.");
    error.statusCode = 422;
    throw error;
  }

  const name = req.body.name;
  const isbn = req.body.isbn;
  const author = req.body.author;

  const book = new Book({
    name: name,
    isbn: isbn,
    author: author,
  });

  book
    .save()
    .then((result) => {
      res.status(201).json({
        message: "book saved successfully",
        book: result,
      });
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
};

exports.getBooks = (req, res, next) => {
  Book.find()
    .then((books) => {
      res.status(200).json({
        books: books,
      });
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
};

exports.getBook = (req, res, next) => {
  const bookId = req.params.bookId;

  Book.findById(bookId)
    .populate("author")
    .then((book) => {
      if (!book) {
        const error = new Error("Could not find book.");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({ book: book });
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
};

exports.updateBook = (req, res, next) => {
  const bookId = req.params.bookId;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new Error("Validation failed, entered data is incorrect.");
    error.statusCode = 422;
    throw error;
  }

  const name = req.body.name;
  const isbn = req.body.isbn;

  Book.findById(bookId)
    .then((book) => {
      if (!book) {
        const error = new Error("Could not find book.");
        error.statusCode = 404;
        throw error;
      }

      book.name = name;
      book.isbn = isbn;
      return book.save();
    })
    .then((result) => {
      res.status(200).json({ message: "Book updated!", book: result });
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
};
