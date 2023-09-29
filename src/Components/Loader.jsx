import React from "react";
import loader from "../Assets/images/loader.svg";
const Loader = () => {
    return (
        <div className="loader d-flex justify-content-center pt-3">
            <img src={loader} className="img-fluid " alt="loader" />
        </div>
    );
};

export default Loader;
