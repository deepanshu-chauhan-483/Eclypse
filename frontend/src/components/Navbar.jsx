import { Link } from 'react-router-dom';
import icon from "../assets/icon.jpg";

export default function Navbar() {
  return (
    <nav className="w-full bg-black/50 backdrop-blur-md fixed text-white py-2 px-6 md:px-20 shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="hover:underline"> <img src={icon} alt="icon" className='h-12 w-14 border-black rounded-sm' /></Link>
        
        <ul className="flex flex-row space-x-4 sm:space-x-8 md:space-x-14 text-sm sm:text-base md:text-xl items-center">
          <li><Link to="/aboutus" className="hover:underline">About Us</Link></li>
          <li><Link to="/waitlist" className="hover:underline">Waitlist</Link></li>
          <li><Link to="/cart" className="hover:underline">Cart</Link></li>
          <li>
            <Link to="/buy">
              <button className='bg-white px-4 sm:px-6 md:px-10 py-2 md:py-3 text-black rounded-xl font-semibold hover:underline'>
                Buy
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
