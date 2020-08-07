import React from "react";
import Loader from "../../common/Loader";
const Card = ({ book }) => {
  return (
    <div>
      {Object.keys(book).length ? (
        <div className="card-content">
          <p>
            <strong>Title:</strong> {book.name}
          </p>
          <p>
            <strong>Isbn:</strong> {book.isbn}
          </p>
          <p>
            <strong>Author:</strong>
            {book.author.firstName + " " + book.author.lastName}
          </p>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Card;
