import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import pic1 from '../assets/images/pic1.png'
import pic2 from '../assets/images/pic2.png'
import pic3 from '../assets/images/pic3.png'
import pic4 from '../assets/images/pic4.png'
import pic5 from '../assets/images/pic5.jpg'
import pic6 from '../assets/images/pic6.png'
export default function Home() {
    const [login,setLogin]=useState(false);
    const [register,setRegister]=useState(false)
  return (
    <div>
        <Navbar setLogin={setLogin}/>
        {login && <Login setLogin={setLogin} setRegister={setRegister} />}
        {register && <Register setLogin={setLogin} setRegister={setRegister}/>}
        <div className="container md:mt-16 mt-12">

            {/* top grid */}
            <div className="grid md:grid-cols-4 gap-2 p-2">
                <div className="h-[200px] bg-orange-400 col-span-2 flex">
                    <div className="flex-1">
                        <img src={pic1} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-1 items-center justify-center text-white">
                        <div>
                            <p className="text-sm">EXPLORE</p>
                            <h2 className="text-2xl font-semibold">MEN'S</h2>
                            <h2 className="text-2xl font-semibold">COLLECTION</h2>
                        </div>
                        
                    </div>
                </div>
                <div className="col-span-1 w-full h-[200px] bg-red-600 relative">
                    <div className="w-full h-full bg-right">
                        <img src={pic2} alt="" className="h-full w-full object-cover" />
                    </div>
                    <p className="p-2 text-white absolute top-2 left-2  font-semibold">#WOMEN</p>
                </div>
                <div className="col-span-1 h-[200px] bg-blue-200 relative">
                <div className="w-full h-full bg-right">
                        <img src={pic3} alt="" className="h-full w-full object-cover" />
                    </div>
                    <Link className="p-2 bg-white absolute bottom-2 left-2 text-sm font-semibold">SPORTS</Link>
                </div>
                <div className="h-[200px] bg-gray-400 relative">
                    <div className="w-full h-full">
                    <img src={pic4} alt="" className="h-full w-full object-cover" />
                    </div>
                    <Link className="p-2 bg-white absolute bottom-2 left-2 text-sm font-semibold">KIDS</Link>
                </div>
                <div className="h-[200px] bg-indigo-400 relative">
                    <div className="h-full">
                        <img src={pic5} alt="" className="h-full w-full object-cover" />
                    </div>
                    <Link className="p-2 bg-white absolute bottom-2 left-2 text-sm font-semibold">TRENDS</Link>
                </div>
                <div className="h-[200px] bg-blue-900/80 col-span-2 flex">
                    <div className="flex flex-1 items-center justify-center text-white">
                        <div>
                            <p className="text-sm">EXPLORE</p>
                            <h2 className="text-2xl font-semibold">AMAZING</h2>
                            <h2 className="text-2xl font-semibold">BAGS</h2>
                        </div>
                        
                    </div>
                    <div className="flex-1">
                        <img src={pic6} alt="" className="h-full w-full object-cover" />
                    </div>
                </div>
            </div>

            {/* flash sales */}
            <div className="p-2">
                <div className="card my-12">
                    <div className="p-2">
                        <h1 className="logo my-2">Flash sales</h1>
                        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4">
                            {[1,2,3,4,5,6,7,8,9,10,11,12].map(n=>(
                                <div key={n} className="">
                                <div className="image-card md:h-60 h-48 bg-gray-200">
                                    <img src={pic5} alt="" className="h-full w-full object-cover" />
                                </div>
                                <div>
                                    <p className="font-semibold text-lg">Product name</p>
                                    <p className="text-sm text-gray-700 font-thin">product description</p>
                                    <p className="text-lg font-semibold">$ 1234</p>
                                </div>
                            </div>
                            ))}
                        
                        </div>
                    </div>
                </div>
            </div>

            {/* shop by category */}

            {/* top brands */}

            {/* new arrivals */}

            <div className="text-center mb-8 p-4 bg-gray-100 rounded-lg">
                <p className="font-semibold text-xl capitalize">Get expert tips</p>
                <p>subscribe to our newsletter to stay updated</p>
                <form action="" className="my-3 container flex flex-col md:flex-row p-2">
                    <input type="email" placeholder="write your email here" className="input"/>
                    <button className="button bg-black w-full mt-3 md:mt-0 md:w-auto md:ml-2">subscribe</button>
                </form>
            </div>


            {/* footer */}
            
            
        </div>
        <Footer/>
    </div>
  )
}
