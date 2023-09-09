import { Link } from 'react-router-dom'
import Navbar from './Navbar';

export default function Login() {
  return (
    <div>
        <Navbar/>
        <div className='w-full flex justify-center mt-16'>
            <div className="container-sm bg-white p-2 rounded-lg"> 
                <form action="" className='p-2'>
                    <h2 className="h5">Sign In</h2>
                    <div className="my-3">
                        {/* <label htmlFor="" className='font-semibold inline-block'>Email</label> */}
                        <input type="email" className="input text-sm" placeholder='enter your email'required/>
                    </div>
                    <div className="my-3">
                        {/* <label htmlFor="" className='font-semibold inline-block'>Password</label> */}
                        <input type="password" className="input text-sm" placeholder='enter your password'required/>
                    </div>
                    <div className="my-3">
                        <Link className='text-sm'>Forgot password?</Link>
                    </div>
                    <div className="my-4">
                        <button className="button bg-black w-full">Login</button>
                    </div>
                    <div className="my-3 text-center text-sm">
                       <p>Dont have an account?
                        <span>
                            <Link className='font-semibold' to="/register">Sign up</Link>
                        </span>
                       </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
