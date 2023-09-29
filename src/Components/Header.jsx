import React from "react";
import Search from "./Search";

const Header = () => {
    return (
        <header className="d-flex flex-column justify-content-center align-items-center">
            <div className="content d-flex flex-column align-items-center justify-content-center text-center">
                <h1>Find Your Book Of Choice.</h1>
                <p className="mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quam beatae sapiente quibusdam consequatur perspiciatis
                    facere laboriosam non nesciunt at id repudiandae, modi iste?
                    Eligendi, rerum!
                </p>
            </div>
            <Search />
        </header>
    );
};

export default Header;
