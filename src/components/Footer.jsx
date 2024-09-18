import React from 'react'
import logo from '../imgs/logo.svg'
const Footer = () => {
  return (
    <footer className=' flex flex-col-reverse sm:flex-row justify-evenly items-center pt-16 bg-slate-900 pb-10'>
        <div className='p-8'>
          <img src={logo} alt="" />
        </div>

        <div className='flex flex-row w-1/2 justify-evenly pt-8 sm:p-0'>
        <div>
          <li className='font-bold p-1 hover:cursor-pointer'>Home</li>
          <li className='font-bold p-1 hover:cursor-pointer'>Pricing</li>
          <li className='font-bold p-1 hover:cursor-pointer'>Products</li>
          <li className='font-bold p-1 hover:cursor-pointer'>About Us</li>
        </div>
        <div className=''>
          <li className='font-bold p-1 hover:cursor-pointer'>Careers</li>
          <li className='font-bold p-1 hover:cursor-pointer'>Community</li>
          <li className='font-bold p-1 hover:cursor-pointer'>Privacy Policy</li>
          
        </div>
        </div>

        <div className='flex justify gap-2 p-4 sm:p-4'>
        <input type="text" placeholder="Updates in your Inbox" className="input rounded-full input-bordered input-md w-full max-w-xs bg-white " />
        <div className=''>
        <button className="btn btn-md rounded-full bg-orange-600 text-white">Go</button>
        </div>
        </div>
  
    </footer>
  )
}

export default Footer
