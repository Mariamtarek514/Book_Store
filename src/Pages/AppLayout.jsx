import React from "react";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import { Outlet } from "react-router-dom";
import { SearchProvider } from "../Context/SearchContext";

const AppLayout = () => {
    return (
        <SearchProvider>
            <Navbar />
            <Header />
            <Outlet />
        </SearchProvider>
    );
};

export default AppLayout;
