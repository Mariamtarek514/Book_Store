import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "./Loader";
import coverImg from "../Assets/images/cover_not_found.jpg";
import { BiArrowBack } from "react-icons/bi";
const URL = "https://openlibrary.org/works/";
const BookDetails = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [book, setBook] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        function handleKey(e) {
            if (e.code === "Backspace") {
                navigate(-1);
            }
        }
        document.addEventListener("keydown", handleKey);
        return () => {
            document.removeEventListener("keydown", handleKey);
        };
    }, [navigate]);
    useEffect(() => {
        const controller = new AbortController();
        async function getBook() {
            try {
                setIsLoading(true);
                const response = await fetch(`${URL}${id}.json`, {
                    signal: controller.signal,
                });
                const data = await response.json();
                console.log(data);
                if (data) {
                    const newBook = {
                        ...data,
                        description: data.description
                            ? data.description.value
                            : "No description found",
                        title: data.title,
                        cover_img: data.covers
                            ? `https://covers.openlibrary.org/b/id/${data.covers[0]}-L.jpg`
                            : coverImg,
                        subject_places: data.subject_places
                            ? data.subject_places.join(", ")
                            : "No subject places found",
                        subject_times: data.subject_times
                            ? data.subject_times.join(", ")
                            : "No subject times found",
                        subjects: data.subjects
                            ? data.subjects.join(", ")
                            : "No subjects found",
                    };
                    setBook(newBook);
                } else {
                    setBook(null);
                }
            } catch (err) {
                console.log(err);
            } finally {
                setIsLoading(false);
            }
        }
        getBook();
    }, [id]);
    if (isLoading) return <Loader />;
    return (
        <div className="container py-5 bookDetails ">
            <div className=" row mb-5">
                <button
                    className="btn text-start goBack text-uppercase d-flex align-items-center gap-1 "
                    onClick={() => navigate(-1)}
                >
                    <BiArrowBack size={25} /> go back
                </button>
            </div>
            <div className="row gap-4 gap-md-1 align-items-start ">
                <figure className="col-lg-4 col-md-5 col-12 d-flex justify-content-center align-items-center">
                    <img
                        src={book.cover_img}
                        className="img-fluid"
                        alt={book.title}
                    />
                </figure>
                <div className="description col-lg-7 col-md-6 col-12">
                    <h3>{book.title}</h3>
                    <p className="description_p mb-3">{book.description}</p>
                    <p className="mb-3">
                        <strong>Subject Places:</strong>
                        {book.subject_places}
                    </p>
                    <p className="mb-3">
                        <strong>Subject Times:</strong>
                        {book.subject_times}
                    </p>

                    <p>
                        <strong>Subjects</strong> {book.subjects}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;
