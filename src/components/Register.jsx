import React from 'react'
import { Link } from 'react-router-dom'

export default function Register({ setRegister,setLogin }) {
  return (
    <div className='bg-black/50 fixed w-full h-full top-0 left-0 z-10 flex items-center justify-center'>
    <div className="container-sm bg-white p-2 rounded-lg">
        <div className='text-end'>
            <button onClick={()=>setRegister(false)} className=''>close</button>
        </div>
        
        <div className="text-center">
            <h2 className="font-semibold text-2xl">Logo</h2>
            <p className='text-gray-600 text-sm'>By signing you agree to our terms</p>
        </div>
        <form action="" className='p-2'>
            <div className="my-3">
                <label htmlFor="" className='font-semibold inline-block'>Name</label>
                <input type="text" className="input text-sm" placeholder='enter your name'/>
            </div>
            <div className="my-3">
                <label htmlFor="" className='font-semibold inline-block'>Email</label>
                <input type="email" className="input text-sm" placeholder='enter your email'/>
            </div>
            <div className="my-3">
                <label htmlFor="" className='font-semibold inline-block'>Password</label>
                <input type="password" className="input text-sm" placeholder='enter your password'/>
            </div>
            <div className="my-3">
                <Link className='text-sm'>Forgot password?</Link>
            </div>
            <div className="my-4">
                <button className="button bg-black w-full">Login</button>
            </div>
            <div className="my-3 text-center text-sm">
                <p>Already have an Account?
                    <button onClick={()=>{
                        setLogin(true);
                        setRegister(false);
                    }}  className='font-semibold underline'>Login</button>
                </p>
            </div>
        </form>
    </div>
</div>
  )
}
