import Image from 'next/image'
import React from 'react'

function Logo() {
  return (
    <div className='flex items-center gap-2'>
        {/* <div className='w-16 h-16'> */}

        <Image src="/Faan.logo_ 1.svg" alt="Logo" width={80} height={80} />
        {/* </div> */}
        <div className='flex flex-col'>
            <h1 className='text-primary-950 text-2xl font-bold'>PEXHUB</h1>
            <p className='text-blue-500 dark:text-blue-200 text-sm uppercase'>Official Support</p>
        </div>
    </div>
  )
}

export default Logo