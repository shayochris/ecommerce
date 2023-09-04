
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <div className=" w-full px-2 py-4 border-y-[1px] border-gray-200">
        <div className="container grid md:grid-cols-3 grid-cols-2 gap-2 pb-4 text-gray-800 ">
            <div>
                <h2 className="font-semibold text-lg mb-2">Social</h2>
                <Link className="block">instagram</Link>
                <Link className="block">Facebook</Link>
                <Link className="block">Whatsapp</Link>
                <Link className="block">Twitter</Link>
            </div>
            <div>
                <h2 className="font-semibold text-lg mb-2">Contact us</h2>
                <Link className="block">example@gmail.com</Link>
                <Link className="block">fax 23452376256</Link>
                <Link className="block">+255 000 000 000</Link>
                <Link className="block">Tanzania</Link>
            </div>
            <div>
                <h2 className="font-semibold text-lg mb-2">About</h2>
                <Link className="block">Support</Link>
                <Link className="block">Terms and Policy</Link>
                <Link className="block">About us</Link>
                <Link className="block">Copyright</Link>
            </div>
        </div>
        <div className=" w-full leading-2 p-2 text-center border-t-[1px] border-gray-200">
            <p>copyright 2023</p>
        </div>
    </div>
  )
}
