import React from 'react'

function NewFollow() {
  return (
<div className="bg-gray-800 rounded-3xl  h-screen fixed w-full">

    <div className='flex gap-2 items-center p-4'>
            <img src="https://i.imgur.com/aq39RMA.jpg" alt="Logo" className='rounded-full w-16' />
   <strong className='text-lg'>faith</strong>
   <a className=' text-sm text-blue-600 font-bold' href="/">Follow</a>
   
    </div>
    <div className='text-sm font-semibold px-4'>Suggestions for you</div>
<div className='p-3'>
<div className='flex gap-3 items-center p-2'>
            <img src="https://i.imgur.com/aq39RMA.jpg" alt="Logo" className='rounded-full w-9' />
   <strong className='text-base'>faith</strong>
   <a className=' text-xs text-blue-600 font-bold' href="/">Follow</a>
   
    </div>
    <div className='flex gap-3 items-center p-2'>
            <img src="https://i.imgur.com/aq39RMA.jpg" alt="Logo" className='rounded-full w-9' />
   <strong className='text-base'>faith</strong>
   <a className=' text-xs text-blue-600 font-bold' href="/">Follow</a>
   
    </div>
    <div className='flex gap-3 items-center p-2'>
            <img src="https://i.imgur.com/aq39RMA.jpg" alt="Logo" className='rounded-full w-9' />
   <strong className='text-base'>faith</strong>
   <a className=' text-xs text-blue-600 font-bold' href="/">Follow</a>
   
    </div>
</div>

</div>

  )
}

export default NewFollow