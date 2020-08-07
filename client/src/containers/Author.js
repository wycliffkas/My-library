import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import MainModal from "../common/MainModal";
import Form from "../components/Author/Form";
import Table from "../components/Author/Table";
import Loader from "../common/Loader";

const Author = () => {

  const [modal, setModal] = useState(false);
  const [newAuthor, setNewAuthor] = useState({ firstName: "", lastName: "" });
  const [authors, setAuthors] = useState({});

  useEffect(() => {
    fetchAuthors();
  }, [authors]);

  const hideModal = () => {
    setModal(false);
  };

  const addAuthor = () => {
    setModal(true);
  };

  const handleChange = (event) => {
    setNewAuthor({
      ...newAuthor,
      [event.target.name]: event.target.value,
    });
  };

  const handleSaveAuthor = (event) => {
    event.preventDefault();
    const authorDetails = {
      firstName: newAuthor.firstName,
      lastName: newAuthor.lastName,
    };

    fetch("http://localhost:8080/author", {
      method: "POST",
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
          throw new Error("Saving author failed!");
        }
        toast.success("Author has been successfully registered");
      })
      .catch((error) => {
        console.log(error);
      });
    setNewAuthor({ firstName: "", lastName: "" });
    setModal(false);
  };

  const handleCancel = () => {
    setNewAuthor({ firstName: "", lastName: "" });
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
        if (resData.error) {
          throw new Error("Fetching authors failed!");
        }
        setAuthors(resData.authors);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-8">
          <button
            type="button"
            className="btn btn-outline-primary my-4"
            onClick={addAuthor}
          >
            Add Author
          </button>

          <MainModal onHideModal={hideModal} modal={modal}>
            <Form
              onHandleChange={handleChange}
              onHandleSubmit={handleSaveAuthor}
              onHandleCancel={handleCancel}
              newAuthor={newAuthor}
            />
          </MainModal>

          {authors.length > 0 ? <Table authors={authors} /> : <Loader />}
        </div>
      </div>
    </div>
  );
};

export default Author;
