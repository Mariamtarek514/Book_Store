import React from "react";
import logoImg from "../Assets/images/logo.png";
import { Link } from "react-router-dom";
const Logo = () => {
    return (
        <Link to="home" className="logo d-flex align-items-center gap-3">
            <img src={logoImg} className="img-fluid" alt="logo img" />
            <strong className="text-uppercase">bookhub</strong>
        </Link>
    );
};

export default Logo;
