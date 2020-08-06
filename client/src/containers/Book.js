import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import MainModal from "../common/MainModal";
import BookForm from "../components/BookForm";

const Book = () => {
  const [modal, setModal] = useState(false);
  const [authors, setAuthors] = useState([]);
  const [newBook, setNewBook] = useState({ name: "", isbn: "", author: "" });

  useEffect(() => {}, []);

  const hideModal = () => {
    setModal(false);
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
        if (resData.errors) {
          throw new Error('Fetching authors failed!');
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
  };

  const handleChange = (event) => {
    setNewBook({
      ...newBook,
      [event.target.name]: event.target.value,
    });
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
    .then(response => {
      return response.json();
    })
      .then((resData) => {
        if(resData.error) {
          toast.error("Saving book failed!, check the details entered");
          throw new Error('Saving book failed!');
        }
        toast.success("Book has been successfully registered");
      })
      .catch((error) => {
        console.log(error);
      });
      setNewBook({name: "", isbn: "", author: ""})
      setModal(false);
  };

  return (
    <div className="row no-gutters justify-content-center">
      <button
        type="button"
        className="btn btn-outline-primary"
        onClick={addBook}
      >
        Add Book
      </button>
      <MainModal onHideModal={hideModal} modal={modal}>
        <BookForm
          onHandleChange={handleChange}
          onHandleSubmit={handleSaveBook}
          authors={authors}
          newBook={newBook}
        />
      </MainModal>
    </div>
  );
};

export default Book;
