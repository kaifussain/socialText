import React from 'react'
import './Signup.css'
import ST from '/ST.png'

const Signup = () => {
  return (
    <div className="Signup">
      <img src={ST} className="ST"></img>
      <h2>Create a new account</h2>
      <div>
        <form className="Signup-form">
            <input type="email" name="email" placeholder="Email" required></input>
            <input type="text" name="username" placeholder="Username" required></input>
            <input type="password" name="password" placeholder="Password" required></input>
          <button className="big-btn Signup-btn">Sign up</button>
        </form>
        <div>
          <a href="/login">Log in</a>
          <p></p>
          <a href="/home">Skip</a>
        </div>
      </div>
    </div>
  )
}

export default Signup