import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search';
import Cart from './Cart';
import Signin from './Signin';

export default function MobileNav(props) {
  const navItems = [
    {
      name: 'search', 
      onClick: e =>{
        e.preventDefault();
        props.closeDrawer();
        props.openModal('search', <Search/>, 'md');
      }
    },
    {
      name: 'cart', 
      path: '/messages', 
      onClick: e =>{
        e.preventDefault();
        props.closeDrawer();
        props.openModal('cart', <Cart/>, 'md');
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
        props.closeDrawer();
        props.openModal('search', <Signin/>, 'md');
      } 
    },
  ]
  return (
    <div>
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
  )
}
