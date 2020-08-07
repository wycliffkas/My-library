import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import MainModal from "../common/MainModal";
import Form from "../components/Book/Form";
import Table from "../components/Book/Table";
import Card from "../components/Book/Card";
import Loader from "../common/Loader";

const Book = () => {
  const [modal, setModal] = useState(false);
  const [authors, setAuthors] = useState([]);
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState({});
  const [newBook, setNewBook] = useState({ name: "", isbn: "", author: "" });
  const [editMode, setEditMode] = useState(true);

  useEffect(() => {
    fetchBooks();
  }, [books]);

  const hideModal = () => {
    setModal(false);
  };

  const fetchBooks = () => {
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
        setBooks(resData.books);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchBook = (id) => {
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
          throw new Error("Fetching book failed!");
        }
        console.log(resData, "resData ---->");
        setBook(resData.book);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchAuthors = () => {
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
        setAuthors(resData.authors);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addBook = () => {
    fetchAuthors();
    setModal(true);
    setEditMode(true);
  };

  const handleChange = (event) => {
    setNewBook({
      ...newBook,
      [event.target.name]: event.target.value,
    });
  };

  const displayDetails = (id) => {
    setModal(true);
    setEditMode(false);
    fetchBook(id);
  };

  const handleSaveBook = (event) => {
    event.preventDefault();
    const bookDetails = {
      name: newBook.name,
      isbn: newBook.isbn,
      author: newBook.author,
    };

    fetch("http://localhost:8080/book", {
      method: "POST",
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
        toast.success("Book has been successfully registered");
      })
      .catch((error) => {
        console.log(error);
      });
    setNewBook({ name: "", isbn: "", author: "" });
    setModal(false);
  };

  const handleCancel = () => {
    setNewBook({ name: "", isbn: "", author: "" });
    setModal(false);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8">
          <button
            type="button"
            className="btn btn-outline-primary my-4"
            onClick={addBook}
          >
            Add Book
          </button>
          <MainModal onHideModal={hideModal} modal={modal}>
            {editMode ? (
              <Form
                onHandleChange={handleChange}
                onHandleSubmit={handleSaveBook}
                onHandleCancel={handleCancel}
                authors={authors}
                newBook={newBook}
              />
            ) : (
              <Card book={book} />
            )}
          </MainModal>
          {books.length > 0 ? (
            <Table books={books} onDisplayDetails={displayDetails} />
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
};

export default Book;
