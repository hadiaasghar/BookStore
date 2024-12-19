import React from 'react'
import Navbar from '../Compoments/Navbar'
import Banner from '../Compoments/Banner'
import FreeBook from '../Compoments/FreeBook'
import Footer from '../Compoments/Footer'

const Home = () => {
  return (
   <>
   <div className='dark:bg-slate-900 dark:text-white'>
   <Navbar/>
   <Banner/>
   
   <FreeBook/>
   <Footer/>
   </div>
   
   
   </>
  )
}

export default Home
