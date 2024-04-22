import { Button, Card, CardBody, CardFooter, CardHeader, Rating, Typography } from '@material-tailwind/react'
import React from 'react'
import phone from '../assets/phone.jpg';
import { useModal } from '../hooks/useModal';

//icons
import { FiShoppingBag } from "react-icons/fi";
import AddToCart from './AddToCart';

export default function Products() {
  const { Modal, openModal,closeModal } = useModal();
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-[95%] lg:w-[80%] mx-auto p-4" >
      {
        [...Array(20)].map((product, id) => (
          <Card key={id} shadow={false} className="" >
            <CardHeader 
              floated={false} 
              shadow={false}
              className="h-40  sm:h-56 m-0" 
            >
              <img src={phone} alt="" />
            </CardHeader>
            <CardBody className="p-0" >
              <div className="mt-2">
                <p className="text-blue-gray-900 font-semibold" >Galaxy A12</p>
                <Rating value={5} readonly/>
                <div className="flex-b">
                  <p className='text-sm font-semibold'>Tsh 450,000</p>
                  <FiShoppingBag 
                    className='icon' 
                    onClick={() => {
                        openModal('Galaxy A12',
                        <AddToCart
                          closeModal = {closeModal}
                          openModal = {openModal}
                        />,
                        'sm')
                      }
                    }
                  />
                </div>
                
              </div>
              
            </CardBody>
          </Card>
        ))
      }
      <Modal/>
    </div>
  )
}
