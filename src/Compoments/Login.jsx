import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    const [data,setData]=useState([]);
    const [error,setError]=useState(false);
    const [formfields,setFormFields]=useState({
        email:'',
        password:'',      
    })
    const {email,password}=formfields;
    
    const onHandlechange=(e)=>{
        setFormFields((prevValue)=>({
            ...prevValue,
            [e.target.name]:e.target.value,


        }));
        

    }
    const handleClick=(e)=>{
        
        e.preventDefault();
        if(!email||!password){
            setError(true);

        } else{
            setError(false);
        


        setData([...data,formfields]);
        setFormFields({email:"",password:" "});
        }  setTimeout(()=>{
            setError(false);
        },3000)
        
        

    }
  return (
    <div className='dark:bg-slate-600 dark:text-white'>
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box dark:bg-slate-600 dark:text-white">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/"className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    </form>
    <h3 className="font-bold text-lg">Login</h3>
    <div className='flex flex-col mt-4 '>
        <label className=''>Email</label>
        <input type='text' value={email} name='email' onChange={onHandlechange}  placeholder='Enter your Email' className='border-gray-500 border rounded-md p-2'/>
    </div>
    <div className='flex flex-col mt-6 '>
        <label className=''>Password</label>
        <input type='text' name='password' onChange={onHandlechange} value={password} placeholder='Enter your Password' className='border-gray-500 border rounded-md  p-2'/>
    </div>
    <div className='flex justify-around'>
    {error && <p className='text-red-700 my-0'>enter all the fields</p>}
    <button  onClick={handleClick}  className="bg-pink-500 px-6 py-3 text-white mt-6 hover:bg-pink-700 duration-100 rounded-md">
        Login
      </button>
      <p className='mt-9'>not register?<Link to='/signup' className='underline text-blue-500 cursor-pointer' >Signup</Link>{" "}</p>
    </div>
  </div>
</dialog>
    </div>
  )
}

export default Login
