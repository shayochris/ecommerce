import React, { useState } from 'react'
import Navbar from './Navbar'
import pic5 from '../assets/images/pic5.jpg'
import { Link } from 'react-router-dom'
export default function Product() {
    const [quantity,setQuantity]=useState(1)
  return (
    <div className='container h-screen p-2'>
        <div className="my-4 h-full">
            
            <div className="container h-full  justify-center items-center p-2">
                <Link to="/" className='font-semibold text-lg'>Home</Link>
                <div className='bg-gray-200 rounded-lg h-[300px] flex-1 overflow-hidden mt-2'>
                    <img src={pic5} alt="" className='h-full w-full object-cover'/>
                </div>
                <div className='mt-3 flex-1'>
                    <p className='font-semibold text-xl'>product name</p>
                    <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt, dolore! Sint ipsa blanditiis adipisci. Quas, non placeat. Iste facere, libero fuga nisi ipsam tenetur. Cum commodi itaque magni atque eos?</p>
                    <p className='font-semibold my-2'>$250</p>
                    {/* <p className='mt-1 font-semibold'>size</p>
                    <div className='flex'>
                        <div className="border-[1px] border-gray-300 py-2 px-4 rounded-lg mr-1 ">S</div>
                        <div className="border-[1px] border-gray-300 py-2 px-4 rounded-lg mr-1 ">M</div>
                        <div className="border-[1px] border-gray-300 py-2 px-4 rounded-lg mr-1 ">L</div>
                        <div className="border-[1px] border-gray-300 py-2 px-4 rounded-lg mr-1 ">XL</div>
                    </div> */}
                    <div className='flex mt-4'>
                        <div className="flex border-[1px] border-gray-300 rounded-lg">
                            <div className='py-2 px-4 border-r-[1px] border-gray-300' >
                                <button onClick={()=>{
                                    if(quantity > 1){
                                        setQuantity(quantity-1);
                                    }
                                }} className='text-xl'>-</button>
                            </div>
                            <div className='py-2 px-4 border-r-[1px] border-gray-300' >
                                <p className='text-xl'>{quantity}</p>
                            </div>
                            <div className='py-2 px-4' >
                                <button onClick={()=>{
                                    setQuantity(quantity+1);
                                }} className='text-xl'>+</button>
                            </div>
                        </div>
                        <button className='button bg-black ml-3'>Add To Cart</button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}
