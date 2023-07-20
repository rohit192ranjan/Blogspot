import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const [imageName, setImageName] = useState("");
  let [image, changeImage] = useState("")
  
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");
  const [err,seterr] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
        changeImage(file)
    }
    if (file) {
      setImageName(file.name);
    } else {
      setImageName("");
      changeImage(null)
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", pass);
    formData.append("file", image);
    try{
  const res = await axios.post("https://blogspotapi-egnn.onrender.com/api/auth/register",formData,{withCredentials:true})
     res.data && window.location.replace("/login");}

  catch(err){
        seterr(true);
      }
     
  };
  return (
    <MDBContainer fluid>
      <div
        className="p-5 bg-image"
        style={{
          backgroundImage:
            "url(https://mdbootstrap.com/img/new/textures/full/171.jpg)",
          height: "150px",
        }}
      ></div>

      <MDBCard
        className="mx-auto mb-5 p-5 shadow-5"
        style={{
          marginTop: "-100px",
          background: "hsla(0, 0%, 100%, 0.8)",
          backdropFilter: "blur(30px)",
          width: "1000px",
        }}
      >
        <MDBCardBody className="p-5 text-center">
          <div className="d-flex flex-row mt-2">
            <span
              className="h1 fw-bold mb-0 mx-auto"
              style={{ color: "#C4AA8F" }}
            >
              BLOGSPOT
            </span>
          </div>

          <h2 className="fw-bold mb-5">Register Now!!</h2>
          <form className="RegisterForm" onSubmit={handleSubmit}>
            <MDBRow>
              <MDBCol col="6">
                <MDBInput
                  wrapperClass="mb-4"
                  label="UserName"
                  id="username"
                  type="text"
                  onChange={(e)=>{ setusername(e.target.value)}}
                />
              </MDBCol>
            </MDBRow>

            <MDBInput
              wrapperClass="mb-4"
              label="Email"
              id="email"
              type="email"
              onChange={(e)=>{ setemail(e.target.value)}}
            />
            <MDBInput
              wrapperClass="mb-4"
              label="Password"
              id="password"
              type="password"
              onChange={(e)=>{ setpass(e.target.value)}}
            />
            <h4>Upload Profile Image</h4>
            <div className="image-upload-container my-2">
              <label htmlFor="image-upload" className="image-upload-label">
                <div className="upload-icon">
                  <i className="fas fa-cloud-upload-alt"></i>
                </div>
                <span className="upload-text">Upload Image</span>
                <span className="image-name">{imageName}</span>
              </label>
              <input
                type="file"
                id="image-upload"
                className="image-upload-input"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
            <MDBBtn type="submit" className="w-100 mb-4" color="dark" size="md" >
              Register
            </MDBBtn>
          </form>
          <p>Already have Account?</p>
          <Link to="/Login" style={{ color: "inherit" }}>
            {" "}
            <MDBBtn className="w-100 mb-4" size="md">
              LOGIN
            </MDBBtn>
          </Link>
         {err?<h5 className="my-2" style={{color:"red"}}>Something went Wrong !! Possible Errors - Using same username, profile Image not Uploaded</h5>:""}
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Register;
