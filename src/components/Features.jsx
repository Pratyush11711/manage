import React from 'react'

const Features = () => {
    const array=[
        {
        id:1,
        head:"Track company-wide progress",
        para:"See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of bigger picture again"
        },
        {
            id:2,
            head:"Advanced built-in reports",
            para:"Set internal delivery estimates and track progress forward company goals. Our customisabledahboard helps you build out the reports you need to keep key stakeholders informed"
            },
            {
                id:3,
                head:"Everything you need in one place",
                para:"Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers on all-in-one-team productivity solution"
                },
    ]
  return (
    <div className='flex w-full justify-center pt-28 bg-white'>
    <div className='flex flex-col sm:flex-row p-4 w-[80%]'>
      <div className='w-full sm:w-1/2 flex-col justify-center'>
        <p className='text-4xl p-4  text-black font-bold'>What's different about Manage?</p>
        <p className='p-4'>Manage provides all the functionality your team needs, without the complexity. Our software is tailor-made for modern digital product teams.</p>
      </div>
      <div className='w-full sm:w-1/2 mt-10 sm:mt-auto'>
        {array.map(item=>(
        <div key={item.id} className='flex w-full justify-center  '>
        <div className='p-4 mt-1'>
        <div className="badge badge-primary badge-lg bg-orange-600 text-white">{item.id}</div>
        </div>
        <div className='p-4'>
            <p className='text-xl text-black font-bold bg-orange-200 sm:bg-white rounded-lg p-1 '>{item.head}</p>
            <p className='mt-5'>{item.para}</p>
        </div> </div>))}
      </div>
    </div></div>
  )
}

export default Features
