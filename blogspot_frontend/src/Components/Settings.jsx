import React, { useContext, useState } from 'react'
import { Container } from 'react-bootstrap'
import { Input,Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import { Context } from '../Context/Context';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';

const Settings = () => {
  const {user,dispatch} = useContext(Context);
  const [username,setusername] = useState(user.username)
  const [email,setemail] = useState(user.email)
  const [password,setpassword] = useState("")
  const [image,changeImage] = useState(null);
  let [imagePrev, changeImgPrev] = useState(null)
  const [sshow, setsshow] = useState(false);
  const [eshow, seteshow] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    let reader = new FileReader()
    if(!file) changeImgPrev(null)
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      changeImgPrev(reader.result)
        changeImage(file)
    }
    
  };
  const handledelete = async () =>{
    try{
     await axios.delete("https://blogspotapi-egnn.onrender.com/api/users/"+user._id,{data:{userId:user._id}},{withCredentials:true})
     dispatch({type:"LOGOUT"})
     window.location.replace("/");
    }
    catch(error){
      console.log(error);
    }
  }
  const handleUpdate = async (event) =>{
    event.preventDefault();
    dispatch({type:"UPDATE_START"})
    const formData = new FormData();
    formData.append("username", username);
    formData.append("userId", user._id);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("file", image);
    try{
  const res = await axios.put("https://blogspotapi-egnn.onrender.com/api/users/"+user._id,formData,{withCredentials:true})
  dispatch({type:"UPDATE_SUCCESS",payload:res.data.user})
  setusername(res.data.user.username)
  setemail(res.data.user.email)
    setsshow(true);
    }catch(error) {
      dispatch({type:"UPDATE_FAILURE"})
      console.log(error);
      seteshow(true);
    }
  }
  
  return (
    <div  style={{flex:"9",marginLeft:"100px"}}>
       {sshow?<Alert variant="success" style={{width:"1000px"}} onClose={() => setsshow(false)} dismissible>
        <Alert.Heading>Account Updated Successfully</Alert.Heading>
      </Alert>:''}
     { eshow?<Alert variant="danger" style={{width:"1000px"}}onClose={() => seteshow(false)}  dismissible>
        <Alert.Heading>Error Occured!!</Alert.Heading>
      </Alert>:''}
       <Container className='my-4'  style={{display:"flex",justifyContent:"space-between"}}>
      <h2 style={{color:"#D7A572",marginLeft:"-117px"}} >Update Account</h2>
      <Button variant="outlined" onClick={handledelete} startIcon={<DeleteIcon />} style={{color:"red",borderColor:"red",marginRight:"300px"}}> Delete Account</Button>
      </Container>
     <form className='SettingsForm'>

     <label className='mx-3 my-2'><h5>Profile Picture</h5></label><br></br>
      <img className='profileimg mx-2' src={imagePrev || user.profilePic?.url} alt=" "></img>
   <AccountCircleSharpIcon name="account"></AccountCircleSharpIcon>
   <Input type="file" id="fileinput" onChange={handleImageUpload}></Input>
   <br></br><br></br>
    <label className='mx-3 my-2'><h5>Username</h5></label><br></br>
       <Input className='mx-3 ' type='text' style={{width:"70%"}} placeholder="" value={username} onChange={e=>{setusername(e.target.value)}}></Input><br></br><br></br>
       <label className='mx-3 my-2'><h5>E-Mail</h5></label><br></br>
       <Input className='mx-3' type='email' style={{width:"70%"}} placeholder="" value={email}  onChange={e=>{setemail(e.target.value)}}></Input><br></br><br></br>
       <label className='mx-3 my-2'><h5>Password</h5></label><br></br>
       <Input className='mx-3 ' type='password' style={{width:"70%"}} placeholder=""  onChange={e=>{setpassword(e.target.value)}}></Input><br></br><br></br>
       <Button className='mx-3' variant="contained" color="success" onClick={handleUpdate}>Update Account</Button>
     </form>
    </div>
  )
}

export default Settings
