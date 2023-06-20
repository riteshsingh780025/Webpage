import React from 'react';
//images
import logo from '../assets/logo.svg';

const Header = () => {
  return (
    <header className=' py-8'>
      <div className='container mx-auto' >
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href='#'>
            <img src={logo} alt='' />
          </a>
          <button className='btn btn-sm'>work  with me </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
