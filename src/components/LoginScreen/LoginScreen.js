import React, { useEffect, useState } from 'react';
import "./loginscreen.css";
import { postRequest } from '../service/apiClient';
import { login } from '../service/constants';
import CardViewListing from '../HomeScreen/CardViewListing';

const LoginScreen = () => {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  

  useEffect(() => {   
    
    if (localStorage.getItem("token")!=null){
    window.location.href="/homescreen";
    }
    });
  const handleSubmit= async()=>{
  postRequest(login,{email:email,password:password}).then(response=>{
    if (response.data.success){
      //also save token in localstorage
      localStorage.setItem("token",response.data.data.token);
      alert("You have been successfully logged in");
      window.location.href="/homescreen";
    }
    else {
      alert("You have provided a wrong email or password");
    }
  });

  }
  return (
<div className="container">
  <div id="makecenter">
    {/* <img src={require("./app_icon_android.svg")} height="25px" width="25px"/> */}
    <form>
      <div>
        <span id="labels">Email</span>
        <br />
        <input type="email" onChange={event => setEmail(event.target.value)} placeholder="Please enter email" />
      </div>
      <br />
      <div>
        <span id="labels">Password</span>
        <br />
        <input type="password" onChange={event => setPassword(event.target.value)} placeholder="Please enter password" />
      </div>
      <div id="sign_button">
        <button onClick={handleSubmit} type='button'>Sign In</button>
      </div>
    </form>
    </div>
    </div>
  );
};
export default LoginScreen;