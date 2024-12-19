import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'

const Signup = () => {
  return (
    <>
    <div className='flex h-screen items-center  justify-center'>
    <div  className='w-[600px]'>
  <div className=" modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    </form>
    <h3 className="font-bold text-lg">SignUp</h3>
    <div className='flex flex-col mt-4 '>
        <label className=''>Name</label>
        <input type='text'placeholder='Enter your Name' className='border-gray-500 border rounded-md p-2'/>
    </div>
    <div className='flex flex-col mt-4 '>
        <label className=''>Email</label>
        <input type='text'placeholder='Enter your Email' className='border-gray-500 border rounded-md p-2'/>
    </div>
    <div className='flex flex-col mt-6 '>
        <label className=''>Password</label>
        <input type='text'placeholder='Enter your Password' className='border-gray-500 border rounded-md  p-2'/>
    </div>
    <div className='flex justify-around '>
    <button className="bg-pink-500 px-6 py-3 text-white mt-6 hover:bg-pink-700 duration-100 rounded-md">
        SignUp
      </button>
      <p className='mt-9'>have account?<button  className='underline text-blue-500 text-lg cursor-pointer' onClick={()=>document.getElementById("my_modal_3").showModal()}>Login</button>{" "} <Login/></p>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Signup
