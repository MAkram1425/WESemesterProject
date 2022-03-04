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
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Avatar from '@mui/material/Avatar';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {
  Menu,
  MenuItem
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

class Newsfeed extends Component{
    constructor(props){
        super(props);
        let info = JSON.parse(localStorage.getItem('info'));
        let post = info.posts
        let frnd = info.friends
        this.state = {
          fullname: info.info.fullname,
          password: info.info.password,
          username: info.info.username,
          address: info.info.address,
          posts: post,
          friend: frnd,
          items: [],
          addFriendBtn: 'Add Friend'

      }
      this.toggleLike = this.toggleLike.bind(this)
      this.newPost = this.newPost.bind(this)
      this.deletePost = this.deletePost.bind(this)
      this.addFriend = this.addFriend.bind(this);
      this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
        fetch(
    "https://random-data-api.com/api/users/random_user?size=1")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json
                });
            })
          }
    toggleLike(e){
      let icon = e.target
      if(icon.style.backgroundColor === 'white' || icon.style.color === 'black'){
        icon.style.backgroundColor = 'red'
        icon.style.color = 'white'
      }
      else{
        icon.style.backgroundColor = 'white'
        icon.style.color = 'black'
      }      
    }
    newPost(){
      let info = JSON.parse(localStorage.getItem('info'));
      let postt = info.posts
      postt.unshift(this.state.posts)
      let user ={
        info:{
            fullname: this.state.fullname,
            username: this.state.username,
            password: this.state.password,
            address: this.state.address
        },
        posts: postt,
        friends: this.state.friend
    }
  
    let data = JSON.stringify(user)
    localStorage.setItem('info', data) 
    window.location.reload(false);
    }
    addFriend(e){
      let btn = e.target
      this.setState({addFriendBtn: 'Added'})
      let info = JSON.parse(localStorage.getItem('info'));
      let postt = info.posts
      let item = this.state.items
      let frnd = this.state.friend
      let newfrnd = item[0]
      frnd.push(newfrnd)
      console.log(frnd)
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
      btn.disabled = 'true'
      btn.style.backgroundColor = 'grey'
    }
    handleChange(e){
      let {name, value} = e.target
      this.setState({[name] : value})
    }
    deletePost(e){
      let txt = e.value
      let info = JSON.parse(localStorage.getItem('info'));
      let postt = info.posts
      let frnd = this.state.friend
       let newArr = postt.filter((item)=>{
        return item != txt
      })
      postt = newArr
      let user ={
        info:{
            fullname: info.info.fullname,
            username: info.info.username,
            password: info.info.password,
            address: info.info.address
        },
        posts: postt,
        friends: frnd
    }
    let data = JSON.stringify(user)
    localStorage.setItem('info', data) 
    window.location.reload(false);
      
    }
    render() {
      const info = JSON.parse(localStorage.getItem('info'));
      const posts = info.posts;
      const items = this.state.items;
      return(<>
        
       <div className="main">
        <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ width: -140, ml: 240, }} id='nf-header'>
        <Toolbar>
          <Typography variant="h4" noWrap component="div" sx={{ ml: 30 }}>       
            Home    
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
      <Box
        component="container"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 0 }}>
            <Card sx={{ minWidth: 300 }} variant='outlined'>
            <CardContent>
            <Typography variant="h5" component="div">
            <TextareaAutosize aria-label="minimum height"
            placeholder="Create a post..." 
            cols="120" 
            style={{ maxWidth: 1000, border: 0, fontFamily: 'Arial', outline: 0, fontSize: 14, padding: 20 }}
            name="posts" onChange={this.handleChange}
            />
            <Divider />
            </Typography>
            </CardContent>
            <CardActions>
            <Button variant="contained" sx={{ml: 1.2}} color="primary" onClick={this.newPost}>Post</Button>
            </CardActions>
            </Card>
        <Toolbar />
        <Typography paragraph>
        <div style={{float: 'right', width: 200, minHeight:200, borderStyle: 'solid', borderColor: 'black'}}>
          <h1 style={{color: 'black', fontSize: 20}}>People you may know</h1>
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
          {
                items.map((item) => (          
                  <div style={{marginBottom: 30}}>
                  <Avatar alt={item.first_name} src={item.avatar} style={{alignItems: 'center'}} />
                    { item.first_name } 
                    <br></br>
                    <Button variant="contained" color="success" onClick={this.addFriend} >{this.state.addFriendBtn}</Button>                    
                    </div> 
                ))
            }
            </div>
          </div>
        </Typography>
        <Typography paragraph sx={{pl: 2}}>
          <div></div>
           {
          posts.map((item) => ( 
            <Card sx={{ width: 750, mb: 4, borderWidth: 1, borderStyle: 'solid', borderColor: 'rgb(227, 227, 227)' }}>
            <CardContent>
            <Menu menuButton={<Button size="small" style={{float: 'right'}}><MoreVertIcon></MoreVertIcon></Button>} transition >
               <MenuItem value={item} onClick={this.deletePost}>Delete</MenuItem>
              </Menu>
              <div className="head"  style={{display: 'flex', flexDirection: 'row',mb: 2}}>
                <Avatar alt={this.state.fullname} src="/static/images/avatar/1.jpg" />
                <span style={{display: 'flex', alignItems: 'center', marginLeft: 8, fontWeight: 'bold'}}> {this.state.fullname}</span>
            </div>
              <Typography variant="p" component="div" style={{marginTop: 10}}>   
                {item}
              </Typography>
            </CardContent>
            <Divider />
            <CardActions>
            <br></br>
            <div className="foot"  style={{display: 'flex'}}>
              <Button size="small" onClick={this.toggleLike} style={{color: 'black'}}>Like</Button>
              </div>
          </CardActions>
          </Card>
                ))
           }
        </Typography>
      </Box>
    </Box>
    </div>
    </>)
    }
}

export default Newsfeed;