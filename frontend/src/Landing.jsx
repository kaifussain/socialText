import { useEffect } from "react";
import "./Landing.css";
import ST from "/ST.png";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "./redux/slices/user/index";

function Landing() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const checkCookie = async () => {
      const response = await fetch("http://localhost:3000/check-cookie", {
        method: "GET",
        credentials: "include",
      });
      if (response.ok) {
        const data = await response.json()
        dispatch(login(data.username));
        navigate("/home");
      }
    };
    checkCookie();
  }, []);

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
          friends, share your thoughts, and explore a world of conversations—all
          through the power of words.
        </p>
        <button
          className="big-btn Landing-login-btn"
          onClick={() => navigate("/login")}
        >
          Log in
        </button>
        <button
          className="big-btn Landing-signup-btn"
          onClick={() => navigate("/signup")}
        >
          Sign up
        </button>
        <br />
        <a onClick={() => navigate("/home")} className="c-p">
          Skip
        </a>
      </div>
    </div>
  );
}

export default Landing;
