import React, { useState,useEffect } from 'react'
import { Container } from 'react-bootstrap'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Pinterest } from '@mui/icons-material';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  const [cat,setcat] = useState([]);
  useEffect( () =>{
    const fetchcat = async () =>{
      const res = await axios.get("https://blogspotapi-egnn.onrender.com/api/categories/",{withCredentials:true});
      setcat(res.data);
   }
   fetchcat();
 },[])

  return (
    <div  style={{flex:"3"}}>  
      <Container>  
      <hr style={{width:"250px",marginLeft:"auto",marginRight:"auto"}}></hr>
      <h5 style={{textAlign:"center"}}>CATEGORIES</h5>
      <hr style={{width:"250px",marginLeft:"auto",marginRight:"auto"}}></hr>
     </Container>
     <Container style={{marginLeft:"20px"}}>
      <ul className='list'>
        {
          cat.map((item) =>{
            return(
        <Link to={`/?catName=${item.name}`} style={{textDecoration:"none",color:"inherit"}}> <li className='listitem' key={item.name}>{item.name}</li> </Link> 
            )
          })
        }
     
     </ul>
     </Container>
     <hr style={{width:"250px",marginLeft:"auto",marginRight:"auto"}}></hr>
      <h5 style={{textAlign:"center"}}>FOLLOW US</h5>
      <hr style={{width:"250px",marginLeft:"auto",marginRight:"auto"}}></hr>
      <Container style={{marginLeft:"110px"}}>
      <FacebookIcon className='mx-1' style={{cursor:"pointer",color:"#395498"}}></FacebookIcon>
          <InstagramIcon className='mx-1' style={{cursor:"pointer",color:"#F70270"}}></InstagramIcon>
          <Pinterest className='mx-1'  style={{cursor:"pointer",color:"#b7081b"}}></Pinterest>
          <TwitterIcon className='mx-1' style={{cursor:"pointer",color:"#1c96e8"}}></TwitterIcon>
      </Container>
      <br></br>
      <br></br>
    </div>
  )
}

export default Sidebar
