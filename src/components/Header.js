import React from 'react';
import { Link} from 'react-router-dom';
// import { DarkModeToggle } from "../components/DarkModeToggle";
// import Logo from '../assets/img/ll.png';

const Header = () => {
  return <div className ='py-6 mb-12 border-b'>
  <div className='container mx-auto flex justify-between items-center'>
  
    <Link to= '/'>
      <h1 className='text-md font-black drop-shadow-lg italic lg:text-2xl'>Luxury Listings🏛️</h1>
    </Link>
    {/* <DarkModeToggle/> */}
    <div className='flex items-center gap-6'>
      <Link className='hover:text-violet-900 transition' to =''>Log in</Link>
      <Link className='bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition' to =''>Sign up</Link>
    </div>
  </div>
  </div>;
};

export default Header;
