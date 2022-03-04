import React from "react";
import {Component} from 'react';
import './Facegram.css';
import Button from '@mui/material/Button';
import AllRoutes from "./AllRoutes";
import { Link } from "react-router-dom";

class Facegram extends Component{
    render() {
        return(<>
           <h1 style={{color: 'rgb(67, 67, 223)', fontSize: 40}}>facegram</h1>
           <div className="container" style={{alignItems: 'center'}}>
           <h3 style={{ fontWeight: 500}}>Facegram helps you connect and share with the people in your life.</h3>
           <Link to='/login' style={{textDecoration: 'none'}}>
           <Button variant="contained" color="primary">Log In</Button>
           </Link>
           <br/><br/>
          <Link to='/signup' style={{textDecoration: 'none'}}>
           <Button variant="contained" color="success">Create New Account</Button>
        </Link>
        </div>
        <h4 style={{textAlign: 'center', fontWeight: 300}}>Facegram © Copyright 2022</h4>    
        </>)
    }
}

export default Facegram;