import React from "react";
import Logo from "./Logo";
import Links from "./Links";

const Navbar = () => {
    return (
        <nav className="navbar  px-2 ">
            <div className="container py-2  align-items-center">
                <Logo />
                <Links />
            </div>
        </nav>
    );
};

export default Navbar;
