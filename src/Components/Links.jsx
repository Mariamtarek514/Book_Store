import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
const Links = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <>
            <button
                className="btn toggleBar"
                onClick={() => setToggleMenu((toggle) => !toggle)}
            >
                <CiMenuFries
                    size={30}
                    className={toggleMenu ? "light" : "dark"}
                />
            </button>
            <ul className={`d-flex gap-3 mb-0 ${toggleMenu ? "active" : null}`}>
                <li>
                    <NavLink to="home" className="text-uppercase">
                        home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="about" className="text-uppercase">
                        about
                    </NavLink>
                </li>
            </ul>
        </>
    );
};

export default Links;
