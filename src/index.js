import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/Assets/Styles/main/main.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { HashRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Router>
            <App />
        </Router>
    </React.StrictMode>
);
