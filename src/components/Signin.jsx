import React, { useState } from 'react'
import TextInput from './TextInput'
import { Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
import Signup from './Signup'
import { useModal } from '../hooks/useModal'

export default function Signin() {
  const { openModal, Modal } = useModal();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hello')
  }

  return (
    <div>
      <div className="flex-c mb-4">
        <div className='text-center'>
          <p className='text-lg'>Logo</p>
          <p className='text-sm text-gray-700' >Login with your email and password</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} >
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
            Signin
          </Button>
        </div>
        <div className="mb-3 text-center">
          <p>
            Dont Have an account?
            <span  
              className='font-semibold underline hover:cursor-pointer'
              onClick={() => {
                openModal('signup', <Signup/>, 'sm');
              }}
            >
              Signup
            </span>
          </p>
        </div>
      </form>
      <Modal/>
    </div>
  )
}
