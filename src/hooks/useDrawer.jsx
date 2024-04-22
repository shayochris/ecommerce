import { Button, Drawer } from '@material-tailwind/react';
import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai';

export const useDrawer = (props) => {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState();
  const [placement,setPlacement] = useState();
  const [size, setSize] = useState();

  const openDrawer = (_content='', _placement = 'right', _size='200') =>{
    setOpen(true);
    setContent(_content);
    setPlacement(_placement);
    setSize(_size)
  };

  const closeDrawer = () => setOpen(false);
  const DefaultDrawer = () => {
    return (
      <div className=''>
          <Drawer placement={placement} open={open} onClose={closeDrawer}  className='p-4' >
            <div>
              <div className="flex-b">
                <p>Header</p>
                <AiOutlineClose onClick={closeDrawer} className='icon' />
              </div>
              {content}
            </div>
          </Drawer>
      </div>
    )
  }
  return {DefaultDrawer, openDrawer, closeDrawer}
}
