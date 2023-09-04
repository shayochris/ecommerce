import { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Navbar({ setLogin }) {
  const [mobilemenu,setmobilemenu]=useState(false)
  return (
    <div className='fixed top-0 left-0 w-full border-b-[1px] border-gray-200 z-10 bg-white'>
      <div className="container ">
        <nav className='navbar'>
            <h1 className='logo'>logo</h1>
            <ul className="hidden md:flex">
                <li>
                    <Link to="/" className='navlink'>Home</Link>
                </li>
                <li>
                    <Link to="/cart" className='navlink'>Cart</Link>
                </li>
                <li>
                    <Link to="/search" className='navlink'>Search</Link>
                </li>
                <li>
                    <button onClick={()=>setLogin(true)} className='navlink'>SignIn</button>
                </li>
            </ul>
            <button onClick={()=>setmobilemenu(true)} className='md:hidden'>menu</button>

            {/* mobile menu */}
            {mobilemenu && 
            <div onClick={()=>setmobilemenu(false)}
            className="md:hidden fixed top-0 left-0 bg-black/50 w-full h-full z-20">
              <div className="bg-white w-[200px] h-full p-2">
                <p className="logo">Logo</p>
                <ul>
                  <li>
                    <Link className=''>cart</Link>
                  </li>
                  <li>
                    <Link className=''>search</Link>
                  </li>
                  <li>
                    <button onClick={()=>setLogin(true)} className=''>SignIn</button>
                  </li>
                  <li>
                    <Link className=''>about</Link>
                  </li>
                </ul>
              </div>
            </div>
            }
        </nav>
      </div>
    </div>
  )
}
