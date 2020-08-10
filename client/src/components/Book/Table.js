import React from "react";
import { Link } from "react-router-dom";

const Table = ({ books, onDisplayDetails, onEditBook }) => {
  return (
    <div>
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Book Title</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book._id}>
              <td>
                <Link to="#" onClick={() => onDisplayDetails(book._id)}>
                  {book.name}
                </Link>
              </td>
              <td>
                <Link to="#" onClick={() => onEditBook(book._id)}>
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
