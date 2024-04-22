//components
import Products from '../components/Products'
import TopNav from '../components/TopNav'

//hooks
import { useDrawer } from '../hooks/useDrawer';

export default function Home() {
  const { DefaultDrawer, openDrawer, closeDrawer } = useDrawer();
  return (
    <div className='wrapper font-poppins'>
      <TopNav  
        openDrawer ={openDrawer}
        closeDrawer = {closeDrawer}
      />
      <div className="container-lg">
        <Products/>
      </div>
      <DefaultDrawer/>
    </div>
  )
}
