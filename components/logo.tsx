'use client'
import { useIsMobile } from '@/hooks/use-mobile'
import Image from 'next/image'
import React from 'react'

function Logo() {
    const isMobile = useIsMobile()
  return (
    <div className='flex items-center gap-2'>
        {/* <div className='w-16 h-16'> */}

        <Image src="/Faan.logo_ 1.svg" alt="Logo" width={isMobile ? 50 : 80} height={isMobile ? 50 : 80} />
        {/* </div> */}
        <div className='flex flex-col'>
            <h1 className='text-primary-950 md:text-2xl text-base font-bold'>PEXHUB</h1>
            <p className='text-blue-500 dark:text-blue-200 md:text-sm text-[8px] uppercase'>Official Support</p>
        </div>
    </div>
  )
}

export default Logo