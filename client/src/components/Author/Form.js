import React from "react";

const Form = ({ onHandleChange, onHandleSubmit, newAuthor, onHandleCancel }) => {
  return (
    <div>
      <h5 className="center-text">Add an Author</h5>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">First Name</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={newAuthor.firstName}
            onChange={onHandleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={newAuthor.lastName}
            onChange={onHandleChange}
            required
          />
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
