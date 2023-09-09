import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
        <div className="text-center">
            <p className="h2 text-red-500">404</p>
            <p className="text-lg text-gray-700">page not found</p>
            <Link className="text-sm underline" to="/">Home</Link>
        </div>
    </div>
  )
}
