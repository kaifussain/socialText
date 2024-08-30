import React, { useState } from "react";
import "./Signup.css";
import ST from "/ST.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/user/index";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email_in, setEmail_in] = useState("");
  const [username_in, setUsername_in] = useState("");
  const [code_in, setCode_in] = useState("");
  const [duplicateInput, setDuplicateInput] = useState({
    email: "",
    username: "",
  });
  const [wrongCode, setWrongCode] = useState('');
  const [preSigned, setPreSigned] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!preSigned) {
      const email = e.target.email.value;
      const username = e.target.username.value;

      try {
        const response = await fetch("http://localhost:3000/pre-signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ email, username }),
        });
        if (response.ok) {
          setPreSigned(true);
        } else {
          const data = await response.text();
          if (data === "email") {
            setDuplicateInput({ email: email, username: "" });
          } else if (data === "username") {
            setDuplicateInput({ email: "", username: username });
          } else {
            alert("Internal server error");
          }
        }
      } catch (error) {
        alert(error);
      }
    } else {
      const email = e.target.email.value;
      const username = e.target.username.value;
      const password = e.target.password.value;
      const code = e.target.code.value;

      try {
        const response = await fetch("http://localhost:3000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ email, username, password, code }),
        });

        if (response.ok) {
          dispatch(login(username));
          navigate("/home");
        } else if (response.status === 400) {
          setWrongCode(code);
        } else {
          alert("Internal server error");
        }
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <div className="Signup">
      <img src={ST} className="ST"></img>
      <h2>Create a new account</h2>
      <div>
        <form className="Signup-form" onSubmit={handleSignup} aria-disabled>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className={`input ${
                duplicateInput.email && duplicateInput.email === email_in
                  ? "red-input"
                  : ""
              }`}
              disabled={preSigned}
              value={email_in}
              onChange={(e) => setEmail_in(e.target.value)}
            ></input>
            <div
              className={
                duplicateInput.email && duplicateInput.email === email_in
                  ? ""
                  : "hide"
              }
            >
              Already in use
            </div>
          </div>
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              className={`input ${
                duplicateInput.username &&
                duplicateInput.username === username_in
                  ? "red-input"
                  : ""
              }`}
              autoComplete="username"
              disabled={preSigned}
              value={username_in}
              onChange={(e) => setUsername_in(e.target.value)}
            ></input>
            <div
              className={
                duplicateInput.username &&
                duplicateInput.username === username_in
                  ? ""
                  : "hide"
              }
            >
              Not available
            </div>
          </div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            className="input"
            autoComplete="new-password"
            disabled={preSigned}
          ></input>
          {preSigned && (
            <div>
              <input
                type="number"
                name="code"
                placeholder="Verification code"
                required
                className={`input ${wrongCode && wrongCode===code_in? "red-input" : ""}`}
                value={code_in}
                onChange={(e)=>setCode_in(e.target.value)}
              ></input>
              <div className={wrongCode && wrongCode===code_in ? "" : "hide"}>
                Incorrect verification code
              </div>
            </div>
          )}

          <button className="big-btn Signup-btn">
            {preSigned ? "Continue" : "Sign up"}
          </button>
        </form>
        {!preSigned && (
          <div>
            <p onClick={() => navigate("/login")} className="c-p w-fc m-auto-x">
              Log in
            </p>
            <p onClick={() => navigate("/home")} className="c-p w-fc m-auto-x">
              Skip
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Signup;
