import React from "react";

const Form = ({
  onHandleChange,
  onHandleSubmit,
  author,
  onHandleCancel,
  editing,
  errors,
}) => {
  const pageTitle = editing ? "Edit Author" : "Add Author";
  const buttonTitle = editing ? "Update" : "Save";
  return (
    <div>
      <h5 className="center-text">{pageTitle}</h5>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">First Name</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={author.firstName}
            onChange={onHandleChange}
            style={errors.firstName && { border: "solid 1px red" }}
          />
          {errors.firstName && <p>{errors.firstName}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={author.lastName}
            onChange={onHandleChange}
            style={errors.lastName && { border: "solid 1px red" }}
          />
          {errors.lastName && <p>{errors.lastName}</p>}
        </div>

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
