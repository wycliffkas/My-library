import { toast } from "react-toastify";

export const fetchBooks = (setLoading, setBooks) => {
  setLoading(true);

  fetch("http://localhost:8080/books", {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((resData) => {
      if (resData.error) {
        throw new Error("Fetching books failed!");
      }
      setLoading(false);
      setBooks(resData.books);
    })
    .catch((error) => {
      setLoading(false);
      console.log(error);
    });
};

export const fetchAuthors = (setAuthors, setLoading) => {
  setLoading(true);

  fetch("http://localhost:8080/authors", {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((resData) => {
      if (resData.error) {
        throw new Error("Fetching authors failed!");
      }
      setLoading(false);
      setAuthors(resData.authors);
    })
    .catch((error) => {
      setLoading(false);
      console.log(error);
    });
};


export const fetchBook = (id, setBook, setLoading) => {
  setLoading(true);
  fetch(`http://localhost:8080/book/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((resData) => {
      if (resData.error) {
        setLoading(false);
        throw new Error("Fetching book failed!");
      }

      const author =
        resData.book.author.firstName + " " + resData.book.author.lastName;
      setBook({
        id: resData.book._id,
        name: resData.book.name,
        isbn: resData.book.isbn,
        author: author,
      });
      setLoading(false);
    })
    .catch((error) => {
      setLoading(false);
      console.log(error);
    });
};

export const createBook = (apiUrl, method, bookDetails, setModal, setErrors) => {
  fetch(apiUrl, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(bookDetails),
  })
    .then((response) => {
      return response.json();
    })
    .then((resData) => {
      if (resData.error) {
        toast.error("Saving book failed!, check the details entered");
        throw new Error("Saving book failed!");
      }
      setModal(false);
      toast.success("Book has been successfully saved");
      setErrors({});
    })
    .catch((error) => {
      setModal(false);
      console.log(error);
      setErrors({});
    });
}

export const fetchAuthor = (id, setAuthor) => {
  fetch(`http://localhost:8080/author/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((resData) => {
      if (resData.error) {
        throw new Error("Fetching author failed!");
      }

      setAuthor({
        id: resData.author._id,
        firstName: resData.author.firstName,
        lastName: resData.author.lastName,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

export const createAuthor = (apiUrl, method, authorDetails, setErrors, setModal) => {
  fetch(apiUrl, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authorDetails),
  })
    .then((response) => {
      return response.json();
    })
    .then((resData) => {
      if (resData.error) {
        toast.error("Saving author failed!, check the details entered");
        setErrors({});
        throw new Error("Saving author failed!");
      }
      setModal(false);
      toast.success("Author has been successfully saved");
      setErrors({});
    })
    .catch((error) => {
      setModal(false);
      toast.error("Saving author failed!, check the details entered");
      console.log(error);
      setErrors({});
    });
}


