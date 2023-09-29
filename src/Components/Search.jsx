import React, { useEffect, useRef } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useSearch } from "../Context/SearchContext";
import { useNavigate } from "react-router-dom";

const Search = () => {
    const { searchQuery, setSearchQuery, setResultMessage } = useSearch();
    const nav = useNavigate();
    const search = useRef("");
    function handleSubmit(e) {
        e.preventDefault();
        const tempSearch = search.current.value.trim();
        if (
            tempSearch.replace(/[^\w\s]/gi, "").length === 0 ||
            tempSearch.length < 3
        ) {
            setResultMessage("Please Enter Something ...");
        } else {
            setSearchQuery(search.current.value);
            nav("book");
        }
    }
    useEffect(() => {
        search.current.focus();
    }, []);

    return (
        <form onSubmit={handleSubmit} className="mt-3">
            <div className="search d-flex align-items-center">
                <input
                    type="text"
                    placeholder="search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    ref={search}
                />
                <button className="btn">
                    <BiSearchAlt2 size={25} />
                </button>
            </div>
        </form>
    );
};

export default Search;
