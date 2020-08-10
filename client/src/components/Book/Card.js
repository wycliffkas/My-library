import React from "react";
import Loader from "../../common/Loader";
const Card = ({ book, loading }) => {
  return (
    <div>
      {!loading && Object.keys(book).length > 0 ? (
        <div className="card-content">
          <p>
            <strong>Title:</strong> {book.name}
          </p>
          <p>
            <strong>Isbn:</strong> {book.isbn}
          </p>
          <p>
            <strong>Author: </strong>
            {book.author}
          </p>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Card;
