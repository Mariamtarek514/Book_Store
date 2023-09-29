import React from "react";
import { useSearch } from "../Context/SearchContext";
import BookItem from "./BookItem";
import Loader from "./Loader";

const BookList = () => {
    const { book, isLoading, resultMessage } = useSearch();

    const booksCover = book.map((singleBook) => {
        return {
            ...singleBook,
            id: singleBook.id.replace("/works/", ""),
            cover_Img: singleBook.cover_id
                ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
                : singleBook.coverImg,
        };
    });
    if (isLoading) return <Loader />;
    return (
        <div className="main_content">
            <div className=" container pt-5">
                <h3 className="mb-4 text-uppercase">{resultMessage}</h3>
                <div className="row row-cols-1 row-cols-lg-3 row-cols-xl-4 row-cols-md-2 g-4">
                    {booksCover.slice(0, 20).map((singleBook, index) => (
                        <BookItem book={singleBook} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BookList;
