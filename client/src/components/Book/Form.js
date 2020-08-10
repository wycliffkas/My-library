import React from "react";

const Form = ({
  onHandleChange,
  onHandleSubmit,
  authors,
  book,
  onHandleCancel,
  editing,
  errors,
}) => {
  const pageTitle = editing ? "Edit Book" : "Add Book";
  const buttonTitle = editing ? "Update" : "Save";
  return (
    <div>
      <h5 className="center-text">{pageTitle}</h5>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={book.name}
            onChange={onHandleChange}
            required="required"
            style={errors.name && { border: "solid 1px red" }}
          />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Isbn</label>
          <input
            type="text"
            className="form-control"
            name="isbn"
            value={book.isbn}
            onChange={onHandleChange}
            style={errors.isbn && { border: "solid 1px red" }}
          />
          {errors.isbn && <p>{errors.isbn}</p>}
        </div>
        {editing ? (
          ""
        ) : (
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Author</label>
            <select
              className="custom-select"
              onChange={onHandleChange}
              name="author"
              style={errors.author && { border: "solid 1px red" }}
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
            {errors.author && <p>{errors.author}</p>}
          </div>
        )}
        <button
          type="submit"
          className="btn btn-primary"
          onClick={onHandleSubmit}
        >
          {buttonTitle}
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
