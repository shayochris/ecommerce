import React, { useState } from 'react'
import TextInput from './TextInput'
import { Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import Signin from './Signin'

export default function Signup(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello')
  }

  return (
    <div>
      <div className="flex-c mb-4">
        <div className='text-center'>
          <p className='text-lg'>Logo</p>
          <p className='text-sm text-gray-700' >create account</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} >
      <div className="mb-3">
          <TextInput
            label = {'Full name'}
            required = {true}
          />
        </div>
        <div className="mb-3">
          <TextInput
            label = {'email'}
            required = {true}
            type={'email'}
          />
        </div>
        <div className="mb-6">
          <TextInput
            label = {'password'}
            required = {true}
            type={'password'}
          />
        </div>
        <div className="mb-3">
          <Button 
            fullWidth={true} 
            className='btn'
            ripple={false}
            type='submit'
          >
            Signup
          </Button>
        </div>
        <div className="mb-3 text-center">
          <p>
            Already Have an account?
            <span  
              className='font-semibold underline hover:cursor-pointer'
              onClick={() => {
                props.openModal('sign in', <Signin/>, 'sm');
              }}
            >
              Signin
            </span>
          </p>
        </div>
      </form>
    </div>
  )
}
