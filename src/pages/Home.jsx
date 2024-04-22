//components
import Products from '../components/Products'
import TopNav from '../components/TopNav'

//hooks
import { useModal } from '../hooks/useModal';

export default function Home() {
  const { Modal, openModal, closeModal } = useModal();
  return (
    <div className='wrapper font-poppins'>
      <TopNav  
      />
      <div className="container-lg">
        <Products/>
      </div>
      <Modal/>
    </div>
  )
}
