import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/index";
import Login from "./pages/Login/index";

const routes = (
    <Router>
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/login" exact element={<Login/>}/>
        </Routes>
    </Router>
);

const App = () => {
    return(
        <div>{routes}</div>
    )
};

export default App;