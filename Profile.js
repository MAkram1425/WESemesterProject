import React from "react";
import {Component} from 'react';
import './Newsfeed.css';
import Button from '@mui/material/Button';
import AllRoutes from "./AllRoutes";
import {Link} from 'react-router-dom';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Modal from '@mui/material/Modal';
import {
  Menu,
  MenuItem
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

class Profile extends Component{
    constructor(props){
        super(props);
        let info = JSON.parse(localStorage.getItem('info'))
        let post = info.posts
        let frnd = info.friends
        this.state = {
          fullname: info.info.fullname,
          password: info.info.password,
          username: info.info.username,
          address: info.info.address,
          posts: post,
          friend: frnd

      }
     this.editProfile = this.editProfile.bind(this);
     this.handleChange = this.handleChange.bind(this);
     this.removeFriend = this.removeFriend.bind(this);
  }

    handleChange(e){
      let {name, value} = e.target
      this.setState({[name] : value})
    }
    editProfile(){
      let info = JSON.parse(localStorage.getItem('info'));
      let postt = info.posts
      let user ={
        info:{
            fullname: this.state.fullname,
            username: this.state.username,
            password: this.state.password,
            address: this.state.address
        },
        posts:  postt,
        friends: this.state.friend
    }
    let data = JSON.stringify(user)
    localStorage.setItem('info', data) 
    window.location.reload(false);
    console.log(user)
    console.log(info)
    }
    removeFriend(e){
      let txt = e.value
      let info = JSON.parse(localStorage.getItem('info'));
      let postt = this.state.posts
      let frnd = info.friends
      let newArr = frnd.filter((item)=>{
        console.log(item.first_name)
        return item.first_name != txt.first_name
      })
      frnd = newArr
      // console.log(frnd)
      // console.log(txt.first_name)
      // console.log(newArr)
      let user ={
        info:{
            fullname: this.state.fullname,
            username: this.state.username,
            password: this.state.password,
            address: this.state.address
        },
        posts: postt,
        friends: frnd
      }
      let data = JSON.stringify(user)
      localStorage.setItem('info', data) 
      window.location.reload(false);
    }
    render() {
      const frnd = this.state.friend;
        return(<>
        
    <div className="main">
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ width: -140, ml: 240, }} id='nf-header'>
        <Toolbar>
          <Typography variant="h4" noWrap component="div" sx={{ ml: 30 }}>       
            Profile    
            <Link to='/login'>
            <Button variant="outlined" style={{float: 'right', width: 10, marginLeft: 800}}>Logout</Button>
            </Link>
          </Typography>   
        </Toolbar>
        <Divider />
      </AppBar>
      <Drawer sx={{width: 180, flexShrink: 0, '& .MuiDrawer-paper': {width: 240,
            boxSizing: 'border-box',},}} variant="permanent" anchor="left">
        <h1 style={{color: 'rgb(67, 67, 223)', fontSize: 40}}>facegram</h1>
        <div className='avi'>
        <Avatar alt={this.state.fullname} src="/static/images/avatar/1.jpg" />
        </div>
        <h4 style={{ textAlign: 'center'}}>{this.state.fullname}</h4>       
        <Toolbar />
        <Divider />
        <List>
            <Link to="/newsfeed" style={{textDecoration: 'none', color: 'black'}}>
            <ListItem button key='Home'>
            <HomeIcon/>
            <ListItemText primary='Home' className='list-buttons' />
            </ListItem>
            </Link>
            <Link to="/profile" style={{textDecoration: 'none', color: 'black'}}>
            <ListItem button key='Profile' >
            <PersonIcon/>
            <ListItemText primary='Profile' className='list-buttons' onClick={this.showModal} />
            </ListItem>
            </Link>
        </List>
        <Divider />
        <br></br>
         </Drawer>
            <Divider />
    </Box>
    </div>
    <div style={{marginLeft: 225, marginBottom: 10}}>
    <h1 style={{color: 'black', fontSize: 20, float: 'left'}}>Edit profile</h1>
    </div>
    <div style={{marginLeft: 220, width: 400, marginBottom: 20}}>
            <TextField fullWidth label="Full name" name="fullname" sx={{mb: 2}} defaultValue={this.state.fullname} onChange={this.handleChange} />       
            <br></br>
            <TextField fullWidth label="Username" name="username" sx={{mb: 2}} defaultValue={this.state.username} onChange={this.handleChange} />
            <br></br>
            <TextField fullWidth label="Password" name="password" sx={{mb: 2}} defaultValue={this.state.password} onChange={this.handleChange} />
            <br></br>
            <TextField fullWidth label="Address" name="address" sx={{mb: 2}} defaultValue={this.state.address} onChange={this.handleChange} />
            <br></br>
            <Button variant="contained" color="primary" onClick={this.editProfile}>Save</Button>
            </div>
            <Divider />
            <div style={{marginLeft: 225}}>
            <h1 style={{color: 'black', fontSize: 20, float: 'left'}}>Friends 
            ({frnd.length})</h1>

            <br></br><br></br>
            <div style={{display: 'flex', flexDirection: 'column'}}>
            {
               frnd.map((item) => ( 
                  
                  <div style={{p: 2, marginLeft: 40, marginTop: 10}}>
                  <Menu menuButton={<Button size="small" style={{float: 'right'}}><MoreVertIcon></MoreVertIcon></Button>} transition >
                    <MenuItem value={item} onClick={this.removeFriend}>Unfriend</MenuItem>
                 </Menu>
                 <Divider />
                  <Avatar alt={item.first_name} src={item.avatar} style={{}} />
                    { item.first_name } 
                    <br></br>     
                    </div>
                ))   
            }
            </div>
            </div>
    </>)
    }
}

export default Profile;