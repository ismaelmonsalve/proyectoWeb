
import React,{useEffect} from 'react';
import './App.css'
import { Navbar } from './Components/Navbar/Navbar'
import {LoginSignup} from './Components/LoginSignup/LoginSignup'
// import { LoginSignup } from './Components/LoginSignup/LoginSignup'

function App() {



 const [theme,setTheme] = React.useState(
  localStorage.getItem("theme")?
  localStorage.getItem("theme") : "light");

  const element =document.documentElement;
  useEffect(() => {
    if(theme === "dark"){
      element.classList.add("dark");
      localStorage.setItem("theme","dark");
    }else{
      element.classList.remove("dark");
      localStorage.setItem("theme","light");
    }
  },[theme])



  return (
    <>
      <div>
       <Navbar theme={theme} setTheme={setTheme}/>
       {/* <LoginSignup/> */}
      </div>
      
    </>
  )
}

export default App
