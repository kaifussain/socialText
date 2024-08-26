import React from "react";
import "./Login.css";
import ST from "/ST.png";

const Login = () => {
  return (
    <div className="Login">
      <img src={ST} className="ST"></img>
      <h2>Log in to existing account</h2>
      <div>
        <form className="Login-form">
          <input
            type="text"
            name="username"
            placeholder="Username"
            required
          ></input>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          ></input>
          <button className="big-btn Login-btn">Log in</button>
        </form>
        <div>
          <a href="/signup">Sign up </a>
          <p></p>
          <a href="/home">Skip</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
