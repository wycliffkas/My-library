import React from "react";
import { Link } from "react-router-dom";

const Table = ({ authors, onEditAuthor }) => {
  return (
    <div>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {authors.map((author) => (
            <tr key={author._id}>
              <td>{author.firstName}</td>
              <td>{author.lastName}</td>
              <td>
                <Link to="#" onClick={() => onEditAuthor(author._id)}>
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
