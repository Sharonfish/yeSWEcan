import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi';
import { MdOutlineSearch } from 'react-icons/md'
import { MdOutlineShoppingBag } from 'react-icons/md'
import { AiOutlineUser } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'


import './Navbar.css'

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState(true);

  const menu = ["products", "story", "manufacturing", "packaging", "team"]

  const navStatus = () => {
    if (window.scrollY >= 96) {
      setActive(false)
    } else {
      setActive(true)
    }
  }

  window.addEventListener('scroll', navStatus);

  return (
    <nav className={`bg-white h-24 w-full ${!active && 'inActiveBar'}`}>
      <div className="flex items-center font-medium h-full justify-between sm:pl-16 md:pr-16">
        <div className='flex justify-between p-2 sm:pr-8 h-full z-50 w-full md:w-auto items-center'>
          <div className='flex items-center md:cursor-pointer h-full z-50 md:w-auto'>
            <span className="md:text-2xl text-2xl whitespace-nowrap text-[#00A839] font-bold">GOGREEN</span>
          </div>
          <div className='text-3xl md:hidden' onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <IoMdClose></IoMdClose>
            ): (
              <FiMenu></FiMenu>
            )}
          </div>
        </div>
        <ul className='md:flex hidden items-center md:gap-16 text-lg'>
          {menu.map((menu, index) => (
            <li key={`menu-${index}`}> 
              <span className='hover:border-b-2 p-1 border-black'>{menu}</span>
            </li>
          ))}
        </ul>
        <div className='flex items-center md:cursor-pointer h-full z-50 md:w-auto text-xl'>
          <div className='hover:text-blue-700'>
            <MdOutlineSearch className='mr-7' size={24}/>
          </div>
          <div className='hover:text-purple-700'>
            <MdOutlineShoppingBag className='mr-7' size={24}/>
          </div>
          <div className='hover:text-green-700'>
            <AiOutlineUser size={24}/>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar