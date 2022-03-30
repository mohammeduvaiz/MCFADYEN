import React, { useState } from 'react'
import { FaBars, FaTimes, FaSistrix, FaShoppingBasket, FaUser } from 'react-icons/fa'

const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const MenuItems = [
    { name: "The Edit", link: "/" },
    { name: "New Arrivals", link: "/" },
    { name: "Designers", link: "/" },
    { name: "Clothing", link: "/" },
    { name: "Shoes", link: "/" },
    { name: "Bags", link: "/" },
    { name: "Accessories", link: "/" },
    { name: "Jewelry", link: "/" },
    { name: "Beauty", link: "/" },
    { name: "Home", link: "/" },
  ];
  return (
    <>
      <nav className='fixed w-full flex h-[60px]  items-center px-4 bg-white top-0 z-50  justify-between'>
        {/* Logo and Brand name */}
        <div>
          <h1 className='text-black w-[185px] font-normal text-xl' >
            MY COMPANY.COM
          </h1>
        </div>

        {/* menu */}
        <ul className='hidden md:flex items-center py-2  justify-center p-3  ml-2 '>
          {MenuItems.map(menu => (
            <li className='px-3 uppercase text-sm font-normal text-black'>
              {menu.name}
            </li>
          ))}
        </ul>

        {/* Mobile menu */}
        <ul
          className={
            !nav
              ? 'hidden'
              : 'absolute top-0 left-0 w-full h-[100vh] bg-[#fff] flex flex-col justify-center items-center'
          }
        >
          {MenuItems.map(menu => (
            <li className='py-3 text-sm'>
              {menu.name}
            </li>
          ))}
        </ul>

        {/* Right side of header*/}
        <div className='flex items-center space-x-4 justify-end text-gray-800  ' >
          <FaSistrix />
          <FaShoppingBasket />
          <FaUser className='hidden md:inline' />

          {/* Hamburger */}
          <div onClick={handleClick} className='md:hidden  z-10 bg-white '>
            {!nav ? <FaBars className='text-gray-500' /> : <FaTimes className='text-gray-500' />}
          </div>

        </div>
      </nav>
    </>
  )
}

export default Header