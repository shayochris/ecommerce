import React, { useState } from 'react'

//icons 
import { MdError } from "react-icons/md";

export default function TextInput(props) {

  const [error, setError] = useState(props.error);

  return (
    <div>
      <label className=" capitalize ml-1 mb-1 block text-[15px] text-black">
        {props.label}
      </label>
      <div className='flex-b border border-gray-300 p-2 rounded-lg' >
        <div className="flex-a w-full">
          <span className="mr-2">
            {props.startIcon}
          </span>
          <input 
            type={props.type || 'text'} 
            className="outline-none px-3 w-full"
            placeholder = {props.placeholder}
            required = {props.required}
            value={props.value}
          />
        </div>
        <span className='ml-3' >
          {props.endIcon}
        </span>
      </div>
      {
        error &&
        <div className="flex-a mt-0.5 text-red-500 text-sm">
          <MdError className='icon-sm'/>
          <p className="ml-2">required</p>
        </div>
      }
      
    </div>
  )
}
