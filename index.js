import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Facegram from "./Facegram";
import Login from "./Login";
import Signup from "./Signup";
import Newsfeed from "./Newsfeed";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
  
var destination = document.querySelector("#root");
  
ReactDOM.render(
    <BrowserRouter>
    <div>
        <App />
        {/* <Facegram /> */}
        {/* <Login /> */}
        {/* <Signup /> */}
        {/* <Newsfeed /> */}
        {/* <Profile /> */}
    </div>
    </BrowserRouter>,
    destination
);