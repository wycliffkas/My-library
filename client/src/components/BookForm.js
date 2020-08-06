import React from "react";

const BookForm = ({ onHandleChange, onHandleSubmit, authors, newBook }) => {
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={newBook.name}
            onChange={onHandleChange}
            required
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
      </form>
    </div>
  );
};

export default BookForm;
