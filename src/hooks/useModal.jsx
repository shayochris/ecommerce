import { 
  Button, 
  Dialog, 
  DialogBody, 
  DialogFooter, 
  DialogHeader } from '@material-tailwind/react';

import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';

export const useModal = () => {
  const [open, setOpen] = useState(false);
  const [content,setContent] = useState('');
  const [header,setHeader] = useState('');
  const [size,setSize] = useState('md');

  const openModal = (_header= '',_content ='',_size = 'md') => {
    setOpen(true);
    setContent(_content);
    setSize(_size);
    setHeader(_header)
  };

  const closeModal = () => {
    setOpen(false);
  };
  
  const Modal = () => {
    return (
        <Dialog 
          open={open} 
          handler={() =>{
            open ? closeModal() : openModal()
          }} 
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
          
          size = {size} 
          className='overflow-y-auto max-h-[600px] outline-none'
        >
          <DialogHeader className='text-lg sticky top-0 z-10 bg-white'>
            <div className="flex-b w-full">
              {header}
              <AiOutlineClose onClick={closeModal} className='icon' /> 
            </div>
            
          </DialogHeader>
          <DialogBody className='text-black' >
            {content}
          </DialogBody>
        </Dialog>

    )
  }

  return { Modal, openModal, closeModal}
}
