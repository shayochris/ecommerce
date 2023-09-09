import { Link} from 'react-router-dom'
import Navbar from './Navbar';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

export default function Login() {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState(false);
    const [msg,setmsg]=useState(false);
    const handlesubmit=(e)=>{
        e.preventDefault();
        console.log("hello");
        if(email !== "hsgfweiudeiw0"){
            setError(true);
            setmsg("Invalid credentials");
        }
    }
  return (
    <div>
        <Navbar/>
        <div className='w-full flex justify-center mt-16'>
            <div className="container-sm bg-white p-2 rounded-lg"> 
                <form action="" className='p-2' onSubmit={handlesubmit}>
                    <h2 className="h5 mb-2">Sign In</h2>
                    {error &&
                        <div className="bg-red-300 px-4 py-2 rounded-lg flex justify-between items-center">
                            <p>{msg}</p>
                            <AiOutlineClose onClick={()=>setError(false)} className='w-4 h-4'/>
                        </div>
                    }
                    
                    <div className="my-3">
                        {/* <label htmlFor="" className='font-semibold inline-block'>Email</label> */}
                        <input type="email" className="input text-sm" placeholder='enter your email'required
                        value={email} onChange={(e)=>setEmail(e.target.value)}
                        />
                    </div>
                    <div className="my-3">
                        {/* <label htmlFor="" className='font-semibold inline-block'>Password</label> */}
                        <input type="password" className="input text-sm" placeholder='enter your password'required
                        value={password} onChange={(e)=>setPassword(e.target.value)}
                        />
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
