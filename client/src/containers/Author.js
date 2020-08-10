import React, { useState, useEffect } from "react";
import MainModal from "../common/MainModal";
import Form from "../components/Author/Form";
import Table from "../components/Author/Table";
import Loader from "../common/Loader";
import { fetchAuthors, fetchAuthor, createAuthor } from "../util/fetch";
import { authorValidation } from "../util/validation";

const Author = () => {
  const [modal, setModal] = useState(false);
  const [author, setAuthor] = useState({ id: "", firstName: "", lastName: "" });
  const [authors, setAuthors] = useState([]);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchAuthors(setAuthors, setLoading);
  }, [modal]);

  const hideModal = () => {
    setModal(false);
    setAuthor({ id: "", firstName: "", lastName: "" });
  };

  const addAuthor = () => {
    setModal(true);
    setEditing(false);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setAuthor((prevAuthor) => ({
      ...prevAuthor,
      [name]: value,
    }));
  };

  const handleSaveAuthor = (event) => {
    event.preventDefault();

    const errors = authorValidation(author);

    if (Object.keys(errors).length > 0) {
      return setErrors(errors);
    }

    let apiUrl = "http://localhost:8080/author";
    let method = "POST";

    if (editing) {
      console.log("author.id-->", author.id);
      apiUrl = `http://localhost:8080/author/${author.id}`;
      method = "PUT";
    }

    const authorDetails = {
      firstName: author.firstName,
      lastName: author.lastName,
    };

    createAuthor(apiUrl, method, authorDetails, setErrors, setModal);
    setAuthor({ id: "", firstName: "", lastName: "" });
  };

  const handleCancel = () => {
    setAuthor({ id: "", firstName: "", lastName: "" });
    setModal(false);
  };

  const editAuthor = (id) => {
    fetchAuthor(id, setAuthor);
    setModal(true);
    setEditing(true);
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
              author={author}
              editing={editing}
              errors={errors}
            />
          </MainModal>

          {loading && <Loader />}

          {authors.length <= 0 && !loading ? (
            <p className="center-text">No authors found.</p>
          ) : null}

          {!loading && authors.length > 0 ? (
            <Table authors={authors} onEditAuthor={editAuthor} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Author;
