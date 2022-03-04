import React from "react";
import {Component} from 'react';

import { Link } from "react-router-dom";
import AllRoutes from "./AllRoutes";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import './Login.css';

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            navigate: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.retrieveData = this.retrieveData.bind(this);
    }
    handleChange(e){
        let {name, value} = e.target
        this.setState({[name] : value}) 
    }
    retrieveData(){
        let data = localStorage.getItem('info')
        let parsedData = JSON.parse(data)
        let user = parsedData.info.username
        let pass = parsedData.info.password
        if (this.state.username == user && this.state.password == pass){
            this.setState({navigate: '/newsfeed'})
        }
        else{
            alert("Username or password is incorrect.")
        }
    }   
    
    render() {
        return(<>   
        <h1 style={{color: 'rgb(67, 67, 223)', fontSize: 30}}>Log In</h1> 
        <div className="container" style={{alignItems: 'center'}} >
        <Card sx={{ width: 400}}>
        <CardContent>
            <Typography variant="h5" component="div">
            <TextField fullWidth label="Username" name="username" id="fullWidth" onChange={this.handleChange} />
            </Typography>
            <Typography sx={{ mt: 1.5 }} color="text.secondary">
            <TextField fullWidth label="Password" type="password" name="password" id="fullWidth" onChange={this.handleChange} />
            </Typography>
            </CardContent>
            <CardActions>
            <Link to={this.state.navigate} style={{textDecoration: 'none'}}> 
            <Button variant="contained" sx={{m: 1.2}} color="primary" onClick={this.retrieveData}>Log In</Button>
            </Link>
            Create new account?
            <Link to='/signup' style={{textDecoration: 'none'}}>
            <Button variant="text">Signup</Button>
            </Link>
            </CardActions>
            </Card>
            </div>

            </>)
    }
}

export default Login;