import React from 'react'
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Courses from "./components/courses/Courses";
import Cart from "./components/cart/Cart";


const App=props=>{

  return(
      <Home/>
  )
  // return(
  //     <Login/>
  // )
  // return(
  //     <Register/>
  // )
  // return(
  //     <Courses/>
  // )
  return(
      <Cart/>
  )
}

export default App
