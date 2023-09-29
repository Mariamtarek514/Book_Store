import React from "react";
import { Link } from "react-router-dom";

const BookItem = ({ book }) => {
    return (
        <div className="col book">
            <div className="card py-4 border-0">
                <img
                    src={book.cover_Img}
                    className=" img-fluid"
                    alt={book.title}
                />
                <div className="card-body  d-flex flex-column justify-content-center align-items-center gap-2">
                    <Link to={`/book/${book.id}`} className="card-title ">
                        <strong>{book.title}</strong>
                    </Link>
                    <div className="d-flex gap-1">
                        <strong>Author: </strong>
                        <p>{book.author}</p>
                    </div>
                    <div className="d-flex gap-1">
                        <strong>Total Editions: </strong>
                        <p>{book.edition_count}</p>
                    </div>
                    <div className="d-flex gap-1 publishYear">
                        <strong>First Publish Year: </strong>
                        <p>{book.first_publish_year}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookItem;
