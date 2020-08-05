const { validationResult } = require("express-validator");
const Book = require("../models/book");

exports.createBook = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new Error("Validation failed, entered data is incorrect.");
    error.statusCode = 422;
    throw error;
  }

  const name = req.body.name;
  const isbn = req.body.isbn;
  const authorFirstName = req.body.author.firstName;
  const authorLastName = req.body.author.lastName;

  const book = new Book({
    name: name,
    isbn: isbn,
    author: {
      firstName: authorFirstName,
      lastName: authorLastName,
    },
  });

  book
    .save()
    .then((result) => {
      res.status(201).json({
        message: "book created successfully",
        post: result,
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
