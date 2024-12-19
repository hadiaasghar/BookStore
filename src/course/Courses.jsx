import React from 'react'
import Navbar from '../Compoments/Navbar'
import Footer from '../Compoments/Footer'
import Course from '../Compoments/Course'


const Courses = () => {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
    <Navbar/>
    
    <Course/>
    <Footer/>

    </div>
    
    
    
    </>
  )
}

export default Courses
