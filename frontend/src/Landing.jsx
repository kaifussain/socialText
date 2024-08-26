import "./Landing.css";
import ST from "/ST.png";

function Landing() {
  return (
    <div className="Landing">
      <img src={ST} className="ST"></img>
      <h1>
        Welcome to <br></br>
        <span className="Landing-ST-span">SocialText</span>
      </h1>
      <div>
        <p>
          A text-based social media platform! Here, you can connect with
          friends, share your thoughts, and explore a world of conversations—all through the power of words.
        </p>
        <button
          className="big-btn Landing-login-btn"
          onClick={() => (window.location.href = "/login")}
        >
          Log in
        </button>
        <button
          className="big-btn Landing-signup-btn"
          onClick={() => (window.location.href = "/signup")}
        >
          Sign up
        </button>
        <br/>
        <a href="/home" >Skip</a>
      </div>
    </div>
  );
}

export default Landing;
