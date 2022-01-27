import React, { useState } from 'react';
import "./loginscreen.css";
const LoginScreen = () => {


  return (
<div className="container">
  <div id="makecenter">
    {/* <img src={require("./app_icon_android.svg")} height="25px" width="25px"/> */}
    <form>
      <div>
        <span id="labels">Email</span>
        <br />
        <input type="email" placeholder="Please enter email" />
      </div>
      <br />
      <div>
        <span id="labels">Password</span>
        <br />
        <input type="email" placeholder="Please enter password" />
      </div>
      <div id="sign_button">
        <button>Sign In</button>
      </div>
    </form>
    </div>
    </div>
  );
};
export default LoginScreen;