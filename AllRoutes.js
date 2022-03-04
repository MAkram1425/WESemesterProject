import React from "react";
import {Component} from 'react';

import {Routes, Route} from 'react-router-dom';
import { Link } from "react-router-dom";
import Newsfeed from "./Newsfeed";
import Login from "./Login";
import Signup from "./Signup";
import Facegram from "./Facegram";
import Profile from "./Profile";
import Lost404 from './Lost404';

class AllRoutes extends Component{
    
    render() {
        return(<>   
            <Routes>
                 <Route path='*' element={<Lost404 />}></Route>
                <Route path='/' element={<Facegram />}></Route>
                <Route path='/newsfeed' element={<Newsfeed />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/signup' element={<Signup />}></Route>
                <Route path='/profile' element={<Profile />}></Route>
            </Routes> 
            </>)
    }
}

export default AllRoutes;