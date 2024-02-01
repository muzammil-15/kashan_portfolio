import Link from 'next/link'
import React from 'react'

const Form = () => {
  return (
    <div className='my-16 w-full md:w-[90%] lg:w-[80%]'>
        <form action="">
            <div className='w-full flex flex-col md:flex-row justify-center items-center gap-10'>
                <div className='flex flex-col gap-1 w-full md:w-1/2'>
                    <label htmlFor="fname" className='text-lg font-[500] text-[#FFF]'>First Name</label>
                    <input type="text" className='p-3 bg-transparent border border-[#8d8c8cb2] rounded-lg w-full focus:bg-transparent' placeholder='First Name'/>

                </div>
                <div className='flex flex-col gap-1 w-full md:w-1/2'>
                    <label htmlFor="lname" className='text-lg font-[500] text-[#FFF]'>Last Name</label>
                    <input type="text" className='p-3 bg-transparent border border-[#8d8c8cb2] rounded-lg w-full focus:bg-transparent' placeholder='Last Name'/>

                </div>
            </div>
            <div className='w-full flex flex-col md:flex-row justify-center items-center gap-10 mt-6'>
                <div className='flex flex-col gap-1 w-full md:w-1/2'>
                    <label htmlFor="phone" className='text-lg font-[500] text-[#FFF]'>Phone</label>
                    <input type="number" className='p-3 bg-transparent border border-[#8d8c8cb2] rounded-lg w-full focus:bg-transparent' placeholder='Phone'/>

                </div>
                <div className='flex flex-col gap-1 w-full md:w-1/2'>
                    <label htmlFor="email" className='text-lg font-[500] text-[#FFF]'>Email</label>
                    <input type="email" className='p-3 bg-transparent border border-[#8d8c8cb2] rounded-lg w-full focus:bg-transparent' placeholder='Email'/>

                </div>
            </div>
            <div className='w-full flex flex-col md:flex-row justify-center items-center gap-10 mt-6'>
                <div className='flex flex-col gap-1 w-full md:w-2/3'>
                    <label htmlFor="mesage" className='text-lg font-[500] text-[#FFF]'>Message</label>
                    <textarea type="text" rows={8} className='p-3 bg-transparent border border-[#8d8c8cb2] rounded-md w-full focus:bg-transparent' placeholder='Enter Your Valuable message'/>

                </div>
            </div>
            <div className="flex justify-center items-center my-6">

              <button className="w-[150px] flex justify-center items-center py-3 px-6 rounded-full bg-[#FF9142] hover:bg-[#f07f2e] text-[#F4F7FA] text-sm">
                Send
              </button>
          </div>
        </form>
    </div>
  )
}

export default Form