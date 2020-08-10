import React, { useState, useEffect } from "react";
import MainModal from "../common/MainModal";
import Form from "../components/Book/Form";
import Table from "../components/Book/Table";
import Card from "../components/Book/Card";
import Loader from "../common/Loader";
import { fetchBooks, fetchAuthors, fetchBook, createBook } from "../util/fetch";
import { bookValidation } from "../util/validation";

const Book = () => {
  const [modal, setModal] = useState(false);
  const [authors, setAuthors] = useState([]);
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState({ id: "", name: "", isbn: "", author: "" });
  const [formDisplay, setFormDisplay] = useState(true);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchBooks(setLoading, setBooks);
  }, [modal]);

  const hideModal = () => {
    setModal(false);
    setBook({ id: "", name: "", isbn: "", author: "" });
  };

  const addBook = () => {
    fetchAuthors(setAuthors, setLoading);
    setModal(true);
    setFormDisplay(true);
    setEditing(false);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const displayDetails = (id) => {
    fetchBook(id, setBook, setLoading);
    setModal(true);
    setFormDisplay(false);
  };

  const editBook = (id) => {
    fetchBook(id, setBook, setLoading);
    setModal(true);
    setFormDisplay(true);
    setEditing(true);
  };

  const handleSaveBook = (event) => {
    event.preventDefault();

    const errors = bookValidation(book);

    if (Object.keys(errors).length > 0) {
      return setErrors(errors);
    }

    let apiUrl = "http://localhost:8080/book";
    let method = "POST";
    let bookDetails = {
      name: book.name,
      isbn: book.isbn,
      author: book.author,
    };

    if (editing) {
      apiUrl = `http://localhost:8080/book/${book.id}`;
      method = "PUT";
      bookDetails = {
        name: book.name,
        isbn: book.isbn,
      };
    }

    createBook(apiUrl, method, bookDetails, setModal, setErrors);
    setBook({ id: "", name: "", isbn: "", author: "" });
  };

  const handleCancel = () => {
    setBook({ id: "", name: "", isbn: "", author: "" });
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
            {formDisplay ? (
              <Form
                onHandleChange={handleChange}
                onHandleSubmit={handleSaveBook}
                onHandleCancel={handleCancel}
                authors={authors}
                book={book}
                editing={editing}
                errors={errors}
              />
            ) : (
              <Card book={book} loading={loading}/>
            )}
          </MainModal>
          {loading && <Loader />}

          {books.length <= 0 && !loading ? (
            <p className="center-text">No books found.</p>
          ) : null}

          {!loading && books.length > 0 ? (
            <Table
              books={books}
              onDisplayDetails={displayDetails}
              onEditBook={editBook}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Book;
