import React, { useContext, useEffect,useState } from 'react'
import { Typography,TextField,Button } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ModeSharpIcon from '@mui/icons-material/ModeSharp';
import { Container,Form } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Context } from '../Context/Context';

const SinglePost = () => {
  const {user} = useContext(Context);
    const {pathname} = useLocation(); 
    const id = pathname.slice(6,pathname.length);
    const [post,setpost] = useState([])
    const [title,setTitle] = useState('');
    const [desc,setDesc]= useState('')
  const [updatedMode,setUpdatedMode] = useState(false);
    
  
    useEffect(()=>{
          const fetchpost = async () =>{
           const res = await axios.get('https://blogspotapi-egnn.onrender.com/api/posts/'+id,{withcredential:true});
            setpost(res.data);  
            setTitle(res.data.title);
            setDesc(res.data.desc);
          }      
          fetchpost();
    },[id])

    const handleDelete = async () => {
      try{
        const res = await axios.delete("https://blogspotapi-egnn.onrender.com/api/posts/"+post._id,{data:{username:post.username}},{withCredentials:true})
           res.data && window.location.replace("/");
          }
        catch(error){       
              console.log(error);
            }
    }
    const handleEdit = () =>{
       setUpdatedMode(true);
    }
    const handleUpdate = async () =>{
      try{
     const res = await axios.put("https://blogspotapi-egnn.onrender.com/api/posts/"+post._id,{
      username:post.username,
      title:title,
      desc:desc
    },{withCredentials:true}) 
    setpost(res.data); 
     setUpdatedMode(false);
      }
      catch (error){
        console.log(error);
      }
    }
  return (
    <div className='my-3 mx-3' style={{flex:"9"}}>
        <img alt='N' className='imgsi' src={post?.photo?.url}></img>
        <Container style={{display:"flex"}}>
       {!updatedMode? <Typography className='my-3' gutterBottom variant="h5" component="div" style={{textAlign:"center",fontSize:"30px",flex:"10"}}>
            <b>{post.title}</b>
          </Typography>:<TextField className='my-4 ' id="standard-basic" label="Title" variant="standard" value={title} onChange={e=>{setTitle(e.target.value)}} sx={{width:"800px"}}/> }
         {post.username===user?.username && !updatedMode?<><EditIcon  className='my-3 mx-2' onClick={handleEdit} style={{color:"#142CAC",cursor:"pointer"}}></EditIcon>
          <DeleteOutlinedIcon  className='my-3' onClick={handleDelete} style={{color:"#FC0424",cursor:"pointer"}} ></DeleteOutlinedIcon></> :<></>}
          </Container>
          <Container style={{display:"flex",justifyContent:"space-between"}}>
          <Typography style={{color:"#FCAC34",fontSize:"20px"}}>
          <Link to={`/?username=${post.username}`} style={{textDecoration:"none",color:"inherit"}}>Author: {post.username}</Link>
          </Typography>
        
          </Container>
          {!updatedMode? <Typography className="des my-4" variant="body2" color="black">
         {post.desc}
          </Typography>:<> <Form.Label className='my-2' >Description</Form.Label>
        <Form.Control as="textarea" rows={3} value={desc} onChange={e=>{setDesc(e.target.value)}}/> 
        <Button variant="contained" className='my-4' onClick={handleUpdate}><ModeSharpIcon className='mx-1'/>Update</Button></>}

    </div>
  )
}

export default SinglePost
