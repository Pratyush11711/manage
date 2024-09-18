import React from 'react'
import himg from "../imgs/illustration-intro.svg"

const MidSec = () => {
  return (
    <div className='flex w-full justify-center pt-6 bg-white'>
      <div className='flex flex-col-reverse sm:flex-row justify-center w-[80%]'>
        <div className='w-full sm:w-1/2 flex flex-col justify-center'>
          <h1 className='text-5xl p-4 text-black font-bold'>Bring everyone together to build better products</h1>
          <p className='p-4'>Manage makes it simple for software teams to plan day-to-day tasks while keeping larger team goals in view.</p>
          <div className='p-4 w-full flex justify-center sm:block'>
            <button className="btn btn-lg rounded-full bg-orange-600 text-white">Get Started</button>
          </div>
        </div>
        <div className='w-full sm:w-1/2 flex items-center justify-center '>
          <img src={himg} alt="illustration" />
        </div>
      </div>
    </div>
  )
}

export default MidSec
