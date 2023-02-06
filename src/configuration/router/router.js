import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    //   Link
} from "react-router-dom";
import Home from "../../pages/Home";
import LogIn from "../../pages/LogIn";
import SignUp from "../../pages/SignUp";

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LogIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </Router>
    );
}

