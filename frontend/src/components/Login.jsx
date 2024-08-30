import React, { useState } from "react";
import "./Login.css";
import ST from "/ST.png";

import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { login } from "../redux/slices/user/index";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username_in, setUsername_in] = useState('')
  const [password_in, setPassword_in] = useState('')
  const [incorrectInput, setIncorrectInput] = useState({
    username: '',
    password: '',
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        dispatch(login(username));
        navigate("/home");
      } else {
        if (response.status === 404) {
          setIncorrectInput({ username: username, password: '' });
        } else if (response.status === 401) {
          setIncorrectInput({ username: '', password: password });
        }
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="Login">
      <img src={ST} className="ST"></img>
      <h2>Log in to existing account</h2>
      <div>
        <form className="Login-form" onSubmit={handleLogin}>
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              className={`input ${incorrectInput.username && incorrectInput.username===username_in? 'red-input':''}`}
              value={username_in}
              onChange={(e)=>setUsername_in(e.target.value)}
            ></input>
            <div className={incorrectInput.username && incorrectInput.username===username_in?'':'hide'}>Username does not exist</div>
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              autoComplete="current-password"
              className={`input ${incorrectInput.password && incorrectInput.password===password_in? 'red-input':''}`}
              value={password_in}
              onChange={(e)=>setPassword_in(e.target.value)}
            ></input>
            <div className={incorrectInput.password && incorrectInput.password===password_in?'':'hide'}>Incorrect password</div>
          </div>
          <button className="big-btn Login-btn">Log in</button>
        </form>
        <div>
          <p onClick={() => navigate("/signup")} className="c-p w-fc m-auto-x">
            Sign up{" "}
          </p>
          <p onClick={() => navigate("/home")} className="c-p w-fc m-auto-x">
            Skip
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
