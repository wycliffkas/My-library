import React from "react";

const Form = ({ onHandleChange, onHandleSubmit, authors, newBook, onHandleCancel }) => {
  return (
    <div>
      <h5 className="center-text">Add a book</h5>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={newBook.name}
            onChange={onHandleChange}
            required="required"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Isbn</label>
          <input
            type="text"
            className="form-control"
            name="isbn"
            value={newBook.isbn}
            onChange={onHandleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Author</label>
          <select
            className="custom-select"
            onChange={onHandleChange}
            name="author"
            required
          >
            <option value=""> Choose...</option>
            {authors.length > 0 ? (
              authors.map((author) => (
                <option value={author._id} key={author._id}>
                  {author.firstName + " " + author.lastName}
                </option>
              ))
            ) : (
              <option value="">No authors</option>
            )}
          </select>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={onHandleSubmit}
        >
          Submit
        </button>
        <button
          type="submit"
          className="btn btn-secondary"
          onClick={onHandleCancel}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default Form;
