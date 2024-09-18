import React, { useState } from 'react'
import logo from '../imgs/logo.svg'
import hambur from '../imgs/icon-hamburger.svg'

const Navbar = () => {
    const[menu,setMenu]=useState(false);
    const handleNav=()=>{
        setMenu(!menu);
    }
    console.log(menu)
  return (
    <nav>
        <div className='flex justify-between p-6 bg-white'>
        <div className='h-18 w-24 flex justify-center items-center'>
            <img src={logo} alt="logo" className=''/>
        </div>
        <div className='hidden sm:flex list-none text-black'>
            <li className='p-4 text-lg hover:cursor-pointer hover:text-gray-500  ease-in duration-500'>Pricing</li>
            <li className='p-4 text-lg hover:cursor-pointer hover:text-gray-500 ease-in duration-500'>Product</li>
            <li className='p-4 text-lg hover:cursor-pointer hover:text-gray-500 ease-in duration-500'>About Us</li>
            <li className='p-4 text-lg hover:cursor-pointer hover:text-gray-500  ease-in duration-500'>Careers</li>
            <li className='p-4 text-lg hover:cursor-pointer hover:text-gray-500  ease-in duration-500'>Community</li>
        </div>
        <div className='hidden sm:block'>
        <button className="btn btn-lg rounded-full text-white bg-orange-600">Get Started</button>
        </div>
        <div className='sm:hidden' onClick={handleNav}>
            <img src={hambur}  alt="" />
        </div>
        </div>
        <div className={menu?'fixed top-[15%] ease-in duration-1000 bg-white border-black':'fixed top-[-100%] ease-in duration-1000 bg-white border-black'}>
        <div className="flex w-screen justify-center mt-3">
        <div className='sm:hidden flex-col p-4'>
            <li className='text-lg text-black p-2'>Pricing</li>
            <li className='text-lg text-black p-2'>Product</li>
            <li className='text-lg text-black p-2'>About Us</li>
            <li className='text-lg text-black p-2'>Careers</li>
            <li className='text-lg text-black p-2'>Community</li>
        </div></div></div>
        </nav>
  )
}

export default Navbar
