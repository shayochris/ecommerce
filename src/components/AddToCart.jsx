import React, { useState } from 'react'
import TextInput from './TextInput'
import { Button } from '@material-tailwind/react'

//icons
import { FaMinus, FaPlus } from "react-icons/fa6";

export default function AddToCart(props) {
  const [quantity, setQuantity] = useState(1);


  return (
    <div className='p-2'>
      <p>Quantity</p>
      <div className="mb-3 border border-gray-300 rounded-lg flex-b p-2">
          <FaPlus className='icon' />
        <p className='w-[60%] text-center'>
          {quantity}
        </p>
          <FaMinus className='icon' />
      </div>
      <div className='my-2 bg-blue-gray-900/10 p-2 rounded-lg text-center'>
        <p>Tsh 450,000</p>
      </div>
      
      <Button
        fullWidth={true}
        className='btn'
        onClick={() => {
          props.openModal('details', 'galaxy A12', 'md');
        }}
      >
        Add to Cart
      </Button>
      <div className="mt-3 text-sm text-center">
        <p>View products Details</p>
      </div>
    </div>
  )
}
