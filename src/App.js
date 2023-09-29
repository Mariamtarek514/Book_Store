import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import AppLayout from "./Pages/AppLayout";
import BookList from "./Components/BookList";
import BookDetails from "./Components/BookDetails";

const App = () => {
    return (
        <div className="App ">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<AppLayout />}>
                        <Route path="home" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="book" element={<BookList />} />
                        <Route path="book/:id" element={<BookDetails />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
