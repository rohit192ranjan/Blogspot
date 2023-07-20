import React, { useContext, useRef } from 'react'
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput
}
from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import { Context } from '../Context/Context';
import axios from 'axios';
const Login = () => {
  const userRef = useRef()
  const passwordRef = useRef()
  const {dispatch,isFetching,error} = useContext(Context)
  const handleSubmit = async (e)=>{
      e.preventDefault();
      dispatch({type:"LOGIN_START"})
      try{
            const res = await axios.post("https://blogspotapi-egnn.onrender.com/api/auth/login",{
              username:userRef.current.value,
              password:passwordRef.current.value,
            },{withCredentials:true})
            dispatch({type:"LOGIN_SUCCESS",payload:res.data})
            window.location.replace("/");
      }catch(err){
        dispatch({type:"LOGIN_FAILURE"})
      }
  }


  return (
    <div style={{backgroundColor:"#9A616D",padding:"5px"}}>
        <MDBContainer className="my-5">

<MDBCard>
  <MDBRow className='g-0'>

    <MDBCol md='6'>
      <MDBCardImage src='https://img.freepik.com/free-photo/high-angle-bookmarks-books-arrangement_23-2149894403.jpg?w=2000' alt="login form" className='rounded-start w-100' style={{height:"500px"}}/>
    </MDBCol>

    <MDBCol md='6'>
      <MDBCardBody className='d-flex flex-column'>

        <div className='d-flex flex-row mt-2'>
         
          <span className="h1 fw-bold mb-0" style={{color:"#C4AA8F"}}>BLOGSPOT</span>
        </div>

        <h2 className="fw-bold mb-5" >LOGIN</h2>
        <form className='Loginform' onSubmit={handleSubmit}>
          <MDBInput wrapperClass='mb-4' label='Username'  type='text' size="lg" ref={userRef}/>
          <MDBInput wrapperClass='mb-4' label='Password'  type='password' size="lg" ref={passwordRef}/>

        <MDBBtn className="loginbtn mb-4 px-5" type='submit' color='dark' size='lg' disabled={isFetching} >Login</MDBBtn>
        </form>
        <p className='ms-5 '>Don't have an account? <a href="#!"><Link to="/Register"  style={{color:"inherit"}}>Register here</Link></a></p>

        <p className='ms-5 ' style={{color:"red"}}>{error?"Wrong Credentials!! Try Again...":""}</p>

      </MDBCardBody>
    </MDBCol>

  </MDBRow>
</MDBCard>

</MDBContainer>
      
    </div>
  )
}

export default Login
