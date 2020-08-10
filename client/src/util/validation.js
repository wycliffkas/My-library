export const bookValidation = (book) => {
  let error = {};

  if (book.name.length < 3) {
    error.name = "Name must be at least 3 characters!";
  }

  if (book.isbn.length < 3) {
    error.isbn = "Isbn must be at least 3 characters";
  }

  if (!book.author) {
    error.author = "Please choose an author";
  }

  return error;
};

export const authorValidation = (author) => {
  let error = {};

  if (author.firstName.length < 3) {
    error.firstName = "First Name must be at least 3 characters";
  }

  if (author.lastName.length < 3) {
    error.lastName = "Last Name must be at least 3 characters";
  }

  return error;
};
