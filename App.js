// import './App.css';
import React from 'react';
import {Component} from 'react';
import {Routes, Route} from 'react-router-dom';
import Facegram from './Facegram';
import Login from './Login';
import Signup from './Signup';
import Newsfeed from './Newsfeed';
import Profile from './Profile';
import Lost404 from './Lost404';

class App extends Component{
  render(){
    return(<>
    <div className='container'>
    <Routes>
            <Route path='*' element={<Lost404 />}></Route>
            <Route path='/' element={<Facegram />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/signup' element={<Signup />}></Route>
            <Route path='/newsfeed' element={<Newsfeed />}></Route>        
            <Route path='/profile' element={<Profile />}></Route>        
    </Routes>
    </div>
    </>)
  }
}



export default App;
