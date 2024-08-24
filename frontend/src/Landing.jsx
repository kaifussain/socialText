import "./Landing.css";
import ST from "../public/ST.png";

function Landing() {
  return (
    <div className="Landing">
      <img src={ST} className="Landing-ST-img"></img>
      <h1>
        Welcome to <br></br>
        <span className="Landing-ST-span">SocialText</span>
      </h1>
      <div>
        <p style={{ maxWidth: "80vw", margin: "auto" }}>
          A text-based social media platform! Here, you can connect with
          friends, share your thoughts, and explore a world of conversations—all
          through the power of words.
        </p>
        <button
          className="big-btn Landing-login-btn"
          onClick={() => (window.location.href = "/login")}
        >
          Login
        </button>
        <button
          className="big-btn Landing-signup-btn"
          onClick={() => (window.location.href = "/signup")}
        >
          Signup
        </button>
      </div>
    </div>
  );
}

export default Landing;
