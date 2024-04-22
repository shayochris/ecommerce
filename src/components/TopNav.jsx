
//router
import { Link } from 'react-router-dom'

//icons
import { IoCartOutline, IoSearch, IoMenu } from "react-icons/io5"

//hooks and components
import { useModal } from '../hooks/useModal';
import Cart from './Cart';
import Search from './Search';
import Signin from './Signin';
import MobileNavigation from './MobileNavigation';



export default function TopNav(props) {
  const { Modal, openModal } = useModal();
  return (
    <div className="border-b border-gray-300 p-2 bg-white sticky top-0 left-0 z-10">
      <div className='container-xl flex-b p-3' >
        <div className='flex-a'>
          <p>logo</p>
          <div className='ml-6 hidden lg:flex items-center' >
            <Link className='navlink' >categories</Link>
            <Link className='navlink' >shop now</Link>  
            <Link className='navlink' >contact us</Link>
            <Link className='navlink' >about</Link>
          </div>
        </div>
        <div className='hidden lg:flex'>
          <IoSearch 
            className='navlink icon' 
            onClick={() => {
              openModal('search', <Search/>, 'md');
            }} 
          />
          <IoCartOutline 
            className='navlink icon'
            onClick={() => {
              openModal('cart', <Cart/>, 'lg');
            }} 
          />
          <button 
            className='navlink'
            onClick={() => {
              openModal('sign in', <Signin  openModal={openModal} />, 'sm');
            }}  
          >
            sign in
          </button>
        </div>
        <div className='lg:hidden' >
          <IoMenu 
          onClick={() => 
            openModal(
              'logo', 
              <MobileNavigation />, 
              'xxl'
            )} 
          className='icon-md' />
        </div>
      </div>
      <Modal/>
    </div>
  )
}
