import React from 'react'
import { useState,useContext,useEffect } from 'react';
import { TextField,MenuItem } from '@mui/material';
import { Context } from '../Context/Context';
import axios from 'axios';
const Write = () => {
  const {user} = useContext(Context) ;
  const [cate,setcate] = useState([{name:"Other"}]);

    useEffect( () =>{
      const fetchdata = async () =>{
        const res = await axios.get("https://blogspotapi-egnn.onrender.com/api/categories",{withCredentials:true});
      
        setcate(res.data);
     }
     fetchdata();
   },[])
   

  const [image,changeImage] = useState(null);
  let [imagePrev, changeImgPrev] = useState(null)
  const [title,settitle] = useState("");
  const [desc,setdesc] = useState("");
  const [cat,setcat] = useState("");
  const [err,seterr] = useState("");
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      changeImgPrev(reader.result)
        changeImage(file)
    }
  };
   const handleSubmit = async (event) =>{
    event.preventDefault();
    const formData = new FormData();
    formData.append("username", user.username);
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("categories", cat);
    formData.append("file", image);
    try{
  const res = await axios.post("https://blogspotapi-egnn.onrender.com/api/posts/",formData,{withCredentials:true})
     res.data && window.location.replace(`/Post/${res.data._id}`);
    }
  catch(error){
        seterr(true);
        console.log(error);
      }
     
   }

 
  return (
    <div className="write">
      <p>{err?<h2 style={{color:"red"}}>Not Published!! Error Occured, Possible Errors - Title is not unique Or All details not given</h2>:""}</p>
     {imagePrev && <img
      className="writeImg" src={imagePrev} alt=""/>}
    <form className="writeForm" onSubmit={handleSubmit} >
      <div className="writeFormGroup">
        <label htmlFor="fileInput">
          <i className="writeIcon fas fa-plus"></i>
        </label>
        <input id="fileInput" type="file" style={{ display: "none" }}    onChange={handleImageUpload}/>
        <input
          className="writeInput"
          placeholder="Title"
          type="text"
          autoFocus={true}
          onChange={(e)=>{ settitle(e.target.value)}}
        />
      </div>
      <TextField
          id="outlined-select-currency"
          select
          label="Category"
          defaultValue="Other"
          helperText="Please select your blog category (Other by default)"
          style={{marginLeft: "150px"}}
          onChange={(e)=>{ setcat(e.target.value)}}
        >
          {cate?.map((option) => {
           
            return(           
            <MenuItem key={option.name} value={option.name}>
              {option.name}
            </MenuItem>
          )})}
        </TextField>
      <div className="writeFormGroup">
        <textarea
          className="writeInput writeText"
          placeholder="Tell your story..."
          type="text"
          autoFocus={true}
          onChange={(e)=>{ setdesc(e.target.value)}}
        />
      </div>
      <button type='submit' className="writeSubmit" >
        Publish
      </button>
    </form>
  </div>
  )
}

export default Write
