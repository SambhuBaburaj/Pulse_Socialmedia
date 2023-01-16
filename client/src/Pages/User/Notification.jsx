import React from 'react'

function Notification() {
  return (
    <div className='bg-gray-900 absolute w-screen h-screen flex justify-center'>
    <div className=' p-3 w-6/12 '>

        <div className='bg-slate-800 rounded-3xl h-full'>
<div>
  <strong className='text-2xl p-5'>Notification</strong>  
</div>
<div className='p-5'>
    <div className='flex gap-3 items-center p-3 border-b border-b-gray-700'>
    <img src="https://i.imgur.com/aq39RMA.jpg" alt="Logo" className='rounded-full w-9' />
   <strong className='text-base'>faith</strong>
   <span  className='text-sm'>liked your photo</span>
    </div>
         
    <div className='flex gap-3 items-center p-3  border-b border-b-gray-700'>
    <img src="https://i.imgur.com/aq39RMA.jpg" alt="Logo" className='rounded-full w-9' />
   <strong className='text-base'>faith</strong>
   <span  className='text-sm'>liked your photo</span>
    </div>
   
    </div>
        </div>
    </div>    

</div>    
  )
}

export default Notification