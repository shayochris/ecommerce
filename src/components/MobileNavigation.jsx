import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search';
import Cart from './Cart';
import Signin from './Signin';
import { useModal } from '../hooks/useModal';

export default function MobileNavigation() {
  const { openModal, Modal } = useModal();
  const navItems = [
    {
      name: 'search', 
      onClick: e =>{
        e.preventDefault();
        openModal('search', <Search/>, 'md');
      }
    },
    {
      name: 'cart', 
      path: '/messages', 
      onClick: e =>{
        e.preventDefault();
        openModal('cart', <Cart/>, 'md');
      }
    },
    {
      name: 'shop', 
      path: '/shop', 
    },
    {
      name: 'About', 
      path: '/about'
    },
    {
      name: 'signin', 
      onClick: e =>{
        e.preventDefault();
        openModal('signin', <Signin/>, 'md');
      } 
    },
  ]
  return (
    <div>
      <div className="">
        {
          navItems.map(item => (
            <div key={item.name} className='' >
              <Link onClick={item.onClick} to={`${item.path}`} className='flex-a ' >
                <span className='my-2 capitalize' >{item.name}</span>
              </Link>
            </div>
          ))
        }
      </div>
      <Modal/>
    </div>
  )
}
