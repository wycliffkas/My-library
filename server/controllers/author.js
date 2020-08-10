const { validationResult } = require("express-validator");
const Author = require("../models/author");

exports.createAuthor = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new Error("Validation failed, entered data is incorrect.");
    error.statusCode = 422;
    throw error;
  }

  const firstName = req.body.firstName;
  const lastName = req.body.lastName;

  const author = new Author({
    firstName: firstName,
    lastName: lastName,
  });

  author
    .save()
    .then((result) => {
      res.status(201).json({
        message: "Author saved successfully",
        author: result,
      });
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
};

exports.getAuthors = (req, res, next) => {
  Author.find()
    .then((authors) => {
      res.status(200).json({
        authors: authors,
      });
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
};

exports.getAuthor = (req, res, next) => {
  const authorId = req.params.authorId;

  Author.findById(authorId)
    .then((author) => {
      if (!author) {
        const error = new Error("Could not find author.");
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({ author: author });
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
};

exports.updateAuthor = (req, res, next) => {
  const authorId = req.params.authorId;
 
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    const error = new Error("Validation failed, entered data is incorrect.");
    error.statusCode = 422;
    throw error;
  }

  const firstName = req.body.firstName;
  const lastName = req.body.lastName;


  Author.findById(authorId)
    .then((author) => {
      if (!author) {
        const error = new Error("Could not find author.");
        error.statusCode = 404;
        throw error;
      }

      author.firstName = firstName;
      author.lastName = lastName;
      return author.save();
    })
    .then((result) => {
      res.status(200).json({ message: "Author updated!", author: result });
    })
    .catch((error) => {
      if (!error.statusCode) {
        error.statusCode = 500;
      }
      next(error);
    });
};
