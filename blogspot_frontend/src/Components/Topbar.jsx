import React, { useContext } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Tooltip } from '@mui/material';
import Navbar from 'react-bootstrap/Navbar';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Pinterest } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import { Context } from '../Context/Context';



const Topbar = () => {
  
  const {user,dispatch} = useContext(Context);
  const handleLogout = () =>{
      dispatch({type:"LOGOUT"})
      window.location.replace("/Login");
  }
  return (
    <div>
       <Navbar bg="white" fixed="top" >
        <Container style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr"}}>
          <Container>
          <FacebookIcon className='mx-1' style={{cursor:"pointer",color:"#395498"}}></FacebookIcon>
          <InstagramIcon className='mx-1' style={{cursor:"pointer",color:"#F70270"}}></InstagramIcon>
          <Pinterest className='mx-1'  style={{cursor:"pointer",color:"#b7081b"}}></Pinterest>
          <TwitterIcon className='mx-1' style={{cursor:"pointer",color:"#1c96e8"}}></TwitterIcon>
        </Container>
        <Container > 
          <Nav className="me-auto">
            <Navbar.Brand href="#home" className='hover-underline-animation mx-3'><Link to="/"  style={{color:"inherit"}}>HOME</Link></Navbar.Brand>
            <Navbar.Brand href="#home" className='hover-underline-animation mx-3'><Link to="/"  style={{color:"inherit"}}>ABOUT</Link></Navbar.Brand>
            <Navbar.Brand href="#home" className='hover-underline-animation mx-3'><Link to="/Contact"  style={{color:"inherit"}}>CONTACT</Link></Navbar.Brand>
            <Navbar.Brand href="#home" className='hover-underline-animation mx-3'><Link to="/Write" style={{color:"inherit"}}>WRITE</Link></Navbar.Brand>
            <Navbar.Brand href="#home" className='hover-underline-animation mx-3'onClick={handleLogout} >{user && "LOGOUT"}</Navbar.Brand>
          </Nav>
        </Container>
       
        <Container style={{display:"flex",justifyContent:"flex-end"}}>
          {
            user?<Tooltip title="Profile Settings" placement="bottom-end" arrow><Link to="/Settings"><Avatar className='topbaravatar' alt="P" src={user.profilePic?.url}></Avatar></Link></Tooltip>:
            <><Navbar.Brand href="#home" className='hover-underline-animation mx-3'><Link to="/Login"  style={{color:"inherit"}}>LOGIN</Link></Navbar.Brand>
            <Navbar.Brand href="#home" className='hover-underline-animation mx-3'><Link to="/Register"  style={{color:"inherit"}}>REGISTER</Link></Navbar.Brand></>
          }
        </Container>
      </Container>
      </Navbar>
      <br></br><br></br><br></br>
    </div>
  )
}

export default Topbar
