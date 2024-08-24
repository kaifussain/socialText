import React from "react";
import "./Login.css";
import ST from "../../public/ST.png";

const Login = () => {
  return (
    <div className="Login">
      <img src={ST} className="ST"></img>
      <div>
        <form className="Login-form">
          <div>
            <label for="username">Username</label>
            <input type="text" name="username" required></input>
          </div>
          <div>
            <label for="password">Password</label>
            <input type="password" name="password" required></input>
          </div>
          <button className="big-btn Login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
