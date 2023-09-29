import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Home from "./Pages/Home";
import AppLayout from "./Pages/AppLayout";
import BookList from "./Components/BookList";
import BookDetails from "./Components/BookDetails";

const App = () => {
    return (
        <div className="App ">
            <Router>
                <Routes>
                    <Route path="/" element={<AppLayout />}>
                        <Route path="home" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="book" element={<BookList />} />
                        <Route path="book/:id" element={<BookDetails />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
};

export default App;
