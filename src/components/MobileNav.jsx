import React from 'react'
import { Link } from 'react-router-dom'

export default function MobileNav() {
  const navItems = [
    {
      name: 'home', 
      path: '/home', 
    },
    {
      name: 'search', 
    },
    {
      name: 'cart', 
      path: '/messages', 
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
      path: '/signin', 
    },
  ]
  return (
    <div>
      {
        navItems.map(item => (
          <div key={item.name} className='' >
            <Link onClick={item.onClick} to={`${item.path}`} className='flex-a ' >
              <span className='hidden lg:block ml-2' >{item.name}</span>
            </Link>
          </div>
        ))
      }
    </div>
  )
}
