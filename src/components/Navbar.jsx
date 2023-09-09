import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineMenu,AiOutlineShoppingCart,AiOutlineClose,AiOutlineSearch,AiOutlineLogin,AiOutlineHome} from 'react-icons/ai'
export default function Navbar() {
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
                    <Link className='navlink'>Cart</Link>
                </li>
                <li>
                    <Link to="/search" className='navlink'>Search</Link>
                </li>
                <li>
                    <Link to="/login" className='navlink'>Login</Link>
                </li>
            </ul>
            <button onClick={()=>setmobilemenu(true)} className='md:hidden'>
              <AiOutlineMenu className='h-8 w-6' />
            </button>

            {/* mobile menu */}
            {mobilemenu && 
            <div onClick={()=>setmobilemenu(false)}
            className="md:hidden fixed top-0 left-0 bg-black/50 w-full h-full z-20">
              <div className="bg-white w-[300px] h-full p-2">
                <div className="flex justify-between items-center px-2 border-b-[1px] border-gray-300">
                  <p className="logo">Logo</p>
                  <AiOutlineClose className='h-10 w-5 font-semibold'/>
                </div>
                <ul className='p-2'>
                  <li className='py-1 text-lg'>
                    <Link className='flex items-center'>
                      <AiOutlineHome className='h-8 mr-1'/> <span>Home</span>
                    </Link>
                  </li>
                  <li className='py-1 text-lg'>
                    <Link className='flex items-center'>
                      <AiOutlineShoppingCart className='h-8 mr-1'/> <span>cart</span>
                    </Link>
                  </li>
                  <li className='py-1 text-lg'>
                    <Link to="/search" className='flex items-center'>
                      <AiOutlineSearch className='h-8 mr-1'/> <span>search</span>
                    </Link>
                  </li>
                  <li className='py-1 text-lg'>
                    <Link to="/login" className='flex items-center'>
                      <AiOutlineLogin className='h-8 mr-1'/> <span>SignIn</span>
                    </Link>
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
