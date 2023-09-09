import { useState } from 'react';
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar';
export default function Search() {
    const navigate=useNavigate();
    const [term,setTerm]=useState("")
  return (
    <div>
        <Navbar/>
        <div className="container mt-16">
            <form action="" className='mt-2 p-2 container mb-2'>
                <div className="border-[1px] bg-gray-50 border-gray-300 p-2 rounded-lg flex justify-between items-center" >
                    <div className='w-full flex items-center'>
                        <AiOutlineSearch className='mr-2 h-6 w-6 font-semibold'/>
                        <input type="text" placeholder="search a product" className="outline-none w-full bg-gray-50"
                        value={term} onChange={(e)=>{
                            setTerm(e.target.value)
                        }} />
                    </div>
                    {term &&
                    <AiOutlineClose className='h-6 w-4 text-gray-600' onClick={()=>setTerm("")}/>}
                </div>
            </form>
            <div className='p-2 container'>
                {term &&
                    <div className="list-group">
                        {[...Array(2)].map(n=>(
                            <div key={n} className="flex list overflow-y-scroll">
                                <div className='bg-gray-300 h-12 w-12 rounded-lg'></div>
                                <div className='ml-8 flex flex-col justify-center'>
                                    <p>product name</p>
                                    <p className='font-semibold'>$34.5</p>
                                </div>
                            </div>
                        ))}
                        
                    </div>
                }
            </div>
        </div>
    </div>
  )
}
