import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";
import { BrowserRouter,Routes, Route ,} from "react-router-dom";



ReactDOM.render(
  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route  exact path="/" element={<Home/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/logic" element={<Login/>} />
  </Routes>
  </BrowserRouter>
  , document.getElementById("root"));
