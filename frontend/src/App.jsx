import { createContext,useEffect, useState } from 'react'
import './App.css'
export const ThemeContext = createContext();

function App() {

  const [theme,setTheme] = useState(localStorage.getItem('theme') || 'dark')

  useEffect(()=>{
    document.documentElement.setAttribute('data-theme',theme)
    localStorage.setItem('theme',theme)
  },[theme])

  function toggleTheme(){
    setTheme(x => x ==='dark'? 'light':'dark')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div>Text</div>
        <button onClick={toggleTheme}>Toggle theme</button>
    </ThemeContext.Provider>
  )
}

export default App
