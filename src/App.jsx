import React from 'react'
import Navbar from './Compoments/Navbar'
import Banner from './Compoments/Banner'
import Footer from './Compoments/Footer'
import FreeBook from './Compoments/FreeBook'
import Home from './Home/home'

import { Route, Routes }from "react-router-dom"
import Courses from './course/Courses'
import Signup from './Compoments/Signup'

const App = () => {
  return (
   <>
   
   
   <Routes>

    <Route path="/"element={<Home/>}/>
    <Route path="/course"element={<Courses/>}/>
    <Route path="/signup"element={<Signup/>}/>
   </Routes>
   </>
  )
}

export default App
