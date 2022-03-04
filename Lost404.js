import React from "react";
import {Component} from 'react';
import './Lost404.css';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";

class Lost404 extends Component{
    // constructor(props){
    //     super(props)

    // }
    render() {
        return(<>
        <div className="header">
        <h1>Lost 404</h1>
        <div className="container">
            <h2>Oops! You are lost.</h2>
            <Link to='/'>
           <Button variant="contained" color="primary">Back to Home</Button>
           </Link>
            </div>
         </div>
            </>)
    }
}

export default Lost404;