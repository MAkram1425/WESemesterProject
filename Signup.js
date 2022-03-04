import React from "react";
import {Component} from 'react';
import AllRoutes from "./AllRoutes";
import { Link } from "react-router-dom";
import './Signup.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

class Signup extends Component{
    constructor(props){
        super(props)
        this.state = {
            fullname: '',
            username: '',
            password: '',
            address: '',
            navigate: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.storeData = this.storeData.bind(this);
    }
    handleChange(e){
        let {name, value} = e.target
        this.setState({[name] : value})
    }
    storeData(){
        let user ={
            info:{
                fullname: this.state.fullname,
                username: this.state.username,
                password: this.state.password,
                address: this.state.address
            },
            posts: [
                'Hey! I am using facegram.'
            ],
            friends: []
        }
        if(!(this.state.fullname && this.state.username && this.state.password)){
            alert("All fields are required.")
        }
        else{
        localStorage.clear()       
        let data = JSON.stringify(user)
        localStorage.setItem('info', data)
        this.setState({navigate: '/newsfeed'})
        }
    }

    render() {
        return(<>
        <h1 style={{color: 'rgb(67, 67, 223)', fontSize: 30}}>Sign Up</h1>
        <div className="container" style={{alignItems: 'center'}}>     
            <Card sx={{ width: 400 }}>
            <CardContent>
            <Typography variant="h5" component="div">
            <TextField fullWidth label="Full name" name="fullname" value={this.state.fullname} onChange={this.handleChange} required/>
            </Typography>
            <Typography sx={{ mt: 1.5 }} color="text.secondary">
            <TextField fullWidth label="Username" name="username" value={this.state.username} onChange={this.handleChange} required/>
            </Typography>
            <Typography sx={{ mt: 1.5 }} color="text.secondary">
            <TextField fullWidth label="Password" type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
            </Typography>
            </CardContent>
            <CardActions>
            <Link to={this.state.navigate} style={{textDecoration: 'none'}}>
            <Button variant="contained" sx={{m: 1.2}} color="success" onClick={this.storeData}>Sign Up</Button>
            </Link>
            Already have account?
            <Link to='/login' style={{textDecoration: 'none'}}>
            <Button variant="text">Login</Button>
            </Link>
            </CardActions>
            </Card>
            </div>        
            </>)
    }
}

export default Signup;