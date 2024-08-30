import { createContext,useEffect, useState } from 'react'
import './Home.css'
import Header from './components/forHome/Header';
export const ThemeContext = createContext();

// import { useSelector } from 'react-redux';
import { login } from "./redux/slices/user/index";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FootTool from './components/forHome/forPubArea/FootTool';
import MainFeed from './components/forHome/forPubArea/forFeed/MainFeed';

function Home() {
  const [theme,setTheme] = useState(localStorage.getItem('theme') || 'dark')

  const dispatch = useDispatch();
  const navigate = useNavigate();


  // const user = useSelector((state) => state.userLogger);
  useEffect(() => {
    const checkCookie = async () => {
      const response = await fetch("http://localhost:3000/check-cookie", {
        method: "GET",
        credentials: "include",
      });
      const data = await response.json()
      if (response.ok) {
        dispatch(login(data.username));
      }
      else{
        navigate('/')
      }
    };
    checkCookie();
  }, []);
  
  useEffect(()=>{
    document.documentElement.setAttribute('data-theme',theme)
    localStorage.setItem('theme',theme)
  },[theme])

  function toggleTheme(){
    setTheme(x => x ==='dark'? 'light':'dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className='Home'>
        <Header/>
        {/* <div>welcome {user?.username ? user.username : 'Guest'}</div> */}
        {/* <button onClick={toggleTheme}>Toggle theme</button> */}
        <MainFeed/>
        <FootTool/>
      </div>
    </ThemeContext.Provider>
  )
}

export default Home
